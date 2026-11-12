# How to Build a C++ Module from Scratch

A module is a small, cohesive unit of code with a clear responsibility, a public interface, private implementation details where needed, explicit ownership and tests. This guide teaches the process rather than prescribing one universal folder layout.

## 1. Start with a requirement

Write one sentence describing what the module does. Example:

> The Health module stores an actor's current and maximum health and applies valid damage.

Define what is in scope and what is not. Do not begin by creating many classes.

## 2. Define behaviour and invariants

List expected behaviour:
- Health starts at its configured maximum.
- Maximum health is positive.
- Current health remains between zero and maximum.
- Negative damage is rejected or treated according to a documented policy.
- A defeated actor has zero health.

These rules become tests and help decide what data must be private.

## 3. Choose the smallest useful interface

Example header, `include/health/Health.hpp`:

```cpp
#pragma once

class Health
{
public:
    explicit Health(int maximum);

    [[nodiscard]] int current() const noexcept;
    [[nodiscard]] int maximum() const noexcept;
    void applyDamage(int amount) noexcept;

private:
    int current_{};
    int maximum_{};
};
```

Implementation, `src/Health.cpp`:

```cpp
#include "health/Health.hpp"

#include <algorithm>
#include <stdexcept>

Health::Health(int maximum)
    : current_{maximum}, maximum_{maximum}
{
    if (maximum <= 0)
    {
        throw std::invalid_argument{"maximum health must be positive"};
    }
}

int Health::current() const noexcept
{
    return current_;
}

int Health::maximum() const noexcept
{
    return maximum_;
}

void Health::applyDamage(int amount) noexcept
{
    if (amount <= 0)
    {
        return;
    }

    current_ = std::max(0, current_ - amount);
}
```

This example is intentionally small. In production, decide whether validation belongs in the constructor, whether damage should return a result, and whether integer overflow needs guarding for the chosen numeric domain.

## 4. Organise the module

A typical small module:

```text
health/
├── include/health/Health.hpp
├── src/Health.cpp
├── tests/HealthTests.cpp
└── README.md
```

Keep the public header focused. Do not expose implementation details or include unrelated headers. Add dependencies only when needed.

## 5. Integrate with CMake

A simple library target:

```cmake
add_library(health
    src/Health.cpp
)

target_include_directories(health
    PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/include
)

target_compile_features(health PUBLIC cxx_std_20)
```

The consuming game links the target rather than copying implementation code into unrelated files.

## 6. Test behaviour

Test construction, normal damage, lethal damage, zero damage and invalid configuration. Verify invariants after every operation. Keep tests deterministic and independent of rendering or user input.

## 7. Review memory and performance

Ask:
- Does this type own resources?
- Are references/pointers allowed to outlive their targets?
- Can values be stored directly instead of dynamically allocated?
- Is the interface smaller than the implementation?
- Is there evidence that optimisation is needed?

For this Health type, ordinary value semantics are enough. A heap allocation or smart pointer would add complexity without benefit.

## 8. Document the module

Every module README should explain:
1. Purpose and non-goals.
2. Public API and usage.
3. Build instructions.
4. Dependencies.
5. Ownership and lifetime rules.
6. Error behaviour and invariants.
7. Tests and how to run them.
8. Integration example.
9. Known limitations.

## 9. Finish with evidence

Record the compiler and C++ standard used, the exact build/test commands, and their results. Include failures honestly. A code review should examine correctness, ownership, lifetime, API design, readability and performance—not only whether the code compiles.
