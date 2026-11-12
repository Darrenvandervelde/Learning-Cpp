# 09 — Structures, enums and value types

## Game-development context
A player is more than unrelated variables. A position is a pair of coordinates; an enemy may have health, damage and a state. Custom value types make relationships explicit.

## Learning objectives
- Group related data with `struct`.
- Use `enum class` for finite states.
- Initialise aggregates safely.
- Pass and return small value types.

## Core concepts
A `struct` defines a type whose members are public by default. A `class` defaults to private members; otherwise their language features are largely shared. Prefer `enum class` for strongly typed states and to avoid injecting enumerator names into the surrounding scope.

A value type represents data that can be copied according to its meaning. Keep simple aggregates simple until behaviour or invariants justify a class.

## Focused C++20 example
```cpp
#include <string>

struct Position
{
    float x{};
    float y{};
};

enum class EnemyState
{
    Idle,
    Chasing,
    Attacking,
    Defeated
};

struct Enemy
{
    std::string name;
    Position position;
    int health{100};
    EnemyState state{EnemyState::Idle};
};
```

## Memory, ownership and performance
A struct's members are stored as part of the object, subject to alignment and padding. A struct containing `std::string` also contains an owning string object whose character storage may be dynamic. Do not assume a struct's size equals the sum of member sizes.

## Common mistakes
- Leaving members unintentionally uninitialised.
- Using arbitrary integers instead of a named enum state.
- Treating a pointer member as if it automatically owns its target.
- Exposing inconsistent combinations of data that should obey an invariant.

## Independent exercise
Create `PlayerStats`, `Position` and `enum class GameState` types. Initialise a player, update its position and transition from menu to playing to game over.

## Code-review checklist
Check default values, aggregate initialisation, enum qualification, member meaning and whether the type owns any resource.

## Assessment gate
A. Explain a struct and the advantages of `enum class`.  
B. Identify an uninitialised member and an unsafe assumption about a pointer member.  
C. Independently model a player and finite game state.  
D. Explain why a value type is preferable to unrelated globals for this data.

**Pass:** 80/100 or higher, valid initial state and no ambiguous state encoding.
