# Containers, Memory, Lifetimes, and Ownership

## 1. Storage duration and lifetime

C++ distinguishes automatic, static, thread, and dynamic storage duration. Lifetime is the period during which an object exists. A pointer or reference is valid only while its target exists and the target has not been invalidated by another operation.

The common stack and heap model is useful for understanding typical implementations, but it is not the complete C++ object model. The compiler can optimise storage while preserving observable behaviour.

## 2. Values and standard containers

Prefer values and standard containers as the default. std::array represents a fixed size contiguous sequence. std::vector represents a dynamically sized contiguous sequence. std::string owns text. These types manage their resources and clean them up automatically.

```cpp
#include <string>
#include <vector>

struct Enemy
{
    int health{50};
};

int main()
{
    std::vector<Enemy> enemies;
    enemies.push_back(Enemy{});
    const std::string level_name{"Hangar"};
}
```

Vector storage may reallocate when capacity is exceeded. Reallocation invalidates pointers, references, and iterators to its elements. Do not retain element addresses across operations that may reallocate.

## 3. Pointers and references

A pointer can be null and can be reassigned. A reference is an alias that must be bound at initialisation. Neither automatically owns its target.

```cpp
void restore_health(int& health, int amount)
{
    if (amount > 0)
    {
        health += amount;
    }
}
```

A const reference provides read only access through that reference. It does not extend the lifetime of every object in every context, and it does not prevent mutation through other aliases.

## 4. RAII

Resource Acquisition Is Initialization ties resource management to object lifetime. A resource managing object acquires a resource during construction and releases it during destruction. This works for memory, files, locks, sockets, and graphics resources.

Prefer the Rule of Zero: compose types that already manage their resources instead of writing custom destructors and copy operations.

## 5. Smart pointers and ownership

std::unique_ptr expresses exclusive ownership. It is moveable but not copyable. std::shared_ptr expresses shared ownership through a reference counted control block. Shared ownership adds bookkeeping and can form cycles. std::weak_ptr observes a shared object without keeping it alive.

Use smart pointers to express ownership, not as a replacement for every pointer or reference. A game scene might own entities while systems observe them through references, handles, or carefully scoped pointers.

## 6. Complexity and locality

Vector indexing is constant time. Appending is amortised constant time, although an append can reallocate. Inserting at the front is linear because elements shift. Contiguous storage often improves cache locality compared with many independent allocations.

Big O describes growth as input size increases. It does not directly predict frame time. Profile representative workloads before changing data structures.

## 7. Practice

Design ownership for a Scene, its Enemy objects, and a Texture cache. Mark which object owns each resource and which systems merely observe it. Implement a vector of values and explain when references can become invalid.
