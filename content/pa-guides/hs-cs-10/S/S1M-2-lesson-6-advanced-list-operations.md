# S1M-2 Lesson 6: Advanced List Operations

> From the Grade 10 Resource Department's Semester 1 Midterm Computer Science S review guide (PA). Writers: Colin 10(9). Editor: Colin 10(9). Range: Lesson 4 to Lesson 7. Student-made reference material: where it differs from class, follow class.

- max(iterable) — Finds the highest value element in the list.
- min(iterable) — Finds the lowest value element in the list.
- map(function, iterable) — Applies a function to every item, returning a map object.
- iterable[::-1] — Creates a reversed copy using slicing.

**Lists at Work: Five Moves, Traps & Patterns (Lesson 7)**

**1. The Five Core Moves**

- **Read:** Read input lines into a list using list(map(int, input().split())).
- **Slice:** Extract portions or reverse using slicing like n[:3], n[-2:], and n[::-1].
- **Count:** Use built-in functions/methods like len, sum, max, min, count, index, and in.
- **Sort:** Use sorted(s) for a new sorted list or a.sort() for in-place sorting.
- **Split & Join:** Convert strings to word lists via .split() and combine words back using "".join(w). join() requires strings; passing numbers directly results in a TypeError.

**2. Four Common Python Traps**

- **Trap 1 (Copying):** b = a creates a reference rather than a copy. Use b = a.copy() to make an independent duplicate.
- **Trap 2 (Sorting):** sorted(a) returns a new list without modifying the original a. Use a.sort() to sort the list in-place.
- **Trap 3 (Insertion):** insert(-1, x) inserts an item second-to-last before the final element. Use append() to add items to the very end.
- **Trap 4 (Counting vs. Indexing):** index() returns only the position of the first match. Use count() to find total occurrences.
