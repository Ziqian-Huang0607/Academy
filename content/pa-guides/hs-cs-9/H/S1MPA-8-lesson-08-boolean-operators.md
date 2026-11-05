# S1MPA-8 Lesson 08: Boolean Operators

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

and, or, not

- and → True only when both sides are True.

- r → True when at least one side is True.
- not → the opposite Boolean value.

Truth Table

A                B                  A and B                 A or B                   not A

True             True               True                    True                     False

True             False              False                   True                     False

False            True               False                   True                     True

False            False              False                   False                    True

Precedence

not > and > or, and all three sit below the arithmetic and relational operators:

2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2         # True

not 2 > 1 and 3 < 4 or 5 > 5 and 2 > 1 and 3 >= 3         # False

Remainder and Integer Division

- x % y — the remainder after dividing x by y. 22 % 5 gives 2.
- x // y — the floor of the quotient, the same as math.floor(x / y). 7 // 2 gives 3.

Typical uses:

- divisible by k → n % k == 0
- even or odd → n % 2 == 0

- digit extraction → math.floor(123 / 10) % 10 gives 2, and (1234 // 100) % 10 gives 2

Leap Year

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):

print("leap year")

Quadratic Equation

Solve ax² + bx + c = 0, always checking a first:

import math

a = float(input()); b = float(input()); c = float(input())

if a == 0:     # not a quadratic equation any more

if b == 0:

print("no solution" if c != 0 else "infinite solutions")

else:

print(-c / b)

else:

d = b * b - 4 * a * c

if d < 0:

print("no real root")

elif d == 0:

print(-b / (2 * a))

else:

print((-b - math.sqrt(d)) / (2 * a), (-b + math.sqrt(d)) / (2 * a))

Triangle Classification

A triangle is valid only when all three inequalities hold: a + b > c, a + c > b and b + c > a. Let c be the longest side, then compare a² + b² against c²:

- a**2 + b**2 == c**2 → right triangle
- a**2 + b**2 > c**2 → acute triangle
- a**2 + b**2 < c**2 → obtuse triangle

Full Operator Precedence (highest to lowest)

Level                                               Operators

1                                                   ** exponentiation

2                                                   *, /, %, // multiply, divide, modulo, floor division

3                                                   +, - addition and subtraction

4                                                   <, <=, >, >=, !=, == relational operators

5                                                   not

6                                                   and

7                                                   or
