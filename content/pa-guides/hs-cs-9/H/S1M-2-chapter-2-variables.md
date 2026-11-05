# S1M-2 Chapter 2 Variables

> From the Grade 9 Resource Department's Semester 1 Midterm Computer Science H review guide (PA). Writers: Sharon 9-3. Editor: Cathy 9-3. Student-made reference material: where it differs from class, follow class.

**Variables and Data Types**

- A variable is a named container that stores a value temporarily.
- Created the moment a value is assigned: x = 42.

**- Advantages:**

- Improves code readability,
- Avoids redundant typing,
- Simplifies modification and debugging.

**Naming Rules**

- Must contain only letters, digits, and underscores (_).
- Cannot start with a digit (e.g., 8score is invalid).
- Cannot contain spaces or special characters (-, !, @, etc.).
- Case-sensitive: age, Age, and AGE are distinct.
- Avoid Python reserved keywords (e.g., True, False, if, for).
- Use descriptive names: studentName is better than sn.

**Common Naming Conventions**

- Camel Case: numberOfDonuts
- Snake Case: number_of_donuts (preferred in Python)
- Pascal Case: NumberOfDonuts

**Basic Data Types** **and Type Conversion Functions**

- Integer (int): whole numbers like 0, -5, 42. int(x): converts to integer (e.g., int("15") → 15).
- Float (float): decimal numbers like 3.14, -0.001. float(x): converts to float (e.g., float(2) → 2.0).
- String (str): text enclosed in quotes, e.g., "hello", "123". str(x): converts to string (e.g., str(42) → "42").

**Input and Output**

- input(prompt) reads a string from the user. **EG** To get numbers: age = int(input("Age? ")).
- Always convert input types appropriately before computation.

## Chapter 3 Expressions

**Expressions and Modules**

- An expression combines values and operators to produce a single result. **Eg**: 2 + 3 * 4 evaluates to 14.
- Follows standard operator precedence: Parentheses () → Exponentiation ** → Multiplication/division * / // % → Addition/subtraction + -.

**Using the math Module**

- Must import before use: import math.
- Common functions:
- math.pi: value of π,
- math.sqrt(x): square root,
- math.ceil(x): smallest integer ≥ x,
- math.floor(x): largest integer ≤ x.

## Chapter 4 List

- A list is an ordered, mutable collection of items, enclosed in square brackets. **Eg:** fruits = ["apple", "banana", "cherry"].

**Accessing and Modifying Elements**

- Indexing starts at 0: fruits[0] → "apple".
- Negative indices count from the end: fruits[-1] → "cherry".
- Modify by assignment: fruits[1] = "blueberry".

**List Methods**

- len(lst): number of elements.
- lst.append(x): adds x to the end.
- lst.insert(i, x): inserts x at index i.
- del lst[i]: removes element at index i.
- lst.remove(x): removes first occurrence of x.
- lst.index(x): returns index of first occurrence of x.
- Other useful methods: pop(), sort(), reverse(), count(), clear(), extend().

## Chapter 5 For Loop

**for Loop**

- Iterates over each item in a sequence (e.g., list, string).
- Syntax:

for variable in iterable:

statements

- Example:

numbers = input().split()

total = 0

for num in numbers:

total += int(num)

## Chapter 6 Range

**range() Function**

- Generates sequences of integers.
- Forms:
- range(stop): 0 to stop-1,
- range(start, stop),
- range(start, stop, step).
- Examples:

for i in range(5): # 0,1,2,3,4

for i in range(1, 5): # 1,2,3,4

for i in range(10, 0, -2): # 10,8,6,4,2

**Random Numbers**

- Use the random module:

import random

num = random.randint(1, 6) # inclusive range

## Chapter 7 If

Boolean Values and Relational Operators

- Boolean values: True or False.
- Relational operators:
- <, >, <=, >=, == (equal), != (not equal).
- Examples:
- 2 ** 3 < 9 → True,
- "B" != "B" → False.

**if, if-else, if-elif-else**

- Simple if:

ph = float(input("Enter the pH level:"))

if ph < 7.0:

print(str(ph), "is acidic.")

- if-else:

n = int(input())

line = "Today, I ate " + str(n) + " apple"

if n > 1:

line = line + "s."

else:

line = line + "."

print(line)

- if-elif-else:

age = int(input("What is your age?"))

if age < 11:

print("kid")

elif age < 20:

print("teenager")

else:

print("adult")

## Chapter 8 Boolean Operators

- and: both conditions must be True.
- or: at least one condition must be True.
- not: negates a Boolean value.
- Precedence: not > and > or.

## Chapter 9 While Loop

**while Loop**

- Repeats as long as a condition is True.
- Syntax:

while condition:

statements

- Must ensure the condition eventually becomes False to avoid infinite loops.
- Often used when the number of iterations is unknown in advance.
