# 13 — Ownership, dynamic memory and smart pointers

## Game-development context
Some game objects and resources need dynamic lifetime or shared access. The key question is not simply where memory comes from, but who owns it and exactly when it is released.

## Learning objectives
- Distinguish owning and non-owning relationships.
- Understand dynamic allocation conceptually.
- Prefer standard containers and smart pointers.
- Choose between unique and shared ownership.

## Core concepts
Dynamic allocation creates an object whose lifetime is not tied only to the current block scope. Raw `new` and `delete` expose manual lifetime management and are easy to misuse. Modern C++ prefers `std::vector` for dynamic sequences, `std::string` for text, and smart pointers when dynamic object ownership is actually required.

`std::unique_ptr<T>` expresses exclusive ownership and transfers ownership with move operations. `std::shared_ptr<T>` uses shared ownership and destroys the object when the final shared owner releases it. Shared ownership has reference-counting cost and can create cycles; it should not be the default.

## Focused C++20 example
```cpp
#include <memory>
#include <string>

struct Enemy
{
    std::string name;
    int health{100};
};

int main()
{
    auto enemy = std::make_unique<Enemy>();
    enemy->name = "Sentinel";

    auto transferredOwner = std::move(enemy);
    // enemy is empty; transferredOwner owns the Enemy.
}
```

Prefer `std::make_unique` over direct `new`.

## Memory, ownership and performance
A smart pointer is an ownership handle; its managed object is usually dynamically allocated. `unique_ptr` has no shared reference-counting overhead. `shared_ptr` updates a control block and should be used only when multiple independent owners genuinely need to keep an object alive. Allocation frequency and fragmentation matter in real-time systems, but optimise with profiling and deliberate lifetime design.

## Common mistakes
- Calling `delete` on memory already owned by a smart pointer.
- Using `shared_ptr` everywhere.
- Creating ownership cycles with shared pointers.
- Keeping a raw pointer after its owner resets.
- Manually allocating an array when a vector is suitable.

## Independent exercise
Create a collection of enemies using `std::vector<Enemy>`. Then create one dynamically owned special enemy with `std::unique_ptr`. Explain why each storage choice is appropriate.

## Code-review checklist
Draw an ownership diagram. Mark every owning handle, non-owning observer and object lifetime.

## Assessment gate
A. Explain exclusive ownership, shared ownership and non-owning observation.  
B. Find a leak, double-delete risk and unnecessary shared ownership in sample code.  
C. Independently implement the vector and unique-owner exercise.  
D. Justify the owner of each enemy and explain why raw `new/delete` is not the default.

**Pass:** 80/100 or higher; no leaks, double deletion, dangling access or unclear ownership.
