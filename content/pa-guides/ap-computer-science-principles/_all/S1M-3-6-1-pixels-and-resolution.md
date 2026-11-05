# S1M-3 6.1 Pixels and Resolution

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

-A **pixel** (picture element) is the smallest individually addressable element of a raster image.

Each pixel contains a value that determines the color displayed at that position.

-Resolution describes the number of pixels in an image, usually expressed as width × height. An image measuring 1920 × 1080 has 1920 pixels in each row and 1080 rows.

Eg: Total pixels = 1920 × 1080 = 2,073,600 pixels.

-Increasing the number of pixels allows more fine details to be represented, but also increases the amount of uncompressed data when the color depth stays the same.

-Enlarging a low-resolution raster image does not create the original missing details and may make individual pixels visible (pixelation).

## 6.2 Color Depth (Bit Depth)

-the number of bits used to represent the color of one pixel.

-With n bits per pixel, an image can represent up to 2^n different color values in a direct indexed representation.

Eg: 1 bit per pixel → 2 possible values; 8 bits → 256 possible values; 24 bits → 16,777,216 possible colors.

-A greater color depth allows more colors or tonal levels, which can make gradients look smoother.

-However, more bits per pixel also require more storage for an uncompressed image of the same resolution.

## 6.3 RGB Color Model

-stands for **Red, Green and Blue**.

an additive color model used by many digital displays.

Each pixel color is formed by combining different intensities of red, green and blue light.

-In a common 24-bit RGB image, each channel uses 8 bits and can take a value from 0 to 255. Together, the three channels use 24 bits for each pixel.

Eg: (255, 0, 0) = red; (0, 255, 0) = green; (0, 0, 255) = blue; (0, 0, 0) = black; (255, 255, 255) = white; (255, 255, 0) = yellow.

## 6.4 Image File Size

-For an uncompressed raster image with a fixed number of bits per pixel, the basic pixel-data size is calculated by multiplying its width, height and color depth.

Image size (bits) = Width (pixels) × Height (pixels) × Bits per pixel

Image size (bytes) = Width × Height × Bits per pixel ÷ 8 (bits per byte)

Eg: A 800 × 600 image with a color depth of 24 bits requires 800 × 600 × 24 = 11,520,000 bits = 1,440,000 bytes (about 1.44 MB in decimal units) for its raw pixel data.

## 6.5 Bitmap (Raster) and Vector Images

- **Bitmap or raster** images represent pictures using a grid of pixels.

suitable for photographs and detailed color variations, but scaling them up beyond their original resolution may cause pixelation.

Common raster formats include BMP, PNG and JPEG.

- **Vector** images represent shapes through mathematical descriptions such as points, lines, curves and fills instead of storing each display pixel individually.

-They can be resized without the same pixelation problem, making them suitable for logos, diagrams and icons. SVG is a common vector format.

-Note that image representation and image compression are different concepts. Raster images may be stored with either lossless compression (for example PNG) or lossy compression (for example JPEG). Compression is explained in Section 7.

**7. Compression**

-The process of representing data using **fewer bits** by removing redundancy or discarding selected information. It reduces the storage space required for files and the amount of data transmitted over a network.

-There are two main types of compression: lossless compression and lossy compression.

Compression ratio measures how much smaller a file becomes after compression:

**Compression Ratio** = Original Size / Compressed Size

Eg: A 20 MB file compressed to 5 MB has a compression ratio of 20 / 5 = 4:1.

-A higher ratio indicates a larger reduction in size, but it does not necessarily mean a better result:

-lossy compression must also be judged by the quality of the reconstructed data. Actual ratios depend on the content and encoding settings.
