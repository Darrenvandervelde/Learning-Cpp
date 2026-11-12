# Module 01 Theory: The C++ Build and Execution Model

## 1. Learning purpose

The purpose of this theory unit is to build a correct mental model of how a C++ program becomes executable. This model is foundational to debugging, multi file projects, libraries, build systems and deployment.

## 2. The compiler toolchain

A compiler toolchain is a collection of cooperating tools. A common GCC environment includes the compiler driver, preprocessing, compilation, assembler, linker, standard library and platform libraries.

The g++ command is a driver. It selects language options and coordinates the tools required to build a program. It is therefore useful to distinguish the command a developer types from the internal stages it invokes.

## 3. Translation units

A translation unit is the result of preprocessing a source file together with the content introduced by its included headers and directives. The compiler analyses each translation unit according to the language rules. Later modules explain declarations, definitions and how multiple translation units cooperate.

## 4. Preprocessing

Preprocessing handles directives such as include, macro definitions and conditional compilation. An include directive makes declarations from another file available to the translation unit. It does not mean the compiler pastes a complete executable library into the final program.

## 5. Compilation and code generation

The compiler analyses tokens, syntax, types and semantic rules. It may build internal representations, perform optimization and generate assembly or object code. The exact internal implementation is compiler specific.

## 6. Assembly and object files

An assembler can convert assembly language into object code. An object file commonly contains machine instructions, data, symbol information and relocation information. It may refer to functions or variables that are defined in other object files or libraries.

## 7. Linking

The linker combines object files and libraries, resolves external symbol references and produces an executable or another linkable artifact. An unresolved external reference is therefore commonly a linking problem rather than a C++ syntax problem.

## 8. Program loading and runtime

The operating system loads an executable into a process environment. Runtime support initializes the program and eventually transfers control to main in a hosted C++ environment. The process has memory and operating system resources that are distinct from the executable file stored on disk.

## 9. Diagnostics

A diagnostic is information produced by a development tool. Errors prevent a required stage from completing. Warnings identify suspicious or nonportable code but do not necessarily prevent output generation. A runtime failure occurs after a program has been built and started.

## 10. Standards and implementation

The C++ standard specifies language and library behaviour. A compiler implements a version of that standard with documented support and implementation limits. The option -std=c++20 requests C++20 mode from GCC. It does not guarantee that every optional library facility or platform feature is available in every environment.

## 11. Warning options

GCC options -Wall, -Wextra and -Wpedantic enable useful diagnostics. They are not a complete correctness proof. Later modules introduce additional warning options, static analysis, sanitizers and testing.

## 12. Study questions

1. Why is g++ described as a compiler driver?
2. What does preprocessing do with an include directive?
3. Why can an object file contain unresolved references?
4. What problem does the linker solve?
5. Why is a running process different from an executable file?
6. What can a warning tell you, and what can it not prove?
7. Why should a build record the compiler version and options?

## 13. Required explanation

Write a short explanation in your own words that follows one source file from disk to execution. Your explanation must use the terms source file, translation unit, compiler, object file, linker, executable and runtime correctly.
