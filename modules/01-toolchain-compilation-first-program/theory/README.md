# Module 01 Theory: Translation, Linking and Process Execution

This document is the technical reference for Module 01. It expands the concepts used in the guided lessons. Read the corresponding section before performing each laboratory.

## 1. A layered model of a C++ application

A C++ application sits across several layers:

1. **Language layer:** the C++ rules that define valid programs and observable behaviour.
2. **Implementation layer:** a compiler and standard library that implement the language for a target environment.
3. **Object and executable format layer:** platform conventions describing code, data, symbols, relocations and loadable images.
4. **Operating system layer:** process creation, virtual memory, files, scheduling and resource management.
5. **Hardware layer:** processor instructions, memory systems and devices.

These layers interact, but they are not interchangeable. The C++ standard does not specify the Windows executable format. The CPU does not parse a C++ header. The operating system does not normally understand a C++ class declaration.

## 2. Source files, preprocessing and translation units

A source file is a sequence of characters interpreted as C++ source. The implementation performs translation phases specified by the C++ standard. At an introductory level, preprocessing directives are particularly visible.

The directive:

```cpp
#include <iostream>
```

requests that the implementation make the named header's contents available according to the include mechanism. In a typical implementation, this results in declarations and other header content being included in the translation unit. It does not mean that all implementation code for output is copied as a giant text block into the executable.

A translation unit is the source file after preprocessing. It is the principal unit analysed by the compiler. If a project contains `main.cpp`, `renderer.cpp` and `input.cpp`, these are normally three translation units. A header included by two source files contributes content to both translation units.

This model explains why a change to a widely included header can cause many translation units to be rebuilt.

## 3. Compiler driver and compiler front end

The command a developer types is not necessarily one indivisible compiler stage.

The GCC command `g++` is a driver. It interprets options, selects language mode and target configuration, invokes the necessary internal tools, and arranges linking when requested. Clang's `clang++` and MSVC's `cl.exe` have their own driver behaviours and option syntax.

A compiler front end typically performs work such as:

1. Lexical analysis: grouping characters into tokens.
2. Parsing: checking grammatical structure and building a representation of the program.
3. Semantic analysis: checking declarations, types, conversions, overload resolution and other language constraints.
4. Producing an intermediate representation for later compiler stages.

The precise architecture and internal data structures are implementation details. The language standard specifies required observable behaviour, not a mandatory compiler architecture.

## 4. Optimization and code generation

A compiler may transform an intermediate representation to improve generated code. Examples include removing unreachable operations, simplifying expressions, inlining eligible functions and allocating values to registers.

An optimization must preserve the observable behaviour required by the language for a well-defined program. The compiler is not required to preserve the exact sequence of source statements as machine instructions.

This is why debugging an optimized executable can be less direct: instructions may be reordered, variables may live only in registers, and source-level statements may not correspond one-to-one with machine instructions.

Optimization does not repair undefined behaviour. If a program violates language rules, the standard does not require a particular result.

## 5. Assembly and object files

Assembly language is a textual representation of target instructions and directives. An assembler translates it into an object file. Some toolchains integrate assembly into the compiler pipeline.

An object file commonly contains sections such as:

1. Executable instruction bytes.
2. Initialized data.
3. Uninitialized storage descriptions.
4. Symbol tables.
5. Relocation entries.
6. Debug information.
7. Platform-specific metadata.

An object file is often relocatable. Its final memory addresses may not yet be known. A relocation entry tells the linker that an address or reference must be adjusted when the final layout is constructed.

Object formats differ. Common examples include ELF, PE/COFF and Mach-O. Do not assume that an object file created for one platform can be linked as-is on another.

## 6. Declarations, definitions and symbols

A declaration introduces a name and establishes how the name may be used. A definition provides the entity's implementation or required storage definition.

For example, a function declaration can make a call syntactically and semantically valid in one translation unit. The implementation may be defined in another translation unit. The compiled object can therefore refer to a symbol that is not defined locally.

The linker resolves these references using symbol and relocation information. If the required definition is not among the supplied objects or libraries, linking fails.

The reverse problem can also occur: multiple incompatible definitions may violate the One Definition Rule or produce duplicate symbol diagnostics. This module introduces the problem; the language foundations module studies linkage and the One Definition Rule carefully.

## 7. Linking and libraries

The linker combines compatible object files and libraries. Depending on the platform and build configuration, it may:

1. Resolve external symbol references.
2. Apply relocations.
3. Select required library code.
4. Arrange sections and addresses.
5. Produce an executable or another linkable artifact.
6. Emit debugging or symbol information.

Static and dynamic libraries have different deployment and loading implications. A static library generally contributes selected object code during linking. A dynamic library is a separately loadable component whose presence and compatibility may be required when the program starts or runs.

A successful link does not prove that all runtime dependencies are installed. A successful build also does not prove that the program's logic is correct.

## 8. Executable image and process

An executable file is a persistent artifact. A process is an active operating system abstraction.

When a program is started, the operating system performs platform-specific work to create a process and establish its execution environment. This may include mapping executable sections, setting up a stack, preparing arguments and environment data, mapping required shared libraries and transferring control to startup code.

The runtime startup sequence performs required initialization before the hosted program's `main` function is entered. Returning from `main` leads to normal termination processing and a status value being reported to the host environment.

A process has a virtual address space. The virtual address space is not a simple diagram in which every process always has the same fixed stack and heap sizes. The operating system and runtime manage mappings and reservations according to platform policy.

## 9. Storage and memory overview

Module 01 does not require application-managed dynamic allocation, but it is useful to distinguish the broad categories:

1. **Static storage duration:** objects with static storage duration exist for the duration of the program. Their initialization and lifetime follow C++ rules.
2. **Automatic storage duration:** local objects in ordinary block scope commonly have automatic storage duration. Their lifetime is associated with execution entering and leaving the relevant scope.
3. **Dynamic storage duration:** storage can be obtained during execution through allocation mechanisms. C++ abstractions such as standard containers and smart pointers manage these resources more safely than manual ownership patterns.
4. **Thread storage duration:** thread-local objects have lifetimes associated with threads.

These are C++ storage-duration categories, not direct names for operating system memory regions. A local object is often stored on a machine stack, but the language does not require a physical stack slot for every local variable. Optimizers may keep values in registers or eliminate them when permitted.

## 10. Diagnostics and failure domains

A useful investigation begins by identifying where the failure occurred.

### 10.1 Preprocessing or header failure

The implementation cannot find a requested header or encounters an invalid preprocessing directive. Investigate include paths, installation and directive spelling.

### 10.2 Compilation failure

The compiler rejects syntax or semantic rules. Examples include a missing semicolon, invalid expression or use of an undeclared name.

### 10.3 Linking failure

The object files cannot be combined into the requested output. A common cause is a required external definition or library being absent. Another is duplicate definitions.

### 10.4 Loading or startup failure

The operating system cannot load the executable or a required runtime component. This is not a C++ syntax error.

### 10.5 Runtime failure

The process starts but terminates abnormally or violates a runtime requirement. Examples include an invalid memory access, failed input assumption or unhandled error.

### 10.6 Logic failure

The process runs but produces an incorrect result. A game that displays 90 health after taking 20 damage from 100 has a logic defect if the intended rule is subtraction by 20.

A good developer preserves the exact command and diagnostic, identifies the failure domain, forms a testable hypothesis and makes a minimal correction.

## 11. C++ standard modes and implementation support

The C++ standard defines the language and standard library. A compiler's language mode selects which language rules and features it accepts. GCC's `-std=c++20` requests C++20 mode.

This option does not:
1. Install a newer compiler.
2. Install a missing standard library.
3. Guarantee support for every library facility on every target.
4. Guarantee identical diagnostics across implementations.
5. Guarantee that a program is portable if it uses platform-specific facilities.

The compiler version, target triple, standard library and platform are all relevant when investigating portability.

## 12. Warnings and correctness

Warnings are diagnostic messages about suspicious, nonportable or potentially unintended code. GCC's `-Wall`, `-Wextra` and `-Wpedantic` enable useful groups of warnings.

A warning policy is a project decision. A warning should be read and understood. Suppressing a warning globally can hide future problems. Conversely, not every warning indicates a real defect in every context.

A build with no warnings is not a formal proof of correctness. Static analysis, tests, sanitizers, code review and runtime observation provide additional evidence, each with limitations.

## 13. Debug and Release builds

A Debug build typically includes debugging information and uses settings intended to make source-level debugging practical. A Release build typically enables more optimization and may omit some debugging information.

These are conventions implemented by build systems, not universal C++ language modes. Different projects may choose different flags.

If a defect appears only in an optimized build, investigate:
1. Undefined behaviour.
2. Uninitialized values.
3. Invalid object lifetimes.
4. Data races.
5. Incorrect assumptions about evaluation order.
6. Code that accidentally depends on debug-only timing or layout.

Do not “fix” a Release-only defect by disabling optimization without understanding the cause.

## 14. Reproducible build records

A reproducible engineering record should state:

1. Source revision or commit.
2. Compiler and version.
3. Target architecture and operating system.
4. C++ language mode.
5. Build configuration and relevant flags.
6. Dependencies and versions where applicable.
7. Exact build command or build-system invocation.
8. Actual build result and test output.

This makes it possible for another developer to investigate the same build rather than guessing at the environment.

## 15. Review questions

Answer without copying definitions.

1. Why is a compiler driver different from a compiler front end?
2. What is a translation unit, and why can a header affect several translation units?
3. Why might an object file contain an unresolved reference?
4. What information does a relocation entry provide to the linker?
5. Why does a valid function call in one source file not guarantee that the final executable can be linked?
6. Why is an executable file not the same as a process?
7. Which parts of process startup are platform-specific?
8. Why is a local C++ object not necessarily represented by a dedicated stack slot?
9. Why does `-std=c++20` not guarantee that every C++20 library feature is available?
10. Why is a warning-free build insufficient evidence of correctness?
11. What evidence would you preserve when a build fails on one developer's machine but succeeds on another?
12. Why should Debug and Release builds be tested independently?

## 16. Required written explanation

Write 500 to 800 words tracing one source file from disk to execution. Your explanation must correctly use the terms source file, preprocessing, translation unit, compiler front end, code generation, object file, symbol, relocation, linker, executable image, operating system loader, process, runtime startup and `main`.

Do not simply list the terms. Explain the relationship between the stages and identify which details are specified by C++ and which depend on the implementation or operating system.
