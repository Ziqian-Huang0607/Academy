# S1M-2 Chapter 2 Polynomial basics

> From the Grade 10 Resource Department's Semester 1 Midterm Maths S review guide (PA). Student-made reference material: where it differs from class, follow class.

Quadratics are polynomials too, now we look at higher degrees

### 12. Vocabulary and degree

A polynomial is a sum of terms axⁿ with whole-number exponents n ≥ 0. Its degree is the highest power with a nonzero coefficient.

**Example:** P(x) = 3x^4 − 2x^2 + 7 has degree 4, leading coefficient 3, and constant term 7.

**Not polynomials:** 1/x, √x, and x^-2, because their exponents are not nonnegative integers.

### 13. End behavior

The leading term controls what happens as x goes far left or far right.

- Even degree, positive leading coefficient: both ends up.
- Even degree, negative leading coefficient: both ends down.
- Odd degree, positive leading coefficient: left down, right up.
- Odd degree, negative leading coefficient: left up, right down.

### 14. Zeros, factors, and multiplicity

If P(r) = 0, then x − r is a factor and r is a zero/x-intercept. Multiplicity is how many times the factor repeats.

**Example:** P(x) = (x + 2)^2(x − 1)

**Zeros:** −2 (multiplicity 2) and 1 (multiplicity 1)

At x = −2, the graph touches/bounces; at x = 1, it crosses.

Degree 3; positive leading coefficient : left down, right up.

**Remember:** Even multiplicity usually touches the x-axis; odd multiplicity crosses it.

## Chapter 2 Polynomial operations & division

Methods you will use to find factors and zeros

### 15. Add, subtract, and multiply polynomials

Combine like terms only (same variable and exponent). To multiply, distribute every term and then combine.

**Example:** (x + 3)(x^2 − 2x + 1)

= x^3 − 2x^2 + x + 3x^2 − 6x + 3

= x^3 + x^2 − 5x + 3

### 16. Polynomial long division

Divide leading terms, multiply back, subtract, and bring down the next term. Keep going until the remainder degree is smaller than the divisor degree.

**Example:** (x^3 − 2x^2 − 5x + 6) ÷ (x − 3)

X^3 ÷ x = x^2; subtract (x^3 − 3x^2) → x^2 − 5x + 6

X^2 ÷ x = x; subtract (x^2 − 3x) → −2x + 6

−2x ÷ x = −2; subtract (−2x + 6) → remainder 0

Quotient = x^2 + x − 2

### 17. Synthetic division

Use it when dividing by x − c. Write coefficients in descending order, including 0 for missing powers.

Same example, divide by x − 3

**Coefficients:** 1, −2, −5, 6; use c = 3

Bring down 1 , add 3 to −2 = 1 :,add 3 to −5 = −2 , add −6 to 6 = 0

**Bottom row:** 1, 1, −2, 0 → x^2 + x − 2, remainder 0

### 18. Remainder and factor theorems

When P(x) is divided by x − c, the remainder equals P(c). If P(c) = 0, x − c is a factor.

**Remember:** If the divisor is x + 4, use c = −4 in synthetic division.

## Chapter 2 Finding zeros & graphing

Final review + questions to test yourself

### 19. Finding all real zeros

Start by factoring if possible. Otherwise test likely rational roots, use synthetic division, and solve the remaining lower-degree polynomial.

**Example:** P(x) = x^3 − 2x^2 − 5x + 6

**Try x = 1:** P(1) = 1 − 2 − 5 + 6 = 0

Divide by x − 1 → x^2 − x − 6

**Factor:** (x − 3)(x + 2)

P(x) = (x − 1)(x − 3)(x + 2); zeros = 1, 3, −2

### 20. Sketching a polynomial graph

Check degree and leading coefficient for end behavior. Find all real zeros and their multiplicities. Find P(0) for the y-intercept. Then connect smoothly.

A degree n polynomial has at most n − 1 turning points and at most n distinct real zeros.

### Practice (try without notes)

1. Find the vertex and zeros of y = x^2 − 2x − 8.

2. Solve 3x^2 − 5x − 2 = 0.

3. Describe the end behavior of −2x^5 + x^2 − 1.

4. Find the zeros and multiplicities of (x − 2)^2(x + 1)^3.

5. Divide x^3 + 2x^2− x − 2 by x + 2.

### Answers （check after trying）

1. Vertex (1, −9); zeros −2 and 4. 2. x = 2 or −1/3. 3. Left up, right down. 4. 2 (mult. 2), −1 (mult. 3). 5. X^2 − 1, remainder 0.

**Remember:** Show your steps, especially signs and substitution. That is where easy points get lost.
