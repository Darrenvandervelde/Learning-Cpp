# C++20 Game Development Curriculum

A staged, project-led route from first C++ program to a maintainable console game and the foundations needed for a custom engine.

## How to work

1. Complete modules in order; later topics rely on earlier knowledge.
2. Write examples yourself and experiment with edge cases.
3. Compile with warnings enabled. Treat warnings as useful evidence.
4. Submit your own code, build output, tests and reasoning for review.
5. Do not progress until the assessment gate is passed.

## Module map

| # | Module | Main outcome |
|---:|---|---|
| 01 | [Toolchain, compilation and first program](modules/01-toolchain-compilation-first-program.md) | Build a C++20 executable |
| 02 | [Program structure, headers and namespaces](modules/02-program-structure-headers-namespaces.md) | Organise a small program |
| 03 | [Types, variables and constants](modules/03-types-variables-constants.md) | Model game values safely |
| 04 | [Console input and output](modules/04-console-input-output.md) | Validate player input |
| 05 | [Operators and expressions](modules/05-operators-expressions.md) | Calculate gameplay values |
| 06 | [Decisions and loops](modules/06-decisions-and-loops.md) | Express game rules and repetition |
| 07 | [Functions and interfaces](modules/07-functions-interfaces.md) | Build testable units |
| 08 | [Arrays, strings and views](modules/08-arrays-strings-views.md) | Work with sequences and text |
| 09 | [Structures, enums and value types](modules/09-structs-enums-value-types.md) | Model entities and states |
| 10 | [Classes and encapsulation](modules/10-classes-encapsulation.md) | Protect object invariants |
| 11 | [Constructors, destructors and lifetime](modules/11-constructors-destructors-lifetime.md) | Apply lifetime and RAII |
| 12 | [Pointers, references and const](modules/12-pointers-references-const.md) | Express access safely |
| 13 | [Ownership, dynamic memory and smart pointers](modules/13-ownership-dynamic-memory-smart-pointers.md) | Manage resources safely |
| 14 | [Copy, move and value semantics](modules/14-copy-move-value-semantics.md) | Transfer resources correctly |
| 15 | [Containers, algorithms and iterators](modules/15-containers-algorithms-iterators.md) | Use the standard library |
| 16 | [Templates, concepts and compile-time tools](modules/16-templates-concepts-compile-time.md) | Write generic components |
| 17 | [Errors, debugging, testing and sanitizers](modules/17-errors-debugging-testing.md) | Investigate defects |
| 18 | [CMake, multi-file projects and Git](modules/18-cmake-multifile-git.md) | Build reproducible projects |
| 19 | [Console game architecture and game loop](modules/19-console-game-architecture-loop.md) | Build an integrated game |
| 20 | [Engineering quality, profiling and next steps](modules/20-engineering-quality-profiling-next-steps.md) | Review and improve a project |

## Standard lesson structure

Every lesson covers: (1) game-development context, (2) core concepts and terms, (3) a focused C++20 example, (4) memory/ownership/performance, (5) common mistakes, (6) an independent exercise, and (7) a code review and assessment.

## Assessment gate

| Category | Weight |
|---|---:|
| Technical understanding | 25% |
| Code correctness | 30% |
| Memory safety and C++ practices | 20% |
| Engineering reasoning | 15% |
| Code quality | 10% |

**Pass mark: 80/100.** Code must compile where applicable. Critical memory-safety, undefined-behaviour or ownership errors must be fixed. The learner must independently complete the core task and explain reasonable design choices. A failed attempt locks the next module; targeted practice and a fresh reassessment are required.

## Compiler baseline

```bash
g++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp -o game
```

For Windows PowerShell:

```powershell
.\game.exe
```

Module 18 introduces CMake and multi-file builds. The 20 modules establish the C++ foundation; SDL3/SFML, rendering, physics, ECS, multithreading and custom engine architecture follow as later project stages.
