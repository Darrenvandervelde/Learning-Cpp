# 18 — CMake, multi-file projects and Git

## Game-development context
A real game project contains source files, headers, assets, tests and build configurations. A reproducible build lets another developer compile the project without guessing compiler commands.

## Learning objectives
- Separate public headers from implementation files.
- Create a small CMake project.
- Configure and build in a generated directory.
- Use Git commits and branches to preserve working history.

## Core concepts
CMake describes how a project is built; it is not the C++ compiler. A generator such as Ninja or a platform build system produces actual build files. Keep generated files outside the source tree, commonly in `build/`. A target declares its sources, include directories, language standard and dependencies.

Git records snapshots of project changes. Make focused commits with meaningful messages. Use branches for isolated work and review diffs before merging.

## Focused C++20 example
A minimal `CMakeLists.txt`:

```cmake
cmake_minimum_required(VERSION 3.20)
project(LearningCpp LANGUAGES CXX)

add_executable(player_demo
    src/main.cpp
    src/Player.cpp
)

target_include_directories(player_demo PRIVATE include)
target_compile_features(player_demo PRIVATE cxx_std_20)
```

Suggested layout: `CMakeLists.txt`, `include/Player.hpp`, `src/Player.cpp`, `src/main.cpp`.

Configure and build:

```powershell
cmake -S . -B build
cmake --build build
```

## Memory, ownership and performance
Build-system organisation does not change runtime ownership, but clean target boundaries reduce accidental dependencies. Incremental builds avoid recompiling unaffected files. Keep generated binaries and caches out of Git unless there is a deliberate reason to version them.

## Common mistakes
- Including generated build files in commits.
- Using include paths that only work from one working directory.
- Forgetting to set the C++ standard on the target.
- Putting every implementation in a header.
- Committing unrelated changes together.

## Independent exercise
Convert a two-file player program into a CMake project. Create a Git branch, make a focused commit, inspect the diff and return to the main development branch without losing work.

## Code-review checklist
Verify clean configure/build instructions, target-level settings, directory layout, Git status and commit clarity.

## Assessment gate
A. Explain CMake versus compiler versus build generator.  
B. Diagnose a missing source file or include-directory configuration.  
C. Independently create and build the multi-file CMake project.  
D. Explain why out-of-source builds, focused commits and branches improve workflow.

**Pass:** 80/100 or higher; a clean configure and build succeeds from documented commands.
