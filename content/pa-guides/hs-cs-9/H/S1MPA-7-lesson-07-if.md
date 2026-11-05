# S1MPA-7 Lesson 07: if

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

Boolean Values

There are only two Boolean values: True and False.

- '3' + '4' == '34' → True (the strings are joined first, then compared)
- 1 != '1' → True (different types are never equal)
- 8 > 8 → False

Relational Operators

Operator         Description               Example                Evaluates to

<                less than                 2**3 < 9               True

>                greater than              0>1                    False

<=               less or equal             4 <= 5                 True

>=               greater or equal          9**0.5 >= 3            True

==               equal to                  1 == 2                 False

!=               not equal to              'B' != 'B'             False

= assigns a value, while == compares two values. Mixing them up is the single most common error in this lesson.

if, if–else, if–elif–else

- if runs its block only when its condition is True.
- else takes no condition and runs when every test above it failed; there can be only one.
- elif is only checked when the tests above it were False, and you may use as many as you need.
- Exactly one branch runs, the first one whose condition is True, working from top to bottom. Simple if:

ph = float(input('Enter the pH level: '))

if ph < 7.0:

print(str(ph), "is acidic.")

if ph > 7.0:

print(str(ph), "is alkaline.")

if … else:

n = int(input())

line = "Today, I ate " + str(n) + " apple"

if n > 1:

line = line + "s."

else:

line = line + "."

print(line)

if … elif … else:

age = int(input("What is your age? "))

if age < 11:

print("You are kid.")

elif age < 20:

print("You are teenager.")

else:

print("You are adult.")

A chain of separate if statements tests every condition; an if / elif / else chain stops at the first match.

Maximum, Minimum and Average

nums = [int(x) for x in input().split()]

mx = nums[0]

mn = nums[0]

total = 0

for x in nums:

if x > mx:

mx = x

if x < mn:

mn = x

total += x

print(mx, mn, total / len(nums))

- Built-in shortcuts: max(lst), min(lst) and sum(lst) / len(lst).

BMI

bmi = weight / (height ** 2)

- Normal when 18.5 <= bmi <= 24.9; otherwise print a warning. Python allows this chained comparison.

List Comprehension*

Syntax: new_list = [expression for item in iterable if condition]. For example [i for i in range(5) if i % 2 == 0] gives [0, 2, 4], which is exactly equivalent to:

a = []

for i in range(5):

if i % 2 == 0:

a.append(i)
