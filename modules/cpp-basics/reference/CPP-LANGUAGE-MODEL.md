# C++ Language Model and Program Structure

## 1. From source text to a running process

A C++ program passes through several distinct stages. Source files are preprocessed, translated into implementation specific object code, and linked with other object files and libraries. The operating system then loads the executable and starts the process.

The compiler does not run the game while compiling it. The executable is a program image that the operating system can load. At runtime, the process receives virtual address space and operating system resources. The operating system and hardware manage execution; the executable does not independently allocate all memory for the machine.

## 2. Translation units

A translation unit is the source file after preprocessing. Each implementation file is generally compiled independently. This explains why a declaration can be visible in one file while its definition is supplied by another file at link time.

Headers usually publish declarations and templates. Implementation files usually provide non inline function definitions. Include guards prevent repeated inclusion within a translation unit. They do not prevent multiple definition errors caused by placing ordinary non inline definitions in headers included by several translation units.

## 3. Declarations and definitions

A declaration introduces a name and its type. A definition provides the entity's implementation or storage where required. A function may be declared in a header and defined in one source file.

```cpp
// player.hpp
#pragma once

void print_player_health(int health);
```

```cpp
// player.cpp
#include "player.hpp"
#include <iostream>

void print_player_health(int health)
{
    std::cout << "Health: " << health << '\\n';
}
```

```cpp
// main.cpp
#include "player.hpp"

int main()
{
    print_player_health(100);
}
```

Compile both implementation files in the same build command. If player.cpp is omitted, compilation of main.cpp can succeed but linking will fail because the function definition is missing.

## 4. Scope, storage duration, and lifetime

Scope describes where a name can be used. Storage duration describes the storage duration category of an object. Lifetime describes the period during which the object exists. These are related but not interchangeable.

A local variable usually has automatic storage duration. A namespace scope object usually has static storage duration. A dynamically allocated object has dynamic storage duration. Do not assume that these language categories are exactly equivalent to physical stack and heap locations; those are implementation concepts and common implementation strategies.

## 5. Namespaces and interfaces

Namespaces group related names and reduce accidental collisions. Avoid broad using directives in headers because they affect every file that includes the header. Prefer qualified names in interfaces. A public header should expose only what consumers need.

## 6. Linkage and the One Definition Rule

Linkage determines whether declarations in different scopes or translation units can refer to the same entity. The One Definition Rule places constraints on definitions across a program. Violations can produce linker errors or ill formed programs whose behaviour is not reliably diagnosed.

## 7. Engineering application

A game project should separate declarations from implementation, keep dependencies explicit, and build reproducibly. This enables parallel compilation, automated testing, and clear subsystem boundaries.

## Practice

Create a small project with a header, two implementation files, and a main function. Compile all implementation files together. Then omit one implementation file and classify the resulting diagnostic. Explain why a compile stage and a link stage are separate.
