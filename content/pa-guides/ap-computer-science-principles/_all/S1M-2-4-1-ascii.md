# S1M-2 4.1 ASCII

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

-Stands for the “American Standard Code for Information Interchange”

-ASCII employes a 7-bit binary code to represent 128 unique characters, enabling the encoding of English letters, digits, and punctuation.

## 4.2 ANSI

-The ANSI encoding system is an extension of ASCII.

-It is a local encoding system, meaning that each country uses a different set of values.

-ANSI encoding system extends the range to 65536 values.

-The first 128 values of ANSI encoding system is same as ASCII

-Shortcoming: Conflicts between different languages

## 4.3 Unicode

Provides a comprehensive system to represent characters from all writing systems through variable-width encodings.

It is a big set of values that stores every character in every language

**Downward compatible** with ASCII

Each character has its unique code

## 4.3.1 UTF

-UTF stands for Unicode Transformation Format

-There are different standards of UTF, such as UTF-8, UTF-16, UTF-32

-The length for representing each character in UTF-8 can differ

1-byte represents only English

2-byte represents latin-script languages

3-byte represents mostly Asian languages (Chinese)

4-byte represents everything else

**BOM(Byte order mark)**

-The byte order mark is a actual unicode character U+FEFF

-Its size: however many bytes U+FEFF takes in that encoding

(2 for UTF-16, 3 for UTF-8, 4 for UTF-32).

-BOM is discouraged for UTF-8 (Default: No BOM for UTF-8)

**Big-endian & Little-endian**

-These are two arrangements of different bytes

Big endian: put the most significant byte first

Little endian: put the least significant byte first

Eg: “A” = 00 41 under UTF-16

The big end is the byte “00”

The little end is the byte “41”

“A” in BE order is 00 41

“A” in LE order is 41 00

**5. Audio Representation**

**Sound**

-Sound is an **analog** signal; therefore, we’ll have to convert it into digital signal to use to in computer

-This allows the computer to store audio and convert it back to analog signal whenever the user wants to play in

-There are three stages to convert:

## 5.1 Sampling

-This process discretizes the signal in the time domain by capturing snapshots at fixed intervals

The smaller the fixed interval, the more accurate the reproduction is

**Nyquist Theorem** states that the sampling frequency must be greater than **twice** the signal to perfectly reconstruct the original sound

- **Image Representation**
- A digital image is a representation of a picture using binary data.
- Raster images are divided into small units called pixels, and each pixel stores information describing its colour or brightness.
- A computer reconstructs the image by displaying these pixels in their correct positions.
