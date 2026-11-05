# S1MPA-1 Semester 1 Midterm review: Lesson1 – Lesson12

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science S review guide (PA). Writers: Joseph 9(12). Editor: Brandon 9(9). Range: Lesson1 – Lesson12. Student-made reference material: where it differs from class, follow class.

Types of Computers

Special-purpose Computers

- These are computers designed for a special function, always executing the same

stored set of instructions whenever requested.

- Examples include microwaves, dishwashers, washing machines, etc.

General-purpose Computers

- These are computers used for solving a wide range of tasks. They are classified into

three categories.

- Microcomputers
- Everyday laptops, desktops, and workstations

- Mainframe computers
- Also known as servers, these computers are very large and have high

memory and processing power.

- Supercomputers
- Highly sophisticated computers mainly used by militaries and scientific

research centers for tasks with hundreds of thousands of variable factors

Python Basic Knowledge

Grammar

- return: Sends a value back to its calling function. Essentially, it is an output that is stored, not printed (unless explicitly instructed)

- Variables: store a value that can be changed.
- Store a single value using variable = value

- a=3

- Store multiple values using variable1, variable2, variable3 = value1, value2,

value3

- print()
- This function causes whatever is put inside the parentheses to appear as an

output on your screen.

- Any mathematical operators are calculated

- print(3 + 4) will print 7

- Indentation: Always remember to properly indent your code, or else it will not

run properly.

Naming Rules for Variables

- Only include letters, numbers, and underscores.

- Do not start with a number, such as 8piece.

- No spaces, such as number of cakes. No special characters, such as - ! @ . # % ^ & *

- Avoid using reserved keywords, such as True, False, and more.

- Variable names are case-sensitive. For example, age, Age, and AGE are three

different variables.

- Short list of keywords: ['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global',

'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while',

'with', 'yield']

Mathematics Operators

- Python uses the basic decimal system (digits 0-9)

- Addition is +
- 1 + 1 will return 2

- 1 + -1 will return -2

- Subtraction is –
- 2 – 1 will return 1

- 0 – 1 will return -1

- Multiplication is *
- Called an asterisk

- 2 * 1 will return 2

- Division is /
- Basically the fraction symbol

- 2 / 1 will return 2

- Exponents use **
- Two asterisks

- 2 ** 2 will return 4

- All mathematics in Python follows the order of operations used in usual mathematics

- Parentheses > Exponents > Multiplication and Division > Addition and

Subtraction

- “=” (without the quotation marks) sets one variable equal to a value
- For example, a = 3 sets a to the value of 3

- x = ‘3’ sets x to the value of ‘3’ (saved as a string).

-

Datatypes

Integer

- An integer (e.g. 0, 29, -3)

- int(): change a piece of data into an integer (if possible)

String

- Text (e.g. “the”, “1”, “num of line”)

- str(): change a piece of data into a string

- It is important to note that when doing tasks, you must properly differentiate between variables classified as strings and variables classified as integers.

- 1 is not the same as ‘1’

- ‘ and “ have separate trackers, so you cannot use ‘a”

Float

- A number that has values after the decimal (e.g. 1.0, 9.902, 1e10, 44e-2)

- float(): converts a string or number to a decimal (e.g., float(1) == 1.0)

Boolean

- A data type that only has two possible values: True and False (“True” and “False” must be capitalized)

- Boolean Operators: “not”, “and”, “or” (Avoid quotation marks in usage)

- == asks whether the value before the operator is equal to the value after the

operator and returns True if it is and False if not.

- So for example, 3 == 3 returns True and 3 == 4 returns False.

- ‘a’ == ‘a’ returns True and ‘a’ == ‘ab’ returns False

- != asks whether the value before the operator is not equal to the value after

the operator

- So, for example, 3 != 4 returns True and 3 != 3 returns False.

- > asks whether the value before the operator is greater than the value after

the operator

- 4 > 3 returns True

- < asks whether the value before the operator is less than the value after the

operator

- 3 < 4 returns True

- >= and <= ask whether the value before the operator is greater than or equal

to or less than or equal to the value after the operator, respectively.

- 4 >= 4 returns True

- 3 <= 4 returns True

- “not” evaluates to the opposite Boolean value
- Syntax: not condition

- E.g. not 2>1 == False because it’s initially True but becomes False with a not

statement

- “and” evaluates an expression to True if both Boolean values are True; otherwise, it evaluates to False

- Syntax: condition and condition

- With an if statement: if condition and condition: statement (remember

to change to the next line and indent properly)

- E.g. 2>1 and 5>6 == False

- “or” evaluates an expression to True if either of the two Boolean values is True;

otherwise, it evaluates to False.

- Syntax: condition or condition

- With an if statement: if condition or condition: statement

- 2>1 or 5>6 == True

Functions

- input() records an input from the user

- You can add what you want to say to the user in the parentheses

- .split() splits a string into a list by whatever’s in the parentheses (in this case, it will be the space bar)

- str.split() when str = “1 2 3 4” will return [“1”, “2”, “3”, “4”]

- Useful for converting the input from the input() function into a list.

- Format: input().split()

Lists

- A collection of items in a particular order.

- [] indicates a list

- Individual elements in the list are separated by commas.

- Example: spam = ['cat', 'bat', 'rat', 'elephant']
- ‘cat’, ‘bat’, ‘rat’, and ‘elephant are now elements able to be called from the list

named ‘spam’

- Index: the position of an item in a list
- The first item in a list has an index of 0, the second is 1, so on and so on

- The last item has an index of n + 1 (assuming the list has n items), which can

also be called using an index of -1.

Functions used in lists

- len(): The name of the list goes in the brackets

Find out the number of elements in a list

- Modifying an element when you know its index:

numList = [0, 1, 2, 3, 4, 5]

numList[1] = 10

numList becomes [0, 10, 2, 3, 4, 5]

- nameoflist.append(the thing you want to add): adds the new element to the end of

the list.

- Example:

numList = [0, 1, 2, 3, 4, 5]

numList.append(12)

numList becomes [0, 1, 2, 3, 4, 5, 12]

- nameoflist.insert(position, thethingyouadd): add a new element at any position in your list

- Example:

numList = [0, 1, 2, 3, 4, 5]

numList.insert(2, 12)

numList becomes [0, 1, 12, 2, 3, 4, 5]

- del: del nameoflist[index of the thing you want to delete]: use when you know the index of the item

- Removes the item at the index you put in [] from the list

- Example:

numList = [0, 1, 2, 3, 4, 5]

del numList[2]

numList becomes [0, 1, 3, 4, 5]

- nameoflist.remove(the element you want gone): use when you know the value of the item you want to remove

- remove() deletes only the first occurrence of the value you specify

- Example:

numList = [1, 5, 4, 2, 3, 0, 3]

numList.remove(3)

numList becomes [1, 5, 4, 2, 0, 3]

- nameoflist.index(value of element in list): returns the index of the value

- Example:

numList = [10, 15, 20, 25, 30, 35, 40, 45, 50]

numList.index(20)

returns 2

Modules

- Contain functions that are not in the default code of Python and thus need to be added manually through the import function

- import math

- Math module
- Involves functions relating to mathematics

- math.pi

- returns “pi” (π)

- math.ceil(x)

- returns the least integer that is >= x

- math.floor(x)

- returns the greatest integer that is <= x

- math.sqrt(x)

- returns the square root of x

- math.ceil and math.floor are more commonly used

- Random module
- Involves functions relating to randomness.

- random.randint(a,b): generates a random integer between a and b, including

both.

For loops

- Repeatedly performs the statement with each element in a list a set number of times

- Structure:

for variable in a list:

statements

- Example:

strList = input().split()

numList = []

for ele in strList:

numList.append(int(ele))

print(numList)

- This prints all of the elements in the list strList as a new list, numList.

- sum() finds the sum of the entire list that can be added together

- Example:

nums = [1, 2, 3, 4]

print(sum(nums))

- returns 10

- range()

- Covers a certain range of integer values

- 3 structures

for i in range(5):

print(i)

- Runs 5 times and prints 0,1,2,3,4

for i in range(1, 5):

print(i)

- Starts at 1 and stops at 5 – 1, increasing by one each time.

- In other words, it will print 1,2,3,4

for i in range(2, 6, 2):

print(i)

- Starts at 2, increases by 2 each time, and ends before 6 (aka runs last time at i = 6 - 1)

- This will run two times, once with i = 2 and once with i = 4

- Additionally:

for i in range(10, 4, -3):

print(i)

- Begins at i = 10 and decreases by 3 each time, ending before 4

- This will run twice, with i as 10 and 7

If statement

Structure: if condition:

Statements

- The condition must be a Boolean data type

- The code will run under the condition that the condition is True

- How the logic goes:

- Example:

ph = float(input('Enter the pH level: '))

if ph < 7.0:

print(str(ph), "is acidic.")

if ph > 7.0:

print(str(ph), "is alkaline.")

If-else Statement

- Structure

if condition:

statement1

else:

statement2

Example:

score= 0

if score >= 90:

print(“A”)

else:

print(“Not A”)

If-elif-else statement

- Structure:

if condition1:

statements1

elif condition2:

statements2

else:

statements3

Example:

age = int(input("What is your age? "))

if age < 11:

print("You are kid.")

elif age < 20:

print("You are teenager.")

else:

print("You are adult.")

While Loop

- Repeats the command inside the loop until the condition is satisfied.

- Structure

while condition:

statements

- Example:

i,s = 1,0

n = int(input("Enter n: "))

while i <= n:

s += i

i += 1

print(s)

- This will add all of the integers from 1 to n (taken from the user’s input).

Number systems

- These are systems of digits used for mathematical operations.

- Decimal: The system that we use every day.

- Binary: Only has 2 digits, 0 and 1

- Hexadecimal: based on 16, ranges from 0-9 and A-F (A, B, C, D, E, F represent the five numbers 10, 11, 12, 13, 14, 15, respectively)

- Octal numeral system: based on 8; digits range from 0-7.

- These systems’ place values are represented by their powers. For example, with decimal, we have ones digits (10^0), tens digits (10^1), hundreds digits(10^2), etc.

- The number 1234 is equal to 1 x 10^3 + 2 x 10^2 + 3 x 10^1 + 4 x 10^0.

- In a similar way with base two, 10110 is equal to 1 x 2^4 + 0 x 2^3 + 1 x 2^2 +

1 x 2^1 + 0 x 2^0 = 20 when converted to base-10.

- Conversion: This is one of the hardest points for our class.
- To convert from decimal to another number system, you divide the given

decimal number by the other number system’s base (whichever number that

system is named after, e.g., base-2, aka binary, will be 2) over and over until

the quotient is 0. Then, look at the final remainder and all of the earlier

remainders from the bottom up and read them in order to find the final

number in the new base.

- Let’s set an example.

- A number has a value of 10 in decimal. To convert this number to

base-2, we will divide it repeatedly until the quotient is zero. 10 / 2 = 5

R 0, 5 / 2 = 2 R 1, 2 / 2 = 1 R 0, and 1 / 2 = 0 R 1. Then, we just look

at the remainders. 1, 0, 1, 0. This becomes 1010 in binary.

- To convert from another system to decimal, we want to use the example we

mentioned earlier about place values. Simply find the place value and multiply

it by the number in that place, and then add up the values to find the final

value of the number in decimal.

- Say, for example, we are given the binary number 1010. To convert it

to decimal, we need to find the place values first. The first 1 has a

place value of 2^3 because there are three places to the right of it,

and the rest follow an identical property. Then, we just multiply the

values of the digits by the place values and add them. 1 x 2^3 + 0 x

2^2 + 1 x 2^1 + 0 x 2^0 = 10, and that is our decimal value.

Bits and bytes:

- Bit: One “0” or “1” in a binary system, represented as “b”

- Byte: A group of 8 bits, represented as “B”

- Larger storage units:

- On the left side, 1000 kilobytes = 1megabyte

- On the right side, 1024 kibibytes = 1mebibyte

- 1 kilobyte = 1000 bytes

- 1 kibibyte = 1024 bytes

String Manipulation

- s.strip(str) removes all characters in the string str from the beginning and end of

string s.

- If s = ‘…..abc….’ then s.strip(.) returns ‘abc’.

- The generalized form is .strip(), which removes all whitespace characters (including spaces, tabs, and newlines).

- .lstrip() and .rstrip() are variants that only remove all characters in the parentheses from one side of the string, either the left or the right.

- Strings, just like lists, have indexes. From our earlier example, str[0] = ‘.’, and str[5] = ‘a’.

- in checks to see if the value before the operator is in the list or string after the operator.

- x in s returns True if x is in s, and False if not.

- in works even if only part of the value is in the given list or string. For

example, ‘John’ in nameList where nameList = “…, Johnson, …” returns True.

- len(str) returns the length of string str, including whitespace characters.

- String slicing

- Removes the specified parts from a string

- Syntax: str[start slice:end slice]

- start slice and end slice stand for the beginning and ending index positions of

the slice (end slice non-inclusive).

- If str = ‘Python’, then str[1:4] returns ‘yth’.

- The start slice defaults to 0 and the end slice defaults to the end of the string.

- str[:-1] returns an empty string.

- str[:1] returns only the first character, str[-1:] returns only the last character.

Common Misconceptions and Mistakes

- Data types can be very finicky. People will often forget to take into account the differences between integers and strings when coding.

- Most notably, with the print function, you should almost always convert between data types with the int() or str() functions

- For example, if you have defined variable a = 3, then print(a + 1) will print 4. However, if a is a string, say a = ‘3’, then print(a + 1) will be an error because

you can’t add an integer to a string. Additionally, print(‘a + 1’) will print a + 1

without running calculations, and print(‘a’ + ‘1’) will return ‘a1’

- Furthermore, if you have defined a = ‘Hello’ and b = 1 and are trying to print a string, then you must use either addition or a comma to add the two. print(a +

b) directly will fail, but print(a + str(b)) or print(a, b) will print Hello1 (which will

be a string data type). Notice how using a comma does not require

converting b to a string, while using addition does.

- int() has an interesting quirk where, if the string contains a float number, there will be an error.

- What I mean by this is that if you try the command int(‘4.0’), the command will return an error.

- However, if you use float(‘4.0’) or float(‘4’), it will still run properly.
- When printing with print(“…”), the quotation marks will be removed.
- When using for loops, if a range() function is used, then the “i” in the “for i in range(…)” will be defined by the range function. However, if the “i” is used in “for i in

a” when a is either a list or a string, then i will be defined by a, iterating through each

item/character in a by order of index, not value.
