# S1M-1 2 Limits and Continuity

> From the Grade 10 Resource Department's Semester 1 Midterm Calculus AP review guide (PA). Writers: Daniel Chen 10-8. Editor: Aman 10-5. Range: Pre-calc and AP Calc until Chapter 4: Applications of Derivatives. Student-made reference material: where it differs from class, follow class.

## Introduction

Welcome to the midterm review for maths. Look over the bolded content labelled **Tip**: these record traps the writer ran into throughout the syllabus. The review starts with the main content of calculus and then moves on to trigonometry.

## 2.1 Rates of Change and Limits

**Definition:** the limit of a function is defined rigorously as $\forall \varepsilon\ \exists \delta > 0,\ 0 < |x - c| < \delta \implies |f(x) - L| < \varepsilon$. We then say that $f$ has a limit $L$ as $x \to c$, and write

$$\lim_{x\to c} f(x) = L$$

Review the definition of limits through several examples. Practice: try to rigorously prove that $\lim_{x\to 1}(2x+5) = 7$ and that $\lim_{x\to 2} x^2 = 4$.

**Properties of limits** (for constants $c, k$):

$$\lim_{x\to c} k = k \qquad \lim_{x\to c} x = c$$

$$\lim_{x\to c}\big(f(x) \pm g(x)\big) = \lim_{x\to c} f(x) \pm \lim_{x\to c} g(x)$$

$$\lim_{x\to c} k\cdot f(x) = k\lim_{x\to c} f(x)$$

$$\lim_{x\to c}\big(f(x)\cdot g(x)\big) = \lim_{x\to c} f(x)\cdot \lim_{x\to c} g(x)$$

$$\text{if } \lim_{x\to c} g(x) \ne 0:\quad \lim_{x\to c}\frac{f(x)}{g(x)} = \frac{\lim_{x\to c} f(x)}{\lim_{x\to c} g(x)}$$

$$\forall r, s \in \mathbb{Z},\ s \ne 0:\quad \lim_{x\to c} f(x)^{r/s} = \Big(\lim_{x\to c} f(x)\Big)^{r/s}$$

**Tip:** do not write DNE for questions where $\lim_{x\to c} f(x) = \infty$ or $-\infty$; this causes confusion. Write it strictly for a removable, jump, infinite or oscillating discontinuity.

**Definition (one-sided limits):**

- The left-hand limit of $f$ as $x$ approaches $c$ from the left is $\lim_{x\to c^-} f(x)$.
- The right-hand limit of $f$ as $x$ approaches $c$ from the right is $\lim_{x\to c^+} f(x)$.

**Property:** $\lim_{x\to c} f(x)$ exists $\iff \lim_{x\to c^+} f(x) = \lim_{x\to c^-} f(x)$, and then $\lim_{x\to c} f(x)$ equals that common value. Otherwise the limit does not exist.

One important limit is

$$\lim_{x\to 0}\frac{\sin x}{x} = 1$$

Try proving it using the squeeze theorem.

**Theorem (Sandwich / Squeeze Theorem):** if $g(x) \le f(x) \le h(x)$ for all $x \ne c$ and $\lim_{x\to c} g(x) = \lim_{x\to c} h(x) = L$, then $\lim_{x\to c} f(x) = L$.

Average and instantaneous speeds should be intuitive, but beware.

**Tip:** speed must always be $\ge 0$.

**Tip:** be extra careful with expressions like $\lim_{x\to c} f(g(x))$. Use the limit of the inner function to evaluate the outer function.

## 2.2 Limits Involving Infinity

Limits involving infinity are usually quite intuitive. For example, $\lim_{x\to\infty}\frac{1}{x} = 0$, while $\lim_{x\to 0}\frac{1}{x}$ does not exist.

**Definition:** a line $y = b$ is a **horizontal asymptote** of $f(x)$ if either $\lim_{x\to\infty} f(x) = b$ or $\lim_{x\to-\infty} f(x) = b$.

**Definition:** a line $x = a$ is a **vertical asymptote** of $f(x)$ if either $\lim_{x\to a^+} f(x) = \pm\infty$ or $\lim_{x\to a^-} f(x) = \pm\infty$.

Limits approaching infinity behave like ordinary limits with respect to the sandwich theorem. Beware of adding and subtracting magnitudes of infinity: you should never end up with an expression like $\infty - \infty$.

**End behaviour models:** choose a simple function $g(x)$ that imitates the end behaviour of $f(x)$, such that $\lim_{x\to\infty}\frac{f(x)}{g(x)} = 1$ (right end behaviour) or $\lim_{x\to-\infty}\frac{f(x)}{g(x)} = 1$ (left end behaviour). Find it by comparing the growth rates of the function's simple components.

Another way to solve limits is **substitution**: for example, replace $x \to 0$ by $c = \frac{1}{x}$ with $c \to \infty$.

## 2.3 Continuity

Continuity is defined differently at endpoints:

**Continuity at an interior point:** $y = f(x)$ is continuous at an interior point $c$ of its domain if

$$\lim_{x\to c} f(x) = f(c)$$

**At a left endpoint** $a$ **of its domain**, $f$ is continuous if $\lim_{x\to a^+} f(x) = f(a)$.

**At a right endpoint** $b$ **of its domain**, $f$ is continuous if $\lim_{x\to b^-} f(x) = f(b)$.

So a function like $\ln(x)$ is not continuous at $x = 0$, since $0 \notin (0, \infty)$.

**The four kinds of discontinuity:**

1. **Removable:** $\lim_{x\to a^-} f(x) = \lim_{x\to a^+} f(x) = L \in \mathbb{R}$, but $f(a) \ne L$.
2. **Jump:** both one-sided limits are real, but $\lim_{x\to a^-} f(x) \ne \lim_{x\to a^+} f(x)$.
3. **Infinite:** $\lim_{x\to a^-} f(x) \in \{-\infty, +\infty\}$ or $\lim_{x\to a^+} f(x) \in \{-\infty, +\infty\}$.
4. **Oscillatory:** $\lim_{x\to a^-} f(x) \notin \mathbb{R}\cup\{\pm\infty\}$ or $\lim_{x\to a^+} f(x) \notin \mathbb{R}\cup\{\pm\infty\}$; in other words, a one-sided limit does not exist.

**Continuous functions:**

- A function is continuous on an interval **iff** it is continuous at every point of the interval.
- A function is continuous if it is continuous at every point of its **domain**.

**Tip (notation):** when discussing continuity at a point, state that at, say, $x = 0$ the two one-sided limits are equal **and** equal the function's value at that point.

To define a **continuous extension** $\tilde f(x)$, either:

- simplify the function to a form without the removable discontinuity, or
- use a piecewise definition that sets the value at that point equal to the limit there.

Try to memorise the following theorems as whole sentences (at least their key words):

**Intermediate Value Theorem:** a function $y = f(x)$ that is **continuous** on a **closed** interval $[a, b]$ takes on every value between $f(a)$ and $f(b)$.

**Corollary (Extreme Value Theorem):** a function $f(x)$ continuous on a closed interval $[a, b]$ attains a maximum and a minimum on $[a, b]$, and takes every value between them. Try to prove this from the original theorem.

## 2.4 Rate of Change and Tangent Lines

Here we move from limits towards derivatives, and notation becomes especially important. Understand the difference between $f(x)$ and $y$, between $f'(x)\big|_{x=2}$ and "solve for $f'(x)$, then substitute $x = 2$", and when each applies. Add parentheses whenever needed to avoid ambiguity.

The **normal line** to a curve at a point is the line perpendicular to the tangent line there. If the tangent slope is $m$, the normal slope is $-\frac{1}{m}$ (provided $m \ne 0$); when the tangent is horizontal the normal is vertical, and vice versa.

**Tip:** a very common exam request is "write the equation of the tangent line *and* the normal line". Do not forget the second one, and use point-slope form for both.

**Definition (slope of a curve):**

$$m = \lim_{h\to 0}\frac{f(a+h) - f(a)}{h}$$

The expression inside the limit is the **difference quotient**. The tangent line to the curve at a point $P$ is the line through $P$ with this slope $m$; point-slope form is the most convenient.

Average and instantaneous rates of change are intuitive. Again, check that a speed is positive. For questions involving graphs, keep 3 significant figures.

**Note:** some tricky graphs give information at the end of a year rather than the start; check what the data means before computing.
