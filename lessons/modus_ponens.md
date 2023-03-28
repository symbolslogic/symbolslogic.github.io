---
layout: lesson
title: Modus Ponens
---

Modus Ponens (MP) is one of the most common rules of inference. From the Latin, "the way to affirm by affirming", it follows the form of affirming the antecedent of an implication and inferring its consequent.


> a → b <br>
> a 
><hr>
> b

Note: MP is based on the implication: You can review it [here]({{ site.baseurl }}/lessons/implication.html).

Here are some examples:

1. "If the dog barks (B), then the cat runs away (R). The dog barked (B). So, the cat ran away (R)."

    > 1. B → R
    > 2. B
        <hr>
    > 3. R <span class="deduction-support">MP 1, 2</span>

2. "Fewer and fewer people are voting (V). Democracy ceases to exist (E) if fewer and fewer people vote (V). So, democracy will cease to exist (E)."

    > 1. V
    > 2. V → E
        <hr>
    > 3. E <span class="deduction-support">MP 2, 1</span>

    Note: The implication is on line two in the example above. The order of the premises is interchangeable as long as the form is followed.

3. "We should bail out the banks (B) only if there is a method of ensuring we will not have to bail them out again (M). We bailed out the banks (B). Therefore, there is a method of ensuring we will not have to bail them out again (M)."

    > 1. B → M
    > 2. B
        <hr>
    > 3. M <span class="deduction-support">MP 1, 2</span>

    Note: Although the argument above is valid, it definitely is not sound.

In each example, there is some condition _`a`_, where if that condition is affirmed, it necessitates some conclusion _`b`_ given an implication _`a → b`_. 

The most common pitfall when using MP is the fallacy of the converse, which occurs when the sufficient condition of the given implication is confused for the necessary condition. This was touched upon on the lesson for the [Implication]({{ site.baseurl }}/lessons/implication.html) and is also one of the most common errors in the Validity and Inference activities that are found in the Symbols Logic app.

Restated briefly, the fallacy of the converse follows this form:

> a → b <br>
> b 
><hr>
> a

Note: The fallacy of the converse affirms the consequent of the given implication and concludes its antecedent. A valid implementation of MP must affirm the antecedent and conclude the consequent of the given implication.


In the next lesson, we will look at the "the way that denies by denying", better known as, Modus Tollens (MT).