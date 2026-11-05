# S1M-1 Semester 1 Midterm review: 1.1-1.15; Excluding 1.13

> From the Grade 9 Resource Department's Semester 1 Midterm Computer Science S review guide (PA). Writers: Leona Cai 9-7. Range: 1.1-1.15; Excluding 1.13. Student-made reference material: where it differs from class, follow class.

## 1.1 Computer Category and Programming Language

**Categories of Computer**

- **Special-Purpose Computers**: Designed for a particular function, executing the same stored set of instructions (EX. Microwave, washing machine etc.)
- **General-Purpose Computers**: Used for solving many different types of problems, available in a variety of sizes and capabilities.

**Languages**

- **Programming Languages**: Agreed upon format of symbols that allow a programmer to instruct a computer to perform certain predefined tasks
- **Machine Languages**: Natural language of a computer, and is the only language that a computer can directly use. Its instruction is a binary string of 0s and 1s.
- **Assembly Language**: Consists of English-like abbreviations, making them easier to understand. It uses language translators called assemblers to convert them to machine code.
- **High-level Languages**: Machine-independent, does not require programmers to know anything about the internal structure of the computer (EX Java, PHP, Python etc)

## 1.2 Programming Intro

**Hardware and Software**

- **Hardware**: Only understands the binary system
- **Software**: set of steps for instructions for computer hardware operations

**Programming Problems**

- Define the problem -> Plan the solution -> Write the code -> Testing/Debugging the program
- **Interactive mode**: Start with >>>, runs one line at a time
- **Script mode**: Uses “.py” file, runs all lines you wrote at once
- **Indentation**: Indicates a block of code

**Math Operators**

| **Operator** | **Operation** | **Example** | **Output** |
|---|---|---|---|
| **+** | Addition | 2+2 | 4 |
| **-** | Subtraction | 5-3 | 2 |
| * | Multiplication | 2*3 | 6 |
| **/** | Division | 10/2 | 5 |
| ** | Exponents | 3**2 | 9 |

- Python follows the PEMDAS rule, so uses parentheses when needed

**print() function**

- A value that is passed to a function call is an argument
- EX. print(“Hello World”), output: Hello World
- If it is a value, don’t use quotation marks. Quotation marks for letters

## 1.3 Variable and Data Types

Operator “+” is used to concatenate two strings as the operation

**input() function**

- It will return a string type, and the user can input
    - EX. input(“What is your name”); output: What is your name; Then the user can input a name

**Variables**

- Containers for storing data values can store numerical or textual values
- Rules for naming variables:
    - Can contain only letters, numbers, and underscores
    - Cannot start with a number
    - Spaces and special characters (-, !, @, #, %, ^, &, *) are not allowed
    - Variables are case sensitive, meaning age, AGE, and Age are different
    - Don’t use reserved keywords: eg “True”, “False”,“or”, “not”, “and”,”if”
- **Camel Case**: makes compound names easier, EX. myList, listOfNumbers
    - Can contain only letters, numbers, and underscores
- When assigning values, use “=” operator
    - **Multiple assignment**: multiple variables in a single statement, EX. x=y=z=50, or a,b,c=5,10,15

**Data Types**

## Integer: int(), converts a number/string into an integer

- **Float**: float(), approximations to real numbers, they are decimals
- **String**: str(), converts a number to a string

## 1.4 Expressions

Consists of values and operators so they always evaluate down to a single value

**Importing Modules**: from the standard library, contains related group of functions that can be embedded in your programs

**Math Modules**

- **math.pi**: on its own, it returns the first 15 digits of pi
- **math.ceil(x)**: returns an integer ≥ x (EX math.ceil(2.4); output: 3)
- **math.floor(x)**: returns an integer ≤ x (EX math.floor(2.4); output: 2)
- **math.sqrt(x)**: returns the square root of x (EX math.sqrt(9); output: 3)

## 1.5 List

- A collection of items in a particular order, indicated by square brackets []
  - Access an element in a list by its index: listName[index]. (EX. myList[3];output: the fourth element in the list)
  - **len() function**: returns the number of elements in a list
    - Index of a list starts at 0. (1st element’s index is 0, 2nd element’s index is 1, etc.)
    - len(myList), (assuming myList has 5 elements); output: 5
  - **lst.index(value) function**: finds the index of an element

| **Action** | **Methods/Functions** |
|---|---|
| Modifying an element | **listName[index of element you want to change]=(new value/string)**; EX. myList[1]=4; myList now equals [1,4,3,4] |
| Adding an element | **append():** adds the new element to the end of a list; EX. myList.append(5); myList now equals [1,4,3,4,5] |
|  | **insert( , )**: insert (index,value); EX. myList.insert(2,6); myList now equals [1,4,6,4,5] |
| Removing an element | **del listName[**index**]:** removes the element of that index; EX. del myList[1]; myList now equals [1,6,4,5] |
|  | **remove()**: removes the specific value, deletes the first occurrence of the value you specify; EX. myList.remove(1); myList now equals [6,4,5] |

## 1.6 For-Loop

- **split() function**: splits a string to a list
  - str.split(x) will remove every x from str and return a list of the leftover
- **for loop**: repeatedly perform the same task with each element in a list
  - for variable in range OR for variable in myList; enter the task you want to perform
  - iterate a block of statements several times
- **sum() function**: sum of the entire list

## 1.7 For-Range

- **range() function/syntax**: generates a sequence of numbers in that range
  - for i in range(5); print(i); output: 0, 1, 2, 3, 4 (starts from 0, ends at the integer < 5)
  - for i in range (2,6,2): (start, stop, step)
    - output: 2, 4
    - if there isn’t an end (2,6,-3), then it will return nothing
- **random numbers**: use module random. (import random)
  - randint(a,b): returns in integer in the range [a,b]
  - EX. random.randint(1,5); output: 4

## 1.8 If Statement

- **Boolean values**: True or False
- Relational Operators

| **Operator** | **Description** | **Example** | **Output** |
|---|---|---|---|
| **<** | Less than | 2<3 | True |
| **>** | Greater than | 3>4 | False |
| **<=** | Less than or equal to | 3<=9 | True |
| **>=** | Greater than or equal to | 8>=7 | True |
| **==** | equal | 2==3 | False |
| **!=** | Not equal to | 2!=2 | False |

- **If Statement**: if condition: -> statements
  - The condition has to be a Boolean expression that evaluates to True or False
  - **If else**: if condition: statement 1; else: statement2
  - **If elif else**: if condition: statement 1; elif: statement 2; else: statement 3

## 1.9 Boolean Operators

- **Boolean operators**: evaluate the expressions down to a Boolean value
  - () > not > and > or: meaning the computer evaluates Boolean operators in this order

| and operator truth table | True and True: True |
|---|---|
|  | True and False/False and True: False |
|  | False and False: False |
| or operator truth table | True or True: True |
|  | True or False/False or True: True |
|  | False or False: False |
| not operator truth table | not True: False; not False: True |

- **Remainder(%)**: gives the remained of division (EX: 22%5=2)
- **Integer division**: floor value of a quotient produced by a division (EX: 1234//100=12)
- Precedence: **(Exponents) > (*, /, %, //) > (+ -) > (<=, <, >, >=, !=, ==) > (not, and, or)

## 1.10 Number System

**Decimal Number System**

- **denary (decimal) system**: positional system that uses 10 digits (0,1,2,3,4,5,6,7,8,9) to represent numbers
  - **base-10**: the place value in a decimal number is always a power of 10
  - EG 635210: if the base is omitted, it is assumed that the number is in the base-10 system

**Binary Number System**

- It is the most widely used number system in computer science
- consists of only two digits: 0 and 1
  - each 0 or 1 is called a bit (lowercase b)
  - a group of eight bits is called a Byte and is usually abbreviated as an (uppercase B); used to express storage space
  - **base-2**: the place value in a binary number is always a power of 2
- 1011102: the base number cannot be omitted the number system

| **decimal 1000** | **binary 1024** |
|---|---|
| kilobyte | kibibyte |
| megabyte | mebibyte |
| gigabyte | gibibyte |
| terabyte | tebibyte |
| petabyte | pebibyte |
| exabyte | exbibiyte |
| zettabyte | zebibyte |
| yottabyte | yobibyte |

**Data Representation & Conversion**

Take the number you want to convert, divide it by the binary number b, and the remainders (from bottom to top) form the number in b binary

**Hexadecimal Notation**

1 2 3 4 5 6 7 8 9 A B C D E F

A=10; B=11; C=12; D=13; E=14; F=15

| Dec | Bin | Hex | Dec | Bin | Hex |
|---|---|---|---|---|---|
| 0 | 0000 | 0 | 8 | 1000 | 8 |
| 1 | 0001 | 1 | 9 | 1001 | 9 |
| 2 | 0010 | 2 | 10 | 1010 | 10 |
| 3 | 0011 | 3 | 11 | 1011 | 11 |
| 4 | 0100 | 4 | 12 | 1100 | 12 |
| 5 | 0101 | 5 | 13 | 1101 | 13 |
| 6 | 0110 | 6 | 14 | 1110 | 14 |
| 7 | 0111 | 7 | 15 | 1111 | 15 |

## 1.11 While-Loop

In situations where you don’t know how many loop iterations to execute.

Given a condition, as long as that contidition is true, it will execute the statement designed (in the indented code block); when the condition becomes false, the computer ends the loop and moves on to the next statement.

+= is called **augmented assignment operator**, EG s=s+1 can be written as s+=i; this works for +, -, *, /, //, %

**1.12 & 1.14 String Manipulation**

In situations where you don’t know how many loop iterations to execute.

Given a condition, as long as that contidition is true, it will execute the statement designed (in the indented code block); when the condition becomes false, it moves on to the next statement.

**strip() function**

- **str.strip()**: returns a new string without any blanks (including space, tab and new lines)
- **str.strip(s)**: returns a new string with first and last “s” removed
- **lstrip()**: returns a new string without blank characters from the left end
- **rstrip()**: returns a new string without blank characters from the right end

**join() function**

- **delimiter.join(list)**: This will take all of the strings in the list “list,” and join them with the delimiter
  - EG: delimiter is “,”, list=[“banana”,”apple”,”cherry”]; The output of the function “,”.join(list) will be: banana,apple,cherry
  - EG delimiter is “a”, list=[“banana”,”apple”,”cherry”; The output of the function “a”.join(list) will be: bananaaappleacherry
- **delimiter.join(str)**: puts the delimiter between every character
  - EG if str is “hello”, the function: “,”.join(str) will give you “h,e,l,l,o”

**split () function**

- **str.split(delimiter)**: splits the string based on the delimiter
  - EG if delimiter=e, str=”hello”, str.split(“e”) will give you: [“h”, ”llo”]
  - **str.split()**: this means the delimiter is blank characters (space, tab and new lines)

**string methods**

- **str.isalnum()**: returns True if the characters in the string are letters of numbers (alphanumeric)
- **str.isdigit()**: returns True if all the characters are digits
- **str.isalpha()**: returns True if all the characters are alphabets/letters

## 1.15 Nested Loop

A nested loop just means to put a loop within another loop, here there will be an inner loop and an outer loop. The outer loop is run first.

New line character: use ‘\n’

Used fir 2D arrays, matrices, grids, printing patterns ec.

**syntax**

for outer_variable in outer_sequence:

for inner_variable in inner_sequence:
