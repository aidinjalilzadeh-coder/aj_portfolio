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

For multivariate function $f:\mathbb{R}^n \rightarrow \mathbb{R}$, the condition for an extremum is the same in spirit: set $\nabla f=\mathbf{0}$. The gradient itself points in the direction of **steepest ascent** — move along it and the function increases most rapidly; move against it and you descend fastest. That simple geometric fact is the engine behind **gradient descent**, the workhorse optimisation algorithm used to train nearly every modern machine learning and deep learning model — from linear regression to large neural networks. In practice, we rarely solve $\nabla f=\mathbf{0}$ directly. Instead, we take small, iterative steps down the gradient, updating parameters incrementally until we reach a valley. The procedure scales to millions of parameters, yet the core idea remains beautifully simple: follow the slope until you reach the bottom.

## Variational Calculus

The birth of variational calculus owes itself to a single, elegant problem: the **brachistochrone**  — the curve of shortest time. In 1696, Johann Bernoulli posed a challenge: find the curve joining two distinct points in space such that a point mass, moving under gravity alone, traverses the path in the shortest possible time. By 1697, solutions had been produced independently by Newton, Leibniz, l'Hôpital, and Johann's younger brother Jakob Bernoulli — each approaching the question from a different angle, yet all arriving at the same surprising answer: **the cycloid**. However, Jakob Bernoulli's solution is deemed the most profound for recognising the **variable curve** nature of this problem. This meant that the cycloid had to be singled out from all possible curves joining the two points — and here, the calculus of variations was ignited!

There is of course a half a century gap between Jakob Bernoulli's endeavours and the formal development of variational calculus as we know it today. The breakthrough came in August 1755 when the 19-year old Lagrange — proposed
