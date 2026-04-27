---
title: Differentials vs Differences
slug: dx-vs-deltax
summary: The distinction between $dx$ and $\delta x$.
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-04-27T13:01:00.000Z
tags:
  - cat-education
  - calculus
  - differential calculus
  - infinitesimals
  - $dx$ vs $\delta x$
  - Newton
  - Leibniz
draft: false
---

## Foreword

When you're evaluating an integral — say, finding the area under a function $f(x)$ from $x = a$ to $x = b$ — the first thing you write is the integral expression with the usual notations and conventions: $\int\_{a}^{b} f(x) , dx$.

By instinct, you — and I too — know that any integral expression needs a $dx$ (or $dt$, if $f$ is a function of time). We were constantly told that if we miss the $dx$, the whole expression will be wrong and won't make sense. But did you ever wonder why? Here I will try to get to the bottom of $dx$ — the so-called ***differential*** of $x$ — and find out where it comes from.

## Derivative, Tangent Line & Linear Approximation

The differentials stem from the definition of the first derivative, where we often see or write $dy/dx = f'(x)$. The Fundamental Theorem of Calculus states that integration and differentiation are inversely related. This is why we also see $dx$ or $dt$ in the expression for integrals.

<figure> 
  <img src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/dydx_diag_2.png" alt="brief description">
  <figcaption>Figure 1: Typical curve and tangent line diagram</figcaption>
</figure>

The diagram in Figure 1 should be familiar to anyone who has studied calculus. In fact, this is a schematic depiction of a tangent line drawn to a curve at a general point $(x, f(x))$ on the curve. This is how the very first descriptions of instantaneous rate of change (Newton) and the slope of the tangent line (Leibniz) began in the mid-to-late 17th century (1665–1684).

The common narrative is that Newton and Leibniz worked independently and, at some stage, had a brief correspondence exchanging ideas. Apparently, Newton shut Leibniz down — we shall see why.

Look at the diagram again. The point $x$ is increased by a finite distance $\delta x > 0$ to the right — i.e., in the direction of increasing $x$. On the curve, this new point $x + \delta x$ corresponds to the function value $f(x + \delta x)$. Let's do some math:

$$
(1) \quad f(x+\delta x) = f(x) + \Delta y = f(x) + \delta y + \epsilon \qquad (\delta x, \delta y \text{ are finite, non-zero values})
$$

On the left-hand side, if we ignore the error — since in practice we might not know the magnitude of $\epsilon$ — then we can derive an approximation:

$$
(2) \quad f(x+\delta x) \approx f(x) + \delta y = \tilde{f}(x+\delta x) \qquad (\text{approximation if we ignore the error})
$$

In fact, $\tilde{f}(x+\delta x)$ is an approximation of $f(x+\delta x)$ — i.e., the value given by the tangent line instead of the actual curve — hence the term ***linear approximation***. Now forget about $\tilde{f}$ and let's see if we can modify (2) further. It turns out we can. Have a look at the equation below:

$$
(3) \quad f(x+\delta x) \approx f(x) + f'(x) , \delta x \qquad (\text{do you see why?})
$$

By rearranging (3), we obtain an approximate expression for the slope of the tangent line at $x$:

$$
(4) \quad f'(x) \approx \frac{f(x+\delta x) - f(x)}{\delta x} \qquad (\text{difference quotient})
$$

Note that the symbolism $f'$ was proposed by Lagrange around the 1760s. He also coined the term ***derivative***!

## Newton vs Leibniz

Newton and Leibniz agreed up to equation (4). The divergence came after they tried to make the approximate value *exact*. Anyone can see from the diagram that as $\delta x$ gets smaller, $\delta y$ begins to shrink, and therefore the error will also shrink markedly. This was literally their justification — very much intuitive and nothing rigorous.

Bear in mind that the concept of limits as we know it today came into existence nearly two centuries after Newton and Leibniz. In other words, there was no solid mathematical theory for computing limits. Even $x \to a$ ($x$ *tends to* $a$) was not defined. So things had to be done intuitively in the 1680s. But no matter what, their methods worked and have stood the test of time.

All right, I digress! Let's get down to the actual dispute. Newton and Leibniz both realised that $\delta x$ must become very small. One may say, "Well, the smallest non-negative number is zero!" But technically this isn't possible, since in (4) we cannot divide by zero.

Therefore, Newton proposed that $\delta x$ become *infinitely small* but never equal to zero — something rather fictitious! Leibniz didn't do any better at justifying an infinitely small quantity. Nonetheless, he invented a notation that is still used to this day.

Newton and his disciples made very little effort to clarify what they meant by "infinitely small," and they went as far as accusing Leibniz of plagiarism. Leibniz was cleared of this accusation in the 1830s.

In 1684, Leibniz published his differential calculus book, and there he introduced a myriad of new terms and notations. First, he coined the term *infinitesimal* to be synonymous with "infinitely small" and described the notation as follows: $\delta x$ represents a finite increment in the variable $x$; once it becomes infinitesimal, it is denoted by $dx$ and called the ***differential*** of $x$.

The symbol he used for the derivative of $f$ with respect to $x$ was $df/dx$. The terminology and symbolism were received quite well in continental Europe during the 18th and 19th centuries and were popularised rapidly.

But Newton's shadow was still hovering over the Royal Society and Cambridge, and none of Leibniz's symbolism was used in Britain for nearly a century after Isaac Newton's death. Some believe this caused stagnation in the development of calculus and mathematical analysis in Britain.

Let's take a look at Leibniz's difference quotient and see how he defined the derivative of a function:

$$
(5) \quad \frac{f(x+\delta x) - f(x)}{\delta x} \approx \frac{\delta y}{\delta x} \qquad (\text{look at the diagram again})
$$

Now, if we allow $\delta x$ to become infinitely small, then we have $dx$, and $\delta y$ (and also $\Delta y$) become $dy$. Recall that in 1684, $\delta x \to 0$ was not yet defined! Now we write (5) in terms of the infinitesimals:

$$
(6) \quad \frac{f(x+dx) - f(x)}{dx} = \frac{dy}{dx} = \frac{df}{dx} \qquad (\text{Finally!})
$$

Leibniz's notation was quite handy, especially in dealing with complicated chain rules with multiple layers of functions. The answer was simple: treat $dy/dx$ as a fraction, just like rational numbers. This upset the Newtonians greatly!

Let's look at an example: suppose $y(x) = x^2 - 4x$ and $x(t) = t^2$; in other words, $y$ depends on $x$ and $x$ depends on $t$. We want to compute the derivative of $y$ with respect to $t$, i.e., $dy/dt$. We don't have an explicit expression connecting $y$ to $t$, but we can compute $dy/dx$ and $dx/dt$ and, treating these two derivatives as fractions, we can multiply and cancel $dx$:

$$
(7) \quad \frac{dy}{dx} \cdot \frac{dx}{dt} = \frac{dy}{\cancel{dx}} \cdot \frac{\cancel{dx}}{dt} = \frac{dy}{dt}
$$

Another advantage of this symbolism was realised in the modern era: differentiation has become mechanical and even "brainless." This means it can be programmed easily and at a low computational cost, say, in machine learning models. Because it involves only a few function evaluations (cheap computation) followed by a series of multiplications (again cheap).

<div style="text-align: right;">$\blacksquare$</div>
