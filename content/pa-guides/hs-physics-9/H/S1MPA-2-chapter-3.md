# S1MPA-2 Chapter 3

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Physics H review guide (PA). Writers: Tianyuan 9(6), Dash 9(11). Editor: Serena 9(6). Range: Chapter 2-4. Student-made reference material: where it differs from class, follow class.

### 3.1 Vectors and Scalars

**Vectors** have magnitude and direction, e.g. velocity, displacement, force. Vectors with the same magnitude but different directions are not equal.

**Scalars** have ONLY magnitude, no direction, e.g. speed, distance, temperature.

> Some problems ask for ONLY the magnitude of a vector.

**Velocity, speed, displacement and distance:**

- Displacement is the length from the starting point to the ending point. Velocity = displacement / time. In one motion, displacement is less than or equal to distance.
- Distance is the length of the path the object travelled. Speed = distance / time.

**How to draw one vector:**

1. Draw a coordinate plane with x and y axes, and label the axes (x, y or N, S, E, W).
2. Draw a scale with a 1 cm segment (recommended) and label the scale ratio.
3. Measure and label the angle of the vector to show the direction.
4. Draw to scale, unit by unit, to show the magnitude.
5. Draw an arrow (you can label the vector's magnitude).
6. Write the final vector (away from the labelled arrow) with magnitude and direction, e.g. $\vec R = 3$ m/s @ 30° above horizontal.

**Reminders:**

1. Every vector's magnitude should span AT LEAST 2 units.
2. The arrowhead should not go past the labelled unit.
3. The vector's tail should start from the origin.
4. DON'T FORGET TO LABEL!!!

**Notation:** final answer $\vec R = n$ (unit) $m^\circ$ A of B. Ways to express angles:

1. $m^\circ$ above / below horizontal (often when working with x and y);
2. $m^\circ$ N of W, or other directions (meaning $m^\circ$ toward N starting from W);
3. $m^\circ$ (U, D, L, R) of (+x, +y, −x, −y) (rare: $m^\circ$ from that axis in that direction).

### 3.2 Addition of Vectors: Graphical Methods

**Resultant** ($\vec R$ or $(\text{unit})_R$): the sum of two or more vectors. For magnitudes $v_1 \ge v_2$, the magnitude of the resultant satisfies $v_1 - v_2 \le v_R \le v_1 + v_2$.

The resultant can be smaller than the individual vectors, e.g. when the vectors point in opposite directions.

**Adding vectors by graphing (triangle method):**

1. Draw a coordinate plane (if needed) and a scale (see above).
2. Draw and label the first vector in its given direction and magnitude, with its tail at the origin.
3. Draw and label the second vector with its tail starting from the first vector's tip.
4. Repeat step 3 for any further vectors.
5. Draw the resultant from the origin to the final vector's tip.
6. Measure and label the resultant's length and direction using a ruler and protractor.
7. Calculate the final magnitude using the scale and write the final answer (e.g. $\Delta d_R \approx 3.7\text{ cm} \times \frac{2\text{ m}}{1\text{ cm}} \approx 7.4$ m, so $\Delta \vec d_R \approx 7.4$ m @ 57° N of E).

**Adding vectors by graphing (parallelogram method):** uncommon (check the question's requirements), and used with only two vectors.

1. Repeat steps 1 to 3 of the triangle method.
2. Draw and label the second vector again from the origin (the first vector's tail).
3. Draw and label the first vector again from the second vector's tip.
4. The result is a parallelogram: draw the resultant as the diagonal from the origin.
5. Repeat steps 6 to 7 of the triangle method.

**Special cases:**

1. **The resultant equals 0:** two or more vectors placed tip to tail form a closed shape, so there is no gap between the first and last vector.
2. **The vectors point in opposite directions:** one may be longer than the other, so they overlap when graphed. Label each with a brace "{" and leave space between them to tell them apart.

**Calculation method** (only for two perpendicular vectors):

1. Graph using the triangle method if the question requires a graph.
2. Define the positive directions (often two).
3. Use the Pythagorean Theorem to calculate the resultant's magnitude (the hypotenuse).
4. Use trigonometry to calculate the angle of the resultant's direction.
5. Write the final resultant with magnitude and direction.

### 3.3 Subtraction of Vectors, Multiplication of Vectors by a Scalar

**Negative vectors:** two vectors with the same magnitude but exactly opposite directions.

$$A - B = A + (-B)$$

**Graphing subtraction of vectors:** since $\vec v_1 = \vec v_R + \vec v_2$, we have $\vec v_R = \vec v_1 - \vec v_2$.

1. Place the vectors tail to tail, because $\vec v_2$ should connect $\vec v_1$ and $\vec v_R$.
2. Connect the first vector's tip to the second vector's tip and label it as the resultant.
3. Graph it and write the answer as shown before.

**Multiplying vectors by scalars:** $\vec A \times c$. If the scalar $c$ is negative, the answer's direction reverses.

1. Calculate the answer for the given vector and scalar.
2. Graph it directly (if required) as before.

### 3.4 Adding Vectors by Components

Vectors on a coordinate plane can be broken into horizontal and vertical components.

**Vector resolution:** separating and combining components using trigonometry ($\vec A = \vec A_x + \vec A_y$), where $\sin\theta = \frac{A_y}{A}$ and $\cos\theta = \frac{A_x}{A}$.

**Separating a vector:**

- $A_x = A\cos\theta$ gives the x component of a vector.
- $A_y = A\sin\theta$ gives the y component.

**Combining components:**

- $A = \sqrt{A_x^2 + A_y^2}$ gives the magnitude (from the Pythagorean theorem).
- $\theta = \arctan\left(\frac{A_y}{A_x}\right)$ gives the direction relative to the x-axis ($\tan^{-1}$ on a calculator).

**Solving for a resultant by vector resolution:**

1. Define the positive directions (often one on each axis).
2. Separate the given vectors into components, noting positive and negative directions (draw it if you need to).
3. Sum the components on each axis, keeping track of signs.
4. Solve for the resultant's magnitude and direction using the combining formulas.
5. Write the final resultant as shown previously.

**Worked example** (N and E positive): $\vec A_1 = 50$ m @ 30° N of E, $\vec A_2 = 100$ m @ 60° N of W.

- $A_{1x} = 50\cos 30^\circ = 25\sqrt{3}$ m (E); $A_{1y} = 50\sin 30^\circ = 25$ m (N)
- $A_{2x} = 100\cos 60^\circ = 50$ m (W); $A_{2y} = 100\sin 60^\circ = 50\sqrt{3}$ m (N)
- $A_x = (25\sqrt{3} - 50)$ m $\approx -6.7$ m; $A_y = (25 + 50\sqrt{3})$ m $\approx 111.6$ m
- $A = \sqrt{A_x^2 + A_y^2} \approx 111.8$ m; $\theta = \arctan\left(\left|\frac{A_y}{A_x}\right|\right) \approx 86.5^\circ$, so $\vec A \approx 111.8$ m @ 86.5° N of W

### 3.5 & 3.6 Projectile Motion

- **Projectile:** an object shot through the air.
- **Trajectory:** the curved flight path the projectile travels.
- **Projectile motion:** the combination of two independent, perpendicular motions:
  - horizontal motion: constant velocity (no air resistance);
  - vertical motion: constant acceleration ($g$, gravitational acceleration).
- **Important assumptions:** no contact forces during flight and no air resistance. Therefore $v_{fx} = v_{ix}$, and horizontal motion can use $d = vt$. The velocity is always tangent to the trajectory.

**Maximum height** ($H_{max}$): the highest point the projectile reaches (where $v_y = 0$).

**Level horizontal range** ($R$): horizontal distance travelled when the start and end heights are the same ($\Delta y = 0$). Two complementary launch angles (with the same initial speed) give the same $R$.

**Flight time / hang time** ($t_{flight}$): the time the projectile spends in the air.

**Formulas:**

- $d_x = v_{ix}t$: horizontal distance within a time.
- $h_{max} = \frac{v_{iy}^2}{2g}$: maximum height relative to the initial height, derived from $d = \frac{v_f^2 - v_i^2}{2a}$.
- $t_{highest} = \frac{v_{iy}}{g}$: time to reach the maximum height from the initial position.
- $t_{total} = \frac{2v_{iy}}{g}$: flight time, ONLY WHEN $\Delta y = 0$.
- $R = v_{ix} \times t_{flight} = \frac{v_i^2\sin 2\theta_i}{g}$: level horizontal range, derived from the formulas above.
- $v_f = \sqrt{v_{fy}^2 + v_{ix}^2}$: magnitude of the final velocity before hitting the ground.
- $\theta = \arctan\left(\frac{v_{fy}}{v_{fx}}\right)$: direction of the final velocity before hitting the ground.

**Pro tips:**

- Defining a positive direction keeps your calculations clear.
- If $\Delta y = 0$, use the range formula. If not, use the $d_x$ formula and solve for the total time.
- Use the other kinematic equations for unknown parts; take care to plug in the correct numbers.
- To find the velocity at a moment, use $v_f = v_i + at$ to solve for $v_y$.
- Simplify the question by noting what information is given and what is needed.

### 3.8 Relative Velocity

**Relative velocity:** the velocity of one body relative to another. $\vec v_{AB}$ means the velocity of object A from object B's perspective.

**Basic formulas:**

- $\vec v_{AB} = -\vec v_{BA}$: e.g. when you run past a person, you see them moving backward, and vice versa.
- $\vec v_{AC} = \vec v_{AB} + \vec v_{BC}$: e.g. when you run on a bus, your velocity relative to the road is the sum of your velocity relative to the bus and the bus's velocity.

Questions in one dimension are usually just addition and subtraction.

**Relative velocity in two dimensions** (wind / current problems): if the wind is perpendicular to the motion, use the Pythagorean theorem.

- If the wind is not perpendicular, separate it into components and use vector resolution; these questions work like vector resolution.

**Other problems:** use the two basic formulas to convert between frames and get the final answer, with trigonometry where needed.
