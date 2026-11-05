# S1M-3 Chapter 10 String Manipulation

> From the Grade 9 Resource Department's Semester 1 Midterm Computer Science H review guide (PA). Writers: Sharon 9-3. Editor: Cathy 9-3. Student-made reference material: where it differs from class, follow class.

- Strings are immutable sequences of characters.
- Created with single or double quotes: "hello", 'world'.
- Indexing: s[0], s[-1].
- Slicing: s[start:end] (end is exclusive).
- Examples:
- s[1:] → from index 1 to end,
- s[:-1] → all but last character.

**Membership and Length**

- "a" in "apple" → True.
- len(s) returns number of characters.

**Cleaning Strings**

- strip(): removes leading/trailing whitespace or specified chars.
- lstrip(), rstrip(): remove from left or right only.

s = "----***Hello***----"

print(s.strip("-*")) # "Hello"

**Case Conversion**

- s.upper(): all uppercase,
- s.lower(): all lowercase,
- s.title(): first letter of each word capitalized.

**String Testing Methods**

- s.isupper(), s.islower(), s.istitle(),
- s.isalpha() (letters only),
- s.isdigit() (digits only),
- s.isalnum() (letters + digits).

**Splitting and Joining**

- s.split(delimiter): breaks string into list.
- Default delimiter: any whitespace.
- Example: "a,b,c".split(",") → ["a","b","c"].
- delimiter.join(list): combines list into string.
- Example: "-".join(["h","e","l","l","o"]) → "h-e-l-l-o".

**Modulo and Integer Division**

- x % y: remainder after division (e.g., 22 % 5 → 2).
- x // y: floor division (e.g., 7 // 2 → 3).
- Useful for digit extraction:

(1234 // 100) % 10 # extracts hundreds digit: 2

**List Comprehension**

- Concise way to create lists:

evens = [i for i in range(5) if i % 2 == 0]

# equivalent to:

evens = []

for i in range(5):

if i % 2 == 0:

evens.append(i)

**Advanced Section Examples**

- **(Expression Parsing)**
Input a string like "8--2 5+-3". Output the fully normalized expression and its evaluated result: "8+2+5-3=12". Reconstruct the expression manually—do not use eval().
- **(List Processing)**
Read a line of integers. Remove the second largest distinct value (not the second in order). Output the remaining numbers in original order.
Sample Input: 10 3 7 3 9 5
Sample Output: 10 3 3 9 5
- **(Triangle Classification)**
Given three side lengths as floats, classify the triangle as:
- "invalid", or
- "[acute/right/obtuse] [scalene/isosceles/equilateral]"
Use tolerance 1e-9 for comparisons. Sort sides manually without built-in sort.
- **(Quadratic Solver)**
Solve ax² + bx + c = 0. Handle all cases:
- a = 0 → linear (including b = 0 → no/inf solutions)
- a ≠ 0 → compute discriminant D = b² − 4ac
Output roots rounded to two decimals, sorted if two exist. Do not use eval().
- **(Accumulation Sequence)**
Compute the sum of the first 15 terms of:
1¹ − 2² + 3³ − 4⁴ + … + (−1)ⁿ⁺¹·nⁿ
Use iterative multiplication to compute powers—do not use ** for large exponents.
- **(String Sanitization)**
Input: "### HeLLo__WoRlD123!!!@@@"
Output: "Hello World123"
Rules:
- Replace underscores with single spaces
- Keep only letters, digits, and single spaces
- Collapse multiple spaces
- Title-case each word
- Do not use strip(), replace(), or regex
- **(Digit Analysis)**
Given integers L and R (1 ≤ L ≤ R ≤ 10000), count how many numbers in [L, R] contain at least one digit '3' and one digit '7'.
Sample Input: 1 100 → Output: 2 (37, 73)
Use % and // for digit extraction—do not convert every number to a string.
- **(Pig Latin with Blends)**
Translate a word into Pig Latin:
- Vowels (a,e,i,o,u): add "yay"
- Valid blends: "sch", "scr", "shr", "sph", "spl", "spr", "squ", "str", "thr", plus all 2-letter blends from class
- Otherwise: move first consonant + "ay"
Sample: "school" → "oolschay", "string" → "ingstray"

Hints

- Expression Parsing
- Watch for consecutive signs like --, +-, or -+.
- Normalize operators before calculating.
- Use a running total to build and evaluate the expression.

2. List Processing

- Find distinct values to locate the second largest.
- Remove all occurrences of that value.
- Keep the original order of remaining elements.

3. Triangle Classification

- Check for validity using the triangle inequality (a + b > c).
- Determine type using the Pythagorean theorem:
- Acute (a² + b² > c²), Right (=), Obtuse (<).
- Also classify by sides: scalene, isosceles, or equilateral.

4. Quadratic Solver

- Handle special cases (a = 0 → linear).
- Compute discriminant D = b² - 4ac to determine number of roots.
- Round roots to two decimals and output in ascending order.

5. Accumulation Sequence

- Alternate signs (+, -) for each term.
- Compute powers manually using repeated multiplication.
- Sum the first 15 terms of the sequence.

6. String Sanitization

- Replace _ with spaces and remove special symbols.
- Keep only letters, digits, and single spaces.
- Capitalize each word (title case).

7. Digit Analysis

- Use % and // to check each digit.
- Count numbers containing both digits 3 and 7.
- Avoid string conversion.

8. Pig Latin with Blends

- If a word starts with a vowel, add “yay.”
- If it starts with a blend, move the blend to the end + “ay.”
- Otherwise, move the first consonant + “ay.”
- Remember common blends like sch, str, scr, thr, spl, etc.
