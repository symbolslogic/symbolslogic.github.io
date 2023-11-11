---
layout: lesson
title: Constructive Dilemma
---

Constructive Dilemma (CD) is an argument form that can look a bit intimidating at first but is actually quite simple.

Sure, it is the first form we have come across in this series that uses more than one logical connective--two [implications]({{ site.baseurl }}/lessons/implication.html), one [conjunction]({{ site.baseurl }}/lessons/conjunction.html), and two [disjunctions]({{ site.baseurl }}/lessons/disjunction.html)--but you already those connectives.

Dare I say it, I like to think of it as a "more interesting modus ponens".

> (a → b) ^ (c → d) <br>
> a ∨ c
> <hr>
> b ∨ d

To break this down, we will first go over what the statements mean.

The first line `(a → b) ^ (c → d)` is a conjunction made up of two implications. This means that both implications are true. Recall that if the antecedent of an implication is true, then the consequent must also be true. So, if `a` is true, given `a → b`, `b` must be true. The first line then essentially gives us two "bows" to fire arrows of truth from.

The second line `a ∨ c` is just a simple disjunction, this means that at least one of the disjuncts `a` or `c` must be true, but possibly both.

Finally, the conclusion is `b ∨ d`. Again, this is a simple disjunction that means either `b` or `d` is true (but possibly both). 

How is this possible? Let us start from line two, given `a ∨ c`, if `a` is true, then we can use our first "bow", `a → b`, to conclude `b`. If `c` is true, we can use our second "bow", `c → d`, to conclude that `d` is true. Since `a ∨ c` tells us that at least one of these statements is true, we can safely conclude `b ∨ d`, since, in either case, `b` or `d` will be concluded.

Let us whip up a quick example:

"If you are in Los Angeles (L), then you are in California (C); and, if you are in Seattle (S), then you are in Washington (W). You are either in Los Angeles (L) or Seattle (S). Thus, you are either in California (C) or Washington (W)."

> 1. (L → C) ^ (S → W) <br>
> 2. L ∨ S
    <hr>
> 3. C ∨ W <span class="deduction-support">CD 1, 2</span>

