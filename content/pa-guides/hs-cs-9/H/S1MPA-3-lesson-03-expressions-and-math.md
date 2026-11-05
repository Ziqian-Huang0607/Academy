# S1MPA-3 Lesson 03: Expressions and math

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

1. What Is an Expression?

An expression combines values, variables, operators, and/or function calls, and evaluates to one value. Python formulas must make multiplication and grouping explicit.

Mathematical notation                                  Python expression

3(a + b)                                               3 * (a + b)

a² + b²                                                a ** 2 + b ** 2

(a + b) / 2                                            (a + b) / 2

2. Built-in Functions vs. Modules

Some functions, such as print(), input(), and abs(), are built in. To use functions and constants from the standard-library math module, first write import math.

import math

print(abs(-4))    # 4 (built in)

print(math.pi)    # mathematical constant π

print(math.sqrt(25)) # 5.0

3. Essential math Module Reference

Function / Constant      Meaning                                         Example → Result math.pi                  Approximation of π                              math.pi → 3.14159... math.ceil(x)             Smallest integer ≥ x                            math.ceil(-13.4) → -13 math.floor(x)            Largest integer ≤ x                             math.floor(-2.1) → -3 math.sqrt(x)             Square root of x                                math.sqrt(9) → 3.0
