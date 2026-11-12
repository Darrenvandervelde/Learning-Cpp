# C++ Basics — A Practical Reference for Game Developers

This is a companion reference, not a replacement for the numbered lessons. Learn each topic in sequence and practise it in code.

## 1. What C++ does

C++ is a compiled, general-purpose language. You write source files (`.cpp` and headers such as `.hpp`). The compiler translates source into object code; the linker combines object files and libraries into an executable. The executable runs on the operating system and uses CPU memory and other resources.

Typical command:

```bash
g++ -std=c++20 -Wall -Wextra -Wpedantic -Wconversion -Wshadow main.cpp -o game
```

## 2. Program entry point and output

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, game developer!\n";
    return 0;
}
```

- `#include` makes declarations from a header available.
- `int main()` is the program entry point.
- `std::cout` writes to standard output.
- `<<` is the stream insertion operator.
- `\n` writes a newline.
- `return 0` reports successful completion to the host environment.

## 3. Types, variables and constants

```cpp
int health{100};
float movementSpeed{4.5F};
bool isAlive{true};
char rank{'A'};
const int maxHealth{100};
```

Choose a type that represents the domain. Use initialisation braces consistently. Use `const` when a value should not be modified.

## 4. Expressions and control flow

```cpp
if (health <= 0)
{
    isAlive = false;
}

for (int level{1}; level <= 3; ++level)
{
    std::cout << "Level " << level << '\n';
}
```

Conditions control decisions; loops repeat work. Avoid loops whose exit condition cannot be reached.

## 5. Functions

```cpp
int applyDamage(int currentHealth, int damage)
{
    if (damage < 0)
    {
        return currentHealth;
    }

    return (damage >= currentHealth) ? 0 : currentHealth - damage;
}
```

Functions should have clear inputs, outputs and responsibilities. Pass small read-only values by value; pass larger read-only objects by `const&` when appropriate.

## 6. Structs, enums and classes

Use a `struct` for a simple aggregate of related data, an `enum class` for a closed set of states, and a `class` when invariants need to be protected by a public interface.

```cpp
enum class GameState
{
    MainMenu,
    Playing,
    Paused,
    GameOver
};

struct Vec2
{
    float x{};
    float y{};
};
```

## 7. Pointers, references and ownership

A reference is an alias to an existing object and cannot be reseated. A pointer represents an address and may be null. Neither automatically owns the object it refers to.

Prefer:
- values for ordinary ownership and simple data;
- references for required non-owning access;
- pointers for optional non-owning access;
- `std::unique_ptr` for exclusive dynamic ownership;
- `std::shared_ptr` only when shared lifetime is genuinely required.

Never return a pointer or reference to a local variable. Avoid manual `new` and `delete` in ordinary application code.

## 8. Containers and algorithms

Use standard containers before inventing your own:
- `std::vector<T>` for a resizable contiguous sequence;
- `std::array<T, N>` for a fixed-size sequence;
- `std::string` for owned text;
- `std::string_view` for non-owning read-only text;
- `std::unordered_map` or `std::map` for key-value lookup, chosen based on requirements.

Use standard algorithms such as `std::sort`, `std::find` and `std::ranges` where they improve clarity.

## 9. Errors and debugging

Compile with warnings enabled. Read the first meaningful diagnostic, identify the file and line, make one focused change, and rebuild. Use a debugger to inspect state and call stacks. Add tests for normal cases, boundary cases and invalid input. Sanitizers can help detect memory errors and undefined behaviour.

## 10. Build habits

- Keep declarations in headers and definitions in source files where appropriate.
- Give each module a clear responsibility.
- Use CMake for multi-file projects.
- Keep Debug and Release configurations separate.
- Use Git commits that describe one logical change.
- Do not claim a program works until it has been built and exercised.

## Recommended learning order

Follow Modules 01–20 in [the curriculum index](README.md). The next practical step after the foundations is the [game-from-scratch roadmap](GAME-FROM-SCRATCH.md).
