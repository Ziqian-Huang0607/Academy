# S1MPA-2 Lesson 02: Basic Variables

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

1. Strings, Concatenation, and input()

- String ---- Text in quotes, such as "hello" or "34". The + operator joins strings: "3" + "4" → "34".
- input(prompt) ---- Reads user input and always returns a string, even when the user types a number.

name = input("What is your name? ") # name = Chloe

print("Hello, " + name) # ‘Hello, Chloe’

age = int(input("Enter your age: ")) # age = 6

print(age + 1) #7

2. Variables and Assignment

A variable stores a value for later use. The assignment operator = assigns the expression on its right to the name on its left; it is not a mathematical equality statement. x = y = z = 50     # all three names receive 50

a, b, c = 5, 10, 15 # multiple assignment

score = 20

score = score + 5 # score is now 25

3. Variable Naming Rules

- Letters, digits, and underscores are allowed; a name cannot start with a digit.
- Spaces, special characters such as - or @, and Python reserved keywords (e.g., if, True) are not allowed.
- Case-sensitive: age, Age, and AGE are different names.
- Readable styles: camelCase: numberOfDonuts; snake_case: number_of_donuts; PascalCase: NumberOfDonuts.

4. Common Data Types and Type Conversion

Type / Function        What it represents or does                     Example → Result int                    Whole numbers                                  int("11") → 11 float                  Floating-point numbers                         float(1) → 1.0 str                    Text (string)                                  str(3) → "3" Do not mix strings and numbers with +. Convert intentionally: str(4) + "2" gives "42", while 4 + int("2") gives 6.

5. Typical Application: Temperature Conversion

temp_c = 24

temp_f = temp_c * 1.8 + 32

print(temp_f)           # 75.2

temp_f = int(input())     # e.g., 72

temp_c = int((temp_f - 32) / 1.8)

print(temp_c)            # 22
