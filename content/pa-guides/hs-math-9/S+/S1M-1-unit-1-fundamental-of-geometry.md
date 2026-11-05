# S1M-1 Unit 1 Fundamental of Geometry

> From the Grade 9 Resource Department's Semester 1 Midterm Maths S+ review guide (PA). Writers: Colin9-9. Editor: Colin 9-9. Range: Up till Congruence in Right Triangles. Student-made reference material: where it differs from class, follow class.

- **Sets**

**1. Basic Concepts**

- A **set** is simply a collection of different objects grouped together. We call each object an **element** or **member** of the set.
- **Notation**:
  - ∈ means "belongs to" or "is in".
  - ∉ means "doesn't belong to" or "is not in".
- **Properties**:
  - Each element appears only once (no duplicates).
  - The order doesn't matter.
  - A set is completely determined by what's in it.

**2. Describing Sets**

- **Listing** **Method**: Just write out all the elements inside curly braces {}.
  - Example: A = {a, e, i, o, u}
- **Interval** **Notation**: Describe what kind of elements belong to the set.
  - Format: {x | x satisfies condition P}
  - Example: {x ∈ Z | -2 ≤ x &lt; 4}

**3. Special Sets**

- **Number Sets**:
  - N: Natural numbers (counting numbers, include 0)
  - Z: Integers (whole numbers, positive and negative)
  - Q: Rational numbers (fractions)
  - R: Real numbers (all numbers on the number line)
- **Empty Set**: A set with nothing in it, written as ∅ or {}.
- **Universal Set (U)**: The "big set" that contains everything we're talking about in a particular context.

**4. Types of Sets**

- **Finite Set**: A set you can count all the way through.
- **Infinite Set**: A set that goes on forever.

**5. Relationships Between Sets**

- **Subset (A** **⊆** **B)**: Everything in set A is also in set B.
- **Proper Subset (A** **⊂** **B)**: A is a subset of B, but B has some extra elements that A doesn't have.
- **Equal Sets (A = B)**: The two sets have exactly the same elements.
- **Disjoint Sets**: Two sets that have nothing in common (A ∩ B = ∅).

**6. Set Operations**

- **Intersection (A** **∩** **B)**: The stuff that's in **both** A and B.
- **Union (A** **∪** **B)**: Everything that's in **either** A or B (or in both).
- **Complement (A' or Aᶜ)**: Everything in our universal set U that's **not** in A.

**7. Venn Diagrams**

- A helpful visual way to show sets using overlapping circles inside a rectangle (which represents everything we're considering).
- Great for showing how sets combine, overlap, or complement each other.

**8. Key Formulas**

- **Number of Subsets**: If you have a set with n elements, you can form 2ⁿ different subsets from it.
- **Number of Proper Subsets**: 2ⁿ - 1 (all subsets except the set itself)
- **Inclusion-Exclusion Principle (for two sets)**:n(A ∪ B) = n(A) + n(B) - n(A ∩ B)

**9.** **Bracket** **Notation**

- A compact way to write sets of numbers on the number line:
  - [a, b] = {x | a ≤ x ≤ b} (includes both endpoints)
  - (a, b) = {x | a &lt; x &lt; b} (doesn't include endpoints)
  - [a, ∞) = {x | x ≥ a} (everything from a onward)

**10. Problem-Solving Tips**

- Draw Venn diagrams when dealing with problems about overlapping groups—they make things much clearer!
- When working with three sets, remember to be careful with the inclusion-exclusion formula: n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C)
  - **Inductive Reasoning**

**1. Core Concept**

- **Inductive Reasoning** is when you draw conclusions (called **conjectures**) by noticing patterns in what you observe.
- Keep in mind that this isn't the same as a formal proof—sometimes your conclusions might turn out to be wrong.

**2. Key Terminology**

- **Conjecture**: An educated guess you make using inductive reasoning.
- **Counterexample**: Just one example that proves your conjecture doesn't always work.

**3. Process & Examples**

- **Observe a Pattern**: Look for some kind of relationship in a sequence of numbers or shapes.
  - Example: 2, 6, 12, 20, 30... (Notice how we're adding consecutive even numbers: +4, +6, +8, +10...)
- **Make a Conjecture**: Try to describe the rule behind the pattern you've noticed.
  - Conjecture: The next number should be 42 (because 30 + 12).
- **Test the Conjecture**: Check if the pattern keeps going. Remember that finding even one **counterexample** is enough to show your conjecture is incorrect.
  - Counterexample: If you thought "all prime numbers are odd," that's actually wrong because 2 is prime and it's even.

**4. Common Number Patterns**

- **Sum of the first** **n** **odd numbers**: When you add them up, you get n².
  - Example: 1 + 3 + 5 = 9, and 3² = 9.
- **Sum of the first** **n** **counting numbers**: The total is n(n+1)/2.
  - **Logic Statement**

**1. Conditional Statements**

- **Format**: These follow an "If p, then q" structure (written as p → q)
- **Example**: "If x equals 3, then x squared equals 9"

**2. Related Statements**

- **Converse**: Flips p and q around (q → p)
- **Inverse**: Says the opposite of both p and q (¬p → ¬q)
- **Contrapositive**: Flips p and q AND makes them opposite (¬q → ¬p)
- **Key Fact**: If a conditional statement is true, its contrapositive is always true too (and vice versa).

**3. Biconditional Statements**

- **Format**: Uses "p if and only if q" (written as p ↔ q)
- **Usage**: You can only use this when both the conditional and its converse work.
- **Example**: "Lines are perpendicular if and only if they meet at right angles"

**4. Good Definitions**

A solid definition needs to be:

- **Clear**: Uses terms everyone understands
- **Precise**: Doesn't rely on fuzzy or vague language
- **Reversible**: Works as a true biconditional statement

**5. Indirect Reasoning (Proof by Contradiction)**

**Here's how it works in three steps**:

- Start by assuming the opposite of what you're trying to prove
- Demonstrate that this assumption creates an impossible situation
- Conclude that your original statement must be correct

**Example**: Let's prove a triangle can't have more than one right angle

- Suppose it has two right angles
- That would mean the angles add up to more than 180°
- But this goes against the triangle angle sum theorem
- So our assumption can't be right

**6. Identifying Contradictions**

- Watch for statements that can't both be true at the same time
- **Example**: Saying "Triangle ABC is acute" and "Triangle ABC has a 90° angle" contradicts itself
  - **Deductive Reasoning**

**1. Core Concept**

- **Deductive Reasoning** is the process of drawing logical conclusions from given facts, definitions, and rules.
- It guarantees a conclusion if the premises are true.

**2. Law of Detachment**

- **Pattern**: If p → q is true and p is true, then you can conclude q.
- **Example**:
  - Premise: If it is raining, then the ground is wet.
  - Given: It is raining.
  - Conclusion: Therefore, the ground is wet.

**3. Law of Syllogism**

- **Pattern**: If p → q is true and q → r is true, then you can conclude p → r.
- **Example**:
  - Premise 1: If a number is divisible by 10, then it is divisible by 5.
  - Premise 2: If a number ends in 0, then it is divisible by 10.
  - Conclusion: Therefore, if a number ends in 0, then it is divisible by 5.

**4. Key Points**

- The **Law of Detachment** requires a single conditional statement and the affirmation of its hypothesis.
- The **Law of Syllogism** chains two conditional statements together where the conclusion of the first becomes the hypothesis of the second.
- If the conditions for these laws are not met, it may be **not possible** to draw a valid conclusion.
  - **Basic Geometric Element**

**1. Basic Elements**

- **Point**: Think of a point as a specific spot in space—it has a position but no actual size.
- **Line**: A line is like a perfectly straight path that goes on forever in both directions.
- **Plane**: Imagine a completely flat surface that stretches out infinitely in every direction—that's a plane.
- **Collinear Points**: These are points that all sit on the same line.
- **Coplanar Points**: These are points that all lie on the same flat plane.

**2. Key Postulates**

- Any two points can always be connected by exactly one line.
- When two lines cross each other, they meet at just one point.
- When two planes cross, they meet along a single line.
- Any three points that aren't in a straight line will define exactly one plane.

**3. Segments and Rays**

- **Segment**: This is just a piece of a line that has two endpoints (like AB).
- **Ray**: A ray starts at one point and then extends forever in one direction (like →AB).
- **Opposite Rays**: When two rays start at the same point and go in opposite directions, they form a straight line.

**4. Parallel and Skew**

- **Parallel Lines**: These are lines on the same plane that will never meet, no matter how far you extend them.
- **Skew Lines**: These lines aren't on the same plane and will never intersect.
- **Parallel Planes**: These are planes that will never touch each other.

**5. Measuring Segments**

- **Ruler Postulate**: Every point on a line can be assigned a real number, like on a ruler.
- **Segment Addition**: If point B is somewhere between A and C, then the distance from A to B plus B to C equals the total distance from A to C.
- **Midpoint**: This is the point that's exactly in the middle of a segment, splitting it into two equal parts.
- **Congruent Segments**: These are segments that have the same length.

**6. Measuring Angles**

- **Angle**: An angle is created when two rays meet at a common point.
- **Protractor Postulate**: We measure angles using degrees.
- **Angle Addition**: If point B is inside angle AOC, then the measure of angle AOB plus angle BOC equals the measure of angle AOC.
- **Angle Bisector**: This is a ray that cuts an angle perfectly in half, creating two equal angles.

**7. Angle Relationships**

- **Vertical Angles**: When two lines cross, they create opposite angles that are always equal to each other.
- **Adjacent Angles**: These angles are next to each other—they share a corner point and one side, but don't overlap.
- **Complementary**: Two angles are complementary when they add up to 90°.
- **Supplementary**: Two angles are supplementary when they add up to 180°.

**8. Important Facts**

- Any two points will always be collinear (since you can draw a line through them).
- Three points might be collinear, but they don't have to be.
- Skew lines are never on the same plane—that's what makes them skew.
- Parallel lines are always on the same plane by definition.
- When two planes intersect, they always meet along a line.
  - **Intersecting and Parallel Lines**

**Geometry Proofs & Parallel Lines - Review Notes**

**1. Algebraic Reasoning in Geometry**

- **Properties of Equality**: Used to justify steps in solving equations.
  - Addition, Subtraction, Multiplication, Division
  - Reflexive, Symmetric, Transitive
  - Substitution, Distributive
- **Properties of Congruence**:
  - Reflexive, Symmetric, Transitive

**2. Angle Theorems & Proofs**

- **Vertical Angles Theorem**: Vertical angles are congruent.
- **Congruent Supplements Theorem**: Angles supplementary to the same angle (or congruent angles) are congruent.
- **Congruent Complements Theorem**: Angles complementary to the same angle (or congruent angles) are congruent.
- **Right Angle Theorem**: If two angles are congruent and supplementary, each is a right angle.

**3. Parallel Lines & Transversals**

- **Angle Pairs**:
  - Corresponding, Alternate Interior, Alternate Exterior
  - Same-Side Interior, Same-Side Exterior
- **If Lines Are Parallel**:
  - Corresponding angles are congruent
  - Alternate interior angles are congruent
  - Same-side interior angles are supplementary
- **Proving Lines Parallel** (Converse Statements):
  - If corresponding angles are congruent, lines are parallel
  - If alternate interior angles are congruent, lines are parallel
  - If same-side interior angles are supplementary, lines are parallel

**4. Parallel/Perpendicular Line Relationships**

- Two lines parallel to the same line are parallel to each other.
- In a plane, two lines perpendicular to the same line are parallel.
- In a plane, if a line is perpendicular to one of two parallel lines, it is perpendicular to the other.

**5. Triangle Angle Theorems**

- **Triangle Angle-Sum Theorem**: Sum of interior angles = 180°
- **Exterior Angle Theorem**: The measure of an exterior angle equals the sum of the two remote interior angles.
- **Sum of Exterior Angles**: The sum of the three exterior angles (one at each vertex) is 360°.

**6. Proof Techniques**

- **Two-Column Proof**: Statements with corresponding reasons
- **Paragraph Proof**: Written explanation in paragraph form
- **Flow Proof**: Visual proof using arrows to show logical flow
- **Indirect Proof**: Assume the opposite of what you want to prove, find contradiction

**7. Key Relationships**

- Parallel lines create specific angle relationships with transversals
- Perpendicular lines form right angles (90°)
- Triangle angles always sum to 180°
- Exterior angle = sum of two non-adjacent interior angles
