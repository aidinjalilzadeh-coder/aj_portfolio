---
title: The Essence of Integration by Parts (IBP)
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

Calculus of single-variable functions $(y=f(x))$, has become such an accessible subject that kids in almost every corner of the world begin learning it in their grade 10 or 11 if not sooner. The classic path to teaching calculus begins by the concept of limits and what it means for a variable to **approach** (tend) to some fixed value. Then move up to calculating the **average rate of change** of some function at a given point in its domain. Then by applying the concepts learnt in limits, the **average** rate of change becomes the **instantaneous** rate of change— simple as that! This is how the definition of derivative and it's link to the slope of tangent line and the rates of change all come together in one expression:

$$

\textsf{On}\quad y=f(x) \quad \textsf{At point: } (a,f(a)) \rightarrow f'(a)=\lim\_{h \to 0}\frac{f(a+h)-f(a)}{h} = m\_a \quad \textsf{slope of tangent at  } x=a.

$$
Usually this is as far as it goes in terms of theory specially in high schools. Then come a myriad of formulae and techniques where students learn (memorize) and become (potentially) capable of differentiating any function regardless of how complicated the rule $f(x)$ may be. This is part 1, i.e. *differential calculus* done!

Part 2 complements differential calculus, where students learn how to undo whatever techniques they have learnt in part 1. Part 2 is called **integration**, where most of us may immediately think of: **area under curve!** Yes, one application is for calculating areas and volumes however, there is a crucial step before the actual calculation of areas. Integration is the operation *opposite* to that of the differentiation— this is what I meant by “ … learn how to undo …” in the start of this paragraph. So, integrating a function $f(x)$ gives us a new function say $F(x)$, which is called the ***anti-derivative*** of $f(x)$. In other words, the derivative of $F$ is equal to $f$.

Translating all this to beautiful math we get:

$$

\int f(x) \kern{0.1em} dx = F(x) + C \kern{0.5em} \iff \kern{0.5em} F'(x) = f(x). \qquad \left( f \textsf{ is the derivative of } F \textsf{ and } F \textsf{ is the anti-derivative of } f \right)

$$

I don't want o get more into the nitty-gritty of integration but keep in mind that every single rule that you learn in differentiation, e.g. chain rule, product rule, quotient rule, … they all have a counterpart in the integration world. Integration by parts (IBP) is the counterpart for the product rule!

## IBP - Related to the Product Rule

Integration by parts— which I'll refer to it as IBP from here on— is a powerful technique in finding the antiderivative of a function that is a bit out of the ordinary. Let me clarify what I mean by out of the ordinary; the antiderivative of $\cos(x)$ is $\sin(x)$, i.e. $\int \cos(x) dx = \sin(x) + C$. So this is a straightforward integration where the antiderivative is known in advance and there's no need for any mathematical manipulation. The same goes for $e^x$, $\sin(x)$, $x^n$ (except when $n=-1$) and so on and so forth. Also, consider $y=\ln(x)$; we know by definition that $y' = 1/x$, therefore $\ln(x)$ is the antiderivative of $1/x$ or:

$$

\int \frac{1}{x} \kern{0.1em} dx = \ln(x) + C \kern{0.5em} \iff \kern{0.5em} \frac{d}{dx} \ln(x) = \frac{1}{x}

$$

Now, let's change the roles of $\ln(x)$ and $1/x$. The question will be: **what is the antiderivative of** $\ln(x)$? or $\int \ln(x) dx = ??$. In other words I want to find some function $F(x)$ so that when I differentiate it I get $\ln(x)$. This is not trivial and we need to use a different set of keys to unlock $\int \ln(x) dx$ and many more integrals like this. I will explain the mechanics of IBP by reverse engineering the product rule.

#### Product Rule Revisited

Suppose we have two functions $u(x)$ and $v(x)$, where both depend on one variable $x$. The derivative of the product $uv$ can be written as:

$$

(1)  \qquad \frac{d}{dx}(uv) = u \frac{dv}{dx} + v \frac{du}{dx}=uv' + vu'

$$

The differential form after cancelling $dx$ is:

$$

(2)  \qquad d(uv) = u dv + v du = uv'dx + vu'dx

$$

In my experience, students get confused upon coming across equation $(2)$ and the source of confusion is in the misunderstanding of the use of differentials plus the fact that $(2)$ is another form of the product rule given in $(1)$. Let's stick an integral sign on both sides of $(2)$:

$$

(3)  \qquad \int d(uv) =\int uv'dx + \int vu'dx \quad \implies \quad  uv = \int uv'dx + \int vu'dx.

$$

On the left hand side, we have integration applied after the differentiation of $uv$ and we know these two undo each others' action so $uv$ doesn't change. On the right hand side, we have two parts and if you're lucky, one of the integrals is straight-forward like the ones that you already know its antiderivative and the other integral is the nasty one. Hence by rearranging $(3)$ we can write the nasty integral in terms of nice ones.

A classic first example is $\int x e^x dx$. I used to solve this in my classes using $vdu$ and $udv$ arguments but later I realised that for the first few examples, it's understood better, if I just reverse engineered the integral. Of course, ultimately students will transition from this to $vdu$ and $udv$ methods but they have a back up method in case this one backfires!

Here's how I explain it; the function under the integral is $xe^x$ so let's try the product rule on this: 

$$

(2')  \qquad d(xe^x) = x (e^x dx) + e^x (1 dx)  \qquad \textsf{where }\kern{0.33em} d(e^x)=e^x dx \kern{0.33em} \textsf{ and } \kern{0.33em} d(x) = 1 dx,

$$

and with the integral sign:

$$

(3')  \qquad \int d(xe^x) =\int xe^xdx + \int e^x dx \qquad \textsf{nice integral: } \int e^x dx \kern{0.33em} \textsf{ nasty: }\int xe^xdx.

$$

We got it! $\int x e^x dx$ is the difficult integral on the right side and the other part is a nice one, i.e. easily done. Let's rearrange:

$$

(3'')  \qquad \int d(xe^xdx) =xe^x - \int e^x dx \qquad \textsf{the first term on the right is equivalent to } uv \kern{0.33em} \textsf{ in } (3).

$$

The rest is easy!

Using reverse engineering has been extremely successful in my classes and not much can go wrong unless the student doesn't know how to differentiate. Let's quickly revisit the problem of finding the antiderivative of $ln (x)$

<div style="text-align: right;">$\blacksquare$</div>
