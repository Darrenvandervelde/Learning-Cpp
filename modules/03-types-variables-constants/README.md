# 03 — Types, variables and constants

## Game-development context
Health, ammunition, positions, elapsed time and player states are not interchangeable. Types communicate meaning and help the compiler reject invalid operations.

## Learning objectives
- Choose suitable fundamental and standard-library types.
- Initialise variables deliberately.
- Use `const`, `constexpr` and `auto` appropriately.
- Recognise narrowing and signed/unsigned conversion risks.

## Core concepts
A variable has a type, name, lifetime and value. Prefer initialisation at declaration. Brace initialisation can reject narrowing conversions:

```cpp
int health{100};
double movementSpeed{4.5};
bool isAlive{true};
const int maxHealth{100};
constexpr double fixedStep{1.0 / 60.0};
```

Use integer types for discrete quantities, floating-point types for approximate measurements, and `bool` for truth values. Use `std::size_t` for container sizes when appropriate, but take care when comparing it with signed integers. Use `auto` when the initializer makes the type clear, not to hide important intent.

## Focused C++20 example
```cpp
#include <iostream>

int main()
{
    int health{100};
    const int damage{25};
    health -= damage;
    std::cout << "Health: " << health << '\n';
    return 0;
}
```

## Memory, ownership and performance
A scalar local usually has automatic storage duration and is destroyed when its scope ends. Its exact physical placement is an implementation detail; do not equate every local variable mechanically with a hardware stack slot. Smaller types are not automatically faster. Choose types for valid range and semantics first.

## Common mistakes
- Reading an uninitialised local.
- Assuming integer and floating-point division behave identically.
- Narrowing a `double` without acknowledging precision loss.
- Mixing signed and unsigned values without considering conversions.
- Using mutable globals for values that should be constants or explicit state.

## Independent exercise
Model a player with health, maximum health, movement speed and an alive flag. Initialise every value, apply damage and print the result. Add a compile-time constant for a fixed update interval.

## Code-review checklist
Check initialisation, valid ranges, const correctness, conversions and naming. Explain why each type fits its domain.

## Assessment gate
A. Explain type, initialisation, `const` and `constexpr`.  
B. Analyse narrowing and mixed signed/unsigned code.  
C. Independently implement a typed player-statistics program.  
D. Justify types and discuss precision versus range for health, time and world coordinates.

**Pass:** 80/100 or higher, correct output and no uninitialised or invalid-value defect.
