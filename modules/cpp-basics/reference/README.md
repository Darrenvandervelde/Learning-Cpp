# C++ Foundations Reference Library

This library supports the C++ foundations curriculum with technical explanations, annotated examples, engineering implications, common failure modes, and independent practice.

## Study method

1. Read the assigned reference before the lesson.
2. Predict the behaviour of every example before compiling it.
3. Build with C++20 and warnings enabled.
4. Change one condition at a time and observe the result.
5. Explain the result using C++ language rules rather than guesses about the machine.
6. Complete the practice task without copying a worked solution.

## Chapters

| Chapter | Subject |
| --- | --- |
| [01 Setup and first program](01-setup-and-first-program.md) | Environment, compiler, linker, executable |
| [02 Syntax and structure](02-basic-syntax-and-structure.md) | Declarations, definitions, scope, translation units |
| [03 Variables and types](03-variables-data-types-and-constants.md) | Objects, initialization, constants, representation |
| [04 Input and output](04-input-and-output.md) | Streams, parsing, validation |
| [05 Operators](05-operators.md) | Expressions, conversions, arithmetic |
| [06 Control flow](06-control-flow.md) | Decisions, loops, state transitions |
| [07 Functions](07-functions.md) | Interfaces, parameters, return values |
| [08 Arrays and strings](08-arrays-and-strings.md) | Sequences, containers, text |
| [09 Pointers and references](09-pointers-and-references.md) | Indirection, aliasing, lifetime |
| [10 Dynamic memory](10-dynamic-memory.md) | Storage duration, RAII, ownership |
| [11 Structures and enums](11-structures-and-enums.md) | Domain types and invariants |
| [12 OOP basics](12-oop-basics.md) | Encapsulation, composition, polymorphism |
| [13 Standard library](13-standard-library-essentials.md) | Containers, algorithms, complexity |
| [14 Debugging](14-error-handling-and-debugging.md) | Diagnostics, tests, debugging tools |
| [15 Good practices](15-good-practices.md) | Maintainability and professional workflow |

## Extended engineering guides

1. [C++ language model and program structure](CPP-LANGUAGE-MODEL.md)
2. [Types, expressions, functions, and control flow](CPP-CORE-PROGRAMMING.md)
3. [Containers, memory, and ownership](CPP-MEMORY-AND-CONTAINERS.md)
4. [Build, debug, test, and diagnose](CPP-BUILD-DEBUG-TEST.md)

## Course compiler profile

GCC or Clang:

```bash
g++ -std=c++20 -Wall -Wextra -Wpedantic -Wconversion -Wshadow main.cpp -o game
```

MSVC Developer PowerShell:

```powershell
cl /std:c++20 /W4 /permissive- /EHsc main.cpp
```

Compiler flags are toolchain specific. A warning must be understood before it is suppressed.

## Academic expectations

For each topic, students should define the concept, explain its language behaviour, implement a focused example, identify a failure mode, and justify a design choice. Compilation alone is not proof of correctness or understanding. Module assessments determine progression; this reference library does not replace them.
