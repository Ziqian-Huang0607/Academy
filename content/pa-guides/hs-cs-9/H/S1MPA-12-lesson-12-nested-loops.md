# S1MPA-12 Lesson 12: Nested loops

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

A nested loop is a loop inside another loop. For a printed pattern, the outer loop usually moves from one row to the next. The inner loop completes the characters in the current row before the outer loop moves on. This is why the inner loop must start over for every row.

Building rows

A square with n rows has n characters in every row. A growing triangle is different: row 1 has one character, row 2 has two, and so on. A shrinking triangle starts at n characters and loses one each row. Writing down the width of each row first makes the loop bounds easier to choose.

With n = 4, a growing triangle has rows 1, 22, 333, 4444.

A centered pyramid needs spaces before the digits. On row r of n, it has n - r leading spaces and 2r - 1 copies of the row number. The widths for n = 4 are therefore 1, 3, 5, and 7. Normally print() moves to a new line. Adding end="" inside the parenthesis after the expression to be printed, i.e. print(“Hello world!”, end="") keeps the next character on the same line, and a plain print() after the inner loop finishes the row. The escape sequence \n can also put a newline inside a string.

Patterns based on positions

The X pattern depends on where a character lies, not just how wide a row is. With rows and columns numbered from 0, one o appears where the column matches the row; the other lies at its mirror position, n - 1 - row. Every other position is +. The exercise asks for an odd width, so an even input must be requested again.

The final exercise checks perfect numbers. A number is perfect when its smaller positive divisors add up to the number itself: 6 = 1 + 2 + 3. Checking each candidate through 1000 gives 6, 28, and 496.

Choosing a tool from the task

A task may need more than one route through this chart. For example, changing every word in a sentence uses text methods to separate and join the words, plus a loop to visit them one at a time.

Example programs

Here are some complete examples of the smaller ideas above. The comments point out steps that are easy to overlook, such as changing a loop variable, handling zero, or choosing which part of a string to keep.

Counting folds and adding values

The paper starts at 0.05 mm. Everest’s height is 8,848.13 m, which is 8,848,130 mm. Using the same unit on both sides of the comparison lets the loop stop as soon as the paper is thick enough.

thickness = 0.05

target = 8848130 # millimeters

folds = 0

while thickness < target:

thickness *= 2 # one fold doubles the thickness

folds += 1      # count that fold

print(folds, thickness)

The result is 28 folds and 13,421,772.8 mm. A running sum uses the same starting-test-update structure. Here, int() turns the input text into a number, while total stores the sum so far.

n = int(input())

i = 1

total = 0

while i <= n:

total += i # include the current number

i += 1       # move to the next number

print(total)

The fraction sequence begins at 2/1, then continues 3/2, 5/3, and so on. The next numerator is the sum of the current pair, while the next denominator is the old numerator. The assignment to a and b happens together, so both new values use the old pair.

a, b = 2, 1

total = 0

for _ in range(20): # repeat for 20 terms

total += a / b

a, b = a + b, a # build the next fraction

print(f"{total:.3f}")

The underscore is just a loop variable whose value is not needed. The final line shows three digits after the decimal point, giving 32.660.

Converting between bases

To read a number written in base 2 through 9, process its digits from left to right. Each new digit shifts the previous value one place by multiplying it by the base, then adds the digit. The code assumes the digits entered belong to the chosen base.

base = int(input("Base (2-9): "))

digits = input("Number: ")

value = 0

for digit in digits:

value = value * base + int(digit)      # shift, then add

print(value)

For example, binary 1010 produces decimal 10. Going the other direction uses remainders. Each remainder is the next rightmost digit, so str() turns it into text and places it at the front of the answer. Integer division with //= then removes that place. The last line also handles an input of zero.

base = int(input("Base (2-9): "))

number = int(input("Decimal number: "))

answer = ""

while number > 0:

answer = str(number % base) + answer # add a digit at the front

number //= base # remove the place just converted

print(answer or "0")

Cleaning and changing text

In the first example, strip() removes the surrounding spaces, then strip("-*") removes the dashes and asterisks. Neither call changes text in the middle. The phone number stays a string so its first and last three digits can be sliced. Two asterisks stand in for the five hidden digits in the lesson’s display format.

text = " ----***Hi!***---- "

print(text.strip().strip("-*")) # Hi!

phone = "13112345306"

print(phone[:3] + "**" + phone[-3:]) # 131**306

For a sentence with different kinds of symbols at its ends, the same idea can be extended by locating its first and last letter, then slicing between them. That leaves punctuation inside the sentence in place.

This Pig Latin program uses the lesson’s list of two-letter blends. It first makes the sentence lowercase and splits it into words. enumerate() supplies both the word and its position in the list, allowing the changed word to replace the original. The example assumes a nonempty sentence of alphabetic words.

blends = {"sh", "gl", "ch", "ph", "tr", "br", "fr",

"bl", "gr", "st", "sl", "cl", "pl", "fl"}

words = input().lower().split()

for i, word in enumerate(words):

if word[0] in "aeiou":

words[i] = word + "yay"

elif word[:2] in blends: # check two letters before one

words[i] = word[2:] + word[:2] + "ay"

else:

words[i] = word[1:] + word[0] + "ay"

print(" ".join(words)) # put spaces back between words

Reading a student record

A line such as John 9(3) 178 has three fields: name, grade with class in parentheses, and height. split() separates the fields. Splitting 9(3) at ( leaves 9 and 3), so the final character of the second piece must be removed to get the class number.

parts = input().split()

valid = len(parts) == 3

if valid:

name, group, height = parts

pieces = group.split("(") # grade and class with ")"

valid = (len(pieces) == 2 and group.count(")") == 1

and group.endswith(")") and name.isalpha()

and height.isdigit() and pieces[0].isdigit()

and pieces[1][:-1].isdigit())

if valid:

print(f"stu1 name: {name}, grade: {pieces[0]}, "

f"class: {pieces[1][:-1]}, height: {height}")

else:

print("Error")

The tests require a letter-only name, a digit-only height, and one valid pair of parentheses. If a test fails, the output is Error; John 9(3) 178 produces stu1 name: John, grade: 9, class: 3, height: 178.

Printing a growing triangle

The outer loop chooses rows 1 through n. Since range() stops before its second number, the code uses n + 1 to include row n. The inner loop prints the row number once per position; end="" keeps the digits together, and the final print() moves to the next row.

n = int(input())

for row in range(1, n + 1):

for col in range(row):

print(row, end="") # stay on this row

print() # start the next row
