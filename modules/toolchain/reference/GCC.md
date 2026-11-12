# GCC C++ Toolchain Guide

## 1. Role of GCC

GCC is a compiler collection. The `g++` driver coordinates C++ preprocessing, compilation, assembly, and linking. It selects target specific startup files and libraries. The exact toolchain depends on the operating system, target, and installation.

## 2. Verify the active compiler

```powershell
g++ --version
where.exe g++
```

In MSYS2 shells, `which g++` is also useful. Multiple installations can exist on one machine. Confirm the executable path and version used by the terminal, IDE, and build system.

## 3. Build a C++20 program

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic -Wconversion -Wshadow main.cpp -o game.exe
.\game.exe
```

The language standard flag selects C++20 mode. Warning flags enable diagnostics for suspicious constructs. A warning should be understood before it is suppressed.

## 4. Inspect the stages

```powershell
g++ -E main.cpp -o main.ii
g++ -S -std=c++20 main.cpp -o main.s
g++ -c -std=c++20 main.cpp -o main.o
g++ main.o -o game.exe
```

The preprocessor output shows included declarations and macro expansion. Assembly output shows generated assembly. The object file contains relocatable machine code and metadata. The linker resolves references between object files and libraries.

## 5. Multi file builds

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp player.cpp -o game.exe
```

Each implementation file is compiled as a translation unit. A missing definition may produce an undefined reference error during linking. Duplicate non inline definitions can also cause link failures.

## 6. MSYS2 environment notes

MSYS2 provides multiple environments. The selected environment determines compiler target, runtime, and executable paths. Do not mix incompatible object files or libraries from different environments. Confirm that the compiler and dependencies come from the same intended environment.

## 7. Common diagnostic patterns

A missing header indicates an include path or installation problem. An undefined reference usually points to a missing definition or library. A permission error when running the executable is an operating system or shell issue, not a C++ syntax error.

## 8. Further reading

Official GCC manual: https://gcc.gnu.org/onlinedocs/  
GCC C++ status: https://gcc.gnu.org/projects/cxx-status.html
