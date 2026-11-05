# S1MPA-9 Lesson 09: While loops

> From the Grade 9 Resource Department's Semester 1 Midterm (PA) Computer Science H review guide (PA). Student-made reference material: where it differs from class, follow class.

A program sometimes needs to repeat an action until it reaches a result. A while loop does this by checking a condition before every pass. If the condition is already false, nothing inside the loop runs. This makes while useful when you cannot know the number of repetitions in advance, such as when doubling a thickness until it reaches a target.

How the loop stops

The program needs a starting value, a condition to test, and an update inside the loop. The update matters because it can eventually make the condition false. In the paper-folding example, thickness < target is the test, and the line below doubles the current thickness after a fold.

thickness *= 2

A counter can record how many passes have happened. An accumulator serves a different purpose: it stores a result that grows with each pass. For the sum 1 + 2 + ... + n, total begins at 0, and the current number i is added each time.

total += i       # the same as total = total + i

The end of a loop is easy to misjudge by one pass. If i begins at 1 and the test is i <= 4, the loop runs with i equal to 1, 2, 3, and 4. After i increases to 5, the test is false. Without an update that can reach this point, a while loop may keep running, such as the expression while True.
