# S1M-4 7.1 Lossless Compression

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

reduces the size of data without losing any information.

-After decompression, the recovered data is exactly identical to the original, bit for bit. Therefore, the process is **reversible**.

-Lossless compression is suitable for text files, source code, databases and other data in which even a single incorrect character may change the meaning.

-Common lossless formats include ZIP, GZIP, PNG and FLAC.

## 7.1.1 Run-Length Encoding (RLE)

-Run-Length Encoding (RLE) is a **lossless** compression method that replaces consecutive repeated values with a count-value pair. A run is a sequence of the same value appearing one after another.

-To compress data using RLE, read the values from left to right, count how many consecutive times each value appears, then store the count together with the value. During decompression, repeat each value according to its count.

Eg: AAAAABBBCCDAA → 5A3B2C1D2A

Original: 13 characters × 8 bits = 104 bits

Encoded: 10 characters × 8 bits = 80 bits (assuming one digit and one letter per run)

-RLE works best for data containing long runs of **identical values**, such as simple graphics, large areas of one color and some fax images. It is not suitable for frequently changing data: ABCDE → 1A1B1C1D1E, which increases the length from 5 to 10 characters in this simple representation.

-For images, RLE may encode a row of pixels as consecutive color-count pairs. For example, 4 white pixels followed by 3 green pixels can be represented as 4White3Green. Practical encoders must also define how counts and values are separated and represented.

## 7.1.2 Keyword Encoding

-Keyword encoding is a **lossless text** **compression** method that replaces frequently repeated words or strings with shorter symbols or codes. The encoder stores a **substitution dictionary** that maps each code back to its original word or string.

-First, identify repeated strings. Next, assign each selected string a shorter code and replace its occurrences. Finally, store the dictionary with the compressed data so that decompression can restore the original text exactly.

Eg:

Original: the cat and the dog and the bird

Let the → # and → @

Encoded text: # cat @ # dog @ # bird

-However, the dictionary also occupies space, so keyword encoding only reduces the total file size when the savings from substitutions exceed the cost of storing the dictionary and other metadata.

-The code symbols must be distinguishable from ordinary text. Otherwise, a symbol originally present in the text could be confused with a substitution code, making exact decompression impossible.

## 7.1.3 Huffman Coding

-Huffman coding is a **lossless compression** algorithm developed by David Huffman in 1952.

-It assigns shorter binary codes to more frequent symbols and longer codes to less frequent symbols, reducing the total number of bits required.

-Its codes are **prefix-free**: no complete code is the beginning of another complete code. This property allows decoding without ambiguity.

-To construct a Huffman tree

- Count the frequency of each symbol.
- Create one leaf node for each symbol, repeatedly combine the two nodes with the lowest frequencies, and continue until only one tree remains.
- Assign 0 and 1 to the two branches at each split. The path from the root to each symbol determines its binary code.

(S: symbol, F: frequency, L: length, N: number, CW: code word)

## 7.2 Lossy Compression

-Lossy compression reduces file size by permanently discarding some information.

-The decompressed file is an approximation of the original and cannot always be reconstructed exactly. The process is therefore **irreversible**.

Lossy compression is commonly used for photographs, music and videos because small changes in color, detail or sound may be difficult for people to notice. Typical formats and codecs include JPEG, MP3, AAC, H.264 and H.265.

Lossy methods often achieve smaller files than lossless methods for the same source, but greater compression usually reduces quality. Repeatedly saving a file in a lossy format may introduce additional distortion.

## 7.2.1 JPEG

JPEG is a lossy image compression method for continuous-tone pictures, especially photographs with smooth color changes. JPEG stores the image as a compressed representation rather than preserving every original pixel value exactly.

The JPEG compression process can be explained using these main stages:

1. Color space conversion: Convert the image from RGB to a representation such as YCbCr, separating brightness (luminance) from color information (chrominance).

2. Chroma downsampling: Optionally store the color channels at a lower spatial resolution, since the human eye cannot perceive the difference.

3. Split into 8 × 8 blocks: Divide image components into small blocks so each block can be processed separately.

4. Discrete Cosine Transform (DCT): Convert the pixel values into frequency coefficients.

5. Quantization: Divide the frequency coefficients by the selected quantization values and round the results. This step discards precision and is the main irreversible stage of JPEG compression.

6. Entropy encoding: Arrange and encode the quantized values (use RLE / Huffman).

At high compression levels, visible artifacts may appear, including block boundaries, blurred details and ringing around sharp edges. JPEG is effective for photographs, but may be less suitable for text, logos or diagrams with sharp lines, where a lossless format such as PNG may preserve the details better.

**8 Programming**
