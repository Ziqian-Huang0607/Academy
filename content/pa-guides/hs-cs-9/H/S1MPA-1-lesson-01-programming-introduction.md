# S1MPA-1 Lesson 01: Programming Introduction

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

1. Why Programming?

- Hardware vs. software ---- Hardware performs physical computer operations; software provides instructions that allow users to interact with hardware. A useful model is User → Software → Hardware.
- Programming ---- Creating software involves more than typing code: it includes writing, testing, debugging, and maintaining programs.
- Computational thinking ---- Break down a problem, reason logically, plan a procedure, and anticipate outcomes.
- Four problem-solving steps ---- Define the problem → Plan a solution → Write the code → Test and debug.

2. Running Python 3

Interactive mode uses the >>> prompt and displays results immediately. Script mode runs a saved .py file and is better for editing longer programs.

3. Arithmetic Operators and Expressions

The main operators are + (addition), - (subtraction), * (multiplication), / (division), ** (powers), // (floor division), % (remainder). Examples: 5 - 2 = 3; 22 / 8 = 2.75; 2 ** 3 = 8. Division with / gives a float.

4. Output with print()

Use print(value) to display a value. Text goes in quotes; calculations do not. The default end of a print() call is a newline (end="\n").

print(1 + 2)        #3

print("1+2")        # 1+2

print("Alice" * 3)   # AliceAliceAlice

print("a", "b")     #ab

print("a", end="")    # no newline; next output follows

print("b")         # together, the last two lines print ab

5. Errors and Precision

10 / 0 raises ZeroDivisionError. Unexpected indentation can raise SyntaxError because Python uses indentation to define blocks. Floating-point calculations are approximate, so 2/3 + 1 and 5/3 may display slightly different values.
