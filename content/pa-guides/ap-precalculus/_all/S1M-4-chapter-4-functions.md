# S1M-4 Chapter 4 - Functions

> From the Grade 10 Resource Department's Semester 1 Midterm Pre-calculus AP review guide (PA). Writers: Justin Lee 10-4. Editor: Calvin 10-9. Range: Ch 1-4. Student-made reference material: where it differs from class, follow class.

## 4.1 Functions

Function: a correspondence or rule that assigns to every element in a set D exactly one element in a set R

- It is a subset of the more general class of correspondences called relations
  - Relation: any correspondence/rule that pairs the members of two sets
  - ${y}^{2}=4x$ is a relation but not a function
  - The **vertical-line test**: if no vertical line intersects a given graph in more than one point, then the graph is a graph of a function

Domain: the set of x-coordinates of points on the graph

Range: the set of y-coordinates of points of the graph

Zeros: the x-intercepts of the graph

Special Functions:

- Greatest integer function (floor function)
- Its output is the greatest integer less than or equal to the number
- Notation: y=⌊x⌋
- Least integer function (ceiling function)
- Its output is the least integer greater than or equal to the number
- Notation: y=⌈x⌉
- Equal functions
- Two functions f and g are equal functions if
  - The domains of the two functions are equal
  - For all x in the domain, f(x)=g(x)

## 4.2 Operations on Functions

**the DOMAIN of each resulting function consists of those values of x common to the domains of f and g**

Composite Functions: the combination of functions in which functions are successively applied in a specific order

- $f∘g$ or $f(g(x))$is the operation of applying g and then f
- The input x must be in the domain of the inner function, AND the inner function's output must be in the domain of the outer function.

## 4.3 Reflecting graphs; Symmetry

Reflection: reflection in line t is the congruent graph symmetric to the original graph with respect to t; it is the mirror image of the graph where line t is the mirror of the reflection

- Reflection in the x-axis: y=f(x) → y=-f(x)
- Reflection in the y-axis: y=f(x) → y=f(-x)
- Reflection in the line y=x: equivalent to interchanging x and y in the equation
  - Eg: $y=3x+2$ → $x=3y+2$ → $y=\frac{1}{3}x-\frac{2}{3}$

Symmetry:

- A line $l$ is called an axis of symmetry if it is possible to pair the points of the graph in such a way that $l$ is the perpendicular bisector of the segment joining each pair
- A point $O$ is called a point of symmetry of a graph if it is possible to pair the points of the graph in such a way that $O$ is the midpoint of the segment joining each pair

Tests for the symmetry of a graph:

- X-axis: replace (x,y) by (x,-y)
- Y-axis: replace (x,y) by (-x,y)
- y=x: replace (x,y) by (y,x)
- Origin: replace (x,y) by (-x,-y)

Even function: function that satisfies f(-x)=f(x) x$\in$D

Odd function: function that satisfies f(-x)=-f(x) x$\in$D

In a given interval:

Increasing: x1>x2, f(x1)≥f(x2)

Decreasing: x1>x2, f(x1)≤f(x2)

Strictly Increasing: x1>x2, f(x1)>f(x2)

Strictly Decreasing: x1>x2, f(x1)<f(x2)

## 4.4 Periodic Functions; Stretching and Translating

Periodic Functions

- A function f is periodic if there is a positive number p, called a period of f, such that f(x+p)=f(x) for all x in the domain of f
- Fundamental period: the smallest period of a periodic function
- If a periodic function has maximum value M and minimum value m, the amplitude of the function is given by ½(M-m)

Stretching and Shrinking Graphs

- Vertical stretching/shrinking of a graph can be expressed by y=cf(x) where c is positive
  - If c>1 → vertical stretch
  - If 0<c<1 → vertical shrink
  - The amplitude of the function changes to $cA$
- Horizontal stretching/shrinking of a graph can be expressed by y=f(cx) where c is positive
  - If c>1 → horizontal shrink
  - If 0<c<1 → horizontal stretch
  - The period of the function changes to $\frac{p}{c}$

Translating Graphs

- The graph of y-k=f(x-h) is obtained by translating the graph of y=f(x) horizontally h units and vertically k units

## 4.5 Inverse Functions

Inverse Function: two functions whose composition give the identity function h(x)=x

A function f has an inverse function g if and only if

- f(g(x))=x for all x in the domain of g(x) **and**
- g(f(x))=x for all the x in the domain of f(x)

Notation: inverse function of $f$ is denoted as ${f}^{-1}$ (NOTE: ${f}^{-1}$ does not mean the reciprocal of f)

If f and g are inverse functions, they are symmetric with respect to the line y=x, **so you can find the inverse function by simply switching y and x and solving for y**

Horizontal-Line test: if the graph of function y=f(x) is such that no horizontal line intersects the graph in more than one point, then f is one-to-one and has an inverse function

## 4.8 Radical Functions

Definition: A radical function is a function in which the variable appears inside a radical (root) symbol — most commonly a square root.

General form: $f(x) = \sqrt[n]{g(x)}$ where g ( x ) is some expression involving x and n ≥ 2 is an integer

Domain Rule:

- Even index (n is even): solve g ( x ) ≥ 0
- Odd index (n is odd): domain is all real numbers (unless g ( x ) itself has restrictions)

Graph of $y=\sqrt{x}$

Partial fraction: $\frac{2}{x-3}+\frac{5}{x+1}$ (Single fraction: $\frac{7x-13}{{x}^{2}-2x-3}$)

Steps to decompose a fraction with denominators that can be factored into linear factors and the degree of the numerator is less than the degree of the denominator

- Factor the denominator
- Express two fractions using A and B for the numerators
- Multiply by the least common denominator
- Solve for A and B
- Express with partial fractions

Rational Function: eg:$\frac{2{x}^{2}+3x+2}{3{x}^{2}+3x+1}$

Limit of a function: $\lim_{x\to c}f(x)=L$

- This means that when x is getting closer to c, f(x) approaches a fixed number L

Left-hand limit: x approaches c from the left $\lim_{x\to {c}^{-}}f(x)$

Right-hand limit: x approaches c from the right $\lim_{x\to {c}^{+}}f(x)$

Continuity

- A function f (x) is continuous at a point x = a if all three of the following conditions hold:
- f (a) is defined
- $\lim_{x\to a}f(x)$ exists
- $\lim_{x\to a}f(x)=f(a)$

A function is continuous at a point if you can draw the graph through that point without lifting your pencil, meaning that there are no holes, jumps, or vertical asymptotes

- 3 basic kinds of discontinuity at a point
- Point
- Jump
- Infinite

Horizontal asymptote

- if$\lim_{x\to \pm \infty }f(x)=b$ then line y=b is a horizontal asymptote of f(x)

Vertical asymptote

- if$\lim_{x\to {a}^{\pm }}f(x)=\pm \infty$ then line x=a is a vertical asymptote of f(x)
