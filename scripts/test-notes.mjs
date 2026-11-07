import { build } from 'esbuild'
import { mkdir } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
await mkdir('work', {recursive:true})
await build({ entryPoints: ['tests/notes.test.ts'], bundle: true, outfile: 'work/notes-tests.mjs',
  plugins: [{ name: 'ignore-css', setup(build) { build.onResolve({ filter: /\.css$/ }, args => ({ path: args.path, namespace: 'empty-css' })); build.onLoad({ filter: /.*/, namespace: 'empty-css' }, () => ({ contents: '', loader: 'js' })) } }],
  platform: 'node', format: 'esm', packages: 'external', loader: { '.css': 'empty' }, tsconfig: 'tsconfig.app.json', define: { 'import.meta.env': '{}' } })
await import(pathToFileURL(path.resolve('work/notes-tests.mjs')).href)
