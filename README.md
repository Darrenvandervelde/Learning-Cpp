# Learning C++ — From Fundamentals to Game Engine Development

A practical, assessment-driven C++20 learning repository. The goal is not merely to make programs compile: it is to understand how C++ works, build complete games incrementally, and develop the engineering judgement required to design engine systems.

## Start here

1. Read [the modular learning path](modules/README.md).
2. Begin with [C++ basics](modules/cpp-basics/README.md).
3. Follow the [20 learning modules](modules/README.md) in order.
4. Use the [build-a-module guide](modules/BUILD-A-MODULE.md) to understand how each lesson is structured.
5. Follow [build a game from scratch](modules/GAME-FROM-SCRATCH.md) as the cumulative project.

## Three learning tracks

| Track | Purpose |
|---|---|
| C++ basics | Learn syntax, types, functions, classes, memory, the standard library, debugging and build tools. |
| Build a module | Learn how to turn a requirement into a small, testable, documented C++ system. |
| Build a game | Apply each concept to a growing game, from a console prototype to a modular 2D game and engine. |

## Repository layout

```text
Learning-Cpp/
├── README.md
├── modules/
│   ├── README.md
│   ├── CPP-BASICS.md
│   ├── BUILD-A-MODULE.md
│   ├── GAME-FROM-SCRATCH.md
│   ├── 01-toolchain-compilation-first-program/
│   │   └── README.md
│   ├── ... 02 through 20 ...
│   ├── cpp-basics/
│   │   └── reference/
│   └── toolchain/
│       └── reference/
├── Game Docs/
└── books/
```

## Engineering standard

- C++20 by default; C++23 only when it adds clear value.
- Build reproducibly with CMake and a documented compiler.
- Prefer RAII, value semantics, explicit ownership and small interfaces.
- Test behaviour and edge cases; use warnings and sanitizers.
- Profile before optimising.
- Complete the independent assessment for every module.

## Assessment gate

Every module ends with technical questions, code analysis, an independent coding task and engineering reasoning. The pass mark is **80/100**, with no critical memory-safety, undefined-behaviour or ownership errors. A module is not passed merely because its exercise was completed.

See [modules/README.md](modules/README.md) for the full sequence and progression rules.
