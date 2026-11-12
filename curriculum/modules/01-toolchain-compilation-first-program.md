# 01 — Toolchain, compilation and your first program

## Game-development context
Every engine begins as source files that must become a program the operating system can load. A reliable toolchain is part of the engine, not an afterthought. The same workflow will later build game loops, libraries and tests.

## Learning objectives
- Identify compiler, linker, executable and runtime.
- Compile C++20 with useful warnings.
- Distinguish a successful build from a correct program.

## Core concepts
A source file such as `main.cpp` is human-readable C++. A typical build performs preprocessing, compilation to object code, and linking. The linker combines object files and required libraries into an executable. At runtime, the operating system loads the executable and the CPU executes its instructions. The exact pipeline varies by toolchain, but this is a useful model.

A compiler does not prove that game logic is correct. It rejects invalid programs and warns about suspicious constructs, but logic errors and many runtime defects remain possible.

## Focused C++20 example
Create `main.cpp`:

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, game developer!\n";
    return 0;
}
```

Build and run in Windows PowerShell:

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp -o game.exe
.\game.exe
```

Expected output: `Hello, game developer!`. The flags select C++20 and enable useful diagnostics. Clang uses `clang++`; MSVC has its own command-line options.

## Memory, ownership and performance
This program creates no application-owned dynamic resource. Standard output is supplied by the C++ runtime/library. The executable contains instructions and data, not a live copy of the terminal session. Optimisation can improve generated code, but does not replace sound algorithms or profiling.

## Common mistakes
- Running the wrong executable or compiling from the wrong directory.
- Assuming `--version` proves that C++20 compilation works.
- Ignoring compiler warnings.
- Confusing compile errors, linker errors and runtime failures.

## Independent exercise
Create `player_status.cpp` that prints a three-line player status panel. Compile it with C++20 and warnings enabled. Deliberately remove a semicolon, observe the diagnostic, restore it and rebuild.

## Code-review checklist
Submit source, exact build command, terminal output and an explanation of one diagnostic. Review reproducibility and whether the source matches the output.

## Assessment gate
A. Explain preprocessing, compilation, linking and execution in order.  
B. Diagnose a missing-header or undefined-symbol example; distinguish compiler from linker diagnostics.  
C. Independently build a second executable with changed output and warning-enabled flags.  
D. Explain why an executable is useful for shipping a game and why compilation alone does not guarantee correctness.

**Pass:** 80/100 or higher, successful build, no unresolved critical issue. The next module remains locked until review.
