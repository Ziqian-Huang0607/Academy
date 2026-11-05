# S1M-3 4 Applications of the Derivative

> From the Grade 10 Resource Department's Semester 1 Midterm Calculus AP review guide (PA). Writers: Daniel Chen 10-8. Editor: Aman 10-5. Range: Pre-calc and AP Calc until Chapter 4: Applications of Derivatives. Student-made reference material: where it differs from class, follow class.

## 4.1 Extreme Values of Functions

**Definition:** let $f$ be a function with domain $D$. Then $f(c)$ is (a) the **absolute maximum** value on $D$ if and only if $f(x) \le f(c)$ for all $x \in D$; (b) the **absolute minimum** value on $D$ if and only if $f(x) \ge f(c)$ for all $x \in D$.

**Definition:** let $c$ be an interior point of the domain. Then $f(c)$ is a **local maximum** value at $c$ if $f(x) \le f(c)$ for all $x$ in some open interval containing $c$ (analogously for a local minimum). At an *endpoint* $c$, the inequality only needs to hold on a half-open domain interval containing $c$.

**Tip:** an absolute extremum is also a local extremum, but a local extremum need not be absolute.

**Theorem (Extreme Value Theorem):** if $f$ is continuous on a closed interval $[a, b]$, then $f$ has both a maximum value and a minimum value on the interval.

**Q:** why must $f$ be continuous? Why must the interval be closed? (Think of $f(x) = \frac{1}{x}$ on $(0, 1]$, and of $f(x) = x$ on $(0, 1)$.)

**Theorem (Local Extreme Values, Fermat):** if $f$ has a local maximum or local minimum at an interior point $c$ of its domain, and $f'$ exists at $c$, then $f'(c) = 0$.

**Tip:** the converse is false: $f'(c) = 0$ does *not* imply an extremum at $x = c$ (e.g. $f(x) = x^3$ at $x = 0$). Nor do extrema only occur where $f' = 0$.

**Definition:** a **critical point** of $f$ is an interior point of the domain where $f' = 0$ or $f'$ does not exist.

**Candidates:** on a closed interval $[a, b]$, absolute extrema can only occur at critical points or endpoints. Hence the answer format:

> Solution. $f'(x) = \ldots$, which has zero(s) at $a, b, \ldots$ and is undefined at $c, d, \ldots$. Critical points: $f(a) = \ldots$, $f(b) = \ldots$, $f(c) = \ldots$. Endpoints: $f(m) = \ldots$, $f(n) = \ldots$. So the absolute maximum is $\ldots$, at $\ldots$; the absolute minimum is $\ldots$, at $\ldots$.

**Example:** find the absolute extrema of $f(x) = x^2 - 2x + 3$ on $[-1, 4]$. $f'(x) = 2x - 2 = 0$ at $x = 1$; $f(-1) = 6$, $f(1) = 2$, $f(4) = 11$. Absolute maximum 11 at $x = 4$; absolute minimum 2 at $x = 1$.

**Example:** $f(x) = x^{2/3}$ on $[-2, 3]$: $f'(x) = \frac{2}{3}x^{-1/3}$ is never zero but is undefined at $x = 0$, which lies in the interval, so it is a candidate. $f(-2) = \sqrt[3]{4} \approx 1.587$, $f(0) = 0$, $f(3) = \sqrt[3]{9} \approx 2.080$. Absolute minimum 0 at $x = 0$; absolute maximum $\sqrt[3]{9}$ at $x = 3$.

**Tip:** if there are no endpoints (an open or infinite interval), justify the extremum using monotonicity: show $f' > 0$ on one side and $f' < 0$ on the other. A local argument alone earns no credit for an absolute claim.

## 4.2 The Mean Value Theorem

**Theorem (Rolle's Theorem):** if $y = f(x)$ is continuous at every point of the closed interval $[a, b]$, differentiable at every point of its interior $(a, b)$, and $f(a) = f(b)$, then there is at least one point $c$ in $(a, b)$ at which $f'(c) = 0$.

**Theorem (Mean Value Theorem):** if $y = f(x)$ is continuous at every point of the closed interval $[a, b]$ and differentiable at every point of its interior $(a, b)$, then there is at least one point $c$ in $(a, b)$ at which

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

This theorem connects the average rate of change of a function over an interval with the instantaneous rate of change at a point inside it.

**Q:** why must $f$ be continuous on the closed interval $[a, b]$? Why differentiable at every point of $(a, b)$? (Consider $f(x) = |x|$ on $[-1, 1]$, and a function with a jump.)

**Example:** show that $f(x) = x^2$ satisfies the hypotheses of the MVT on $[0, 2]$, and find $c$. Polynomials are continuous and differentiable everywhere; $\frac{f(2) - f(0)}{2 - 0} = 2$, and $f'(c) = 2c = 2$ gives $c = 1$.

**Tip:** failing the hypotheses of the MVT does not necessarily mean no such $c$ exists: some functions still have one, some do not. Check each case.


**Corollary 1 (Increasing and Decreasing Functions):** let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.

- If $f' > 0$ at each point of $(a, b)$, then $f$ increases on $[a, b]$.
- If $f' < 0$ at each point of $(a, b)$, then $f$ decreases on $[a, b]$.

A function that is always increasing, or always decreasing, on an interval is said to be *monotonic* on that interval.

**Corollary 2:** functions with $f' \equiv 0$ on an interval are constant on that interval. Functions with the same derivative on an interval differ by a constant.

**Definition:** a function $F(x)$ is an **antiderivative** of $f(x)$ if $F'(x) = f(x)$ for all $x$ in the domain of $f$. Finding an antiderivative is called *antidifferentiation*.

**Example:** find $f$ with $f'(x) = \frac{1}{x+2}$, $x > -2$, whose graph passes through $P(1, 3)$. $f(x) = \ln(x+2) + C$; $f(1) = \ln 3 + C = 3$ gives $C = 3 - \ln 3$.

**Example:** free fall with acceleration $9.8\ \text{m/s}^2$: $v(t) = 9.8t + C_1$ and $s(t) = 4.9t^2 + C_1t + C_2$. From rest at height 0: $v(t) = 9.8t$, $s(t) = 4.9t^2$. Propelled downward at 1 m/s: $v(t) = 9.8t + 1$, $s(t) = 4.9t^2 + t$.

## 4.3 Connecting f′ and f″ with the Graph of f

**First Derivative Test for Local Extrema** (for continuous functions). Suppose $c$ is a critical point:

- $f'$ changes from positive to negative at $c$ $\Rightarrow$ local maximum at $c$;
- $f'$ changes from negative to positive at $c$ $\Rightarrow$ local minimum at $c$;
- $f'$ does not change sign at $c$ $\Rightarrow$ no extremum at $c$.

Endpoints follow the same logic on a half-open interval: at a left endpoint $a$, $f' < 0$ nearby gives a local maximum and $f' > 0$ nearby gives a local minimum; at a right endpoint $b$ the inequalities reverse.

**Tip:** a critical point where $f'$ is zero but does not change sign (e.g. $f(x) = x^3$ at $x = 0$) gives *no* extremum. Also remember the derivative may fail to exist at a local extremum (a cusp such as $f(x) = x^{2/3}$ at $x = 0$).

**Definition (concavity):** the graph of a differentiable function $y = f(x)$ is (a) **concave up** on an open interval $I$ if $y'$ is increasing on $I$; (b) **concave down** on $I$ if $y'$ is decreasing on $I$.

**Concavity test:** the graph of a twice-differentiable function $y = f(x)$ is (a) concave up on any interval where $y'' > 0$; (b) concave down on any interval where $y'' < 0$.

**Definition (point of inflection):** a point where the graph has a tangent line and where the concavity changes.

**Tip:** at an inflection point $y''$ is zero *or* undefined, but $y'' = 0$ alone does not guarantee an inflection point (check that the concavity actually changes, as in $y = x^4$ at $x = 0$).

**Example:** find all inflection points of $y = e^{-x^2}$. $y'' = e^{-x^2}(4x^2 - 2) = 0$ at $x = \pm\frac{1}{\sqrt{2}}$, and the sign of $y''$ changes at both, so $\left(\pm\frac{1}{\sqrt{2}}, e^{-1/2}\right)$ are the inflection points.

**Second Derivative Test for Local Extrema:**

1. If $f'(c) = 0$ and $f''(c) < 0$, then $f$ has a local maximum at $x = c$.
2. If $f'(c) = 0$ and $f''(c) > 0$, then $f$ has a local minimum at $x = c$.
3. If $f''(c) = 0$, the test is inconclusive: fall back to the First Derivative Test.

**Example:** $f(x) = x^3 - 12x - 5$: $f'(x) = 3x^2 - 12 = 0$ at $x = \pm 2$; $f''(x) = 6x$. $f''(2) = 12 > 0$ gives a local minimum $f(2) = -21$; $f''(-2) = -12 < 0$ gives a local maximum $f(-2) = 11$.

**Summary table:**

| | concave up ($f'' > 0$) | concave down ($f'' < 0$) |
|---|---|---|
| $f' > 0$ | increasing, concave up | increasing, concave down |
| $f' < 0$ | decreasing, concave up | decreasing, concave down |
| $f' = 0$ | local min (by 2nd derivative test) | local max (by 2nd derivative test) |

## 4.4 Modelling and Optimisation

**Strategy for solving max–min problems:**

1. **Understand the problem.** Read carefully; identify the quantity to be optimised.
2. **Develop a mathematical model.** Draw a picture, label the important parts, introduce variables, and write a function whose extreme value is sought.
3. **Graph the function.** Find the domain; determine which values of the variable make sense in the problem.
4. **Identify critical points and endpoints.** Find where the derivative is zero or fails to exist.
5. **Solve the model.** If unsure, confirm with another method (e.g. a graph).
6. **Interpret the solution.** Translate back into the problem setting and check the units.

**Example:** two real numbers whose sum is 20 and whose product is as large as possible: maximise $P(x) = x(20 - x)$ on $(-\infty, \infty)$. $P'(x) = 20 - 2x = 0$ at $x = 10$; $P'' = -2 < 0$ confirms a maximum. The numbers are 10 and 10, product 100.

**Example:** an open-top box from a 20-by-25-inch sheet, made by cutting congruent squares of side $x$ from the corners:

$$V(x) = x(25 - 2x)(20 - 2x), \qquad 0 < x < 10$$

$V'(x) = 12x^2 - 180x + 500 = 0$ gives $x = \frac{45 - \sqrt{525}}{6} \approx 3.68$ in, and $V(3.68) \approx 820.53\ \text{in}^3$.

**Example:** a one-litre cylindrical can using the least material: minimise $S = 2\pi r^2 + 2\pi rh$ subject to $\pi r^2h = 1000$. Solving $h = \frac{1000}{\pi r^2}$ and setting $\frac{dS}{dr} = 0$ yields $h = 2r$, i.e. the height equals the diameter, with $r = \sqrt[3]{500/\pi} \approx 5.42$ cm and $h \approx 10.84$ cm.

**Tip:** profit = revenue − cost. To maximise profit, maximise $p(x) = r(x) - c(x)$ via $p'(x) = 0$. To minimise *average* cost, minimise $\bar c(x) = \frac{c(x)}{x}$ using its own derivative: a different equation from minimising cost itself!

## 4.5 Linearisation and Newton's Method

**Idea:** differentiable curves are locally linear: near the point of tangency, the tangent line is a good stand-in for the curve.

**Definition (linearisation):** if $f$ is differentiable at $x = a$, the linearisation of $f$ at $a$ is

$$L(x) = f(a) + f'(a)(x - a)$$

and $f(x) \approx L(x)$ is the standard linear approximation of $f$ at $a$. The point $x = a$ is the centre of the approximation.

**Example:** $f(x) = \sqrt{1+x}$ at $a = 0$: $L(x) = 1 + \frac{x}{2}$, so $\sqrt{1.02} \approx 1.01$. (In general $(1+x)^k \approx 1 + kx$ near $x = 0$; this is how Feynman estimated numbers like $1.002^5$ mentally.)

**Tip:** the approximation is only trustworthy *near* the centre. Using $g(x) = \sqrt{x}$ centred at $x = 1$ to approximate $\sqrt{1.02}$ works, but centring matters: pick the centre as close as possible to the target.

**Definition (differentials):** let $y = f(x)$ be differentiable. The differential $dx$ is an independent variable, and

$$df = dy = f'(x)\,dx$$

The approximate change in $f$ when $x$ changes from $a$ to $a + dx$ is $df = f'(a)\,dx$.

**Tip:** the rules mirror differentiation: $d(x + y) = dx + dy$, $d(xy) = y\,dx + x\,dy$, $d\left(\frac{x}{y}\right) = \frac{y\,dx - x\,dy}{y^2}$.

**Example:** the radius of a circle grows from $a = 10$ m to $10.1$ m. $dA = 2\pi a\,dx = 2\pi(10)(0.1) = 2\pi \approx 6.28\ \text{m}^2$, while the true change is $\Delta A = \pi(10.1^2 - 10^2) \approx 6.33\ \text{m}^2$: close, because $dx$ is small.

**Newton's Method:** to solve $f(x) = 0$ numerically, guess a first approximation $x_0$, then iterate

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

Each step is the $x$-intercept of the tangent line (the linearisation) at the current guess.

**Example:** solve $x^3 + x - 1 = 0$: with $x_0 = 1$, $x_1 = 1 - \frac{1}{4} = \frac{3}{4}$, and the iteration converges to $x \approx 0.6823$.

**Tip:** Newton's Method does *not* always converge: a poor starting point can cycle, jump to a different root, or hit a horizontal tangent ($f'(x_n) = 0$). Sketch the graph first to choose $x_0$ sensibly.

## 4.6 Related Rates

**Idea:** if two quantities are related by an equation and both change with time, differentiating the equation with respect to $t$ relates their rates of change.

**Strategy for solving related-rates problems:**

1. **Understand the problem.** Identify the variable whose rate you seek and the variable(s) whose rate you know.
2. **Develop a model.** Draw a picture and label it; distinguish *constants* from quantities that change over time.
3. **Write an equation** relating the variable whose rate you seek to the variable(s) whose rate you know.
4. **Differentiate both sides implicitly with respect to $t$** (the Chain Rule is essential).
5. **Substitute values** for the time-dependent quantities, and only *after* differentiating.
6. **Interpret the solution** in the problem's units, with the correct sign.

**Example (balloon):** a balloon rises straight up from a field, tracked by a range finder 500 ft from the lift-off point. When the elevation angle is $\theta = \frac{\pi}{4}$ and $\frac{d\theta}{dt} = 0.14$ rad/min, how fast is the balloon rising? With $h = 500\tan\theta$,

$$\frac{dh}{dt} = 500\sec^2\theta\,\frac{d\theta}{dt} = 500\cdot 2\cdot 0.14 = 140\ \text{ft/min}$$

**Example (police cruiser):** a cruiser approaches a right-angled intersection from the north at 60 mph, chasing a car moving east. When the cruiser is 0.6 mi north and the car is 0.8 mi east, radar shows the distance between them increasing at 20 mph. With $s^2 = x^2 + y^2$ and $s = 1$: $2s\frac{ds}{dt} = 2x\frac{dx}{dt} + 2y\frac{dy}{dt}$. Signs matter: the cruiser is moving *toward* the intersection, so $\frac{dy}{dt} = -60$:

$$20 = 0.8\frac{dx}{dt} + 0.6(-60) \implies \frac{dx}{dt} = \frac{20 + 36}{0.8} = 70\ \text{mph}$$

**Example (conical tank):** water runs into a conical tank (point down, height 10 ft, base radius 5 ft) at $9\ \text{ft}^3/\text{min}$. How fast is the water level rising when the water is 6 ft deep? By similar triangles $r = \frac{h}{2}$, so $V = \frac{1}{3}\pi r^2h = \frac{\pi}{12}h^3$ and

$$\frac{dV}{dt} = \frac{\pi}{4}h^2\frac{dh}{dt} \implies \frac{dh}{dt} = \frac{9}{\frac{\pi}{4}(36)} = \frac{1}{\pi} \approx 0.32\ \text{ft/min}$$

**Example (ladder):** a 3 m ladder leans against a house; the base slides away, and when the base is 1 m from the house it moves at 2 m/s. With $x^2 + y^2 = 9$: $x\frac{dx}{dt} + y\frac{dy}{dt} = 0$, so at $x = 1$, $y = \sqrt{8}$: $\frac{dy}{dt} = -\frac{1\cdot 2}{\sqrt{8}} = -\frac{1}{\sqrt{2}}$ m/s. The negative sign means the top slides *down*.

**Tip:** the single most common mistake is substituting numerical values *before* differentiating. Keep everything symbolic until the differentiation step is complete.
