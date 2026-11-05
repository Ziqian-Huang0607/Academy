# S1MPA-6 Lesson 06: range() and Random Numbers

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

The range() Function

range() generates a sequence of integers. Syntax: range(start, stop, step). The stop value is never included — the sequence starts at start and stops before reaching stop.

Code                                                    Values produced

range(5)                                                0, 1, 2, 3, 4

range(1, 5)                                             1, 2, 3, 4

range(2, 6, 2)                                          2, 4

range(10, 4, -3)                                        10, 7

for variable in range(start, stop, step):

statements

A negative step counts down, and the sequence still stops before passing stop.

Looping by Index

Use range(len(...)) when you need the position as well as the value:

for i in range(0, len(numList)):

print(numList[i] ** 2)

Random Numbers

Put import random at the top of the program. random.randint(a, b) returns an integer in [a, b] — both ends included:

import random

for i in range(10):

print(random.randint(1, 6))

- Pick one element at random: lst[random.randint(0, len(lst)-1)].
- Delete one element at random: del lst[random.randint(0, len(lst)-1)] — re-check len(lst) every time, because the list shrinks.
