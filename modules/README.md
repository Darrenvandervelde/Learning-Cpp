# Modular C++ and Game Development Curriculum

This folder is the single home for the course. Each numbered module has its own folder and a `README.md`. Read modules in order: later topics depend on earlier knowledge.

## How to study a module

1. Read the learning goals and vocabulary.
2. Type the examples yourself; do not only copy and paste.
3. Build using the stated compiler flags.
4. Change the example and predict the result before running it.
5. Complete the independent exercise.
6. Submit your code and reasoning for review.
7. Complete the A–D assessment. Continue only after scoring at least 80/100 and meeting the safety requirements.

## Course modules

| # | Module | Main outcome |
|---:|---|---|
| 01 | [Toolchain, compilation and first program](01-toolchain-compilation-first-program/README.md) | Understand source, compiler, linker and executable. |
| 02 | [Program structure, headers and namespaces](02-program-structure-headers-namespaces/README.md) | Split code into maintainable translation units. |
| 03 | [Types, variables and constants](03-types-variables-constants/README.md) | Represent game state safely. |
| 04 | [Console input and output](04-console-input-output/README.md) | Build a simple command interface. |
| 05 | [Operators and expressions](05-operators-expressions/README.md) | Calculate movement, damage and scores. |
| 06 | [Decisions and loops](06-decisions-and-loops/README.md) | Implement rules and repeated updates. |
| 07 | [Functions and interfaces](07-functions-interfaces/README.md) | Decompose gameplay into focused operations. |
| 08 | [Arrays, strings and views](08-arrays-strings-views/README.md) | Work with sequences and text safely. |
| 09 | [Structs, enums and value types](09-structs-enums-value-types/README.md) | Model entities and game states. |
| 10 | [Classes and encapsulation](10-classes-encapsulation/README.md) | Protect invariants behind interfaces. |
| 11 | [Constructors, destructors and lifetime](11-constructors-destructors-lifetime/README.md) | Understand object lifetime and RAII. |
| 12 | [Pointers, references and const](12-pointers-references-const/README.md) | Express access, mutation and optional relationships. |
| 13 | [Ownership, dynamic memory and smart pointers](13-ownership-dynamic-memory-smart-pointers/README.md) | Make resource ownership explicit. |
| 14 | [Copy, move and value semantics](14-copy-move-value-semantics/README.md) | Transfer resources safely and efficiently. |
| 15 | [Containers, algorithms and iterators](15-containers-algorithms-iterators/README.md) | Use the standard library effectively. |
| 16 | [Templates, concepts and compile time](16-templates-concepts-compile-time/README.md) | Write reusable, constrained components. |
| 17 | [Errors, debugging and testing](17-errors-debugging-testing/README.md) | Investigate defects and verify behaviour. |
| 18 | [CMake, multiple files and Git](18-cmake-multifile-git/README.md) | Build and maintain a reproducible project. |
| 19 | [Console game architecture and game loop](19-console-game-architecture-loop/README.md) | Integrate the fundamentals into a game. |
| 20 | [Engineering quality, profiling and next steps](20-engineering-quality-profiling-next-steps/README.md) | Review quality and prepare for engine work. |

## Shared foundations and practical guides

- [C++ basics reference](CPP-BASICS.md): language concepts, syntax, types, functions, OOP, memory and standard library.
- [Build a module from scratch](BUILD-A-MODULE.md): how to design, implement, test and document a reusable module.
- [Build a game from scratch](GAME-FROM-SCRATCH.md): the cumulative project roadmap from a console game to a modular 2D game.
- [C++ basics reference material](cpp-basics/reference/): earlier focused guides retained as supporting reading.
- [Compiler and toolchain references](toolchain/reference/): compiler-specific notes.

## Assessment rubric (100 points)

| Area | Weight |
|---|---:|
| Technical understanding | 25 |
| Code correctness | 30 |
| Memory safety and C++ practices | 20 |
| Engineering reasoning | 15 |
| Code quality | 10 |

**Pass:** 80/100 or higher, code compiles where applicable, no critical memory-safety/undefined-behaviour/ownership errors, and the independent task is completed. If you do not pass, revise the weak areas and complete a fresh reassessment before progressing.

## Cumulative game milestones

- After Module 09: a small data-driven console prototype.
- After Module 14: safe entity and resource ownership.
- After Module 19: a playable console game with a predictable update loop.
- After Module 20: a reviewed, tested foundation ready for SDL3 or SFML.

The course is deliberately gated. Do not skip a concept because a later example appears more exciting.
