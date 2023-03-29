---
layout: lesson
title: Disjunctive Syllogism
---

Disjunctive Syllogism (DS) is a valid argument form that is based primarily on the [disjunction]({{ site.baseurl }}/lessons/disjunction.html).

> a ∨ b <br>
> ¬a 
><hr>
> b

Its historical name, modus tollendo ponens, "mode that affirms by denying", gives sense as to what it does: Given a disjunction, rule one disjunct out, and infer the other. This is valid because of the very meaning of a disjunction: at least one disjunct must be true. Therefore, if one disjunct is false, the other must be true.

Examples:

1. "Either the dog barks (B) or the cat runs away (R). The dog did not bark (¬B). So, the cat ran away (R)."

    > 1. B ∨ R
    > 2. ¬B
        <hr>
    > 3. R <span class="deduction-support">DS 1, 2</span>

2. "Waldo is either in Los Angeles (L) or San Francisco (S). Waldo is not in Los Angeles (¬L). Therefore, Waldo is in San Francisco (S)."

    > 1. L ∨ S
    > 2. ¬L
        <hr>
    > 3. S <span class="deduction-support">DS 1, 2</span>

The premise containing the disjunction narrows the world of possibilities to two scenarios. The premise that negates a disjunct rules out one of those possibilities. We are then left with only one scenario--which is the conclusion.

A common pitfall when dealing with DS is mixing it up with _the fallacy of the alternative disjunct_, whose invalid form looks like this:

> a ∨ b <br>
> a 
><hr>
> ¬b

Unlike DS, which contains a premise that negates a disjunct, this fallacy contains a premise that affirms a disjunct. It then proceeds to conclude the negation of its other disjunct. This is invalid because it is possible that both disjuncts within a disjunction are true.

A reason this fallacy may occur is confusing an "inclusive-or" (which the logical disjunction is) with an "exclusive-or". An "inclusive-or" relationship allows for both possibilities to be true, whereas an "exclusive-or" relationship means precisely one disjunct is true, and so, if we know which one is true, the other must be false. In natural language, this relationship can sometimes be ambiguous, but in formal logic, the "exclusive-or" relationship is typically conveyed with a [biconditional]({{ site.baseurl }}/lessons/biconditional.html):

> a ↔ ¬b

The meaning of this biconditional would be that either _`a`_ or _`b`_ is true but not both.