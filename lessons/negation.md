---
layout: lesson
title: Negation
---

The negation is a logical connective that establishes a "not" relationship. Unlike the other connectives that we have covered so far, the negation is _unary_, meaning it operates on a single statement.

> ¬a

Although we already somewhat covered the negation in "Everything is Bool", we will briefly revisit it here.

To negate a statement means to "flip" its boolean value. Similar to a light-switch that turns the light on and off, a negation flips the boolean value of a statement.

> A

The above statement states that A, whatever A stands for, is true.

> ¬A

The above statement states that A is false, and thus, ¬A or “not A” is true.

> ¬¬A

Furthermore, the above statement states that “not not A” is true. Returning to the light-switch example, if you flipped the switch twice, you return to the original position: one negation means A is false, two negations means A is true (this is the “double negation” rule of inference).

In general, dealing with negations is fairly straightforward, but as the statements we deal with become more complex, it may become a little trickier, so here is an example that applies our last lesson on the "Biconditional":

Given:

> A ↔ ¬B

What is the truth value of B if A is true?

The biconditional tells us that `A` is true if and only if `not B` is true. So, `B` is false.