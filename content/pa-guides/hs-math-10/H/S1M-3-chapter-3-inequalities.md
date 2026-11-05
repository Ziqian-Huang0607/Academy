# S1M-3 Chapter 3: Inequalities

> From the Grade 10 Resource Department's Semester 1 Midterm Maths H review guide (PA). Writers: Jessica 10-6. Editor: Jessica 10-6. Range: Chapter 1, Chapter 2, Chapter3, 4.1~4.3. Student-made reference material: where it differs from class, follow class.

**Linear Inequalities Absolute Value**

- Quick Review:
- If $a<b\to$ $a+c<b+c$
- If $a<b,c>0\to ac<bc$
- If $a<b,c<0\to ac>bc$
- Linear Inequalities:
- A solid dot: endpoint included in the graph
- An open dot: endpoint not included in the graph
- Combined inequality: its graph is the intercept of the graphs
- Empty set: set that contains no elements
  - The two inequalities contradict each other
  - Ex: $6<x<1$
- Absolute Value:
- The absolute value of a number $x$, denoted $|x|$,is interpreted geometrically the distance from $x$ to zero in either direction on the number line
- Another definition of $|x|$: $\left| x \right|=\left\{ \begin{aligned}\text{ xifx }\ge 0 \\ -\text{ xifx }<0\end{aligned} \right.\to \left| x+yi \right|=\sqrt{{x}^{2}+{y}^{2}}$
- Geometric method: $\left| ab \right|=|a|\times |b|$
- Triangle inequality: $\left| a+b \right|\le \left| a \right|+|b|$
  - Because $a$ and $b$ can be negative, making $\left| a+b \right|<\left| a \right|+|b|$
- $|x|$ can never be negative
  - Directly write no solution
  - Ex: $\left| 2x-3 \right|<0$
- $|x|$ always larger than 0 and negative numbers
  - Directly write all real numbers
  - Ex: $\left| 2x-3 \right|>-1$

**Polynomial Inequalities in One Variable**

- Polynomial Inequalities
- Let $P(x)$ be any polynomial. Then $P\left( x \right)<0$ and $P\left( x \right)>0$ are called polynomials inequalities
- Method 1: Use a sign graph of $P(x)$
- The sign graph of a polynomial $P(x)$ is a number line diagram that marks all roots of $P(x)$ and labels all interval between consecutive roots with the sign, positive or negative, of $P(x)$ in that interval
- Ex: $\left( 1-x \right)\left( x-3 \right)\left( x-5 \right)>0$
      - Simplify: $\left( x-1 \right)\left( x-3 \right)\left( x-5 \right)<0$
      - Find real roots and label $1,3,5$ on a number line
      - Test the value in each interval divided by the roots to label the sign of $P(x)$
      - $$x>5:\left( 6-1 \right)\left( 6-3 \right)\left( 6-5 \right)=\text{ positive }$$
      - $$3<x<5:\left( 4-1 \right)\left( 4-3 \right)\left( 4-5 \right)=\text{ negative }$$
      - $$1<x<3:\left( 2-1 \right)\left( 2-3 \right)\left( 2-5 \right)=\text{ positive }$$
      - $$x<1:\left( 0-1 \right)\left( 0-3 \right)\left( 0-5 \right)=\text{ negative }$$
      - Shade intervals where $\left( x-1 \right)\left( x-3 \right)\left( x-5 \right)<0$
      - Shade $x<1$ and $3<x<5$
- Method 2: Analyze a graph of $P(x)$
- $P\left( x \right)<0$ when the graph is below the x-axis
- $P\left( x \right)>0$ when the graph is above the x-axis
- Be careful about $\le$ and $\ge$, as well as the values that $x$ cannot be $(x\ne y)$
- Ex: $\left( 1-x \right)\left( x-3 \right)\left( x-5 \right)>0$
      - Simplify: $(x-1)(x-3)(x-5)<0$
      - Draw out the graph
      - Label out the parts that is below the x-axis
- Other notes:
- Not all polynomials change sign at a zero. A polynomial$P(x)$will not change sign at a zero if $c$ corresponds to the squared factor ${(x-c)}^{2}$
- Sign graph can be used to solve inequalities involving functions of the form $\frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials or products of polynomials

**Polynomial Inequalities in Two Variables**

- Polynomial Inequalities in Two Variables:
- Solutions to equations in two variables → ordered pair(s) of numbers
- Solutions to inequalities in two variables → ordered pair(s) of numbers → form the graphs
- Linear inequalities:
  - $y>mx+k$ → any point $(x,y)$above the line with the equation $y=mx+k$
  - $y<mx+k$ → any point $(x,y)$ below the line with the equation $y=mx+k$
- Quadratic inequalities:
  - $y>{ax}^{2}+bx+c$ → any point $(x,y)$ above the parabola $y={ax}^{2}+bx+c$
  - $y<{ax}^{2}+bx+c$ → any point $(x,y)$ below the parabola $y={ax}^{2}+bx+c$
- Be aware of whether you are working on a number line or on a coordinate plane

**Linear Programming**

- Linear Programming:
- Definition: A mathematical model consisting of a linear function to be optimized (maximized or minimized) and a set of inequalities representing the restrictions on resources
- Objective Function —The function to be maximized or minimized in a linear program;
  - This function might represent amounts of money earned or spent, goods manufactured or delivered, or any of a variety of other quantities.
- Constraints —The linear inequalities; the system of linear inequalities;
- Feasible Region — The solution of the system of linear inequalities.
  - If a linear program has a solution, it will occur at a vertex (corner point) of the feasible region.
  - If there are multiple solutions, at least one of them will occur at a vertex.
- To solve a linear program:
- Solve the system of linear inequalities.
- Determine the coordinates of the vertices of the feasible region.
  - That is, solve the system of equations consisting of the lines whose intersection is the vertex.
- Evaluate the objective function to be optimized at each vertex.
- Identify the maximum or minimum value of the objective function.
- The Corner-Point Principle:
- A maximum or minimum value of a linear expression $P=Ax+By$, if it exists, will occur at a corner point of the feasible region.
  - The principle applies only to convex polygonal regions.
  - Convex: every line segment joining two points of the region is contained in the region.
