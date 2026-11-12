# 07 — Functions and interfaces

## Game-development context
A player update should not be one giant block. Functions isolate calculations and rules so they can be understood, reused and tested independently.

## Learning objectives
- Declare, define and call functions.
- Use parameters and return values.
- Understand scope and pass-by-value.
- Use references for deliberate input/output behaviour.
- Keep interfaces focused.

## Core concepts
A function has a return type, name, parameter list and body. A declaration introduces its interface; a definition supplies the implementation. Parameters passed by value are local copies. A `const T&` parameter avoids copying a larger object while preventing modification. Return a value when the caller needs a result.

Prefer one coherent task per function. Avoid hidden dependencies on global variables because they make behaviour harder to test and reason about.

## Focused C++20 example
```cpp
#include <algorithm>

int applyDamage(int currentHealth, int damage)
{
    const int safeDamage = std::max(damage, 0);
    return std::max(currentHealth - safeDamage, 0);
}
```

This pure function receives values and returns new health; it does not secretly modify global game state.

## Memory, ownership and performance
Pass small scalar types by value. Pass larger read-only objects by `const&` when appropriate. A reference parameter does not transfer ownership. Never return a reference or pointer to a local variable; that object is destroyed when the function returns.

## Common mistakes
- Missing a return value on a non-void path.
- Returning a reference or pointer to a local object.
- Passing a large container by value unintentionally.
- Creating functions with unrelated responsibilities.
- Hiding important inputs in global state.

## Independent exercise
Write functions to calculate damage, heal a player within a maximum-health limit, and print a status summary. Keep calculations separate from console output where possible.

## Code-review checklist
Check parameter types, constness, return types, scope, naming and whether each function can be tested in isolation.

## Assessment gate
A. Explain pass-by-value versus pass-by-reference and declaration versus definition.  
B. Diagnose a dangling-reference bug and an unintended container copy.  
C. Independently implement player-rule functions without global state.  
D. Justify which parameters are values, references or const references and why.

**Pass:** 80/100 or higher, correct function contracts and no lifetime defect.
