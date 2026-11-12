# 06 — Decisions and loops

## Game-development context
Games repeatedly make decisions: is the player alive, is an enemy in range, should a round end, or should a command be processed? Control flow expresses those rules.

## Learning objectives
- Use `if`, `else` and `switch`.
- Choose between `for`, `while` and `do-while`.
- Use `break` and `continue` intentionally.
- Identify loop termination conditions.

## Core concepts
Use `if` for conditions and `switch` for a discrete set of choices. A `for` loop suits a known range or counter. A `while` loop repeats while a condition remains true. A `do-while` loop executes at least once and can suit a menu prompt.

Every loop needs a progress rule and termination condition. An accidental infinite loop can freeze a game. Avoid modifying the same loop-control variable in hidden places.

## Focused C++20 example
```cpp
#include <iostream>

int main()
{
    int health{3};
    while (health > 0) {
        std::cout << "Health: " << health << '\n';
        --health;
    }
    std::cout << "Game over\n";
}
```

The loop invariant is that health decreases by one each iteration; it eventually reaches zero.

## Memory, ownership and performance
A loop does not automatically allocate memory. Allocating objects or growing containers on every iteration can create avoidable cost. Keep work proportional to the number of items and avoid accidental nested loops.

## Common mistakes
- Off-by-one bounds such as using `<= size` for zero-based sequences.
- Forgetting to update the loop condition.
- Accidental `switch` fall-through.
- Deeply nested conditions that obscure game rules.
- Comparing floating-point time values for exact equality.

## Independent exercise
Create a menu-driven encounter with attack, heal and quit options. Repeat until the player quits or health reaches zero. Reject unknown choices without corrupting state.

## Code-review checklist
Test every branch, first and last loop iteration, invalid choices and the exact termination condition.

## Assessment gate
A. Explain the difference between `for`, `while` and `do-while`.  
B. Find an off-by-one bug and an infinite-loop bug in supplied code.  
C. Independently implement the repeating encounter menu.  
D. Explain how to keep an update loop predictable and prevent invalid states from trapping the game.

**Pass:** 80/100 or higher; every branch works and the loop terminates correctly.
