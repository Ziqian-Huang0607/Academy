# S1MPA-4 Lesson 04: Lists

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

1. List Basics and Indexing

A list is an ordered, changeable collection written with square brackets. Separate the elements with commas. An index identifies an element’s position and starts at 0.

animals = ["cat", "bat", "rat", "elephant"]

print(animals[0])     # cat

print(animals[2])     # rat

print(len(animals)) # 4

print(animals[len(animals) - 1]) # elephant

2. Change, Add, and Remove Elements

Operation                     Syntax                            Effect

Replace by index              lst[1] = 10                       Changes the second element. Append at end                 lst.append(12)                    Adds one element to the end. Insert at position            lst.insert(2, 12)                 Inserts at index 2; shifts later elements. Delete by position            del lst[2]                        Removes the element at index 2. Remove by value               lst.remove(3)                     Removes the FIRST occurrence of 3. Find by value                 lst.index(7)                      Returns the FIRST matching index.

3. Trace a List

nums = [1, 3, 3, 5]

nums.remove(3)        # [1, 3, 5]

nums.insert(1, 9) # [1, 9, 3, 5]

nums[2] = 7        # [1, 9, 7, 5]

del nums[0]        # [9, 7, 5]

print(nums.index(7)) # 1

Key distinction: del uses a position, while remove() uses a value. Also, remove() and index() act on the first matching value.

4. Other List Methods Mentioned in the Exploration Task

Method               Quick meaning                           Method                 Quick meaning pop()                Remove and return an item.              sort()                 Sort the existing list. copy()               Make a shallow copy.                    sorted()               Return a new sorted list. reverse()            Reverse list in place.                  clear()                Remove all items. count(x)             Count occurrences of x.                 extend(iterable)       Add items from an iterable.

5. List References and Copies

A list variable refers to a list object in memory. When b = a, both names refer to the same list; changing an element using either name changes the list seen by both. In contrast, b = a.copy() creates a separate (shallow) list, so changes to its top-level elements do not affect a.

a = [0, 1, 2]

b = a                 # Same list, two names

a[0] = 10

print(b)              # [10, 1, 2]

b[1] = 20

print(a)              # [10, 20, 2]

b = a.copy()          # New list object

a[0] = 100

print(b)              # [10, 20, 2]

When removing elements during iteration, loop over a copy so that changing the original list does not skip items:

nums = [1, 2, 3, 4]

for x in nums.copy():

if x % 2 == 0:

nums.remove(x)

print(nums)            # [1, 3]

Remember: copy() is shallow, so nested mutable objects inside the lists may still be shared.
