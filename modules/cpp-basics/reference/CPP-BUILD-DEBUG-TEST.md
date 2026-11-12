# Build, Debug, Test, and Diagnose C++ Programs

## 1. Reproducible builds

A reproducible build begins with a known compiler, language standard, flags, source files, and dependencies. Record compiler version and the exact command used. Do not rely on an IDE configuration that cannot be reproduced from a terminal or build system.

GCC or Clang:

```bash
g++ -std=c++20 -Wall -Wextra -Wpedantic -Wconversion -Wshadow main.cpp -o game
```

MSVC Developer PowerShell:

```powershell
cl /std:c++20 /W4 /permissive- /EHsc main.cpp
```

Flags differ by compiler. Keep compiler specific options in the correct build configuration.

## 2. Classify the failure

A compile error means a translation stage rejected the source. A linker error means the final program could not be assembled from the requested definitions and libraries. A runtime failure occurs while executing. A logic error is a mismatch between actual and intended behaviour. Undefined behaviour means the language standard does not constrain the result.

Do not label every failure a compiler error. The stage tells you where to investigate.

## 3. Diagnostic workflow

1. Reproduce the failure with a small input.
2. Save the complete compiler output.
3. Read the earliest meaningful diagnostic.
4. Inspect the named source location and nearby code.
5. Form one hypothesis.
6. Use a debugger or focused logging to inspect the relevant state.
7. Fix the root cause.
8. Rebuild and rerun the reproducer.
9. Add a regression test where practical.

## 4. Debugger fundamentals

A breakpoint pauses execution at a selected source location. Step over executes the current line without entering called functions. Step into enters a function. Step out runs until the current function returns. A watch expression inspects a value while paused. The call stack shows the chain of active function calls.

Debug builds usually preserve more information and use less optimisation. Release builds optimise code and can change timing and layout. If a program behaves differently between configurations, investigate undefined behaviour, uninitialised state, data races, and lifetime errors.

## 5. Assertions, validation, and error handling

Assertions document assumptions that should hold during development. They do not replace validation of external input. Use return values or result types for expected failure paths. Exceptions are appropriate for failures that cannot be handled locally and work with RAII stack unwinding. C++23 provides std::expected; C++20 projects can use a suitable result type or library.

## 6. Sanitizers and tests

AddressSanitizer can detect many out of bounds and lifetime errors on supported platforms. UndefinedBehaviorSanitizer detects a useful subset of undefined behaviour. ThreadSanitizer can detect data races on supported toolchains. Sanitizers only analyse executions that occur; they do not prove correctness.

Unit tests should exercise normal values, boundaries, and invalid input. Separate pure gameplay rules from platform and rendering code to make testing easier.

## 7. Practice

Create a deliberate logic defect in a health calculation. Record a failing test, inspect the relevant state in a debugger, correct the cause, and add a regression test. Explain what evidence proves the fix.
