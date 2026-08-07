---
title: Numerical Quadrature of Degree Zero
slug: Numer_Quad
summary: This is how I start numerical integration in my numerical analysis courses.
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-07-27T00:00:00.000Z
tags:
  - cat-education
  - numerical integration
  - numerical analysis
  - quadrature
  - euler's method
draft: true
---

# Why?

After taking a comprehensive calculus course, you might think to yourself that \textit{"there is no integration problem I cannot solve".} In fact, I thought the same until I got into mathematical modelling and realised that not everything is as nice and straightforward as our homework problems back in *Calculus 101*. Sometimes, if not often, we might have to evaluate tricky integrals or compute the area under a curve whose equation has no explicit (closed form) anti-derivative. Hence, we resort to the numerical approximation.

This is not it! There are few cases in which there is explicit anti-derivative and we can compute the area by applying the Fundamental Theorem of Calculus. However, for a different purpose we must use numerical approximation. See the example below:

$$
\int\_{0}^{1} \frac{4}{1+x^2} , \text{d}x = \left.4\tan^{-1}(x)\right|\_0^1 = 4\left(\tan^{-1}(1)-\tan^{-1}(0)\right) = \pi
$$

So, as you see, it is an easy integral to work out and the **exact answer** is $\pi$. But $\pi$ is not a rational number, and if you want to estimate it up to a certain number of decimal points, then you must do so numerically. This means you pretend this integral has no closed form answer and hence you apply an approximation scheme.

Hopefully, this gives you an idea of why and when numerical integration (quadrature) is required. In the next section I will lay out the **simplest** and **slowest** numerical quadrature by taking advantage of Riemann sums. Keep in mind the highlighted terms above: *simplest and slowest!* But, first let's review two important results from calculus.

# Revisiting the Mean Value Theorem and Taylor Series

***Note. This is a hands-on (pen and paper) activity and assumes familiarity with the core concepts of calculus as typically covered in a first course. The aim is to refresh your memory and assess your current understanding of these two topics.***

<div style="text-align: right;">$\blacksquare$</div>
