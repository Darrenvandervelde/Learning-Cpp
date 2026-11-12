# 14 — Copy, move and value semantics

## Game-development context
Game data is copied, returned from functions, placed into containers and transferred between systems. Copy and move semantics help prevent expensive accidental copies and resource-ownership bugs.

## Learning objectives
- Distinguish copying from moving.
- Understand compiler-generated special member functions.
- Use `std::move` correctly.
- Recognise moved-from objects and the rule of zero.

## Core concepts
Copying creates a distinct value with equivalent content. Moving transfers resources from an object when its type supports that operation. `std::move` does not move by itself; it casts an expression to an rvalue reference so an appropriate move operation can be selected. A moved-from standard-library object remains valid, but its value is generally unspecified unless documented otherwise.

Prefer the rule of zero: compose members from types that already manage resources and let the compiler generate special member functions. Implement custom copy/move/destructor operations only when a type directly manages a resource and you understand the consequences.

## Focused C++20 example
```cpp
#include <string>
#include <utility>

int main()
{
    std::string source{"Ancient key"};
    std::string destination = std::move(source);
    // destination owns the transferred string value.
    // source remains valid; its contents are unspecified.
}
```

Do not use `source` as if it must still contain its original text.

## Memory, ownership and performance
Moving a resource-owning object can avoid allocating and copying underlying data, but cost depends on the type. Small scalar values are usually best passed by value. Avoid adding move operations to simple structs without evidence they are needed.

## Common mistakes
- Thinking `std::move` itself transfers resources.
- Reading a moved-from object under assumptions about its old value.
- Writing a destructor but forgetting copy/move consequences.
- Returning local values with unnecessary `std::move`; named return value optimisation may apply.
- Accidentally copying a large container in a hot path.

## Independent exercise
Write a function that takes ownership of a `std::unique_ptr<Enemy>`. Pass an owner using `std::move`, then demonstrate that the original handle is empty. Explain why normal copying is disallowed.

## Code-review checklist
Check which objects own resources, which operations copy or transfer ownership, and what guarantees remain after a move.

## Assessment gate
A. Explain copy, move, rvalue reference and the role of `std::move`.  
B. Analyse a class with a raw owning pointer and a compiler-generated shallow copy.  
C. Independently implement the unique-ownership transfer exercise.  
D. Explain the rule of zero and when a custom move operation is justified.

**Pass:** 80/100 or higher; no double ownership, shallow-copy resource bug or invalid moved-from assumption.
