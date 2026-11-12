# 12 — Pointers, references and const correctness

## Game-development context
Engine systems often refer to objects without owning them: a camera follows a player, a collision query refers to an entity, or a function inspects a component. Pointers and references express these relationships but require lifetime discipline.

## Learning objectives
- Understand addresses, pointer values and dereferencing.
- Distinguish pointers from references.
- Use `nullptr` and const-qualified access.
- Recognise dangling pointers and references.

## Core concepts
A pointer stores an address. `&object` obtains an object's address; `*pointer` accesses the pointed-to object. A pointer can be null and reseated. A reference is an alias that must be initialised and cannot be reseated. Neither a raw pointer nor a reference automatically owns its target.

Use a reference when a valid object is required. Use a pointer when absence is meaningful or reseating is needed. Use `const T&` for read-only access to a larger object.

## Focused C++20 example
```cpp
#include <iostream>

void printHealth(const int& health)
{
    std::cout << health << '\n';
}

int main()
{
    int health{100};
    int* optionalHealth{&health};

    printHealth(health);
    if (optionalHealth != nullptr) {
        *optionalHealth -= 10;
    }
}
```

The pointer is non-owning; `health` remains the object whose lifetime matters.

## Memory, ownership and performance
Dereferencing a null, dangling or invalid pointer is undefined behaviour. A reference also becomes invalid when its referent's lifetime ends. Pointer arithmetic is valid only within an array object and one-past its end; it is not general-purpose address arithmetic.

## Common mistakes
- Using an uninitialised pointer.
- Dereferencing `nullptr`.
- Returning a pointer or reference to a local variable.
- Keeping a pointer to a vector element across reallocation.
- Confusing access with ownership.

## Independent exercise
Write one function that requires a player by reference and another that accepts an optional target by pointer. Demonstrate safe handling when the optional target is absent.

## Code-review checklist
For every pointer/reference, identify owner, lifetime guarantee, nullability and mutation permission.

## Assessment gate
A. Explain address-of, dereference, pointer, reference and const reference.  
B. Diagnose a dangling pointer and vector-reallocation invalidation.  
C. Independently implement required-reference and optional-pointer functions.  
D. Justify pointer versus reference and identify who owns the object.

**Pass:** 80/100 or higher; no invalid dereference, dangling access or ownership ambiguity.
