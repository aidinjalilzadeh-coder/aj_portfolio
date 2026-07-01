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

For many who encountered it during their academic years, the word calculus conjures up memories of differentiation and integration rules, or computing areas under curves. But the most compelling part—at least for me—has always been optimisation: finding the maxima, minima, and saddle points of a function. Just as linear algebra revolves around vectors and matrices, and group theory revolves around sets, differential calculus revolves around the humble function $y=f(x)$. Assuming that we operate on the realm of real numbers, $f$ can be single variable: $f:\mathbb{R} \rightarrow \mathbb{R}$ or multivariate: $f:\mathbb{R}^n \rightarrow \mathbb{R}$ where the input is a vector in $\mathbb{R}^n$. Suppose we have a single variable function $y=f(x)$ and $x=a$ is an extremum of $f$; therefore we must have $f'(a)=0$ and $f''(a)\neq 0$. Now, if $f''(a)=0$ then we may have a point of inflection at 
