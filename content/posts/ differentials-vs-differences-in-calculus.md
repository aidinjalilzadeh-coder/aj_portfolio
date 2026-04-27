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

When you're evaluating an integral, say finding the area under some function $f(x)$ from $x=a$ to $x=b$. The first thing you write is the integral expression with the usual notations and conventions; something like: $\int\_{a}^{b} f(x)dx$. By instinct, you (and I too) know that any integral expression needs a $dx$ or $dt$ if $f$ is a function of time. We were told constantly that if we miss the $dx$ then the whole expression will be wrong and won't make sense. But, did you ever wonder why?! Here I will try to get to the bottom of $dx$, the so-called ***differential*** of $x$, and to find out where it comes from.

## Derivative, Tangent Line & Linear Approximation

The differentials stem from the definition of first derivative where we often see or write: $dy/dx=f'(x)$. The Fundamental Theorem of Calculus states that integration and differentiation are inversely related and this is why we also see $dx$ or $dt$ on the expression of integrals.

<figure> 
  <img src="https://raw.githubusercontent.com/aidinjalilzadeh-coder/aj_portfolio/main/images/dydx_diag_2.png" alt="brief description">
  <figcaption>Figure 1. Typical curve and tangent line diagram</figcaption>
</figure>

The diagram in Figure 1 must be familiar to anyone who's done calculus. In fact this is a schematic depiction of tangent line drawn to a curve at a general point $(x,f(x))$ on the curve. This is how the very first description/definition of instantaneous rate of change (Newton) and the slope of tangent line (Leibniz) began in the mid to late 17th century (1665-1684). The common narrative is that Newton and Leibniz worked independently and at some stage they had brief correspondence exchanging ideas. Apparently, Newton shut Leibniz down - we shall see why.

Look at the diagram again. The point $x$ is incremented by a finite distance $\delta x>0$ to the right, i.e. ***in the direction of increasing*** $x$. On the curve, this new point $x+\delta x$ corresponds to $f(x+\delta x)$. Let's do some math:

$$

(1)\kern{1.1em} f(x+\delta x) =  f(x) + \Delta y = f(x) + \delta y + \epsilon \quad \small{\\(\delta x, \delta y: \textsf{finite non-zero values}\\)}

$$

On the left hand side, if we ignore the error$\text{ —}$ since in practice we might not know the magnitude of $\epsilon \text{ —}$ then we can derive an approximation for:

$$

(2)\kern{1.1em} f(x+\delta x)  \approx  f(x) + \delta y= \tilde{f}(x+\delta x) \quad \small{\\(\textsf{approximation if we ignore the error}\\)}

$$

In fact $\tilde{f}(x+\delta x)$ is an approximation of $f(x+\delta x)$, i.e. the value given by the tangent line instead of the actual curve$\text{ —}$ hence the term ***linear approximation***. Now forget about the $\tilde{f}$ and let's see if we can modify $(2)$ further. It turns out we can, have a look at the equation below:

$$

(3)\kern{1.1em} f(x+\delta x)  \approx  f(x) + f'(x) \delta x \quad \small{\\( \textsf{do you see why?}\\)}

$$

By rearranging $(3)$, we will have an approximate expression for the slope of the tangent line at $x$:

$$

(4)\kern{1.1em} f'(x) \approx \frac{f(x+\delta x) - f(x)}{ \delta x}  \quad \small{\\( \textsf{difference quotient}\\)}

$$

Note that the symbolism $f'$ was proposed by Lagrange around 1760s. He also coined the term ***derivative*** !

Newton and Leibniz agreed up to equation $(4)$. The divergence came after they tried to make the approximate value, *exact*. Anyone can see from the diagram that as $\delta x$ gets smaller then $\delta y$ begins to shrink and therefore the error will also shrink markedly. This was literally their justification$\text{—}$ very much intuitive and nothing rigorous. Bear in mind that the concept of limits as we know it today came to existence nearly two centuries after Newton and Leibniz. In other words there was no solid mathematical theory for computing limits. Even the meaning of $x \to a$ ($x$ *tends to* $a$) was not defined. So, things had to be done intuitively in the 1680s. But no matter what, their methods worked and stood the test of time, as confirmed by many mathematicians afterwards.

Alright, I digress! Let's get down to the actual dispute. N & L both realised that $\delta x$ must become very small. One may say that: *well, the smallest non-negative number is zero!* But technically it won't be possible since in $(4)$ we can't divide by zero. Therefore Newton proposed $\delta x$ to become infinitely small but never equal to zero, something rather fictitious! Leibniz didn't do any better in terms of justifying an infinitely small quantity but nonetheless he invented a notation, which is being used to date. Newton and his disciples made very little effort to clarify what they meant by infinitely small and they went as far as accusing Leibniz of plagiarism. Leibniz was cleared of this accusation in the 1830s.

In 1684 Leibniz published his differential calculus book and there he introduced a myriad of new terms and notation. Firstly, he coined the term *infinitesimal* to be synonymous to infinitely small and described the notation in the following manner: $\delta x$ represents a finite increment in $x$ variable and once it becomes infinitesimal then it is denoted by $dx$ and called the** *differential*** of $x$. The symbol he used for the derivative of $f$ with respect to $x$ was $df/dx$. The terminology and symbolism was received quite well in the continental Europe during the 18$^{th}$ and 19$^{th}$ century, and was popularised rapidly. But Newton's shadow was still hovering over the Royal Society and Cambridge and none of Leibniz's symbolism was used over in Britain for nearly a century after Issac Newton's death. Some believe this caused stagnation in the development of calculus and mathematical analysis in Britain.

Let's take a look at Leibniz's difference quotient and see how he defined the derivative of a function:

$$

(5)\kern{1.1em}  \frac{f(x+\delta x) - f(x)}{ \delta x} \approx \frac{\delta y}{\delta x}  \quad \small{\\( \textsf{look at the diagram again}\\)}

$$

Now if we allow $\delta x$ to become infinitely small then we'll have $dx$, and $\delta y$ (and also $\Delta y$) becomes $dy$. Recall that in 1684 $\delta x \to 0$ was not yet defined! Now, we write $(5)$ in terms of the infinitesimals:

$$

(6)\kern{1.1em}  \frac{f(x+dx) - f(x)}{ dx} = \frac{dy}{dx}= \frac{df}{dx} \quad \small{\\( \textsf{Finally!!}\\)}

$$

Leibniz's notation was quite handy, specially in dealing with complicated chain rules with multiple layers of functions. The answer was simple: treat $dy/dx$ as a fraction just like rational numbers. This made the Newtonians very much upset! Let's look at an example: suppose we have $y(x)=x²-4x$ and $x(t)=t²$; in other words $y$ depends on $x$ and $x$ depends on $t$. We want to compute derivative of $y$ with respect to $t$, i.e. $dy/dt$. We don't have an explicit expression connecting $y$ to $t$, but we can compute $dy/dx$ and $dx/dt$ and treating these two derivatives as fractions we can multiply and cancel $dx$:

$$

(7)\kern{1.1em}\frac{dy}{dx} \cdot \frac{dx}{dt}=\frac{dy}{\cancel{dx}} \cdot \frac{\cancel{dx}}{dt}=\frac{dy}{dt}

$$

Another advantage of this symbolism was realised in the modern era and that is: differentiation has become mechanical and brainless. This means it can be programmed easily and at low cost in computation. At the end, it is just some function evaluations followed by a bunch of multiplication.

<div style="text-align: right;">$\blacksquare$</div>
