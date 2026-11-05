# S1M-2 Chapter 2 - Polynomial Functions

> From the Grade 10 Resource Department's Semester 1 Midterm Pre-calculus AP review guide (PA). Writers: Justin Lee 10-4. Editor: Calvin 10-9. Range: Ch 1-4. Student-made reference material: where it differs from class, follow class.

## 2.1 Polynomials

Polynomial function of degree n: $f(x)={a}_{n}{x}^{n}+{a}_{n-1}{x}^{n-1}+{a}_{n-2}{x}^{n-2}+…+{a}_{1}x+{a}_{0}$

- aₙ, aₙ₋₁, aₙ₋₂, …, a₀ are real numbers (n is a nonnegative integer, aₙ ≠ 0)
- The degree of a polynomial is the degree of the term of highest degree
- Leading Term: the term containing the highest power of x
- Leading coefficient: coefficient of the leading term

Degree

Name

Example

## 0

constant

f(x)=2

## 1

linear

f(x)=x

## 2

quadratic

f(x)=x^2

## 3

cubic

f(x)=x^3

## 4

quartic

f(x)=x^4

## 5

quintic

f(x)=x^5

## 2.2 Long Division; The Remainder & Factor Theorems

Example of long division:

Dividend: $2{x}^{3}+{x}^{2}-6x-8$; Divisor: $x-2$; Quotient: $2{x}^{2}+5x+4$ ; Remainder: 0

Dividing a polynomial with a divisor of degree n always produces a remainder whose degree is at most n-1

- Remainder Theorem: When polynomial P(x) is divided by x-a, the remainder is P(a)
- Factor Theorem: A number a is a solution of the polynomial equation f(x)=0 if and only if x-a is a factor of f(x)

## 2.3 Graphing Polynomial Functions

Fundamental shapes of polynomial functions:

**Steps to Graphing Polynomial Functions**

1. Determine the end behavior — look at the leading term ${a}_{n}{x}^{n}$: if $n$ is even and ${a}_{n}>0$, both ends go up; even and ${a}_{n}<0$, both ends go down; odd and ${a}_{n}>0$, left down/right up; odd and ${a}_{n}<0$, left up/right down.

- Use limit notation to describe end behavior: eg: $\lim_{x\to \infty }f(x)=\infty$

2. Find the y-intercept— set $x=0$ and evaluate $f(0)$; plot the point $(0,f(0))$.

3. Find the x-intercepts (zeros) — set $f(x)=0$ and solve (factor, use the quadratic formula, etc.); plot each real root on the x-axis.

4. Determine multiplicity at each zero — if the factor $(x-r{)}^{m}$: odd $m$ → graph crosses the axis; even $m$ → graph touches and turns around; larger $m$ → flatter near the root.

5. Find turning points — a polynomial of degree $n$ has at most $n-1$ turning points

6. Make a sign table / test intervals — pick test points between the zeros to determine whether the graph is above or below the x-axis in each interval.

7. Sketch the curve — connect the points smoothly, respecting end behavior, intercepts, multiplicity, and turning points (no sharp corners).

8. Label key features — mark intercepts, turning points, and note the end behavior arrows.

**Important Theorems/Principles**

**Local Extrema Theorem**: a polynomial function of degree n has at most n-1 relative extrema

**Extreme Value Theorem**: if a polynomial function f is continuous on a closed interval [a,b], then f has both a maximum and a minimum value on [a,b]

**Intermediate Value Theorem**: if P(x) is a polynomial function such that a<b and P(a)≠P(b), then P(x) takes on every value between P(a) and P(b) in the interval [a,b]

**Location Principle**: if P(x) is a polynomial function with real coefficients, and a and b are real numbers such that P(a) is positive and P(b) is negative, then P(x) has at least one zero between a and b

**Rational Root Theorem**: if qx-p is a factor of a polynomial, then q must divide the leading coefficient, and p must divide the constant term

**The Fundamental Theorem of Algebra**: if P(x) is a polynomial of degree n, then the equation of P(x) has exactly n roots, including complex solutions (provided a double root is counted as 2 roots, a triple root is counted as 3 roots, and so on)

**Complex Conjugates Theorem**: if P(x) is a polynomial with real coefficients, and a+bi is an imaginary root of the equation P(x)=0, then a-bi is also a root

**Theorem 3**: suppose P(x) is a polynomial with rational coefficients, and a and b are rational numbers such that √b is irrational; if a+√b is a root of the equation P(x)=0, then a-√b is also a root

**Theorem 4**: if P(x) is a polynomial of odd degree with real coefficients, then the equation P(x)=0 has at least one real root
