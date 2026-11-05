# S1MPA-10 Lesson 10: String manipulation

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

A string is text stored as a sequence of characters. Once text comes from input, it often needs cleaning or inspection before the program can use it. The methods here return a new result, so the original string stays the same unless you assign the result to a variable.

Removing characters at the ends

strip() removes whitespace such as spaces, tabs, and newlines from both ends of a string. lstrip() works only at the left end, and rstrip() only at the right. This is useful when a user types extra spaces around an answer.

"   hello   ".strip()          →   "hello"

You can also give strip() a set of characters to remove. For example, strip("-*") removes any - or * characters it finds at either end. It stops as soon as it reaches a different character. It does not remove the same characters from the middle, and the argument is not treated as one exact piece of text.

"--*Hi*--".strip("-*")             →   "Hi"

Finding and taking part of a string

Each character has an index, or position. The first position is 0, while -1 refers to the last character. len() gives the number of characters, including spaces and punctuation. Asking for a position beyond the string raises an error.

"python"[0] → "p"

"python"[-1] → "n"

"python"[10] → Error

A slice takes a range of characters. In s[start:stop], start is included and stop is left out. If either number is omitted, the slice begins at the start or continues to the end. Note that a slice can safely extend past the end of the string.

"python"[1:4]       →    "yth"

"python"[:-1]       →    "pytho"

The operators in and not in answer a yes-or-no question about whether text appears in a string. Together, these tools can clean extra symbols around a sentence or keep only the visible ends of a phone number.

"+" in "1+2"    →       True
