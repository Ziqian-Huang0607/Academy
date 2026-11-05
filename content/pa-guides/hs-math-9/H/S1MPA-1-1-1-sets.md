# S1MPA-1 1.1 Sets

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Maths H review guide (PA). Writers: Lucas 9(9), Julian 9(2). Editor: Feliz 9(3). Range: 1.1-2.6. Student-made reference material: where it differs from class, follow class.

### Sets and elements

- A **set** is a collection of distinct numbers or objects.
- Each object is called an **element** or **member** of the set.

### Properties of sets

1. An element is either in the set or not in the set.
2. The elements of a set are distinct: the same element can appear only once.
3. There is no fixed order when we list the elements of a set.
4. Two sets are equal if they contain exactly the same elements.

### Important number sets

- Natural numbers: $\mathbb{N}$
- Integers: $\mathbb{Z}$
- Positive integers: $\mathbb{Z}^+$ or $\mathbb{N}^*$
- Rational numbers: $\mathbb{Q}$
- Real numbers: $\mathbb{R}$

### Classification of sets

- (a) Set $A$ is a **finite set** if $n(A)$ has a particular defined value. If $A$ has an endless number of elements, it is an **infinite set**.
- (b) The **empty set** $\emptyset$ is the set that contains no elements.

### Relationships between sets

**Subsets:** given sets $A$ and $B$, if for any $x \in A \implies x \in B$, then $A$ is a subset of $B$: $A \subseteq B$. ($x \notin A$ denotes that the element does not belong to $A$.)

Note:

1. Any set is a subset of itself.
2. $A = B$ if and only if $A \subseteq B$ and $B \subseteq A$.
3. $\emptyset$ is a subset of every set.

**Proper subsets:** given sets $A$ and $B$, if $A \subseteq B$ and there exists $x \in B$ such that $x \notin A$ (i.e. $A \ne B$), then $A$ is a proper subset of $B$: $A \subset B$.

### Operations on sets

**Intersection:** the set of elements in **both A and B**, written $A \cap B = \{x \mid x \in A \text{ and } x \in B\}$. $A$ and $B$ are **mutually exclusive** if $A \cap B = \emptyset$.

Properties:

1. $A \cap B = B \cap A$
2. $A \cap A = A$
3. $A \cap \emptyset = \emptyset$
4. $A \cap B \subseteq A$, $A \cap B \subseteq B$
5. $A \cap B = A$ if and only if $A \subseteq B$
6. $(A \cap B) \cap C = A \cap (B \cap C)$

**Union:** the set of elements in **either A or B**, written $A \cup B = \{x \mid x \in A \text{ or } x \in B\}$.

Properties:

1. $A \cup B = B \cup A$
2. $A \cup A = A$
3. $A \cup \emptyset = A$
4. $A \subseteq A \cup B$, $B \subseteq A \cup B$
5. $A \cup B = B$ if and only if $A \subseteq B$
6. $(A \cup B) \cup C = A \cup (B \cup C)$

**Universal set $U$:** the set of all elements under consideration.

**Complement:** the set of all elements of $U$ that are **not** in $A$, written $A'$ or $\overline{A} = \{x \mid x \in U \text{ and } x \notin A\}$.

Properties:

1. $\overline{\overline{A}} = A$
2. $\overline{U} = \emptyset$, $\overline{\emptyset} = U$
3. $\overline{A} \cap A = \emptyset$, $\overline{A} \cup A = U$
4. $A \subseteq B$ if and only if $\overline{B} \cap A = \emptyset$, equivalently $\overline{A} \cup B = U$
5. De Morgan's laws: $\overline{A \cup B} = \overline{A} \cap \overline{B}$, $\overline{A \cap B} = \overline{A} \cup \overline{B}$

### Venn diagrams

The universal set is drawn as a rectangle and subsets as circles inside it.

| Diagram | What is shaded / shown |
|---|---|
| Complement of $A$ | the region of $U$ outside $A$'s circle |
| Subset $B \subseteq A$ | $B$'s circle lies inside $A$'s: every element of $B$ is also in $A$ |
| Intersecting sets | two overlapping circles |
| Intersection $A \cap B$ | the overlap only |
| Union $A \cup B$ | both circles in full |
| Disjoint (mutually exclusive) sets | two separate circles: $A \cap B = \emptyset$ |

## 1.2 Inductive Reasoning

- Based on patterns observed, use inductive reasoning to tell the next terms.
- Conjecture: a conclusion you reach using inductive reasoning.
- Counterexample: an example which the conjecture is false.

## 1.3 Logic Statements

- Conditional: an if-then statement.
- Truth value: true or false.
- Biconditional: a connecting statement which combines a conditional and its converse when both are true.

Contains the phrase iff (if and only if)

- Negation: the opposite truth value.
- Inverse: negates both the hypothesis and the conclusion.
- Contrapositive: switches the hypothesis and the conclusion and negates both.
- Equivalent statements: have same truth value.

## 1.4 Deductive Reasoning

- Deductive reasoning (logical reasoning): the process of reasoning logically from given statements to conclusion.
- Law of Detachment: if p to q and p are true, then q must be true.
- Law of Syllogism: if p to q, q to r are true, then q to r must be true.

## 1.5 Basic Geometric Elements

- Point: a location; no size; represented by a dot
- Line: a series of points that extends in tow opposite directions without end
- Collinear points: points that lie on the same line
- Plane: a flat surface with no thickness; contains many lines; extend without end in all directions
- Coplanar: points and lines in the same plane
- Segment: the part of a line consisting of 2 end points
- Ray: the part of a line consisting 1 end point
- Opposite rays: two collinear rays with the same endpoint but opposite direction always form a line
- Parallel lines: 2 lines in one plane that do not intersect
- Skew lines: 2 lines that are not in the same plane
- Congruent segments: segments equal in length

- Midpoint: point that divides the segment into two congruent segments
- Congruent angles: angles with equal measure

## 1.6 Intersecting and Perpendicular Lines

(postulates and theorems)
