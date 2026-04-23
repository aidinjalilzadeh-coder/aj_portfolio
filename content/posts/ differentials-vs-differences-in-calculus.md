---
title: Differentials vs Differences
slug: dx-vs-deltax
summary: The distinction between $dx$ and $\delta x$.
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-04-16T00:00:00.000Z
tags:
  - cat-education
  - calculus
  - differential calculus
  - integral calculus
  - infinitesimals
  - $dx$ vs $\delta x$
---

## Foreword

When you're evaluating an integral, say finding the area under some function $f(x)$ from $x=a$ to $x=b$. The first thing you write is the integral expression with the usual notations and conventions; something like: $\int\_{a}^{b} f(x)dx$. By instinct, you (and I too) know that any integral expression needs a $dx$ or $dt$ if $f$ is a function of time. We were told constantly that if we miss the $dx$ then the whole expression will be wrong and won't make sense. But, did you ever wonder why?! Here I will try to get to the bottom of $dx$, the so-called differential of $x$, and find out what it stands for.

## Derivative, Tangent Line & Linear Approximation

The differentials stem from the definition of first derivative where we often see or write: $dy/dx=f'(x)$. Fundamental Theorem of Calculus states that integration and differentiation are inversely related and this is why we see $dx$ or $dt$ on the expression of integrals.

<figure> 
  <img src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/dydx_diag_2.png" alt="brief description">
  <figcaption>Figure 1. Typical curve and tangent line diagram</figcaption>
</figure>

The diagram in Figure 1 must be familiar to anyone who's done calculus. In fact this is a schematic depiction of tangent line drawn to a curve at a general point $(x,f(x))$. We then increment $x$ by a finite distance $\delta x$ to the right, i.e.** in the direction of increasing** $x$. On the curve, this new point $x+\delta x$ corresponds to $f(x+\delta x)$. Note that this point can be higher than $f(x)$ or lower and will make no difference in the way we calculate the derivative at $x$, i.e. $f'(x)$. 
