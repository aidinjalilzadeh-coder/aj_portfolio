---
title: 'The Gradient Vector: Two Faces, One Formula '
slug: gradient
summary: 'Common source of confusion: which gradient direction to follow? Normal to the surface or normal to the level curves?'
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-07-01T00:00:00.000Z
tags:
  - cat-education
  - multivariate calculus
  - gradient vector
  - steepest ascent/descent
---

# The Gradient Vector: Two Faces, One Formula

One of the first concepts that is introduced in any multivariate calculus course is the **gradient** vector of a scalar field — that is a function of the form $f: \mathbb{R}^n \to \mathbb{R}$, which takes a vector and returns a single number (scalar). The gradient vector of $f$ is denoted by $\nabla f$.

When $n=1$, the graph is a curve in the 2D plane. When $n=2$, it becomes a **surface** in 3D space. For higher dimensions, we lose the ability to visualize, but the gradient concept remains the same.

Yet despite its simplicity, the gradient is also one of the most commonly **misunderstood** ideas in calculus — because students are told two seemingly contradictory things:

$\qquad \textbf{i.} \kern{0.25em}$ "The gradient points uphill."

$\qquad \textbf{ii.} \kern{0.25em}$ "The gradient is perpendicular to the surface."

Both are true — but they are talking about **different** gradient vectors.

The confusion often surfaces when students try to implement *gradient descent* to minimise a function or fit a model to data. Which gradient do you use? Where does it point? And how do you even walk in that direction?

In this article, I will unpack the geometry, clear up the confusion, and show you exactly when to walk — and when to fly!

OK, Let's begin ...

<div style="text-align: right;">$\blacksquare$</div>
