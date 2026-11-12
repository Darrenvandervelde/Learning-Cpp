# 05 — Operators and expressions

## Game-development context
Damage, cooldowns, movement, score and collision distances depend on arithmetic and comparisons. A small operator mistake can become a gameplay bug.

## Learning objectives
- Use arithmetic, comparison, logical and assignment operators.
- Understand integer division and remainder.
- Apply precedence deliberately.
- Avoid undefined behaviour and invalid arithmetic.

## Core concepts
Arithmetic operators include `+`, `-`, `*`, `/` and `%`. Comparisons such as `==`, `!=`, `<` and `>=` produce booleans. Logical `&&`, `||` and `!` combine conditions. Compound assignment such as `health -= damage` updates a value.

Integer division truncates toward zero: `7 / 2` is `3`. Use floating-point operands when fractional results are required. Division or remainder by zero is invalid. Signed integer overflow is undefined behaviour; do not rely on wrapping.

## Focused C++20 example
```cpp
#include <algorithm>
#include <iostream>

int main()
{
    const int baseDamage{17};
    const int armour{5};
    const int actualDamage{std::max(baseDamage - armour, 0)};
    const bool survives{100 - actualDamage > 0};
    std::cout << actualDamage << '\n'
              << std::boolalpha << survives << '\n';
}
```

## Memory, ownership and performance
Operators generally work on values and do not imply dynamic allocation. Performance differences between simple arithmetic expressions are rarely worth guessing about. Prefer correct, readable calculations and profile before low-level optimisation.

## Common mistakes
- Writing `=` when `==` was intended.
- Expecting integer division to preserve decimals.
- Dividing by zero.
- Allowing health or counters to overflow their valid domain.
- Writing long expressions whose precedence is difficult to see.

## Independent exercise
Implement damage with base damage, armour and a minimum of zero. Add a percentage critical-hit multiplier using floating-point arithmetic and print the result to two decimal places.

## Code-review checklist
Test zero, negative and boundary values. Confirm the formula matches the game rule and intermediate values use suitable types.

## Assessment gate
A. Explain integer division, modulo, comparison and short-circuit evaluation.  
B. Analyse precedence mistakes and a possible divide-by-zero path.  
C. Independently implement and test a damage calculator.  
D. Explain why readable intermediate calculations can be better than compact expressions.

**Pass:** 80/100 or higher, correct boundary behaviour and no invalid arithmetic.
