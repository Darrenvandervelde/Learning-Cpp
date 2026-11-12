# Clang C++ Toolchain Guide

## 1. Role of Clang

Clang is the C language family front end in the LLVM project. The `clang++` driver compiles C++ and coordinates the build stages. Depending on the platform, it may use the platform linker and standard library or an explicitly selected alternative.

## 2. Verify the compiler

```powershell
clang++ --version
where.exe clang++
```

Check which executable is selected by the shell. A computer can have several Clang versions installed. Use a clean build directory when changing compiler versions or toolchain configurations.

## 3. C++20 build command

```powershell
clang++ -std=c++20 -Wall -Wextra -Wpedantic -Wconversion -Wshadow main.cpp -o game.exe
.\game.exe
```

Clang and GCC share many command line conventions, but warning behaviour and platform integration can differ. Do not assume identical diagnostics across compilers.

## 4. Multi file compilation

```powershell
clang++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp player.cpp -o game.exe
```

For a larger project, use CMake to generate build files for the selected compiler and generator. Do not reuse a build directory configured for another compiler.

## 5. Sanitizer instrumentation

On supported platforms, Clang can instrument code with AddressSanitizer and UndefinedBehaviorSanitizer.

```bash
clang++ -std=c++20 -g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer main.cpp -o game
```

Platform support and runtime requirements vary. Sanitizers detect defects on executed paths and are not a proof of correctness.

## 6. Common problems

1. The C++ standard library is missing or incompatible.
2. Object files were built with incompatible targets or settings.
3. The linker selected is not the expected platform linker.
4. Sanitizer runtime support is unavailable for the target.
5. The IDE and terminal select different compiler installations.

## 7. Further reading

Clang documentation: https://clang.llvm.org/docs/  
LLVM project: https://llvm.org/
