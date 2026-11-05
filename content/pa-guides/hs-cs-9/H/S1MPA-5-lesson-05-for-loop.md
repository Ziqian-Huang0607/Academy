# S1MPA-5 Lesson 05: For Loop

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

The Split function

- line = input() reads the whole line; line is always of type str.

- split() splits a string into a list. With no argument the delimiter is any whitespace — space, tab or newline, e.g. words = input().split().
- With one argument, str.split(x) removes every x and returns a list of the leftovers: "a,b,c".split(",") gives ['a', 'b', 'c'].
- Every element produced by split() is still a string — convert it with int() or float() before doing arithmetic.

The for Loop

A for loop repeats a block of statements once for each element of a sequence (a list, a string, range(), ...):

for variable in someList:

statements

The loop variable is re-assigned to one element per round, and the body must be indented. Example — turning one line of text into a list of integers:

strList = input().split()

numList = []

for ele in strList:

numList.append(int(ele))

print(numList)

Accumulators: Sum and Product

sum(someList) returns the total of the list directly. Doing it with a loop takes an accumulator that starts at 0:

total = 0

for x in numList:

total += x

The product of every element (assuming there is no zero in the list) is the same idea, but the accumulator starts at 1:

prod = 1

for x in numList:

prod *= x

Common Mistakes

- Don’t start a product accumulator at 0 or the result would always be 0 (you should start a sum accumulator at 0）

- Forgetting int() on the elements of split(), which makes + join strings instead of adding numbers.
