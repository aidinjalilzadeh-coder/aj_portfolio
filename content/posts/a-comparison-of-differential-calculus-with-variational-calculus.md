---
title: Optimisation with Variational Calculus
slug: Comparison of Differential Calculus with Variational Calculus
summary: Differential and variational calculus are both involved with some form of optimisation.
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-06-01T00:00:00.000Z
tags:
  - cat-research
  - stationary paths
  - principle of least action
  - brachistochrone curve
draft: false
---

## Newtonian Calculus

For many who encountered it during their academic years, the word calculus conjures up memories of differentiation and integration rules, or computing areas under curves. But the most compelling part—at least for me—has always been optimisation: finding the maxima, minima, and saddle points of a function. Just as linear algebra revolves around vectors and matrices, and group theory revolves around sets, differential calculus revolves around the humble function $y=f(x)$. Assuming that we operate over the real numbers, $f$ can be single-variable: $f:\mathbb{R} \rightarrow \mathbb{R}$ or multivariate: $f:\mathbb{R}^n \rightarrow \mathbb{R}$ where the input is a vector in $\mathbb{R}^n$.

Now, let's do calculus. suppose we have a single-variable function $y=f(x)$ and $x=a$ is an extremum. Then it is necessary to have $f'(a)=0$. But this condition alone is not sufficient — unless $f'$ changes sign at $a$, we may have a stationary point that is not an extremum. So we check the sign of $f''(a)$, and I'm sure the rest can be quite boring. This, in essence, is the whole procedure for finding extrema in differential calculus.

For multivariate function $f:\mathbb{R}^n \rightarrow \mathbb{R}$, the condition for an extremum is the same in spirit: set $\nabla f=\mathbf{0}$. The gradient itself points in the direction of **steepest ascent** — move along it and the function increases most rapidly; move against it and you descend fastest. That simple geometric fact is the engine behind **gradient descent**, the workhorse optimisation algorithm used to train nearly every modern machine learning and deep learning model — from linear regression to large neural networks. In practice, we rarely solve $\nabla f=\mathbf{0}$ directly. Instead, we take small, iterative steps down the gradient, updating parameters incrementally until we reach a valley. The procedure scales to millions of parameters, yet the core idea remains beautifully simple: *follow the slope until you reach the bottom!*

**This is a very interesting not to mention exciting field that deserves its own separate post!** Something like: *A modern day application of differential calculus*.

## Variational Calculus - Historical Remarks

The birth of variational calculus owes itself to a single, elegant problem: the **brachistochrone**  — the curve of shortest time. In 1696, Johann Bernoulli posed a challenge: find the curve joining two distinct points in space such that a point mass, moving under gravity alone, traverses the path in the shortest possible time. By 1697, solutions had been produced independently by Newton, Leibniz, l'Hôpital, and Johann's younger brother Jakob Bernoulli — each approaching the question from a different angle, yet all arriving at the same surprising answer: **the cycloid**. However, Jakob Bernoulli's solution is deemed the most profound for recognising the **variable curve** nature of this problem. This meant that the cycloid had to be singled out from all possible curves joining the two points — and here, the calculus of variations was ignited!

There is, of course, a half-century gap between Jakob Bernoulli's insights and the formal development of variational calculus as we know it today. The breakthrough finally came in August 1755 when the 19-year-old Lagrange proposed his **purely analytic** and **algebraic method** for solving variational problems like the brachistochrone. This was revealed in a letter to Euler — a mentor whom the young Lagrange admired greatly.

It is worth noting that in 1744, Euler had already published his treatise *Methodus inveniendi* ("a method of finding"), a collection of variational problems that effectively founded the field. It was groundbreaking work: Euler unified a range of problems under a single discipline. But his treatment remained heavily geometric and cumbersome, demanding advanced insight and considerable skill. The stage was set for a new approach — and Lagrange delivered it. The name **variational calculus** (*calculi variationum*) was officially announced for the field by Euler in a 1756 lecture — after he had fully adopted Lagrange's analytic method for his own subsequent work. The title became commonly used in the early 1800's, whereas previously the variational problems were classified under the broader heading of the *isoperimetric methods*.

## The Mathematics of Variational Calculus

What Euler did in his remarkable 1744 treatise — prior to Lagrange's letter — was to identify a variational problem by its so-called *variable curve property*. On the other hand, his solutions remained highly intricate and complex — nothing like the modern day variational calculus. So let's walk through a simple optimisation problem and see Lagrange's analytic method in action — the very method that shaped the calculus of variations as we know it.

We know that the **shortest path** connecting two distinct points in 2-D or 3-D space is a **straight line**. This rather trivial fact is indeed a variational problem which goes back all the way to Euclid (fl. c. 300 BC). He proves it in his *Elements*, **Book I**, by first establishing the triangle inequality: *in any triangle, each side is shorter than the sum of the other two*. It was a clever proof for its time, but it was limited to polygonal paths only — for he had no way to calculate the length of a curved path. In other words, the proof was incomplete. In 1728, Johann Bernoulli assigned this very problem as homework to Euler. Euler, well versed in differential calculus and comfortable with infinitesimals, treated the curves as the limit of a polygon with infinitesimal sides. He did prove it — but again, the generality was lost!

**OK! let's get on with the proper proof.**

<figure> 
  <img src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/ShortestPath.png" 
  alt="Shortest Path"
  style="width: 50%; max-width: 600px; height: auto;">
  <figcaption>Figure 1: The shortest path between two points is a straight line</figcaption>
</figure>
Without loss of generality let's consider the 2-D Cartesian plane and two distinct points $A$ and $B$ on it. Let $y(x)$ be any curve that passes through $A$ and $B$ (**Figure 1**). Recall the formula for the curve length:

$$(1) \qquad \qquad L \lbrack y \rbrack = \int\_a^b \sqrt{1+(y')^2} \kern{0.25em} dx$$

There is a subtlety: the value of $L$ varies with $y$, i.e. depending on which curve is plugged into $L$. So, we can think of $L$ as a function, **whose inputs are real-valued functions** like $y(x)$, and the output is a positive real number. Entities like $L$ are called **functional**. A little bit more formal description of functionals would be the following:

$$
\begin{aligned}
L: C^1 \lbrack a,b \rbrack & \longrightarrow \mathbb{R^{>0}}  \\

y(x) & \mapsto \int\_a^b F(x,y,y') \kern{0.25em} dx
\end{aligned}
$$

In plain English, $L$ maps a function from the space of all continuous functions $C^1 \lbrack a,b \rbrack$ defined over the interval $\lbrack a,b \rbrack$ with continuous first derivatives. The expression $F(x,y,y')$ is called **the Lagrangian**. Now, the goal is to minimise the functional $L$, i.e. find a particular curve $y(x)$ for which $L \lbrack y \rbrack$ is the smallest. So the unknown here is the function $y(x)$ and therefore we should compute and solve:
$$
(2)  \qquad \qquad \frac{d}{dy} L \lbrack y \rbrack =\frac{d}{dy} \int\_a^b F(x,y,y') \kern{0.25em} dx = 0
$$
Equation $(2)$ is equivalent to solving $f'(x)=0$ in differential calculus in order to determine the extreme points.

I'm going to fast forward and go straight to the final result that $(2)$ yields. The detail that I'm omitting here is easily retrievable from sources online or textbooks. I'm sure it'll be a great deal of fun for you to understand the whole process - Not that difficult, I promise!

Applying the variational derivative ($d/dy$) in $(2)$ gives the following equation, which is famously referred to as the **Euler-Lagrange Equation:**

$$
(3)  \qquad \qquad \frac{d}{dx} \left( \frac{\partial F}{\partial y'} \right) - \frac{\partial F}{\partial y} = 0
$$

This is saying that if $y$ is an extremal function (min or max) of the functional $L \lbrack y \rbrack$ then it must satisfy the differential equation $(3)$, hence the name: *Euler-Lagrange equation*. To be precise, the Euler-Lagrange equation is a second-order ordinary differential equation for the unknown function $y$. The optimal curve $y$ that is obtained via this ode is called a **stationary path**, the counterpart of **stationary point** from the differential calculus.

## The Shortest Path problem

Recall the functional $(1)$ that computes the distance from $A$ to $B$ depending on the path $y$ we choose:

$$(1') \qquad \qquad L \lbrack y \rbrack = \int\_a^b \sqrt{1+(y')^2} \kern{0.25em} dx \implies F(x,y,y') = \sqrt{1+(y')^2} .$$

Now, let's stick the Lagrangian function $F(x,y,y') = \sqrt{1+(y')^2}$ into the Euler-Lagrange equation. Notice that $F$ depends directly on $y'$ only, hence from $(3)$, $ \frac{\partial F}{\partial y} = 0$, and we just need to evaluate the first term:

$$
\begin{aligned}
\frac{d}{dx} \left( \frac{\partial F}{\partial y'} \right) & = \frac{d}{dx} \left( \frac{\partial }{\partial y'} (1+(y')^2)^{1/2} \right) \\
& = \frac{d}{dx}\left( \frac{y'}{\sqrt{1+(y')^2}}\right)=0 \implies \frac{y'}{\sqrt{1+(y')^2}}=C
\end{aligned}
$$

As you see evaluating and simplifying the first term of Euler-Lagrange equation results in the fact that $\frac{y'}{\sqrt{1+(y')^2}}$ is constant. You can rearrange this expression so that you make $y'$ the subject:

$$ (y'(x))^2 = \frac{C^2}{1-C^2}$$,
which eventually implies that $y'(x)$ is constant.

<div style="text-align: right;">$\blacksquare$</div> 
