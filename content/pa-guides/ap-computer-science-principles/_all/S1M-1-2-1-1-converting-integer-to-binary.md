# S1M-1 2.1.1 Converting Integer to Binary

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

- **Computer**
- A computer is a programmable device that stores, retrieves, and processes data.

-2 main architectures of computers:

1.Von-Neumann

2. Harvard

- **Binary System**
- Everything in the Binary System is 1 and 0.

**Bit**

-the smallest unit in the Binary System

-either a 1 or a 0

**Byte**

-8 bits

  - **Binary Operations**
- **Most Significant Byte/Bit**
- **-**the byte/bit that contributes the most to the value. Think of digit 1, the hundreds digit, in 123

**Least Significant Byte/Bit**

-the byte/bit that contributes the least to the value. Think of the digit 3, the ones digit, in 123

-repeatedly divide the number by 2

-record the remainder of each division

-continue until the quotient reaches 0

-read the remainder from bottom to top to obtain the binary number.

## 2.1.2 Converting Binary to Integer

-assign powers of 2 to each digit, starting from 20 on the right

-multiply each digit by its corresponding power of 2

-add the results.

$${11001}_{2}=16+8+0+0+1={25}_{10}$$

## 2.1.3 Converting Real Number to Binary

-separate its integer and fractional parts

-convert the integer part using repeated division by 2

-for the fractional part, repeatedly multiply by 2 and record the integer part of each result.

-read these digits from top to bottom

-finally, combine both parts using a binary point.

$${10.625}_{10}={1010.101}_{2}$$

Some decimal fractions cannot be represented exactly with a finite number of binary digits and must be truncated or rounded.

**Truncation**

This is a method that simply cuts the binary expression into limited digits.

$${0.10101101}_{2}\to {0.1010}_{2}$$

**Round-Off**

Round-off is a method used to approximate a binary number to a fixed number of digits.

If the first discarded bit is **0**, the retained bits remain unchanged

If it is **1**, add 1 to the last retained bit, carrying to the left if necessary.

$${0.10101101}_{2}\to {0.1011}_{2}$$

## 2.1.4 Converting Binary to Real Number

-assign powers of 2 to each digit:

digits to the left of the binary point use non-negative powers of 2

digits to the right use negative powers of 2

-multiply each digit by its corresponding power and add the results.

$${101.011}_{2}=4+1+0.25+0.125$$

## 2.2 Two’s Complement Notation

- a method used by computers to represent positive and negative integers

-In an n-bit two’s complement number:

0 as the first bit indicates non-negative number

1 as the first bit indicates negative number

**Converting integers to binary**

If the integer is non-negative, the two’s complement notation of it is simply in section 2.1.1

If the integer is negative, do the following process:

Eg: Convert -3 into two’s complement

True Form: 1|0000011

One’s Complement: 1|1111100 invert

Two’s Complement: 1|1111101 add 1

or, the formula way:

$$\text{Two's Complement}={2}^{n}-\left| x \right|$$

Two’s complement of -5 = 28 – 5 = 251D = 11111011B

and it’s reverse function, to convert a two’s complement binary number into the integer it represents:

$$x=\left\{ \begin{matrix}B, & \text{if MSB}=0 \\ B-{2}^{n}, & \text{if MSB}=1\end{matrix} \right.$$

MSB = Most significant bit (first bit of the expression)

B = the decimal value of the two’s complement notation

x = 11111011B – 256D = 251D – 256D = -5D

-Note that the two’s complement can store numbers in the range of -2n-1 to 2n-1 -1

-Any operation that involves more bits to store will cause an **Overflow**

## 2.3 Numbers and Memory

## 2.3.1 Overflow

-This is a situation where a calculated value cannot fit in to the number of digits reserved for it:

127D + 5D in 8 bits will cause an overflow since 132D is out of the range

## 2.3.2 Floating Point Numbers

-scientific notation: written in the form of a * 10b where 1<= a < 10

-Similarly, a floating point number consists of 3 parts: The **Sign**, **Mantissa**, and **Exponent.**

The difference is that they are expressed in binaries and the mantissa a is 0<=a<1

-The decimal number 12.5 converted to floating point is:

| **Description** | **Sign** | **Mantissa** | **Exponent** | **Expression** |
|---|---|---|---|---|
| Convert 12.5 to binary | **0** | 1100.1B |  |  |
| Move the decimal place 4 steps left so that the mantissa is less than 1 | **0** | 0.11001B | 100B | 0.11001 * 2100 |
| Keep only franctional part of mantissa and concatenate in to a stream of bits | **0** | 11001B | 0100B | 0110010100 |

**-Converting floating point number to decimal numbers:**

-1: put the mantissa into a fractional part. 11001B -> 0.11001B

-2: move the decimal place 100B steps right. 0.1100B -> 1100.1B

-3: convert to decimal. 1100.1B -> 12.5D

Note that this encoding method is only class convention and isn’t the real method.

## 2.4 Binary Arithmetic

**3. Data**

-Data refers to the symbols that represent facts, objects, and ideas.

becomes information when it’s presented in a format that people can understand and use

Computers and digital devices can work with numbers, text, symbols, images, video, audio, etc.

- **Data representation** refers to the form in which data is sorted, processed and transmitted.

## 3.1 Analog Data

-Analog data refers to the type of data with continuous values and represented with infinity scales of value

Eg: Sound, Color, Audio (in the real life)

## 3.2 Digital Data

-Digital data uses discrete values.

Represented using bits.

Eg: a switch (on and off)

**4. Text Representation**

**Character**

-Composed of letters, symbols, and numerals that will not be used in arithmatic operations

-Digital computers typically represent character data using **ASCII**
