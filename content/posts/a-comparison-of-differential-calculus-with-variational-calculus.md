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
Without loss of generality let's consider the 2-D Cartesian plane and two distinct points $A$ and $B$ on it. Let $y(x)$ be equation of any curve that passes through $A$ and $B$ (**Figure 1**). Recall the formula for the curve length:

$$ L \lbrack y \rbrack = \int\_a^b \sqrt{1+(y')^2} dx$$
There is a subtlety: the value of $L$ varies with $y$, i.e. depending on which curve is plugged into $L$. So, we can think of $L$ as a function, **whose inputs are real-valued functions** like $y(x)$, and the output is a positive real number. Entities like $L$ are called **functional**. A little bit more formal description of functionals would be the following:
\begin{equation}
\begin{align}
L: C^1 \lbrack a,b \rbrack & \longrightarrow \mathbb{R^{>0}}  \\
y(x) & \longrightarrow \int\_a^b F(x,y,y')  dx
\end{align}
\end{equation}

$L$ maps a function from $C^1 \lbrack a,b \rbrack$ onto $\mathbb{R^{>0}}$, where $C^1$ is the space of all continuous functions over the interval $\lbrack a,b \rbrack$ with continuous first derivatives.

<div style="text-align: right;">$\blacksquare$</div>
