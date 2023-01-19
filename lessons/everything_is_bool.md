---
layout: lesson
title: Everything is Bool
---

A statement is either true or false--this is referred to as its "boolean value".

As previously discussed, a statement can be represented with a single uppercased letter, like A, B, or C. To express that a statement is true, we leave it as it is:

Statement A is true:

>1. A

However, to denote that a statement is false, we show that it has been negated:

Statement A is false: 

>1. ¬A

That said, if we know that A is false, then ~A is true. A is false, ~A denotes that A is false, thus ~A is true. 

This representation is important because once we get to the rules of inference, we will encounter some forms that require the negation of a statement. One such form is _disjunctive syllogism_, which is:

> 1. p v q
> 2. ¬p
    <hr>
> 3. q

Note: The first premise in the form above contains a logical connective known as the disjunction. If you are unfamiliar with it, do not worry, we will cover it in a later lesson, the point of this lesson is how to interpret negated variables.

This form is essentially telling us that the boolean values of "p" in line 1 and "¬p" in line 2 must be the opposite of eachother and the boolean values of "q" in both line 1 and 3 must be the same as eachother. Examples of this would include:

> 1. A v B
> 2. ¬A
    <hr>
> 3. B

> 1. C v ¬D
> 2. ¬C
    <hr>
> 3. ¬D

> 1. ¬E v F
> 2. ¬¬E
    <hr>
> 3. F

Note: The last example contained a _double negation_, which essentially means that the boolean value of a statement is flipped twice--true, false, and true again. We will cover _double negation_ and all of the rules of inference in more depth in later lessons.

At this point, it may feel like symbolic logic is too formulistic and devoid of actual human reason, and if you feel that way, then please hang on, because after we cover the primary logical connectivies and rules of inference, you will _know_ that these rules are conveying very simple truths that can be used to build more complex arguments. If they appear foreign now, it is only because you are learning a new language to encapsulate reasoning structures that you have used since you began to communicate; reasoning structures that you will likely continue to use for the rest of your life. 

