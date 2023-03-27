---
layout: lesson
title: Modus Ponens
---

We will begin our journey into the rules of inference with Modus Ponens (MP). MP is one of the most well-known valid argument forms, it also likely in every legal contract, computer program, and research paper in existence. You have likely either used MP or came across it at least once this week.

So how does it look like? Here is its form:

> a → b <br>
> a 
><hr>
> b

Note: MP is based on the implication: You can review it [here]({{ site.baseurl }}/lessons/implication.html).

Here are some examples:

1. "If the dog barks (B), then the cat runs away (R). The dog barked (B). So, the cat ran away (R)."

    > 1. B → R
    > 2. B
    ><hr>
    > 3. R <span class="deduction-support">MP 1, 2</span>

2. "Fewer and fewer people are voting (V). Democracy ceases to exist (E) if fewer and fewer people vote (V). So, democracy will cease to exist (E)."

    > 1. V
    > 2. V → E
    ><hr>
    > 3. E <span class="deduction-support">MP 2, 1</span>

    Note: The implication is on line two in the example above. The order of the premises is interchangeable as long as the form is followed.

3. "We should bail out the banks (B) only if there is a method of ensuring we will not have to bail them out again (M). We bailed out the banks (B). Therefore, there is a method of ensuring we will not have to bail them out again (M)."

    > 1. B → M
    > 2. B
    ><hr>
    > 3. M <span class="deduction-support">MP 1, 2</span>

    Note: Although the argument above is valid, it definitely is not sound.

In each example, there is some condition _`a`_, where if that condition is affirmed, it necessitates some conclusion _`b`_. It then makes perfect sense that "modus ponens" is Latin for "the way that affirms by affirming". In each example, the antecedent of the implication was affirmed, which allowed us to the conclude the consequent of that implication.

In the next lesson, we will look at the "the way that denies by denying", better known as, Modus Tollens.