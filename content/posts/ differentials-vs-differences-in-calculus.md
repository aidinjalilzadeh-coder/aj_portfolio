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

When you're evaluating an integral, say finding the area under some function $f(x)$ from $x=a$ to $x=b$. The first thing you write is the integral expression with the usual notations and conventions; something like: $\int\_{a}^{b} f(x)dx$. By instinct, you (and I too) know that any integral expression needs a $dx$ or $dt$ if $f$ is a function of time. We were told constantly that if we miss the $dx$ then the whole expression will be wrong and won't make sense. But, did you ever wonder why?! Here I will try to get to the bottom of $dx$, the so-called ***differential*** of $x$, and to find out where it comes from.

## Derivative, Tangent Line & Linear Approximation

The differentials stem from the definition of first derivative where we often see or write: $dy/dx=f'(x)$. The invention of calculus is mainly attributed to Issac Newton (1642-1727), where he was tryingFundamental Theorem of Calculus states that integration and differentiation are inversely related and this is why we see $dx$ or $dt$ on the expression of integrals.

<figure> 
  <img src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/dydx_diag_2.png" alt="brief description">
  <figcaption>Figure 1. Typical curve and tangent line diagram</figcaption>
</figure>

The diagram in Figure 1 must be familiar to anyone who's done calculus. In fact this is a schematic depiction of tangent line drawn to a curve at a general point $(x,f(x))$ on the curve. This is how the very first description/definition of instantaneous rate of change (Newton) and the slope of tangent line (Leibniz) began in the mid to late 17th century (1665-1684). The common narrative is that Newton and Leibniz worked independently and at some stage they had brief correspondence exchanging ideas. Apparently, Newton shut Leibniz down - we shall see why.

Look at the diagram again. The point $x$ is incremented by a finite distance $\delta x>0$ to the right, i.e.** in the direction of increasing** $x$. On the curve, this new point $x+\delta x$ corresponds to $f(x+\delta x)$. Let's do some math:

$$

(1)\kern{1.1em} f(x+\delta x) =  f(x) + \Delta y = f(x) + \delta y + \epsilon; \quad \small{\\(\delta x, \delta y: \textsf{finite non-zero values}\\)}

$$

On the left hand side, if we ignore the error$\text{ —}$ since in practice we might not know the magnitude of $\epsilon \text{ —}$ then we can derive an approximation for:

$$

(2)\kern{1.1em} f(x+\delta x)  \approx  f(x) + \delta y= \tilde{f}(x+\delta x); \quad \small{\\(\textsf{approximation if we ignore the error}\\)}

$$

In fact $\tilde{f}(x+\delta x)$ is an approximation of $f(x+\delta x)$, i.e. the value given by the tangent line instead of the actual curve$\text{ —}$ hence the term ***linear approximation***. Now forget about the $\tilde{f}$ and let's see if we can modify $(2)$ further. It turns out we can, have a look at the equation below: 

$$

(3)\kern{1.1em} f(x+\delta x)  \approx  f(x) + f'(x) \delta x; \quad \small{\\( \textsf{can you see why?}\\)}

$$

OK - our goal here is NOT to define the derivative; instead we assume we know the value of $f'(x)$ and from the diagram $f'(x)=\delta y/ \delta x$ (you know why?) We also know $f(x)$, that is the function value at point $x$. In other words we don't have the explicit rule of $y=f(x)$. Using what we know we wish to ***approximate*** the value of $f(x+\delta x)$. Hence the only equation at our disposal is the **equation of tangent line**. So as you see in the diagram we can only calculate $\tilde{f}$ at $x+\delta x$. Obviously, compared to the true value, the tangent line may over- or under-estimate $f(x+\delta x)$; hence the error $(\epsilon)$.
