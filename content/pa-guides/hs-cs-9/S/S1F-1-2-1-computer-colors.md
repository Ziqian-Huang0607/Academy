# S1F-1 2.1 Computer Colors

> From the Grade 9 Resource Department's Semester 1 Final Computer Science S review guide (PA). Writers: Leona 9-7. Editor: Max Zheng 9-1. Range: CH2-CH3. Student-made reference material: where it differs from class, follow class.

- A computer’s primary colors are **red, green and blue**
  - all colors we generate form the three spectral hues of red, green and blue
  - CMYK: proper reference for printed color
- HSV/HSL/HSI
  - H: Hue -> the pure dominant color (original colorness)
  - S: Saturation -> intensity/purity of a color
  - V: Value -> lightness or darkness
  - L: Lightness -> color’s brightness (amount of black/white)
  - I: Intensity -> brightness or dullness of a color
- Binary notation of colors: 24 numbers to represent a color
  - EG: 111111 111111 111111 is white
  - The first 6 “1”s represent the red part of the color, the next group of “1”s represent the green part and the last group of “1”s represent the blue part
- Hexadecimal: using 6 letters/numbers to represent a color
  - EG: #FF FF FF represents white
  - The first group of “F”s represent the red part, the second group represents green, and the third group represents blue
- Ways to store characters:
  - **Morse code**: the use of dots and dashes. This can be uneffective as letters can be mixed up
  - ASC II: developed from telegraph codes, encodes 128 specified characters into **7-bit integers**
  - Uppercase and lowercase letters have different numeric values (e.g., 'A' = 65, 'a' = 97)
- Graphic formats can be formatted in:
  - GIF, shows 256 kinds of colors at most in one picture
  - JPEG: millions of kidns of colors (28*28*28=16777216), saves memory space in computer
  - PNG: combines advantages of GIF and JPEG, good quality, can be transparent, not very popular as many web pages cannot show pictures in this format
  - BMP/RLE: one of the most popular formats used to save images on windows operating system
  - PSD: used in photoshop, save all detailed elements made in photoshop such as layers, color modes, path and channel etc, occupy large memory in computer but can be compressed
  - HEIF: supports multiple bit depths, depending on the encoder and use case, memory is about 50% smaller than the JPEG format, shows billions of colors (230), records images with richer information, compatibility is limited
- bit depth: color depth per chennel, not the total file size or container overhead

## 2.2 Digital Graphics

- An image created/edited on a computer is either a bitmapped or vector graphic
  - **Bitmapped**: AKA raster graphics, consists of pixels, if you enlarge a bitmap you enlarge a pixel
    - pixels become more obvious and image loses cripsness and clarity
  - **Vector**: uses mathematical formulas to define lines, curves and other attributes of digital images
    - you use vector graphics editing program
    - Vector files are generally much smaller than bitmapped
- The number of **pixel per inch** (ppi) determines the resolution of bitmap grapics
  - photo display on a computer screen usually looks realistic at 72 ppi
  - vector graphics do not rely on resolution for clarity, but its’ display on a computer screen does
- **color depth**: in graphic files and applications, color depth refers to the number of distinct colors an image can contain/how many bits per pixel
  - EG 24-bit image has color depth of 16.7 million colors, called **full color imag**
- **Field of View/Field of vision (FOV):** extent of observable world that is seen at any given moment
  - Humans have ≈210 degree of forward facing horizontal arc of their visual field’
  - vertical range of the visual field in humans is around 150 degrees
  - some birds have complete/nearly complete 360 degree FOV
- **Aspect ratio**: relationship between its width and height
  - expressed as (x,y)
  - common aspect ratios: 5:4, 4:3, 16:10, 16:9
- Brief history
  - **2003:** most computer monitors had 4:3 aspect ratio, some had 5:4
  - **2003-2006**: 16:10 became common in laptops and standalone monitors
  - **2008**: industry moved from 4:3 and 16:10 to 16:9 as the standard ratio
  - **2010**: All monitors and laptops moved to 16:9 aspect ratio
  - **2011**: 16:9 reso of 1920*1080 became popular among steam users
  - **2012**: resolution became 1366*768

## 2.3 Alpha Channel

- **alpha compositing**: process of combining an image with a background to create the appearance of partial or full transparency
  - keep an associate matte for each element
  - In a 2D image element, which stores a color for each pixel, additional data is stored in the alpha channel with a value between 0 and 1
    - 0 means pixel does not have any coverage info and is transparent
    - 1 means the pixel is opaque because the geometry overlapped the pixel
  - one more number is required to store **alpha**
    - from (148,255,255) to (148,255,255,0)
      - first 3 numbers imply the color
      - last three imply the alpha
- if three primary colors share the same number, this color contains only brightness, it can only be black, white or gray
  - (0,0,0) is black
  - (255,255,255) is white
  - (100,100,100) is gray
- **premultiplied alpha**: if the alpha channel is used in an image, its common to alsp multiply the color by the alpha value
  - saves space
  - **linear interpolation**: riven two red points, the blue line is the linear interpolate between the points, and then value y at x may be found using this method

## 2.4 Computer monitors

- **computer monitors**: the size of a display is usually given by monitor manufacturers based on the diagonal
  - measure in unit inch
  - display devices: cathode ray tube (CRT), liquid crytal display(LCD), organic light-emitting diode (OLED)
    - **CRT**: old fashioned, vacuum tube containing an electron gun and phosphorescent screen used to view images
    - **LCD:** most common, has diffraction grating, crystal and backlight
    - **OLED:** monitor of the future, simple structure, self emissive

## 2.5 Image Compression

- **uncompressed image - raw file**: captured by a digital camera or scanner’s scensors, this captures a high level of image detail, with large file sizes and losslessquality
  - direct image data means you start with a high-quality image that can be edited, converted and compressed in a non-destructive manner
- **lossy vs lossless**
  - lossless: oreferred for archival purposes, for medical imaging, technical drawings, clip art, comics
  - lossy: suitable for natural images EG photographs in applications
- **lossless compression**
  - Run-length encoding (RLE) is a simple form of data compression where runs of data are stored as a single data value and count, rather than as the original run
    - example of RLE: W representing white and B representing black: WWWWWBWW
    - instead this can be compressed into 5W1B2W
  - Differential pulse-code modulation (DPCM) encodes the changes between consecutive samples of a signal rather than the signal’s value directly
    - reduces the bit rate
    - input can be an analog signal or digital signal
    - methods of encoding:
      - quantize the samples, output is the difference between the current and previous sample
      - quantize the difference between the current sample and output of a local decoder
    - color spaced is reduced to the most common colots, these selected colors are defined in a color palette stored within the mage harder
      - each pixel references the index of its corresponding color in the palette
      - this approach can be combined with dithering to minimize posterization artifacts
  - **entropy encoding**:
    - **Huffman coding**: separating the input into component symbols and replacing each with a code, uses variable length codes to represent different characters
      - shorter codes -> assigned to more frequently occuring characters and longer to less frequent ones, results in compressed data representation
      - optimal for minimizing the total number of bits used
    - **Arithmetic coding**: encoding the entire message into a single number, a fraction n where (0≤n≤1)
  - **chroma subsampling**: human eye perceives spatial changes of brightness more sharply than color, so this method averages/drops some of the chominance info in the image
  - **transform coding:** most commonly used method, Fourier related transform such as the **discrete cosine transform (DCT)** is widely used
    - wavelet transform is also used extensively, followed by quantization and entropy coding
