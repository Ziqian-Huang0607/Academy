# S1M-2 3 Derivatives

> From the Grade 10 Resource Department's Semester 1 Midterm Calculus AP review guide (PA). Writers: Daniel Chen 10-8. Editor: Aman 10-5. Range: Pre-calc and AP Calc until Chapter 4: Applications of Derivatives. Student-made reference material: where it differs from class, follow class.

**Definition:** the derivative of $f$ at $x = a$ is

$$f'(a) = \lim_{h\to 0}\frac{f(a+h) - f(a)}{h}$$

provided the limit exists. Equivalently, $f'(a) = \lim_{x\to a}\frac{f(x) - f(a)}{x - a}$.

**Tip:** when asked for a specific value such as $f'(1)$, substitute $a = 1$ directly into the definition.

**Definition:** a function is differentiable if it is differentiable at every point of its **domain**.

Besides $f'(x)$, other notations for the derivative of $y = f(x)$ are $y'$, $\frac{dy}{dx}$, $\frac{df}{dx}$ and $\frac{d}{dx}f(x)$.

**Definition (one-sided derivatives):** the right-hand derivative at $x = a$ is $f'_+(a) = \lim_{h\to 0^+}\frac{f(a+h) - f(a)}{h}$, and the left-hand derivative is $f'_-(a) = \lim_{h\to 0^-}\frac{f(a+h) - f(a)}{h}$.

## 3.1 Differentiability

**Definition:** $f$ is differentiable at $x = c$ if and only if $f(c)$ is defined and $f'_-(c) = f'_+(c) = L$ with $L \in \mathbb{R}$.

A function $f$ is **not differentiable** at $x = a$ if

$$f'(a) = \lim_{h\to 0}\frac{f(a+h) - f(a)}{h}$$

fails to exist as a finite real number. This happens in exactly one of these cases:

1. **Discontinuity:** $\lim_{x\to a} f(x) \ne f(a)$ (or the limit fails to exist).
2. **Corner:** $f'_-(a), f'_+(a) \in \mathbb{R}$ but $f'_-(a) \ne f'_+(a)$.
3. **Cusp:** $f'_-(a) = -\infty$ and $f'_+(a) = +\infty$ (or vice versa).
4. **Vertical tangent:** $f'_-(a) = f'_+(a) = \pm\infty$.

**Tip:** a vertical tangent *has* a tangent line, whereas a cusp does not.

**Tip:** questions often ask for all points in the **domain** of $f(x)$; examine the domain strictly.

The **symmetric difference quotient** is

$$\text{NDER}(f(x), a) = \frac{f(a+h) - f(a-h)}{2h}$$

It is not an accurate approximation of the gradient at a corner, cusp or discontinuity. Differentiability implies continuity, but the converse is not necessarily true.

**Theorem (Intermediate Value Theorem for Derivatives):** if $a$ and $b$ are any two points in an interval on which $f$ is differentiable, then $f'$ takes on every value between $f'(a)$ and $f'(b)$.

## 3.2 Rules for Differentiation

You should know all the differentiation rules, and ideally their derivations:

$$\frac{d}{dx}(c) = \lim_{h\to 0}\frac{c - c}{h} = \lim_{h\to 0}\frac{0}{h} = 0$$

$$\frac{d}{dx}(x^n) = \lim_{h\to 0}\frac{(x+h)^n - x^n}{h} = \lim_{h\to 0}\frac{nx^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n}{h} = \lim_{h\to 0}\left[nx^{n-1} + \binom{n}{2}x^{n-2}h + \cdots + h^{n-1}\right] = nx^{n-1}$$

$$\frac{d}{dx}[c\,f(x)] = \lim_{h\to 0}\frac{c\,f(x+h) - c\,f(x)}{h} = c\lim_{h\to 0}\frac{f(x+h) - f(x)}{h} = c\,f'(x)$$

$$\frac{d}{dx}[f(x) \pm g(x)] = \lim_{h\to 0}\frac{f(x+h) - f(x)}{h} \pm \lim_{h\to 0}\frac{g(x+h) - g(x)}{h} = f'(x) \pm g'(x)$$

$$\frac{d}{dx}[f(x)g(x)] = \lim_{h\to 0}\left[f(x+h)\frac{g(x+h) - g(x)}{h} + g(x)\frac{f(x+h) - f(x)}{h}\right] = f'(x)\,g(x) + f(x)\,g'(x)$$

$$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \lim_{h\to 0}\frac{1}{g(x+h)g(x)}\left[g(x)\frac{f(x+h) - f(x)}{h} - f(x)\frac{g(x+h) - g(x)}{h}\right] = \frac{f'(x)\,g(x) - f(x)\,g'(x)}{[g(x)]^2}$$


## 3.3 Derivatives of Trigonometric Functions

$$\frac{d}{dx}(\sin x) = \lim_{h\to 0}\frac{\sin x\cos h + \cos x\sin h - \sin x}{h} = \lim_{h\to 0}\left[\sin x\cdot\frac{\cos h - 1}{h} + \cos x\cdot\frac{\sin h}{h}\right] = \sin x\cdot 0 + \cos x\cdot 1 = \cos x$$

$$\frac{d}{dx}(\cos x) = \lim_{h\to 0}\frac{\cos x\cos h - \sin x\sin h - \cos x}{h} = \lim_{h\to 0}\left[\cos x\cdot\frac{\cos h - 1}{h} - \sin x\cdot\frac{\sin h}{h}\right] = -\sin x$$

$$\frac{d}{dx}(\tan x) = \frac{d}{dx}\left[\frac{\sin x}{\cos x}\right] = \frac{\cos x\cdot\cos x - \sin x\cdot(-\sin x)}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x$$

$$\frac{d}{dx}(\cot x) = \frac{d}{dx}\left[\frac{\cos x}{\sin x}\right] = \frac{-\sin^2 x - \cos^2 x}{\sin^2 x} = -\frac{1}{\sin^2 x} = -\csc^2 x$$

$$\frac{d}{dx}(\sec x) = \frac{d}{dx}\left[\frac{1}{\cos x}\right] = \frac{0\cdot\cos x - 1\cdot(-\sin x)}{\cos^2 x} = \frac{\sin x}{\cos^2 x} = \sec x\tan x$$

$$\frac{d}{dx}(\csc x) = \frac{d}{dx}\left[\frac{1}{\sin x}\right] = \frac{0\cdot\sin x - 1\cdot\cos x}{\sin^2 x} = -\frac{\cos x}{\sin^2 x} = -\csc x\cot x$$

Memorise these results thoroughly, and their derivations.

## 3.4 Chain Rule

The chain rule is the fundamental tool for differentiating composite functions.

**Definition:** if $f$ is differentiable at the point $u = g(x)$ and $g$ is differentiable at $x$, then the composite function $(f\circ g)(x)$ satisfies $(f\circ g)'(x) = f'(g(x))\cdot g'(x)$. Alternatively, if $y = f(u) = f(g(x))$, then $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$.

## 3.5 Implicit Differentiation

By the chain rule, for some $f(y)$, $\frac{df}{dx} = \frac{df}{dy}\cdot\frac{dy}{dx}$. So for any equation containing $x$ and $y$ you may differentiate both sides with respect to $x$, then collect the terms containing $\frac{dy}{dx}$ on one side and solve.

## 3.6 Derivatives of Inverse Functions

**Theorem:** if $f$ is differentiable at every point of an interval $I$ and $\frac{df}{dx}$ is never zero on $I$, then $f$ has an inverse, and $f^{-1}$ is differentiable at every point of the interval $f(I)$.

To find the derivative of an inverse, write the function in terms of $x$ and apply implicit differentiation.

**1.** $\frac{d}{dx}\arcsin x = \frac{1}{\sqrt{1-x^2}}$

*Derivation:* let $y = \arcsin x$. Then $x = \sin y$ and $-\frac{\pi}{2} \le y \le \frac{\pi}{2}$.

$$\frac{dx}{dy} = \cos y > 0, \qquad \frac{dy}{dx} = \frac{1}{\cos y} = \frac{1}{\sqrt{1-\sin^2 y}} = \frac{1}{\sqrt{1-x^2}}$$

**2.** $\frac{d}{dx}\arccos x = -\frac{1}{\sqrt{1-x^2}}$

*Derivation:* let $y = \arccos x$. Then $x = \cos y$ and $0 \le y \le \pi$.

$$\frac{dx}{dy} = -\sin y < 0, \qquad \frac{dy}{dx} = -\frac{1}{\sin y} = -\frac{1}{\sqrt{1-\cos^2 y}} = -\frac{1}{\sqrt{1-x^2}}$$

**3.** $\frac{d}{dx}\arctan x = \frac{1}{1+x^2}$

*Derivation:* let $y = \arctan x$. Then $x = \tan y$ and $-\frac{\pi}{2} < y < \frac{\pi}{2}$.

$$\frac{dx}{dy} = \sec^2 y = 1 + \tan^2 y = 1 + x^2, \qquad \frac{dy}{dx} = \frac{1}{1+x^2}$$

**4.** $\frac{d}{dx}\operatorname{arccot} x = -\frac{1}{1+x^2}$

*Derivation:* let $y = \operatorname{arccot} x$. Then $x = \cot y$ and $0 < y < \pi$.

$$\frac{dx}{dy} = -\csc^2 y = -(1 + \cot^2 y) = -(1 + x^2), \qquad \frac{dy}{dx} = -\frac{1}{1+x^2}$$

**5.** $\frac{d}{dx}\operatorname{arcsec} x = \frac{1}{|x|\sqrt{x^2-1}}$

*Derivation:* let $y = \operatorname{arcsec} x$. Then $x = \sec y$ and $y \in [0, \frac{\pi}{2}) \cup [\pi, \frac{3\pi}{2})$.

$$\frac{dx}{dy} = \sec y\tan y, \qquad \frac{dy}{dx} = \frac{1}{\sec y\tan y}$$

Since $\tan y = \pm\sqrt{\sec^2 y - 1} = \pm\sqrt{x^2-1}$ and $\sec y = x$, the sign is absorbed by $|x|$:

$$\frac{dy}{dx} = \frac{1}{|x|\sqrt{x^2-1}}$$

**6.** $\frac{d}{dx}\operatorname{arccsc} x = -\frac{1}{|x|\sqrt{x^2-1}}$

*Derivation:* let $y = \operatorname{arccsc} x$. Then $x = \csc y$ and $y \in (0, \frac{\pi}{2}] \cup (\pi, \frac{3\pi}{2}]$.

$$\frac{dx}{dy} = -\csc y\cot y, \qquad \frac{dy}{dx} = -\frac{1}{\csc y\cot y}$$

Since $\cot y = \pm\sqrt{\csc^2 y - 1} = \pm\sqrt{x^2-1}$ and $\csc y = x$, the sign is absorbed by $|x|$:

$$\frac{dy}{dx} = -\frac{1}{|x|\sqrt{x^2-1}}$$

**Compact summary:**

| Function | Derivative | Function | Derivative |
|---|---|---|---|
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ | $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ | $\operatorname{arccot} x$ | $-\frac{1}{1+x^2}$ |
| $\operatorname{arcsec} x$ | $\frac{1}{\lvert x\rvert\sqrt{x^2-1}}$ | $\operatorname{arccsc} x$ | $-\frac{1}{\lvert x\rvert\sqrt{x^2-1}}$ |

## 3.7 Derivatives of Exponential and Logarithmic Functions

**1.** $\frac{d}{dx}e^x = e^x$

*Derivation:* by definition,

$$\frac{d}{dx}e^x = \lim_{h\to 0}\frac{e^{x+h} - e^x}{h} = e^x\lim_{h\to 0}\frac{e^h - 1}{h} = e^x\cdot 1 = e^x$$

**2.** $\frac{d}{dx}a^x = a^x\ln a$

*Derivation:* write $a^x = e^{x\ln a}$ and use the chain rule:

$$\frac{d}{dx}a^x = \frac{d}{dx}e^{x\ln a} = e^{x\ln a}\cdot\ln a = a^x\ln a$$

**3.** $\frac{d}{dx}\ln x = \frac{1}{x}$

*Derivation:* let $y = \ln x$. Then $x = e^y$, so by implicit differentiation

$$1 = e^y\frac{dy}{dx} = x\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{x}$$

**4.** $\frac{d}{dx}\log_a x = \frac{1}{x\ln a}$

*Derivation:* use the change-of-base formula $\log_a x = \frac{\ln x}{\ln a}$:

$$\frac{d}{dx}\log_a x = \frac{1}{\ln a}\cdot\frac{d}{dx}\ln x = \frac{1}{\ln a}\cdot\frac{1}{x} = \frac{1}{x\ln a}$$

## 3.8 Higher-Order Derivatives

**Definition:** if $y = f(x)$ is differentiable, the *second derivative* of $f$ is the derivative of the first derivative:

$$f''(x) = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{d^2y}{dx^2} = y''$$

Similarly the third derivative is $f'''(x) = y''' = \frac{d^3y}{dx^3}$, and in general the $n$-th derivative is

$$f^{(n)}(x) = y^{(n)} = \frac{d^ny}{dx^n}$$

**Tip:** geometrically, $f''$ measures how the *slope* $f'$ is changing, i.e. the concavity of $f$. You will use $f''$ heavily in the applications chapter; treat the notations $f''$, $y''$ and $\frac{d^2y}{dx^2}$ as interchangeable.

**Tip:** to find a second derivative for an implicitly defined curve, you can differentiate the relation *twice* instead of differentiating the solved expression for $\frac{dy}{dx}$ again. Watch the product rule: from $2y\,y' = 2x$,

$$2(y')^2 + 2y\,y'' = 2 \implies y'' = \frac{1 - (y')^2}{y}$$

then substitute the known $y' = \frac{x}{y}$.

## 3.9 L'Hôpital's Rule

**Motivation:** many limits are derivatives in disguise. For example

$$\lim_{h\to 0}\frac{\sqrt[3]{8+h} - 2}{h}$$

is exactly $f'(8)$ for $f(x) = \sqrt[3]{x}$, so the limit is $\frac{1}{3}\cdot 8^{-2/3} = \frac{1}{12}$. There are three legitimate methods: (1) recognise the difference quotient, (2) rationalise using $a^3 - b^3 = (a-b)(a^2+ab+b^2)$, (3) L'Hôpital's Rule. You should be able to use all three.

**Theorem: L'Hôpital's Rule (first form).** If $f(a) = g(a) = 0$, $f'(a)$ and $g'(a)$ exist, and $g'(a) \ne 0$, then

$$\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{f'(a)}{g'(a)}$$

**Theorem: L'Hôpital's Rule (stronger form).** If $f(a) = g(a) = 0$, $f$ and $g$ are differentiable on an open interval $I$ containing $a$, and $g'(x) \ne 0$ on $I$ for $x \ne a$, then

$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$

provided the latter limit exists.

**Theorem: L'Hôpital's Rule ($\infty/\infty$ form).** If $f(x)$ and $g(x)$ both approach infinity as $x \to a$, then

$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$

provided the latter limit exists.

**Note:** (I) L'Hôpital's Rule applies to one-sided limits as well. (II) The constant $a$ may also be $\pm\infty$.

**Indeterminate forms:** $\frac{0}{0}$, $\frac{\infty}{\infty}$, $\infty - \infty$, $0\cdot\infty$, and the exponential forms $1^\infty$, $0^0$, $\infty^0$.

**Strategy:**

- $\frac{0}{0}$ or $\frac{\infty}{\infty}$: apply the rule directly (check it really is indeterminate first!).
- $\infty - \infty$: combine the terms into a single fraction to obtain $\frac{0}{0}$ or $\frac{\infty}{\infty}$.
- $0\cdot\infty$: rewrite as a quotient, e.g. $f\cdot g = \frac{f}{1/g}$.
- $1^\infty$, $0^0$, $\infty^0$: take logarithms and use $\lim_{x\to a}\ln f(x) = L \implies \lim_{x\to a} f(x) = e^L$.

**Tip:** differentiate the numerator and the denominator *separately*. Never differentiate the quotient $\frac{f}{g}$ as a whole: that is the quotient rule, not L'Hôpital's Rule.

**Examples:**

$$\lim_{x\to 0}\frac{\sqrt{1+x} - 1 - \frac{x}{2}}{x^2} = \lim_{x\to 0}\frac{\frac{1}{2\sqrt{1+x}} - \frac{1}{2}}{2x} = \lim_{x\to 0}\frac{-\frac{1}{4}(1+x)^{-3/2}}{2} = -\frac{1}{8}$$

$$\lim_{x\to 0^+}\frac{\sin x}{x^2} = \lim_{x\to 0^+}\frac{\cos x}{2x} = +\infty$$

From the left the limit is $-\infty$, so the two-sided limit does not exist: L'Hôpital reveals the one-sided behaviour.

$$\lim_{x\to\infty}\frac{\ln x}{2\sqrt{x}} = \lim_{x\to\infty}\frac{1/x}{1/\sqrt{x}} = \lim_{x\to\infty}\frac{1}{\sqrt{x}} = 0$$

$$\lim_{x\to 1}\left(\frac{1}{\ln x} - \frac{1}{x-1}\right) = \lim_{x\to 1}\frac{(x-1) - \ln x}{(x-1)\ln x} = \lim_{x\to 1}\frac{1 - \frac{1}{x}}{\ln x + \frac{x-1}{x}} = \lim_{x\to 1}\frac{\frac{1}{x^2}}{\frac{1}{x} + \frac{1}{x^2}} = \frac{1}{2}$$
