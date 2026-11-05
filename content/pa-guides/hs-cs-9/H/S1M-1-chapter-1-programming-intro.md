# S1M-1 Chapter 1 Programming Intro

> From the Grade 9 Resource Department's Semester 1 Midterm Computer Science H review guide (PA). Writers: Sharon 9-3. Editor: Cathy 9-3. Student-made reference material: where it differs from class, follow class.

**What is Programming?**

- Programming is the process of writing, testing, debugging, and maintaining source code to create software that instructs computers to perform specific tasks.

**Hardware, Software, and the Role of Programming**

- Computer hardware operates using binary (0s and 1s), which is difficult for humans to use directly.
- Software acts as an interface between humans and hardware.
- Programming creates software by translating human intentions into machine-executable instructions.

**Interaction Hierarchy:** User → Software → Hardware

Steps to Solve Programming Problems

1. Define the problem clearly.

2. Plan the solution (e.g., using pseudocode or flowcharts).

3. Write the code in a programming language.

4. Test and debug the program to remove errors (bugs).

**Running Python Code**

- Interactive Mode:
- Accessed via >>> prompt (e.g., in IDLE shell).
- Executes code line-by-line immediately.
- Useful for quick tests but not for editing multi-line programs.
- Script Mode:
- Code is written in a .py file (e.g., lesson1.py).
- Must be saved before running.
- Executed via Run → Run Module (or press F5 in IDLE).
- Preferred for developing full programs.

**Basic Syntax and Concepts**

**Math Operators in Python**

+ Addition: 2 + 2 → 4

- Subtraction: 5 - 2 → 3

* Multiplication: 3 * 5 → 15

/ Division: 22 / 8 → 2.75

** Exponentiation: 2 ** 3 → 8

Note: Python uses floating-point arithmetic, so results like 2/3 + 1 may show slight imprecision (e.g., 1.6666666666666665) due to how decimals are stored in binary.

**The** **print() Function**

- Used to display output on the screen; Accepts arguments (values passed into the function).
- print("Hello world")
- By default, print() ends with a newline (\n). This can be changed using the end keyword:

print("a", end="") # no line break after a

print("b") # outputs: ab

- Multiple arguments are separated by a space by default (controlled by the sep parameter).

**Indentation in Python**

- Unlike many languages where indentation is optional for readability, Python requires consistent indentation to define code blocks (e.g., inside loops or functions).
- Incorrect indentation leads to a SyntaxError.
