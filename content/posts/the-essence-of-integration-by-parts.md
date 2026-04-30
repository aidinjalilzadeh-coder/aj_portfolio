---
title: The Essence of Integration by Parts
slug: IBP
summary: Where does integration by parts come from?
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-04-29T00:00:00.000Z
tags:
  - cat-education
  - essence of calculus
  - integration by parts
  - product rule
draft: false
---

## Background

Calculus of single-variable functions $(y=f(x))$, has become such an accessible subject that kids in almost every corner of the world begin learning it in their grade 10 or 11 if not sooner. The classic path to teaching calculus begins by the concept of limits and what it means for a variable to **approach** (tend) to some fixed value. Then move up to calculating the **average rate of change** of some function at a given point in its domain. Then by applying the concepts learnt in limits the **average** rate of change becomes the **instantaneous** rate of change— simple as that! This is how the definition of derivative and it's link to the slope of tangent line and the rates of change all come together in one expression:

$$

\textsf{On}\quad y=f(x) \quad \textsf{At point: } (a,f(a)) \rightarrow f'(a)=\lim\_{h \to 0}\frac{f(a+h)-f(a)}{h} = m\_a \quad \textsf{slope of tangent at  } x=a.

$$
Usually this is as far as it goes in terms of theory specially in high schools. Then come a myriad of formulae and techniques where students learn (memorize) and become (potentially) capable of differentiating any function regardless of how complicated the rule $f(x)$ may be. This is part 1, i.e. *differential calculus* done!

In part 2, students must learn how to undo whatever techniques they have learnt in part 1. Part 2 is called **integration**, where most of us may immediately think of: **area under curve!** Yes, one application is for calculating areas and volumes however, there is a crucial step before the actual calculation of areas. Integration is the operation *opposite* to that of the differentiation— this is what I meant by “ … learn how to undo …” in the start of this paragraph. So, integrating a function $f(x)$ gives us a new function say $F(x)$, which is called the ***anti-derivative*** of $f(x)$. In other words, the derivative of $F$ is equal to $f$.

Translating all this to beautiful math we get:

$$

\int f(x) \kern{0.1em} dx = F(x) + C \kern{0.5em} \iff \kern{0.5em} F'(x) = f(x). \qquad \left( f \textsf{ is the derivative of } F \textsf{ and } F \textsf{ is the anti-derivative of } f \right)

$$

I don't want o get more into the nitty-gritty of integration but keep in mind that every single rule that you learn in differentiation, e.g. chain rule, product rule, quotient rule, … they all have a counterpart in the integration world. Integration by parts (IBP) is the counterpart for the product rule!

## IBP Product Rule's Relative

<div style="text-align: right;">$\blacksquare$</div>
