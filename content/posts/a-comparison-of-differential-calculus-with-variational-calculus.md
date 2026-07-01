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
