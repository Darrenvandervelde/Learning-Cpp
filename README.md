# Learning C++ — Game Development and Engine Foundations

A project-led C++20 path from the first compiled program to the foundations of professional game systems and engine development.

## Start here

**[Open the 20-module curriculum](curriculum/README.md)**

Every module includes game-development context, concepts, a focused C++ example, memory/ownership/performance notes, common mistakes, an independent exercise, code-review guidance and a mandatory assessment.

## The 20 modules

1. [Toolchain, compilation and first program](curriculum/modules/01-toolchain-compilation-first-program.md)
2. [Program structure, headers and namespaces](curriculum/modules/02-program-structure-headers-namespaces.md)
3. [Types, variables and constants](curriculum/modules/03-types-variables-constants.md)
4. [Console input and output](curriculum/modules/04-console-input-output.md)
5. [Operators and expressions](curriculum/modules/05-operators-expressions.md)
6. [Decisions and loops](curriculum/modules/06-decisions-and-loops.md)
7. [Functions and interfaces](curriculum/modules/07-functions-interfaces.md)
8. [Arrays, strings and views](curriculum/modules/08-arrays-strings-views.md)
9. [Structures, enums and value types](curriculum/modules/09-structs-enums-value-types.md)
10. [Classes and encapsulation](curriculum/modules/10-classes-encapsulation.md)
11. [Constructors, destructors and lifetime](curriculum/modules/11-constructors-destructors-lifetime.md)
12. [Pointers, references and const correctness](curriculum/modules/12-pointers-references-const.md)
13. [Ownership, dynamic memory and smart pointers](curriculum/modules/13-ownership-dynamic-memory-smart-pointers.md)
14. [Copy, move and value semantics](curriculum/modules/14-copy-move-value-semantics.md)
15. [Containers, algorithms and iterators](curriculum/modules/15-containers-algorithms-iterators.md)
16. [Templates, concepts and compile-time tools](curriculum/modules/16-templates-concepts-compile-time.md)
17. [Errors, debugging, testing and sanitizers](curriculum/modules/17-errors-debugging-testing.md)
18. [CMake, multi-file projects and Git](curriculum/modules/18-cmake-multifile-git.md)
19. [Console game architecture and game loop](curriculum/modules/19-console-game-architecture-loop.md)
20. [Engineering quality, profiling and next steps](curriculum/modules/20-engineering-quality-profiling-next-steps.md)

## Engineering principles

- C++20 by default; introduce C++23 only when useful.
- Prefer RAII, standard containers and explicit ownership over manual memory management.
- Build with warnings, use CMake for multi-file projects, and track work with Git.
- Profile before optimising; a successful compile is not proof of correctness.
- Do not skip assessment gates.

## Assessment policy

Each module is graded out of 100: technical understanding 25%, code correctness 30%, memory safety/C++ practices 20%, engineering reasoning 15%, and code quality 10%. Passing requires at least 80%, a working implementation where applicable, no critical memory-safety/undefined-behaviour/ownership issue, and independent completion of the core task. Failed modules remain locked until targeted practice and a fresh reassessment.

## Repository layout

```text
Learning-Cpp/
├── README.md
├── curriculum/
│   ├── README.md
│   └── modules/       # 20 detailed lessons
├── docs/              # existing quick guides and compiler notes
├── Game Docs/         # existing game documentation
└── books/             # existing reference material
```

The earlier numbered guides in `docs/` are retained as supplementary quick references. The new curriculum is the canonical, ordered learning path. Existing game documentation, compiler notes and reference material are preserved.

## Build baseline

GCC/Clang: `g++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp -o game`

Windows PowerShell: `.\game.exe`

See Module 01 for toolchain verification and Module 18 for CMake. See the [curriculum index](curriculum/README.md) for the full sequence.
