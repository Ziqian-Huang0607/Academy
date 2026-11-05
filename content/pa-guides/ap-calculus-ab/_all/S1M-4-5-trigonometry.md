# S1M-4 5 Trigonometry

> From the Grade 10 Resource Department's Semester 1 Midterm Calculus AP review guide (PA). Writers: Daniel Chen 10-8. Editor: Aman 10-5. Range: Pre-calc and AP Calc until Chapter 4: Applications of Derivatives. Student-made reference material: where it differs from class, follow class.

## 5.1 Trigonometric Identities

Before starting trigonometry, here is a list of very useful transformation formulas. These are the simplifications most commonly applied in trigonometry problems, and knowing how to derive them is very useful in the exam.

$$1 + \sin\alpha = \left(\sin\frac{\alpha}{2} + \cos\frac{\alpha}{2}\right)^2$$

$$1 + \sin\alpha = 1 + \cos\left(\frac{\pi}{2} - \alpha\right) = 2\cos^2\left(\frac{\pi}{4} - \frac{\alpha}{2}\right)$$

$$1 + \cos\alpha = 2\cos^2\frac{\alpha}{2} \qquad 1 - \cos\alpha = 2\sin^2\frac{\alpha}{2}$$

- $\sin^2\alpha + A\sin\alpha\cos\alpha + \cos^2\alpha$ → use the half-angle formulas.
- $A\sin\alpha + B\cos\alpha$ → solve the system $A\sin\alpha + B\cos\alpha = N$ together with $\sin^2\alpha + \cos^2\alpha = 1$.

You should also be familiar with the standard trigonometric functions: their domains and ranges; their monotonicity, symmetry points and axes; their translations, reflections and dilations; and their geometric definitions.

Start by recognising the common reciprocal relationships and ratio identities; this is relatively straightforward. The other relationships can all be deduced from the unit circle. For example, the relationship with negatives is a reflection across the $x$-axis, and the cofunction relationships are a reflection in $y = x$. Common formulas include:

$$\sin(-\theta) = -\sin\theta \qquad \cos(-\theta) = \cos\theta \qquad \sin\left(\frac{\pi}{2} - \theta\right) = \cos\theta$$

The Pythagorean relationships are also important (especially for the derivatives above): $\sin^2 x + \cos^2 x = 1$, $1 + \tan^2 x = \sec^2 x$, $1 + \cot^2 x = \csc^2 x$.

**Addition and difference formulas** (derived from the unit circle):

$$\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$$

$$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$$

$$\tan(\alpha \pm \beta) = \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}$$

**Tip:** always check your quadrants when determining the final angle after adding or subtracting angles. You may need to bound the quadrant using the inequality rules for addition and subtraction.

**Tip:** when working with the angles of a triangle $A, B, C$, note their bounds and use $\sin(\alpha + \beta) = \sin(\pi - \alpha - \beta)$, $\cos(\alpha + \beta) = -\cos(\pi - \alpha - \beta)$, $\tan(\alpha + \beta) = -\tan(\pi - \alpha - \beta)$.

**Double angle formulas** (derived similarly):

$$\sin 2\alpha = 2\sin\alpha\cos\alpha$$

$$\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha$$

$$\tan 2\alpha = \frac{2\tan\alpha}{1 - \tan^2\alpha}$$

**Tip:** expressions like $1 \pm \sin x$, $1 \pm \cos x$, $\sin x \pm \cos x$, as well as $A\sin^2 x$, $A\sin x\cos x$ and $A\cos^2 x$, can all be simplified using the double angle formulas.

**Tip:** when a problem has symmetric angles such as $\frac{\pi}{2} - \alpha$ and $\frac{\pi}{2} + \alpha$, consider constructing $2\alpha$.

The half-angle formulas are not really needed, but be familiar with their derivations (especially $\tan\frac{\alpha}{2}$). The universal ("omnipotent") substitution formula is useful if a question explicitly asks for $\tan\frac{\alpha}{2}$, but otherwise use it sparingly.

**Tip:** when stuck, consider dividing the whole expression by $\sin^2\alpha + \cos^2\alpha$, as in deriving $\tan\frac{\alpha}{2}$.

Whenever you see a linear combination of sine and cosine, think of the **reference angle formula**: extract the Pythagorean length of the coefficients and apply the addition formulas.

$$a\sin\theta + b\cos\theta = R\sin(\theta + \varphi), \qquad R = \sqrt{a^2 + b^2}, \qquad \tan\varphi = \frac{b}{a}$$

From this, the range of $a\sin\theta + b\cos\theta$ is $\left[-\sqrt{a^2+b^2}, \sqrt{a^2+b^2}\right]$.

**Tip:** to find the range of higher-order expressions, reduce them using the double (half) angle formulas.

For expressions of the form $\sin\alpha \pm \sin\beta$ or $\cos\alpha \pm \cos\beta$, consider the sum-to-product or product-to-sum formulas.

**Sum-to-product formulas:**

$$\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2} \qquad \sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}$$

$$\cos A + \cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2} \qquad \cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}$$

**Product-to-sum formulas:**

$$\sin A\cos B = \tfrac{1}{2}\left[\sin(A+B) + \sin(A-B)\right] \qquad \cos A\sin B = \tfrac{1}{2}\left[\sin(A+B) - \sin(A-B)\right]$$

$$\cos A\cos B = \tfrac{1}{2}\left[\cos(A+B) + \cos(A-B)\right] \qquad \sin A\sin B = \tfrac{1}{2}\left[\cos(A-B) - \cos(A+B)\right]$$

You do not need to memorise these. A short trick: for sum-to-product, write the angles as $A + B$ and $A - B$ first, then in the result replace the first with $\frac{A+B}{2}$ and the second with $\frac{A-B}{2}$. For product-to-sum, put $0.5\cdot 2$ in front, then add and subtract a term to simplify. Questions often need several product-to-sum steps, and some need a term added before the process starts.

For review, try the quite difficult $\sin 1^\circ + \sin 2^\circ + \cdots + \sin 90^\circ$, and the even harder $\sin 1^\circ\cdot\sin 2^\circ\cdots\sin 90^\circ$. Only try these when you are ready: they need every tool covered here.

## 5.2 Trigonometric Equations

**Tip:** the number one rule: don't forget $+k\pi$ (or $+2k\pi$), $k \in \mathbb{Z}$, and make sure you compute the period term correctly.

The types of trigonometric equations vary, but share the same general ideas:

- Use direct substitution if only one type of trigonometric function is present.
- A linear or quadratic combination needs the reference angle formula.
- Any equation of the form $\sin/\cos/\tan\ \alpha = \sin/\cos/\tan\ \beta$ requires you to discuss cases.
- Try a $t$ substitution with $\tan\frac{\alpha}{2}$ or $\sin x \pm \cos x$.

**Definition (bearings):** a compass bearing gives a position measured from North or South towards East or West; N 30° E is an example. True bearings are simply angles measured clockwise from north.

That's it for trigonometry and the maths review. Good luck on your midterms, and don't forget the benchmark test!
