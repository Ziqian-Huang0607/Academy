# S1F-1 Semester 1 Final review: ALL

> From the Grade 9 Resource Department's Semester 1 Final Computer Science H review guide (PA). Writers: Christopher Zhong 9-2. Editor: Rick 9-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

**Quick Guide**

Since the tested range is extreme large, so here is a quick guide concerning L1~L20. You can use it to quickly review key **functions**, **statements**, and **core concepts**. Note that some techniques (e.g., string slicing) are not included here. For those topics, please refer to the earlier PowerPoints or the **Midterm CS H PA Resource**.

**Notice**

The functions below are listed in the order they were introduced in class. Since this guide is meant only for quick reference, detailed explanations are not provided. You can use **help(func)** or **func.__doc__** to view parameters, return values, and examples of usage. (Information about help() and __doc__ is covered in **L17**.)

For some concepts, the CS H PowerPoints do not provide detailed explanations. In those cases, you may consult reliable online resources such as the official Python documentation or other reputable CS course materials.

Note that some “suffix functions” come from non–built-in libraries, and some apply only to specific data types. Please identify these yourself. In this guide, variable names hint at types (e.g. st, lst, d).

**Function**

| print() | input() | int() | str() | float() |
|---|---|---|---|---|
| abs() | math.ceil() | math.floor() | math.sqrt() | len() |
| math.ceil() | lst.append() | lst.insert() | lst.remove() | lst.index() |
| lst.append() | lst.sort() | sorted() | lst.reverse() | st.split() |
| lst.sort() | sum() | random.randint() | st.strip() | st.lstrip() |
| st.rstrip() | delimiter.join() | st.split() | st.isupper() | st.islower() |
| st.istitle() | st.isalnum() | st.isdigit() | st.isalpha() | open() |
| f.close() | f.read() | f.readline() | f.readlines() | txt.splitlines() |
| f.write() | d.keys() | d.values() | d.items() | help() |
| os.path.join() | os.getcwd() | os.chdir() | os.makedirs() | os.mkdir() |
| os.path.abspath() | os.path.isabs() | os.path.relpath() | os.path.basename() | os.path.dirname() |
| os.path.split() | path.split(os.path.sep) | os.path.getsize() | os.listdir() | os.path.exists() |
| os.path.isfile() | os.path.isdir() | shutil.copy() | shutil.copytree() | shutil.move() |
| os.unlink() | os.rmdir() | shutil.rmtree() |  |  |

**Statements**

| del | for | while | if |
|---|---|---|---|
| else | elif | in | not |
| and | or | True | False |
| def | return | break | continue |
| with | __doc__ |  |  |

**Operators**

| **Arithmetic Operators** |  |  |  |  |  |  |
|---|---|---|---|---|---|---|
| + |  | * | / | ** | // | % |
| **Assignment Operators** |  |  |  |  |  |  |
| += | = | *= | /= | **= | //= | %= |
| **Relational Operators** |  |  |  |  |  |  |
| < | > | <= | >= | == | >= |  |
| **Bitwise Operators (Boolean Operators are in statement section)** |  |  |  |  |  |  |
| & | \| | ^ | << | >> |  |  |

**Data Types**

| String | str | A sequence of characters enclosed in single, double, or triple quotes. |
|---|---|---|
| Integer | int | Whole numbers, positive or negative, without a decimal point |
| Floating Point | float | Numbers with a decimal point or in exponential form |
| List | list | A changeable ordered sequence of elements, enclosed in [] |
| Tuple | tuple | An unchangeable ordered sequence of elements, enclosed in () |
| Range | range | A sequence of numbers often used in loop |
| Dictionary | dict | A collection of data stored s key-value pairs, enclosed in {} |
| Boolean | bool | Represents a truth value (True or False). Used for logical operations and conditional statements. |

**L12 Nested Loop**

- Nested loop is a **combined loop** that consists of an **outer loop** and an **inner loop**.

**Sample**

In this nested loop sample, the outer loop runs 3 times, with i taking the values [0, 1, 2]. Inside the outer loop, the inner loop runs i + 1 times:

- When i = 0 → inner loop runs 1 time ( j from 0 to 0 )
- When i = 1 → inner loop runs 2 times ( j from 0 to 1 )
- When i = 2 → inner loop runs 3 times ( j from 0 to 2 )

During each iteration of the inner loop, the program prints the current value of j followed by a space and stays on the same line because print(end=" ") uses a space as the ending instead of a newline.

After the inner loop finishes, the **outer** loop prints a newline to move to the next row. The sample output looks like:

**L13 Functions**

Functions can be divide in to two different components: Built-in functions and User-define functions.

**Built-in functions**

- Functions that are pre-defined in Python built-in library
- e.g., range(), print()

**User-define functions**

- Functions that are defined by the user to perform a specific task
- Advantages:
- Reusability
- Easy to debug/update
- Readable

**Syntax**

In most cases, we’re defining a **reusable** function that we’ll use later in the program. As shown in the picture above, when defining a function, as we define a function, there are three key parts to pay attention to:

- A clear, readable function name
- parameters passed into the function
- the return statement

**Notice**

- The function name should not overlap with built-in function names or other user-defined functions.
- It is best if parameter names do not overlap with global variable names
- Using return statement can pass the solution from the calling function to the main function. The return value can be any type (e.g. int, float, bool, str, lst, etc.)
- If a function does not explicitly return a value, it returns None by default

**Function call syntax**

To get the value returned by a function, just assign the function call to a variable (i.e., put a var assignment in front of the function call).

When a function call placed inside print(), print() displays the function’s return value.

**Example:**

**L14 Continue & Break**

**Break**

- A shortcut to getting the program to break out of a loop’s clause early
- If the execution reaches a break statement, it immediately **exits** a loop’s clause
- Example:

In this while-loop program, the program will repeatedly prints the value of i. On each iteration, the value of i is decreases by 1. If the value of i becomes 2, the loop ends immediately.

**Continue**

- When the program execution reaches a continue statement in a loop, the loop immediately **starts next Iteration**.
- Example

In this similar-program that changes the statement break to continue, when i equals 2 the loop skips the remaining code and immediately starts next iteration. Since stays less than 2 forever, the program becomes an **endless while loop**.

**L15 Files**

**Opening Files**

The open() function establishes a communication link between the file and the program through assigned variable. Here are the specific parameters for open()

| Parameters | Description |
|---|---|
| file name | Absolute or relative path of the file to be opened |
| file mode | A string that refers to the processing mode (read, write, append...) |

**File Modes**

| Modes | Description |
|---|---|
| r | Read the content of the existing file |
| w | Overwrite the text to the existing file, or create the new file and write from the start if it does not exist |
| a | Append the text to the end of the existing file |

**Read file in ‘r’ mode**

| Method | Argument |
|---|---|
| read() | Reads the entire file content and returns it as a string till the end of file is reached. |
| readline() | Reads and returns the characters as a string till the end of the line is reached |
| readlines() | Reads the entire file and returns all the lines as a list of strings, including ‘\n’, till the end of file is reached |
| read().splitlines() | Split the lines in string wherever the characters ‘\r’, ‘\r\n’, ‘\n’ are found. Returns a list of lines |

**Write File in ‘r’ mode**

- This function writes the contents of string to the file, returning the number of characters written

**Append File in ‘a’ mode**

- When the file is open in append mode, the write() function become appending the text to the file from end

**Close File**

- The close() function terminates the communication link between the file and the program

**Special Cases**

- If these syntax’s are used, the file will close automatically after the code block ends

**L16 Dictionary**

A dictionary is a collection of **key-value pairs**, where each key is **unique** and maps to a specific value. We create a dictionary by enclosing a comma-separated list of key-value pairs within curly braces {}. Each key is separated form its value by a colon (key:value), e.g. {1:’a’, 2:’b’, 3:’c’}

**Dictionary VS List**

- Items in dictionary are saved s the collection of key-value pairs, while the items in list are saved in order
- Dictionary use {} while list use []
- Dictionary access values through d[key], while list access through lst[idx]
- Dictionary adding and modifying element using d[key] = value, while the list adding the element through suffix (append/insert), and modifying element with lst[idx] = element.

**Looping**

We usually use the following statements under to loop through a dictionary:

- to loop through the keys and values in order
- to loop through keys in order
- to loop through values in order.

**Notice**

- d.items() returns a list of tuple (key, val) in the function of dict_items
- d.keys() returns a list of keys in the function of dict_items
- d.values() returns a list of values in the function of dict_values
- Because the return values of these functions are literary the another function rather than arrays, these return values are unavaliable for direct operations. As the result, we need to first use the list() function to convert these “functions” into an array structure.
- A set of dictionaries can be in a list
- A set of lists can be in a dictionary
- A dictionary can be inside another dictionary

**L17 Comments**

Comments were used for notes to improve code readability, and to help developers quickly recall what to do next (e.g., TODO, FIXME, DONE, etc.). The format is # TEXT, where # is the comment marker. For multi-line comments, you can use multiple # lines or triple single/double quotes ('''text''' or """text""").

Docstring: Documentation for a function. It uses triple quotes and is placed at the very top of the function body. Its purpose is to describe the function’s purpose, usage, input parameters, and return value(s).

Using help(func_nem) or func_nem.__doc__ to view the Docstring.

**Notice**

Note that help(func.__doc__) passes the string returned by func.__doc__ into help() as the argument, so it will prompt that no such object/function exists.

**Syntax**

**L18 Files and File Path**

**Path**

A path refers to the location of a file on a computer. Different operating systems use different path formats, as shown below:

- Windows: C:\path\to\file
- Linux: /path/to/file

There are two kinds of paths: absolute paths and relative paths. Both describe the route from a specific directory to a target file. The difference is that an absolute path starts from the root directory (e.g., C:\ or /) and continues all the way to the file. A relative path starts from the current working directory and points to the target location, typically written as .\path\to\file. If you want to start searching from the parent directory, you can use two dots: ..\the\path\to\file. You can think of .. as “go back to the parent directory” before continuing.

In the examples above, path, to, and file can be considered different levels (directory layers). For example, in /path/to/file, path is level 1, to is level 2, and so on.

**Slashes**

From the examples, it’s clear that Linux and Windows use different kinds of slashes. In Windows, we use the backslash (\), while Linux uses the more common forward slash (/). When working with the Python os library, we often use a double backslash (\\) as the separator.

Next, we’ll use the os library to look at some examples of reading paths in Python.

**Note**

There won’t be any programming questions on this chapter in the exam, so you mainly need to memorize the purpose of each function and the related concepts.

**OS library**

The Python os library is part of the standard library and provides many useful functions for working with file directories and interacting with the operating system. Below are some functions that may appear on an exam:

| Functions | Description |
|---|---|
| os.path.join() | Join path parts using correct separator |
| os.path.abspath() | Return absolute path for given path |
| os.path.relpath() | Compute relative path from a start directory |
| os.path.basename() | Return final component of a pathname |
| os.path.dirname() | Return directory portion of a pathname |
| os.path.split() | Split path into (head, tail) |
| path.split(os.path.sep) | Split a path string to a list of directories + file |
| os.path.getsize() | Return file size in bytes |
| os.path.exists() | Check whether a path exists |
| os.path.isabs() | Check whether path is absolute |
| os.path.isdir() | Check whether path is a directory |
| os.path.isfile() | Check whether path is a regular file |
| os.getcwd() | Get current working directory path |
| os.chdir() | Change current working directory |
| os.makedirs() | Create directories recursively, including parents |
| os.mkdir() | Create a single new directory |
| os.listdir() | List entries in a directory |
| os.unlink() | Remove a file path |
| os.rmdir() | Remove an empty directory |
| shutil.rmtree() | Delete a directory tree recursively |
| shutil.move() | Move file or directory to destination (2nd param) |
| shutil.copy() | Copy a file to destination |
| shutil.copytree() | Recursively copy an entire directory tree. |

**L19 Computer Color**

All colors we generated form the three spectral hues of Red, Green, and Blue, which aligned with the color receptors in out eye. In specific, by using 3 decimal numbers, we can identify a certain color in computer by RGB. The range of the numbers is 0-255, includes 256 levels. We can use (R, G, B) to represent the color in denary.

By the way, there are to more abnormal ways to represent colors: Binary and Hexadecimal.

**Binary in Computer Color**

In binary we contains only 0 and 1 as digits. In this mode, we have to use 24 numbers to represent one color (8 numbers for each primary color), e.g. we use 11111111 11111111 11111111 to represent white color.

**Hexadecimal**

Since the binary representations are usually hard to read, programmers found a lazy way to represent, which is hexadecimal.

Each digit in hexadecimal contains 16 different numbers (1-9 and a-f which represents numbers greater than 9)

By using hexadecimal, we can condense 4digits of binary number to 1digit of hexadecimal. E.g. to represent white color, we use #FFFFFF.

**CMYK**

CMYK is the standard color model for printing. It represents a color by specifying the amounts of four inks: Cyan, Magenta, Yellow, Black. Unlike RGB, which is an additive model used for screens (white at 255,255,255): the increase of RGB ink on white paper reduces the light reflected to eyes, making colors appear dark. Therefore, CMYK (white at 0,0,0) is used in print workflows, to control ink coverage and achieve accurate printed colors.

**L20 Number System**

In everyday life, we usually use the decimal (base10) system (0, 1, 2, …, 9). However, other counting systems are also used in specific contexts—for example, timekeeping uses units based on 60 (60 seconds per minute and 60 minutes per hour), and “a dozen” is based on 12. In computers, processors are built from countless transistors, each of which has two states (on and off). Therefore, binary (base2) is used to represent data and instructions at a low level: 0 represents off and 1 represents on. Hexadecimal (base16) is often used as a convenient shorthand for binary because one hex digit corresponds to four bits.

**Binary**

As mentioned earlier, computers represent data at a low level using binary: **0** indicates off and **1** indicates on. Each 0/1 digit is a **binary digit**, called a **bit** (**b**).

**Base Conversion (Search online for detailed steps)**

| Conversion | Method |
|---|---|
| Binary → Decimal | Sum each bit × ${2}^{\text{pos}}$ (position starts at 0 from right). |
| Binary → Hex | Group bits into 4 from the right, convert each group to one hex-digit |
| Hex → Binary | Replace each hex-digit with 4-bits binary, then concatenate. |
| Hex → Decimal | Sum each digit value × ${16}^{\text{pos}}$ (position starts at 0 from right). |
| Decimal → Binary | Repeatedly divide by 2, record remainders, read remainders bottom-up. |
| Decimal → Hex | Repeatedly divide by 16, record remainders (0–F), read remainders bottom-up |

**Data**

When we store each binary digit, we can treat it as data. Starting from a **byte** (8 bits), storage units are commonly scaled by **1024 (2¹⁰)**.

**Bitwise Operation**

a fast, low-level computer function that manipulates individual bits (0s and 1s) within binary numbers, performing logical tasks like AND, OR, XOR, and shifts, directly on their binary representations.

| Operator | Syntax | Description (In Binary) |
|---|---|---|
| AND | a&b | 1 only where both bits are 1 |
| OR | a\|b | 1 where either bit is 1 |
| XOR | a^b | 1 where bits differ (0/1 or 1/0) |
| Left Shift | a<<n | Shift bits left by n; equals a * (2**n) |
| Right Shift | a>>n | Shift bits right by n; equals a // (2**n) for non-negative ints |
