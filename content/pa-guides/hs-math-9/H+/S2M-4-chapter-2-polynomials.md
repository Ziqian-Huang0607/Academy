# S2M-4 Chapter 2: Polynomials

> From the Grade 9 Resource Department's Semester 2 Midterm Maths H+ review guide (PA). Writers: Jazzlynne Zheng 9-11, Edward Bai 9-6. Editor: Leo Tang 9-9. Range: Solid Geometry, 1, 2, 3, 4. Student-made reference material: where it differs from class, follow class.

- **Definition of Polynomials**

Polynomials are expressions that can be written in the following format:

an, an-1, a0: Coefficient

anxn, an-1xn-1…: Terms

anxn: Leading Term

an: Leading Coefficient

n: Degree

When naming a term in a polynomial, use the table on top.

  - **Synthetic Substitution & Division**

Synthetic substitution is a method for quickly substituting a value into the independent term (x) of a polynomial. Here is how it works:

- Write all coefficients in a line, starting with the highest degree. **Fill all** **nonexisting** **term with coefficient 0.**
- Drop the 1st coefficient down the line
- Multiply the coefficient under the line with the value of substitution
- Write the result above the line below the next coefficient
- Drop the sum of the result with the corresponding coefficient
- Repeat steps 3 to 5 until there is no available coefficients
- The final answer would be the number below the line most to the right.

THE REMAINDER THEOREM

When a polynomial P(x) is divided by x-a, the remainder is P(a).

Corollary of the remainder theorem: THE FACTOR THEOREM

Only when a polynomial divided by x-a **has a remainder of 0**, a is one of its **roots**.

USAGE: SYNTHETIC DIVISION

When dividing a polynomial with x-a, we do the same as synthetic substituting a.

Take the rightmost digit as the remainder, the rest indicate the quotient.

  - **Graphing Polynomial Functions**

While graphing, use P(x) as the y value for the graph.

- Factor the Polynomial: Change the format of the polynomial function into a(nx+m)p(n1x+m1)q…, where roots can be easily spotted.
- Examine the power of each parenthesis
- Match the trend: 1st degree=pass, 2nd or any even degree=kiss the X axis, 3rd or higher odd degree=gradually approach X axis, then pass

By matching this trend, we could find out the way the graph interacts with x axis at each root. Substitute x=0 into polynomial to acquire the y-intercept, and mark on the graph. Find an x-value greater than greatest root or smaller than smallest root, to examine the end behavior.

  - **Finding Maximum/Minimum**

Examining cubic graphs or higher degree graphs, we could spot hills and valleys:

When the graph has a peak / valley, we say that it has a local maximum / local minimum. Here, the local maximum is at (0,0) and the local minimum is at (2, -4). Only while studying the given domain, the local maximum would be the overall maximum. Generally, we are not required to know how to find the values of them. **Use a calculator to estimate.**

  - **Estimating Roots**

**LOCATION PRINCIPLEA is**

If P(x) is a polynomial with real coefficients and a and b are real numbers such that P(a) and P(b) have opposite signs, then between a and b there is at least one real root r of the equation P(x)=0.

This is because that a polynomial is continuous, it has to pass through the x-axis for the signs to change.

E.g. question:

  - **Solving Polynomial Equations by Factoring**

**RATIONAL ROOTS THEOREM**

Let P(x) be a polynomial of degree n with integral coefficients and a nonzero constant term a, if one of the roots of the equation P(x) = 0 is x=p/q, where p and q are nonzero integers with no common factor other than 1, then p must be a factor of a, and q must be a factor of the leading coefficient.

^ showcase of the listing of all possible roots.

While using this theorem on a polynomial:

- Identify all possible roots
- Try each root to see if P(x) = 0 or not, until first root was found
- Divide the polynomial by (x-r) where r is root
- Use the theorem again with the quotient polynomial.
  - **Basic Theorems of Algebra**
- FUNDAMENTAL THEOREM OF ALGEBRA

Every non-constant polynomial with complex coefficients has at least one complex root. Equivalently, the complex numbers form an algebraically closed field.

- COMPLEX CONJUGATES THEOREM

If a polynomial has **real coefficients** and a complex number z=a+biz=a+bi (with b≠0b=0) is a root, then its complex conjugate z‾=a−biz=a−bi is also a root of the same polynomial.

- ROOT CONJUGATES THEOREM

If a polynomial has rational coefficients, and a and b are rational numbers such as sqrt(b) is irrational. If a+sqrt(b) is a root of equation P(x)=0, then a-sqrt(b) is also a root.

- ODD DEGREE

If P(x) is a polynomial of odd degree with real coefficients, then the equation P(x)=0 has at least one real root.

- VIETA’S
