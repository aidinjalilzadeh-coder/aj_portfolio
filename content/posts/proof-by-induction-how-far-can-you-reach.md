---
title: 'Mathematical Induction vs. Everyday Induction: The Blonde Student Fallacy'
slug: PBI
summary: What statements can or cannot be proved by mathematical induction?
author: Dr. Aidin Jalilzadeh
publishedAt: 2026-05-06T00:00:00.000Z
tags:
  - cat-research
  - mathematical induction
  - proof by induction
  - inductive reasoning
draft: false
---

## Episode 1: The Thought

A few weeks ago, I was invited to an international school to give a public lecture for the students and teachers. The venue was school auditorium, with 150 seats and later I learnt that there are around 400 enrolees. Anyway, I was at the podium setting up my presentation with the help of the IT guy and in the meantime students were trickling in. A few moments later, I glanced at the lecture hall— around 30 students were seated. But one tiny detail caught my attention: *every single one of them had blonde hair!*

A thought pops into my head: *“…hmm… can I use mathematical induction to justify that all the students in this school are blonde?”* I already knew the answer and I had to start my talk.

## Episode 2: Since Then …

Since then, I have been dabbling with the whole idea on and off in between other things that I do. As I said, I already knew the answer— and so does anyone with common sense, whether they've heard of the ***Principle of Mathematical Induction (PMI)*** or not.

However, the distinction becomes apparent when I follow up my question with a simple **why?** Now, the reasoning can no longer rely on common sense. In fact, in my mathematical proof classes I often use the courtroom analogy: *any statement made in a court of law must be airtight so that nobody can fault it!* To be **airtight** or **watertight** means there are no gaps (ambiguities) or **logical leaks** in your statements. The more specific term for a faultless proof in mathematics and logic is **rigorous**. In a rigorous proof, every claim you make must refer either to a formal definition or to a theorem. Hence, if you make a claim outside of this realm, no matter how trivial or obvious, you must prove it on the spot before proceeding further. Therefore, to answer the follow-up why **"rigorously"** we should dissect the elements of proof by induction procedure.

## Episode 3: Dominoes and Math

I won't go into the nuts and bolts of proof by induction and the formalities. But in a nutshell, the PMI — the foundation of proof by induction — resembles the domino effect. One tile knocks over the next, and this can initiate (hypothetically) an infinite sequence of toppling. Think of dominoes as the real-world simulation of proof by induction, where you have an infinite sequence of tiles! In the abstract world of mathematics, the **ordered** sequence of tiles is replaced by the set of *natural numbers*, denoted $\mathbb{N}$. For the domino effect to work, you need to knock over the first tile to set off the whole show. This is necessary but not sufficient. The distance between two successive dominoes must be such that each falling tile knocks over its immediate successor— otherwise, if the gap is too large, no progress is made.

OK- let's go back to the abstract world of mathematics.

From the description above, two conditions will guarantee a successful domino effect:

$\qquad \textbf{i.} \kern{0.25em}$ there must be a beginning,

$\qquad \textbf{ii.} \kern{0.25em}$ ensure each tile will actually knock over the next one upon its own falling.

In mathematical terms, the first condition in the domino example is referred to as the **base case**. Often the statement whose truth is to be proved by induction is denoted as $P(n)$ where $n \in \mathbb{N}$. In other words, we wish to prove $P$ is true for all integer values $n=1, 2, 3, \cdots$. So in my example: $P(n)$ means **student $n$ is blonde**. Now, for the base case we need to check that $P(1)$ is true and it is indeed true, since the first student who walked into the theatre was blonde. In fact $P(1), P(2), \cdots, P(30)$ are all true. But here is where common sense kicks in and we can't say whether $P(31)$ will be true or not. Hence we may have a problem with the transition condition $(\textbf{ii})$, which is called the **inductive step**.

In a proof by induction after checking the truth of the base case, we assume that our statement $P$ is true up to $P(k)$ where $k \geq 1$, i.e. **we assume** the first $k$ students are all blonde. The inductive step requires us to rigorously prove that $P(31)$ is also true (knowing $P(30)$ is); then I could repeat the same logic and show $P(32)$ is true and so forth. But as we all know we don't have a firm reason to justify that if the first $k$ students (for any $k \geq 1$) are blonde then student $k+1$ will also be blonde! In the domino analogy, this means that we are not sure whether tile $30$ will knock over tile $31$ or not— we simply can't tell!

## The Verdict

Let's write out the steps involved in proof by induction formally:
$\qquad \textbf{Statement:} \kern{0.25em}$ $P(n)$ is true for any $n \in \mathbb{N}$, that is $n=1, 2, 3, \cdots$.
$\qquad \textbf{Base Case:} \kern{0.25em}$ Show $P(1)$ is true,
$\qquad \textbf{Inductive Step:} \kern{0.25em}$ Assume $P(k)$ is true for some $k \geq 1$, prove that $P(k+1)$ is also true.

<div style="text-align: right;">$\blacksquare$</div> 
