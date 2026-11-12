# 02 — Program structure, headers and namespaces

## Game-development context
A game quickly grows beyond one file. Input, player rules, rendering and audio should not all live inside `main`. Declarations, definitions and namespaces prepare you to split systems into clear interfaces.

## Learning objectives
- Recognise directives, declarations, definitions, statements and expressions.
- Understand `main`.
- Use standard headers and qualified names.
- Explain why headers describe interfaces.

## Core concepts
`#include` is handled by the preprocessor. Standard headers use angle brackets, such as `<iostream>`; project headers conventionally use quotes, such as `"Player.hpp"`. A declaration introduces a name and type. A definition supplies an implementation or storage. A statement performs an action; an expression computes a value.

The `main` function is the hosted C++ program entry point. The `std::` prefix names entities in the standard library namespace. Avoid `using namespace std;` in headers because it pollutes every file that includes them.

## Focused C++20 example
```cpp
#include <iostream>

namespace game
{
    void printTitle()
    {
        std::cout << "THE LAST SIGNAL\n";
    }
}

int main()
{
    game::printTitle();
    return 0;
}
```

The function belongs to namespace `game`; its fully qualified name is `game::printTitle`.

## Memory, ownership and performance
Namespaces and headers organise names and compilation dependencies; they do not allocate game objects. Large include chains increase build times and coupling. Include what a file actually needs and keep implementation details in source files where practical.

## Common mistakes
- Defining non-inline functions in widely included headers and causing multiple-definition linker errors.
- Using broad namespace imports in headers.
- Assuming whitespace changes program meaning.
- Treating comments as a substitute for clear names.

## Independent exercise
Create a `game` namespace with functions to print a title and version. Put declarations in a header and definitions in a source file. Compile both files with `main.cpp`.

## Code-review checklist
Check header guards or `#pragma once`, include dependencies, namespace qualification and exactly one intended definition per function.

## Assessment gate
A. Explain declaration versus definition and what the preprocessor does with `#include`.  
B. Analyse a header that causes a duplicate-definition error.  
C. Independently split a two-function program into header, implementation and `main.cpp`.  
D. Justify a namespace and explain how reducing header dependencies helps a growing engine.

**Pass:** 80/100 or higher, successful multi-file build, no unresolved critical issue.
