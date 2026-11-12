# 10 — Classes and encapsulation

## Game-development context
A game object must protect its rules. If any caller can set health to an impossible value, every other system must defend against that invalid state. Encapsulation places the rule beside the data it protects.

## Learning objectives
- Define classes and objects.
- Use access control.
- Protect invariants with public operations.
- Apply const member functions.

## Core concepts
A class defines a type; an object is an instance. Private members can be accessed by the class's member functions and friends. Public functions form the interface. An invariant is a condition that must remain true, such as health staying between zero and maximum health.

Do not create getters and setters automatically for every field. Expose operations that express valid behaviour, such as `takeDamage` and `heal`, rather than unrestricted mutation.

## Focused C++20 example
```cpp
#include <algorithm>

class Player
{
public:
    explicit Player(int maxHealth)
        : maxHealth_{std::max(maxHealth, 1)}, health_{maxHealth_}
    {
    }

    void takeDamage(int amount)
    {
        health_ = std::max(health_ - std::max(amount, 0), 0);
    }

    [[nodiscard]] int health() const
    {
        return health_;
    }

private:
    int maxHealth_;
    int health_;
};
```

The public interface does not allow callers to assign negative health directly.

## Memory, ownership and performance
A class object has the storage and lifetime of its containing object. Private access control is a compile-time language rule, not a runtime security boundary. Small member functions may be inlined, but do not design interfaces around assumptions about inlining.

## Common mistakes
- Making every member public.
- Adding setters that bypass invariants.
- Forgetting `const` on read-only member functions.
- Using inheritance when composition is simpler.
- Making one class responsible for unrelated systems.

## Independent exercise
Implement a `Player` class with private health and maximum health. Provide validated damage and healing operations plus read-only accessors. Test zero, negative and excessive values.

## Code-review checklist
Check invariants, public API size, member visibility, const correctness and responsibility boundaries.

## Assessment gate
A. Explain encapsulation, object, class and invariant.  
B. Review a class whose public fields allow impossible states and propose a safer interface.  
C. Independently implement and test the player class.  
D. Explain why `takeDamage` is better than unrestricted setters.

**Pass:** 80/100 or higher; the class must preserve invariants through every public operation.
