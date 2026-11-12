# 15 — Containers, algorithms and iterators

## Game-development context
An engine stores entities, resources, input events and asset metadata. Standard containers provide tested storage strategies; algorithms express operations without hand-writing every loop.

## Learning objectives
- Choose between vector, array, deque, map and unordered_map at a basic level.
- Iterate safely.
- Use common algorithms.
- Understand iterator and reference invalidation.

## Core concepts
Use `std::vector` as the default general-purpose sequence when contiguous storage and efficient iteration are useful. Use `std::array` for fixed-size sequences. Associative containers such as `std::map` and `std::unordered_map` support key lookup with different ordering and complexity properties. An iterator represents a position in a range.

Algorithms such as `std::sort`, `std::find`, `std::count_if` and `std::transform` operate on iterator ranges. Container operations may invalidate iterators, pointers or references; know the relevant container's rules.

## Focused C++20 example
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> health{40, 100, 15, 75};
    std::sort(health.begin(), health.end());

    const auto defeated = std::count(health.begin(), health.end(), 0);
    std::cout << "Defeated: " << defeated << '\n';
}
```

The algorithm operates on the half-open range `[begin, end)`.

## Memory, ownership and performance
A vector stores elements contiguously and may reallocate when capacity grows. Reserving capacity can reduce reallocations when expected size is known. A hash map offers average constant-time lookup but has hashing, allocation and locality trade-offs. Choose based on required operations and measured workload.

## Common mistakes
- Using an invalidated iterator after vector growth.
- Erasing elements while incrementing an invalid iterator.
- Assuming unordered containers preserve order.
- Using a map where a vector scan is simpler for a tiny collection.
- Sorting data when stable identity or ordering semantics matter.

## Independent exercise
Maintain a vector of enemy records. Remove defeated enemies safely, sort survivors by health, and count enemies below a health threshold using standard algorithms.

## Code-review checklist
Explain common operations, chosen container, invalidation rules and expected complexity.

## Assessment gate
A. Compare vector, array and key-value containers. Explain iterator ranges.  
B. Diagnose iterator invalidation and an incorrect erase loop.  
C. Independently implement enemy filtering and sorting.  
D. Justify the container using access patterns, locality and complexity.

**Pass:** 80/100 or higher; no invalid iterator use and correct results.
