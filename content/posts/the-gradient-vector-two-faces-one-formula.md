---
title: 'The Gradient Vector: Two Faces, One Formula '
slug: gradient
summary: 'Common source of confusion: which gradient direction to follow? Normal to the surface or normal to the level curves?'
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-07-01T00:00:00.000Z
tags:
  - cat-education
  - multivariate calculus
  - gradient vector
  - steepest ascent/descent
---

# The Gradient Vector: Two Faces, One Formula

One of the first concepts that is introduced in any multivariate calculus course is the **gradient** vector of a scalar field — that is a function of the form $f: \mathbb{R}^n \to \mathbb{R}$, which takes a vector and returns a single number (scalar). The gradient vector of $f$ is denoted by $\nabla f$.

When $n=1$, the graph is a curve in the 2D plane. When $n=2$, it becomes a **surface** in 3D space. For higher dimensions, we lose the ability to visualize, but the gradient concept remains the same.

Yet despite its simplicity, the gradient is also one of the most commonly **misunderstood** ideas in calculus — because students are told two seemingly contradictory things:

$\qquad \bullet \kern{0.25em}$ *The gradient points uphill.*

$\qquad \bullet \kern{0.25em}$ *The gradient is perpendicular to the surface.*

Both are true — but they are talking about **different** gradient vectors.

The confusion often surfaces when students try to implement *gradient descent* to minimise a function or fit a model to data. Which gradient do you use? Where does it point? And how do you even walk in that direction?

In this article, I will unpack the geometry, clear up the confusion, and show you exactly when to walk — and when to fly!

## Surfaces and Level Curves

3D surfaces can be visualised in many ways, and each plot reveals something about the geometry of the shape. In **Figure 1** (left panel), we see the surface plot of
$$(0) \qquad z=-\left(\frac{x^2}{4}+\frac{y^2}{9}\right)+4$$
which forms a dome‑shaped hill. The peak occurs at the domain point $(0,0)$ where $f(0,0)=4$. This is the absolute maximum of the function — hence the label **"peak"**.

<figure style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img 
    src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/NewSurface.png" 
    alt="3D surface plot of the dome"
    style="width: 45%; max-width: 500px; height: auto;"
  >
  <img 
    src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/newSCtrs.png" 
    alt="Contour plot with level curves"
    style="width: 45%; max-width: 500px; height: auto;"
  >
  <figcaption style="width: 100%; text-align: center; margin-top: 8px;">
    <strong>Figure 1:</strong> Left: 3D surface of the dome. Right: contour plot with level curves.
  </figcaption>
</figure>

The plot on the right is known as the **contour map**. Each of the yellow curves — drawn in the 2D plane — is called a **level curve**. These curves correspond to different heights (or $z$-values) on the surface. For instance, the level curve at the peak is just a single point, $(0,0)$. As we move outward, the corresponding $z$-values decrease — we are moving away from the peak and descending the hill.

Notice also that as we walk further out, the level curves become tighter, indicating a rapid descent. In other words, a single step changes your elevation markedly. Conversely, when walking toward the peak, the level curves are more widely spaced. This means you need to walk a longer distance to gain a unit of height. This is the landscape our walker/hiker will navigate. As we will see, the gradient knows exactly which way to go — and whether to take a long gentle stride or a short steep one.

Now, the million dollar question: *Which gradient vector should you follow for the fastest ascent/descent?* Hold on! What do I mean by "which gradient vector"? Is there more than one? The answer is YES! Let me show you how.

We can write our function — or any function — in two forms:

$$
\begin{aligned}
(1)& \qquad  z = f(x,y)  &\qquad (\textsf{explicit form})\\
(2)& \qquad F(x,y,z)=0  \to  f(x,y)-z=0  & \qquad (\textsf{implicit form})
\end{aligned}
$$
In the explicit form the output is isolated — written directly in terms of the independent variables. In our example, $z=f(x,y)$, and so the gradient vector lives in the domain:

$$(3) \qquad \nabla f = (\partial f/\partial x, \partial f/\partial y)$$

This is a 2D vector — it lives in the $xy$-plane!

The key to mastering the gradient is learning to switch between these two perspectives: the contour map and the 3D surface. A point on the contour map corresponds to a point on the surface vertically aligned with it — either above or below the $xy$-plane, depending on the sign of $z = f(x,y)$. For instance, the point $(0,4)$ on the map corresponds to $(0,4,2.22)$ on the surface. The explicit gradient vector, which lives in the $xy$-plane, guides your steps on the map. But when you lift that same point onto the surface, the geometry changes. See Figure 2.

This ability to move between the two views is crucial because it builds a bridge between the abstract formula and the geometric reality. Without it, the gradient remains a collection of symbols rather than a tool for understanding slopes, rates, and directions. Yet this connection is rarely emphasised in introductory courses — and that is precisely where confusion takes root. Students see the gradient defined in the $xy$-plane, then later encounter the normal vector in 3D, and assume they are the same object. They are not. Mistaking one for the other leads to incorrect interpretations, misapplied algorithms, and a lingering sense that the math is somehow off.

Let us now obtain the normal to the surface using the implicit form (2). Unlike the explicit form (1), in the implicit form the variable $z$ is not the output — it is one of the three independent variables of $F$. The equation $F(x,y,z) = 0$ represents a surface (a collection of points) in $\mathbb{R}^3$ for which:

$$
f(x,y) - z = 0 \quad \text{or equivalently} \quad -\left(\frac{x^2}{4} + \frac{y^2}{9}\right) + 4 - z = 0.
$$

Now we can compute $\nabla F$, which is a 3D vector:

$$
(4) \qquad \nabla F = \left( \frac{\partial F}{\partial x}, \frac{\partial F}{\partial y}, \frac{\partial F}{\partial z} \right)=\left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, -1 \right).
$$
Let us pause to unpack this result. The first two components of $\nabla F$ are simply the partial derivatives of $f$ with respect to $x$ and $y$ — they match the components of the 2D gradient $\nabla f$ in $(3)$. The third component, however, is $-1$. Why? Because in the implicit form $F(x,y,z) = f(x,y) - z=0$, the variable $z$ appears only in the term $-z$ as $f$ depends on $x$ and $y$ only. Thus differentiating $F$ with respect to $z$ gives $-1$. This third component is the **make-or-break** detail. Without it, $\nabla F$ would collapse into a 2D vector. With it, $\nabla F$ gains a vertical dimension pointing *out of* the surface, not along it!

***The ability to project points and vectors between these two views is what transforms the gradient from a formula into an intuition — and it is the key to resolving the seemingly two-faced puzzle once and for all!!***

The following plots bring these ideas to life. The surface equation is the same as in $(0)$ and the point $A=(0,4)$ is on the domain and its reflection onto the surface becomes the point $A'$. I am going to leave the rest of the details for you to figure out. In case of any difficulties, please [email](https://aidinjalilzadeh.com/index.html#contact) me. You can also view a more compact post in my [LinkedIn](www.linkedin.com/in/aidinjalilzadeh) page. I recommend (strongly) that you go through that after reading this article.

<figure style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
  <img 
    src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/grad_ctrs_xy.png" 
    alt="3D surface plot of the dome"
    style="width: 45%; max-width: 500px; height: auto;"
  >
  <img 
    src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/grad_ctrs.png" 
    alt="Contour plot with level curves"
    style="width: 45%; max-width: 500px; height: auto;"
  >
  <img 
    src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/grad_surf.png" 
    alt="Contour plot with level curves"
    style="width: 45%; max-width: 500px; height: 45%;"
  >
  <figcaption style="width: 100%; text-align: center; margin-top: 8px;">
    <strong>Figure 2:</strong> Different views of the gradient vector for a fixed point. The thick orange curve on the lower plot is the path of steepest change. Takes you uphill (rapidly) from $\textsf{ A'}$ if you follow the curve along the blue arrow.
  </figcaption>
</figure>

<div style="text-align: right;">$\blacksquare$</div>
