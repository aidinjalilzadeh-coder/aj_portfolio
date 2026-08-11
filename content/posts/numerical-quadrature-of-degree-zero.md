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
draft: false
---

## Why Numerical Integration?

After taking a comprehensive calculus course, you might think to yourself that *"there is no integration problem I cannot solve"*. In fact, I thought the same until I got into mathematical modelling and realised that not everything is as nice and straightforward as our homework problems back in *Calculus 101*. Sometimes, if not often, we might have to evaluate tricky integrals or compute the area under a curve whose equation has no explicit (closed form) anti-derivative. Hence, we resort to the numerical approximation.

This is not it! There are few cases in which there is explicit anti-derivative and we can compute the area by applying the Fundamental Theorem of Calculus. However, for a different purpose we must use numerical approximation. See the example below:

$$
\int\_{0}^{1} \frac{4}{1+x^2} , \text{d}x = \left.4\tan^{-1}(x)\right|\_0^1 = 4\left(\tan^{-1}(1)-\tan^{-1}(0)\right) = \pi
$$

So, as you see, it is an easy integral to work out and the **exact answer** is $\pi$. But $\pi$ is not a rational number, and if you want to estimate it up to a certain number of decimal points, then you must do so numerically. This means you pretend this integral has no closed form answer and hence you apply an approximation scheme.

Hopefully, this gives you an idea of why and when numerical integration (quadrature) is required. In the next section I will lay out the **simplest** and **slowest** numerical quadrature by taking advantage of Riemann sums. Keep in mind the highlighted terms above: *simplest and slowest!* But, first let's review two important results from calculus.

## Revisiting the Mean Value Theorem and Taylor Series

***Note. This is a hands-on (pen and paper) activity and assumes familiarity with the core concepts of calculus as typically covered in a first course. The aim is to refresh your memory and assess your current understanding of these two topics.***

## Exploiting Riemann Sums

Let's lay out the problem. The task in hand is to approximate $\int\_{a}^{b} f(t) , \text{d}t$. The function $f(t)$ is expected to be continuous and differentiable (at least once) over the interval $\lbrack a,b \rbrack $. In abstract terms this is equivalent to $f \in \mathcal{C}^1$ $\lbrack a,b \rbrack $.

Now, we must replace $f(t)$ with an approximate value/function, which is easily integrable. A common candidate is to replace $f$ with a polynomial via its Taylor expansion. Interpolation methods such as Hermite are also considered since that also generates a polynomial easy to integrate. The art in implementing numerical methods is to find a right balance between accuracy (low error) and the amount of computation required per iteration. The latter becomes quite critical when you use computer programs to run your scheme.

As our first and naive approach we will let $f(t)$ to be replaced by $f(a)$ for all $t \in$ $\lbrack a,b \rbrack $. Now with this we get:
$$
(1) \qquad    \int\_a^b f(t) , \text{d}t = \int\_a^b f(a), \text{d}t + \mathcal{E}=(b-a)f(a)+\mathcal{E},
$$
where $\mathcal{E}$ is the error— see Fig. 1. The equality $\int\_a^b f(t) , \text{d}t = \int\_a^b f(a), \text{d}t$ holds only if $f(t)$ is a constant function over $\lbrack a,b \rbrack $. A constant function can be thought of a polynomial of **degree zero**. Hence the reason this numerical quadrature is of degree zero.

This does not look very promising but we will improve it. What you see in Eqn. $(1)$ is the **single step** calculation. Before proceeding into multistep scheme, we should study the behaviour of $\mathcal{E}$.

## Local Truncation Error (LTE)

The more precise term for $\mathcal{E}$ is Local Truncation Error (LTE). Let's dig deeper. Write out the $n$-th degree Taylor Series for $f$ over $\lbrack a,b \rbrack$:
$$
f(t) = f(a)+f'(a)(t-a)+\cdots+\frac{1}{n!}f^{(n)}(a) (t-a)^n+\frac{1}{(n+1)!}f^{(n+1)}(\xi(t)) (t-a)^{n+1}, \quad (t \in \lbrack a,b \rbrack)
$$
Now integrate both sides. But before doing this let's compare Eqn. $(1)$ with the Taylor Series above. We see $(1)$ has only two terms, therefore when integrating the Taylor Series we just need to include two terms from the RHS, i.e. we need a Taylor expansion of degree zero:
$$
\begin{aligned}
f(t) &=& f(a)+f'(\xi(t))(t-a) \\
\int\_a^b f(t) \textrm{d}t &=&  \int\_a^b f(a) \textrm{d}t +  \int\_a^b f'(\xi(t))(t-a) \textrm{d}t \\
&=& (b-a)f(a) + \int\_a^b f'(\xi(t))(t-a) \textrm{d}t.
\end{aligned}
$$

<div style="text-align: right;">$\blacksquare$</div>
