# 08 — Arrays, strings and views

## Game-development context
A game processes collections of scores, inventory names, dialogue and entity identifiers. Understand fixed-size storage and safer standard-library alternatives.

## Learning objectives
- Understand zero-based indexing and bounds.
- Use `std::array`, `std::vector` and `std::string`.
- Distinguish owning strings from non-owning views.
- Avoid out-of-bounds access.

## Core concepts
A built-in array has fixed extent and no convenient size member. `std::array<T, N>` is a fixed-size container that knows its extent. `std::vector<T>` owns a resizable contiguous sequence. `std::string` owns text. `std::string_view` is a non-owning view; it does not extend the lifetime of the characters it views.

For a sequence of size `n`, valid indices are zero through `n - 1`. No index is valid when the sequence is empty.

## Focused C++20 example
```cpp
#include <array>
#include <iostream>
#include <string>

int main()
{
    const std::array<int, 3> scores{90, 75, 88};
    const std::string playerName{"Aria"};

    for (const int score : scores) {
        std::cout << score << '\n';
    }
    std::cout << playerName << '\n';
}
```

Use `std::string_view` for read-only parameters when the function does not need to own or retain the text.

## Memory, ownership and performance
`std::array` stores its elements as part of the object. `std::vector` owns a dynamic allocation when needed and keeps elements contiguous. Reallocation can invalidate pointers, references and iterators to vector elements. A string view owns nothing: never keep it beyond its source text's lifetime.

## Common mistakes
- Accessing index equal to `size()`.
- Assuming vector growth preserves element addresses.
- Returning a view into a local string.
- Using a raw character buffer without room for a null terminator.
- Copying large strings in hot loops without reason.

## Independent exercise
Store five enemy health values in an array, calculate total and maximum, and keep a player name in `std::string`. Add a helper that accepts a `std::string_view` but does not store it.

## Code-review checklist
Check bounds, ownership, invalidation and whether fixed or dynamic size is appropriate.

## Assessment gate
A. Compare built-in arrays, `std::array`, `std::vector`, `std::string` and `std::string_view`.  
B. Analyse out-of-bounds access and a view that outlives its source.  
C. Independently implement the enemy-health summary.  
D. Justify container selection and explain vector reallocation and view lifetime.

**Pass:** 80/100 or higher, no out-of-bounds access or dangling view.
