# S1M-5 8.1 Data Types and Expressions

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science AP review guide (PA). Writers: Summer Liang 10-4, Forrest Yan 10-8. Editor: Caitlin Zhou 10-2, Rick Yu 10-12. Range: ALL. Student-made reference material: where it differs from class, follow class.

A data type describes the **kind** of value. Values that look similar may have different types:

1 is an integer, 1.0 is a float, and "1" is a string.

| **Python type** | **Meaning** | **Examples** |
|---|---|---|
| int | Whole numbers | 0, -2, 29 |
| float | Floating-point numbers | 1.0, 9.902, 1e10, 44e-2 |
| str | Text enclosed in quotation marks | "the", "1", "num of line" |
| bool | Boolean truth values | True, False |

An expression combines values, variables and operators and evaluates to a result. For example, 2 + 3 * 4 evaluates to 14, while age >= 18 evaluates to a Boolean value.

String concatenation uses + to join strings: "a" + "b" gives "ab". String repetition uses * with an integer: "ab" * 3 gives "ababab". Convert numbers with str() before concatenating them with strings.

**Variables and assignment**

A variable name refers to a value that can be used later. Python creates a variable when a value is first assigned to its name. Assignment evaluates the right-hand expression first and then binds the left-hand name to the result. = assigns a value; == compares values.

spam = 42
x = y = z = 50 # one value assigned to three names
a, b, c = 5, 10, 15 # corresponding values assigned
x = x + 2 # use the old x, then update x
print((a==b, y==z)) # (False, True)

For the names used in this course, use letters, digits and underscores. Begin with a letter or underscore, never a digit. Spaces and punctuation such as -, !, @ and . are not allowed. Names are case sensitive: age, Age and AGE are different. Reserved keywords such as if, for, True and False cannot be variable names. Examples: cake_count and _total are valid; 8piece and number of cakes are invalid.

## 8.2 Input Output and Common Functions

print() displays values. input() reads a line and returns a string, even when the user types digits. Use int(), float() and str() to convert values when needed. Converting unsuitable text, such as int("apple"), raises an error.

age = int(input("Enter your age: "))
ph = float(input("Enter the pH level: "))
print("Age:", age)
print("Next year: " + str(age + 1))

String methods are called on a string, for example text.upper(). They return a result without changing the original string. lower() converts letters to lowercase; upper() converts letters to uppercase.

| **Method** | **Meaning** | **Example result** |
|---|---|---|
| s.isalnum() | Nonempty string containing only letters and/or digits | "A12" -> True |
| s.isdigit() | Nonempty string containing only digit characters | "123" -> True; "-3" -> False |
| s.isalpha() | Nonempty string containing only letters | "Hello" -> True; "Hi2" -> False |

+ Spaces make these tests False.

words = input().split() # e.g. "12 7 3" -> ["12", "7", "3"]
nums = []
for word in words:
 nums.append(int(word)) # [12, 7, 3]

## 8.3 Operators and Precedence

**Arithmetic and relational operators**

| **Symbol** | **Meaning** | **Example** | **Result** |
|---|---|---|---|
| ** | Exponentiation | 2 ** 3 | 8 |
| % | Remainder | 22 % 8 | 6 |
| // | Floor division | 22 // 8 | 2 |
| / | Division | 22 / 8 | 2.75 |
| * | Multiplication | 3 * 5 | 15 |
|  | Subtraction | 5 - 2 | 3 |
| + | Addition | 5 + 2 | 7 |

Floor division rounds the quotient down: -7 // 2 is -4. / produces a float for integer operands: 6 / 2 is 3.0. ** means power; ^ is not the power operator in Python (note that int() is another method to floor a float value; e.g. int(8.7) == 8 returns True).

| **Symbol** | **Meaning** | **Example** | **Result** |
|---|---|---|---|
| < | Less than | 2 ** 3 < 9 | True |
| > | Greater than | 0 > 1 | False |
| <= | Less than or equal to | 4 <= 5 | True |
| >= | Greater than or equal to | 9 ** 0.5 >= 3 | True |
| == | Equal to | 1 == 2 | False |
| != | Not equal to | "B" != "B" | False |

**Boolean operators and truth table**

For Boolean operands, and returns True only when both operands are True; or returns True when at least one operand is True; not reverses a Boolean value.

| **A** | **B** | **A and B** | **A or B** | **not A** |
|---|---|---|---|---|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| False | False | False | False | True |

Common precedence from highest to lowest: ** > *,/,//,% > -,+ > in > not > and > or. Parentheses make the intended order explicit.

2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
# True and not False and True -> True
not 2 > 1 and 3 < 4 or 5 > 5 and 2 > 1 and 3 >= 3
# (not True and True) or (False and True and True) -> False

Augmented assignment combines an operation with assignment. For numeric values, x += 2 corresponds to x = x + 2. There’s also -=, *=, /=, //= and %=, corresponding to subtraction, multiplication, division, floor division and remainder followed by assignment.

## 8.4 Selection Statements

**The if statement**

An if block runs only when its condition is True. Separate if statements are checked independently, so several blocks may run, or none may run.

ph = float(input("Enter the pH level: "))
if ph < 7.0:
 print(ph, "is acidic.")
if ph > 7.0:
 print(ph, "is alkaline.")
# At pH 7.0, neither block prints a message.

**The if else statement**

if and else provide two alternatives. Exactly one block runs when execution reaches this structure.

n = int(input())
line = "Today, I ate " + str(n) + " apple"
if n > 1:
 line = line + "s."
else:
 line = line + "."
print(line)

**The if elif else statement**

Conditions are checked from top to bottom. Only the first True branch runs. The else block handles all remaining cases. Order matters: a broad condition placed first can prevent later branches from running.

age = int(input("What is your age? "))
if age < 11:
 print("You are a kid.")
elif age < 20:
 print("You are a teenager.")
else:
 print("You are an adult.")

## 8.5 Lists and List Operations

A list is an ordered, mutable collection. Use square brackets with comma-separated elements, or use list() to build a list from an iterable.

Python list indices start at 0. len(lst) counts elements; for a nonempty list, the last positive index is len(lst) - 1, and lst[-1] accesses the last element. An index outside the available positions raises IndexError.

| **Operation** | **Effect** | **Example** |
|---|---|---|
| lst[i] | Read the element at index i | [10, 20, 30][1] gives 20 |
| lst[i] = value | Replace an existing element | nums[1] = 10 |
| lst.append(value) | Add one element at the end | nums.append(12) |
| lst.insert(i, value) | Insert before index i; later items shift right | nums.insert(2, 12) |
| del lst[i] | Delete by index; later items shift left | del nums[2] |
| lst.remove(value) | Delete the first matching value | [1, 3, 3] becomes [1, 3] |
| lst.index(value) | Return the index of the first match | [1, 3, 5, 7, 9].index(7) gives 3 |

remove() and index() raise ValueError if the value is absent. Methods such as append(), insert() and remove() change the list in place and return None. Write nums.append(12), rather than nums = nums.append(12).

nums = [0, 1, 2, 3, 4, 5]
nums[1] = 10 # [0, 10, 2, 3, 4, 5]
nums.append(12) # [0, 10, 2, 3, 4, 5, 12]
nums.insert(2, 99) # [0, 10, 99, 2, 3, 4, 5, 12]
del nums[2] # [0, 10, 2, 3, 4, 5, 12]
nums = [1, 5, 4, 2, 3, 0, 3]
nums.remove(3) # [1, 5, 4, 2, 0, 3]

## 8.6 For Loops and While Loops

**For loops and range**

A for loop visits each item of an iterable, such as a list, string or range. It is convenient for traversing a collection or repeating a known number of times.

range(stop) starts at 0. range(start, stop) uses a step of 1. range(start, stop, step) uses the given step. The start is included and the stop is excluded. A negative step counts down; a step of zero is invalid.

list(range(5)) # [0, 1, 2, 3, 4]
list(range(2, 8, 2)) # [2, 4, 6]
list(range(5, 0, -1)) # [5, 4, 3, 2, 1]
nList = []
for i in range(2, 120, 3):
 nList.append(i)
# 2, 5, ..., 119: (119 - 2) // 3 + 1 = 40 elements

**While loops**

A while loop checks its condition before every iteration and repeats while the condition remains True. It may run zero times. It is useful when the stopping condition is known but the required number of iterations is not. Update the variables controlling the condition to avoid an infinite loop.

i, total = 1, 0
n = int(input("Enter n: "))
while i <= n:
 total += i
 i += 1
print(total) # n = 5 gives 15

## 8.7 String Operations

**Indexing length and membership**

Strings are ordered sequences of characters. Indexing starts at 0 and negative indices count from the end. With text = "Hello World!", text[0] is "H", text[4] is "o", text[-1] is "!", and len(text) is 12. Strings are immutable, so text[0] = "h" is invalid.

in checks membership and not in checks absence. For strings, membership tests whether a substring occurs: "+" in "1+2" is True and "cat" not in "dog" is True. For lists, membership compares the requested value with the elements: 3 in [1, 3, 5] is True.

**Slicing**

s[start:stop] returns a new string from start up to, but excluding, stop. Omitting start uses the beginning; omitting stop uses the end. For s = "python":

s = "python"
s[:-1] # "pytho"
s[-1:] # "n"
s[1:] # "ython"
s[:1] # "p"
s[1:4] # "yth"

In s[start:stop:step], the third value, step, controls how far the index moves each time.

- A positive step moves forward.
- A negative step moves backward.
- The default step is 1. A step of 0 raises ValueError.

s = "python"
s[::1] # "python" — every character
s[::2] # "pto" — every second character
s[1::2] # "yhn" — every second character, starting at index 1
s[::-1] # "nohtyp" — reverse the string
s[::-2] # "nhy" — every second character, moving backward

**strip and case conversion**

s.strip() removes whitespace only from the beginning and end, including spaces, tabs and newlines. s.strip(chars) removes any of the supplied characters repeatedly from both ends. The argument is a set of removable characters, rather than one exact prefix or suffix. Interior characters remain.

" Hello World! ".strip() # "Hello World!"
"abbaHelloabba".strip("ab") # "Hello"
"Hello".lower() # "hello"
"Hello".upper() # "HELLO"
"hello".title() # "Hello"

**split and join**

s.split() separates text on runs of whitespace and ignores leading/trailing whitespace. s.split(delimiter) separates on the exact delimiter string and returns a list of strings. With an explicit delimiter, consecutive delimiters can produce empty strings.

" red blue ".split() # ["red", "blue"]
"MyABnameABisABJohn".split("AB") # ["My", "name", "is", "John"]
"a,,b".split(",") # ["a", "", "b"]
url = "http://cn.shsid.org/img/admission_btn.png"
url.split("/")[-1].split(".")[0] # "admission_btn"

delimiter.join(iterable) joins string elements with the delimiter between them and returns one string. The elements must be strings. Passing a string as the iterable joins its individual characters.

" ".join(["My", "name", "is", "John"]) # "My name is John"
".".join(["192", "168", "0", "1"]) # "192.168.0.1"
"-".join("hello") # "h-e-l-l-o"

## 8.8 Nested Loops

A nested loop places one loop inside another. For each outer-loop iteration, the inner loop runs through its iterations. If the outer loop runs n times and the inner loop runs m times each time, the inner body executes n × m times. When the inner range depends on the outer variable, count the iterations for each row separately.

## 8.9 Functions Parameters and Return Values

Built-in functions, such as range() and print(), are already available in Python. User-defined functions package code for a specific task. Function abstraction lets the caller use a function by knowing its purpose, inputs and result without needing its internal implementation. Reuse also avoids repeated code.

**Definition and call**

A definition begins with def, a valid function name and parentheses containing any parameters. End the header with a colon and indent the body consistently. Function names follow the same naming rules as variables. A triple-quoted string at the start of the body is a docstring describing the function.

def convert_to_celsius(fahrenheit):
 """Convert a Fahrenheit temperature to Celsius."""
 return (fahrenheit - 32) * 5 / 9

result = convert_to_celsius(80)
print(result) # approximately 26.6667

Parameters are the names in a function definition, such as fahrenheit. Arguments are the actual values supplied at a call, such as 80. Defining a function does not execute its body. At the call, arguments bind to parameters, the body runs, and execution continues at the caller when the function returns.

**Return behavior**

return expression sends a value back to the caller and immediately ends that function call. A function can contain several return statements in different branches, but only one is reached during a particular call. Reaching the end without a return statement, or using a bare return, returns None.

def div(num1, num2):
 if num2 == 0:
 return "Divisor cannot be zero!"
 else:
 return num1 / num2

print(div(6, 2)) # 3.0
print(div(1, 0)) # Divisor cannot be zero!

print() displays output; return supplies a result that another expression can use.

## 8.10 Scope Mutability and Parameter Passing

Python passes object references to functions by assignment. The parameter initially refers to the same object as the argument. Rebinding the parameter changes its local name; mutating a shared mutable object can affect the caller. The PPT labels these examples as passing by value and passing by reference; use the distinction between rebinding and mutation to predict Python behavior.

In python, all variables are references to an object. (You won’t be tested on this but useful to know) However, different types of variables have different behaviors.

**Global variables & Local variables**

Local variables are names created inside a function and accessible within that function. A local name can refer to a mutable object shared with the caller.

Global variables are created outside a function. They are accessible globally, whether from inside a function or not.

Assigning to a name inside a function normally makes it local, even if the same name exists globally. Declare the name global when the function needs to reassign the module-level variable.

x = 10 # globaldef f(): x = 20 # local — shadows the global xf()print(x) # 10 (the global x is unchanged)x = 10 # globaldef f(): x = 20 # local — shadows the global xf()print(x) # 10 (the global x is unchanged)To assign to the module-level name from inside a function, write **global** **x** before the assignment.

x = 10def f(): global x x = 20f()print(x) # 20 (x is changed)x = 10def f(): global x x = 20f()print(x) # 20 (x is changed)

**Immutable types**

int, str, float, bool and tuple are immutable types. None is the single value of the immutable NoneType.

These types are unchangeable. Any modifications to these types will create a new object and bind the variable name to this new object

a = 3

a = 4

Consider this section of code. Python creates an object that has a value of 3 and type of int. Then, python binds the variable name “a” to this object. When “a = 4” is executed, Python creates a new object with type int and value 4. Then, Python binds the variable name “a” to this object.

Assigning a new value to a parameter referring to an immutable object rebinds the local parameter. **The caller’s original binding is unchanged.**

def f(x):x+=1 #local xx = 10 # global xf(x)print(x)def f(x):x+=1 #local xx = 10 # global xf(x)print(x)

**Mutable Types**

List, dictionary, set are mutable types.

Mutable objects can be changed in place by operations such as append(). if you did not want

When a function mutates a mutable object passed as an argument, the caller can observe the change to that shared object.

def f(lst):
lst.append(4)x = [1, 2, 3] # global x
f(x)
print(x) # [1, 2, 3, 4]def f(lst):
lst.append(4)x = [1, 2, 3] # global x
f(x)
print(x) # [1, 2, 3, 4]

**9 Personal Computer Basics**
