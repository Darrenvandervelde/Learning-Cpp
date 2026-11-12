# Learning C++: From Fundamentals to Game Engine Development

A practical, assessment driven C++20 learning repository. The goal is to understand how C++ works, build complete games incrementally and develop the engineering judgement required to design engine systems.

## Academic course framework

1. Read the [course specification](modules/COURSE-SPECIFICATION.md) for course outcomes, prerequisites, assessment policy and academic alignment.
2. Read the [module design standard](modules/MODULE-DESIGN-STANDARD.md) to understand the expected depth and evidence for every lesson.
3. Begin with [Module 01: Toolchain, Compilation and Your First Program](modules/01-toolchain-compilation-first-program/README.md).

The course is designed with reference to published computing education and accreditation guidance. This repository is not an accredited degree programme and does not award academic credit.

## Interactive learning website

The repository includes a W3Schools-inspired [C++ Game Development Academy](website/README.md). It presents the 20-module curriculum in a responsive lesson interface with topic search, code-copy controls and browser-local progress tracking. The website reads directly from the module documentation, keeping the written curriculum as the source of truth. See the [website setup and deployment guide](website/README.md) for local preview and GitHub Pages configuration.

## Start here

1. Read [the modular learning path](modules/README.md).
2. Begin with [C++ basics](modules/cpp-basics/README.md).
3. Follow the [20 learning modules](modules/README.md) in order.
4. Use the [build a module guide](modules/BUILD-A-MODULE.md) to understand how each lesson is structured.
5. Follow [build a game from scratch](modules/GAME-FROM-SCRATCH.md) as the cumulative project.

## Three learning tracks

| Track | Purpose |
|---|---|
| C++ basics | Learn syntax, types, functions, classes, memory, the standard library, debugging and build tools. |
| Build a module | Learn how to turn a requirement into a small, testable, documented C++ system. |
| Build a game | Apply each concept to a growing game, from a console prototype to a modular 2D game and engine. |

## Repository layout

1. Root documentation: README.md
2. Course framework: modules/COURSE-SPECIFICATION.md
3. Module quality standard: modules/MODULE-DESIGN-STANDARD.md
4. Curriculum index: modules/README.md
5. Numbered lessons: modules/01 through modules/20
6. C++ reference material: modules/cpp-basics/reference
7. Toolchain reference material: modules/toolchain/reference
8. Existing game documentation: Game Docs
9. Book references: books

## Engineering standard

1. Use C++20 by default and introduce C++23 only when it adds clear value.
2. Build reproducibly with CMake and a documented compiler when the curriculum reaches build system instruction.
3. Prefer RAII, value semantics, explicit ownership and small interfaces.
4. Test behaviour and edge cases. Use warnings and sanitizers.
5. Profile before optimizing.
6. Complete the independent assessment for every module.

## Assessment gate

Every module ends with technical questions, code analysis, an independent coding task and engineering reasoning. The pass mark is **80/100**, with no critical memory safety, undefined behaviour or ownership errors. A module is not passed merely because its exercise was completed.

See [modules/README.md](modules/README.md) for the full sequence and progression rules.
