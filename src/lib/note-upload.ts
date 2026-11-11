import { saveNoteImage, IMAGE_PATTERN } from '@/database/note-assets'
/** Read one packet's text and persist its image attachments before queueing. */
export async function readNoteUpload(
  files: File[],
): Promise<{ source: string; fileName: string }> {
  if (!files.length) throw new Error('Choose a file first.')
  if (files.length > 12) throw new Error('Use at most twelve files per packet.')
  const pictures = files.filter((file) => file.type.startsWith('image/'))
  if (pictures.length > 8)
    throw new Error('Use at most eight images per packet.')
  const names = new Set<string>()
  for (const file of files) {
    if (names.has(file.name))
      throw new Error('Attachment filenames must be unique.')
    names.add(file.name)
    if (file.size > 10 * 1024 * 1024)
      throw new Error('Files must be smaller than 10 MB.')
  }
  const attachments = new Map<string, string>()
  for (const file of pictures)
    attachments.set(file.name, await saveNoteImage(file))
  const documents: string[] = []
  for (const file of files.filter((item) => !pictures.includes(item))) {
    if (/\.(md|txt)$/i.test(file.name)) documents.push(await file.text())
    else if (/\.pdf$/i.test(file.name)) {
      const { getDocument, PDFWorker } = await import('pdfjs-dist')
      const { default: PdfWorker } =
        await import('pdfjs-dist/build/pdf.worker.min.mjs?worker')
      const worker = PDFWorker.create({ port: new PdfWorker() })
      const task = getDocument({ data: await file.arrayBuffer(), worker })
      try {
        const pdf = await task.promise
        if (pdf.numPages > 80)
          throw new Error(
            'Split PDFs longer than 80 pages into smaller packets.',
          )
        const pages: string[] = []
        for (let page = 1; page <= pdf.numPages; page++) {
          const text = await (await pdf.getPage(page)).getTextContent()
          // Keep the PDF's own line ends. Joining every run with a space
          // flattened a whole page into one line, which hid headings, list
          // items and display formulas from the review agent and left it no
          // paragraph boundaries to split a long upload on.
          pages.push(
            text.items
              .map((item) =>
                'str' in item ? item.str + (item.hasEOL ? '\n' : ' ') : '',
              )
              .join('')
              .replace(/[ \t]+\n/g, '\n')
              .trim(),
          )
        }
        const text = pages.join('\n\n')
        if (text.trim().length < 40)
          throw new Error(
            'This PDF has no readable text. Upload its pages as images for agent review.',
          )
        documents.push(text)
      } finally {
        await task.destroy()
        worker.destroy()
      }
    } else
      throw new Error(
        'Use Markdown, text, PDF, PNG, JPEG, WebP or GIF. Export Word/PowerPoint as PDF first.',
      )
  }
  let source = documents.join('\n\n')
  const used = new Set<string>()
  source = source.replace(IMAGE_PATTERN, (match, alt: string, path: string) => {
    let name = path
    try {
      name =
        decodeURIComponent(path).replace(/^\.\//, '').split('/').pop() ?? path
    } catch {
      /* Keep original path for validation. */
    }
    const stored = attachments.get(name)
    if (!stored) return match
    used.add(name)
    return `![${alt}](${stored})`
  })
  for (const [name, uri] of attachments)
    if (!used.has(name))
      source += `\n\n![${name.replace(/[[\]\n]/g, '')}](${uri})`
  if (source.length > 60_000)
    throw new Error(
      'This packet is too large. Split it into smaller uploads (60,000 characters each).',
    )
  return {
    source: source.trim(),
    fileName: files.map((file) => file.name).join(', '),
  }
}
