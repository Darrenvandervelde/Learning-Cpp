# Module 01: The C++ Toolchain, Translation, Linking and Program Execution

## 1. Academic unit specification

**Level:** Undergraduate computer science, introductory systems programming  
**Suggested workload:** 18 to 24 focused study hours  
**Language baseline:** ISO C++20  
**Primary environment:** Windows PowerShell with MSYS2 GCC; equivalent GCC, Clang and MSVC workflows are documented  
**Application context:** Build the first reproducible executable for the cumulative console game, The Last Signal  
**Prerequisites:** Basic computer literacy, ability to edit text files and navigate directories. No prior C++ knowledge is assumed.

This unit establishes the mental model required to work confidently on real C++ projects. The aim is not merely to memorise a compiler command. The student will explain how source text becomes a program image, how a toolchain constructs that image, how an operating system starts a process, and how to investigate failures at each boundary.

The unit deliberately avoids classes, pointers, dynamic allocation and game frameworks. Those topics depend on an accurate understanding of translation, program structure and execution.

## 2. Why this unit matters to game engineering

A game engine is a collection of separately compiled components: platform code, rendering, input, audio, physics, gameplay, tools and tests. A developer who cannot distinguish compilation from linking will struggle to diagnose missing definitions, duplicate symbols, incompatible libraries and incorrect build configurations.

The same mental model applies whether the final product is a tiny console program or a multi-million-line engine. The scale changes; the boundaries between source, translation, object code, linking and process execution remain important.

Consider a future engine build:

1. `main.cpp` defines the application entry point.
2. `renderer.cpp` implements rendering operations.
3. `input.cpp` implements input operations.
4. Each implementation file is compiled as a translation unit.
5. The linker resolves references between the resulting object files and required libraries.
6. The operating system loads the executable and creates a process.
7. Runtime startup code establishes the hosted C++ environment before the program's `main` function is entered.

This module teaches the first version of that pipeline using one source file, then asks you to inspect the stages.

## 3. Learning outcomes

On successful completion, the student can:

1. Explain the distinction between source text, a translation unit, object code, an executable file and a running process.
2. Describe the roles of the compiler driver, preprocessor, compiler front end, optimizer, code generator, assembler, linker, runtime support and operating system loader.
3. Explain why a header provides declarations and definitions to a translation unit but is not itself a separately linked library.
4. Explain the conceptual purpose of declarations, definitions, symbols and relocation records without yet requiring advanced language knowledge.
5. Build a C++20 program with a documented compiler, target and warning policy.
6. Inspect preprocessing output, assembly output and object files using GCC driver options.
7. Distinguish source diagnostics, link failures, loader failures, runtime failures and logic defects.
8. Explain why successful compilation and one successful execution do not prove correctness.
9. Produce a reproducible build record that another developer can follow.
10. Communicate a technical investigation using evidence rather than guesses.

## 4. Unit map

The unit is delivered as ten lessons. Work through them in order.

| Lesson | Topic | Main evidence |
|---|---|---|
| 01 | What C++ is and where a program runs | Explain source, machine instructions, CPU and operating system |
| 02 | Development environment and toolchain | Identify compiler executable, version, target and shell path |
| 03 | Anatomy of a hosted C++ program | Annotate a minimal program statement by statement |
| 04 | Translation and compilation pipeline | Inspect preprocessed source, assembly and object output |
| 05 | Symbols, declarations and linking | Explain a two-file build and an unresolved external |
| 06 | Program loading, startup and runtime | Distinguish executable image from process and runtime state |
| 07 | Diagnostics and systematic debugging | Classify and investigate deliberately introduced failures |
| 08 | Language modes, warnings and build configurations | Reproduce a documented C++20 Debug-style build |
| 09 | Build automation and CMake foundations | Configure and build a small target in an isolated build directory |
| 10 | First console program and engineering review | Deliver the independent console artifact and defend design choices |

Do not skip directly to Lesson 10. The final task depends on concepts introduced earlier.

## 5. Core conceptual model

A useful high-level model is:

```text
C++ source files
      |
      v
Preprocessing
      |
      v
Translation units
      |
      v
C++ compilation and code generation
      |
      v
Object files
      |
      v
Linking with other objects and libraries
      |
      v
Executable program image
      |
      v
Operating system loading and process creation
      |
      v
Runtime startup and main()
      |
      v
Program execution and termination
```

This is a conceptual model, not a claim that every toolchain exposes every stage as a separate file or process. A compiler driver can invoke several tools, combine stages, use intermediate representations that are never written to disk, and select platform-specific startup files and libraries.

### 5.1 Source file

A source file is human-readable text, commonly stored with a `.cpp` extension. It contains tokens and language constructs that an implementation processes according to the C++ language rules.

The file itself is not a running program. Editing `main.cpp` changes text on disk. It does not retroactively modify an executable that was already built from an earlier version.

### 5.2 Translation unit

A translation unit is the result of preprocessing a source file. It includes the source content after directives have been processed and included content has been made available. The compiler analyses each translation unit according to C++ rules.

A project with five `.cpp` implementation files normally has five translation units. Headers are commonly included into translation units; they are not normally compiled as independent program units in the same way as implementation files.

### 5.3 Object file

An object file is a toolchain artifact containing relocatable machine code and associated information. Depending on the object format, it can contain sections for instructions, data, symbols, relocations, debugging information and metadata.

An object file may refer to a function whose implementation is located in another object file. The linker uses symbol and relocation information to combine compatible artifacts and resolve references.

### 5.4 Executable and process

An executable is a file in a platform-specific format that the operating system can load. A process is an operating system execution instance with its own virtual address space and resources.

The executable file is stored on disk. The process is a live execution environment. Multiple processes can be created from the same executable file. A process can also modify its own memory without modifying the executable file on disk.

## 6. Lesson content

### Lesson 01: What C++ is and where a program runs

Study the difference between a programming language, compiler implementation, machine instruction set and operating system. C++ source expresses operations and constraints. A compiler implementation translates valid source for a selected target. A CPU executes machine instructions supported by its architecture. The operating system provides process and resource services.

Do not say that the CPU directly understands C++ source. Do not say that the compiler is the CPU. These are distinct layers.

**Check:** Explain why the same C++ source can be built into different executables for different processor architectures or operating systems.

### Lesson 02: Development environment and toolchain

A toolchain is a coordinated collection of programs and libraries used to build software. The command typed by a developer is often a driver. GCC's `g++`, LLVM's `clang++` and Microsoft's `cl.exe` accept different command-line conventions and coordinate different platform tools.

The shell's search path determines which executable is selected when a command name is entered. A computer can have multiple compiler installations. Therefore, recording only “GCC is installed” is not reproducible evidence. Record the version, target and selected executable path.

PowerShell investigation:

```powershell
g++ --version
where.exe g++
g++ -dumpmachine
```

The exact output depends on the installation. Explain what each command tells you; do not copy another machine's output as your own evidence.

### Lesson 03: Anatomy of a hosted C++ program

Use this minimal program:

```cpp
#include <iostream>

int main()
{
    std::cout << "The Last Signal\\n";
    return 0;
}
```

The `#include` line is a preprocessing directive. The header makes declarations for standard input and output facilities available to this translation unit. It does not mean that an entire standard library implementation is copied into the executable as plain text.

The `int` before `main` is the function's return type. The name `main` is the designated entry function for a hosted C++ program. The parentheses form its parameter list. The braces delimit its function body. The expression statement writes a string to the standard output stream. The `return 0;` statement returns a status value to the host environment; zero conventionally indicates successful termination.

The operator `<<` is the stream insertion operator in this context. The prefix `std::` qualifies names in the standard library namespace. The string literal contains the newline escape sequence `\\n`.

### Lesson 04: Translation and compilation pipeline

Preprocessing handles directives such as header inclusion, macro replacement and conditional compilation. The compiler then analyses the resulting translation unit: token structure, grammar, types, declarations, expressions and language constraints. A compiler implementation may build intermediate representations, perform optimization and generate assembly or machine code.

An assembler translates assembly language into object code when the toolchain uses an explicit assembler stage. Some compiler pipelines use integrated assemblers or other internal arrangements.

GCC inspection commands:

```powershell
g++ -std=c++20 -E main.cpp -o main.ii
g++ -std=c++20 -S main.cpp -o main.s
g++ -std=c++20 -c main.cpp -o main.o
```

Interpretation:

1. `-E` stops after preprocessing.
2. `-S` produces assembly output and stops before assembling.
3. `-c` compiles and assembles but does not link an executable.

The generated assembly is target-specific. It can differ across compiler versions, optimization settings and architectures. Never memorize assembly output as if it were part of the C++ language specification.

### Lesson 05: Symbols, declarations and linking

A declaration introduces a name and describes how it can be used. A definition provides the entity's required implementation or storage definition. The compiler can compile a call when it has seen a suitable declaration, even if the implementation is in another translation unit.

The object file can therefore contain an unresolved symbol reference. The linker searches the supplied object files and libraries for a matching definition. If it cannot resolve a required reference, it reports a link failure.

A common two-file build has `main.cpp` and `player.cpp`. Each is compiled as a translation unit. The driver coordinates compilation and linking:

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp player.cpp -o game.exe
```

The later language modules will study declarations, definitions, the One Definition Rule and linkage in depth. For this unit, understand the boundary: syntax and type analysis happen during compilation; external symbol resolution is a linking responsibility.

### Lesson 06: Program loading, startup and runtime

After an executable is built, a user or another process requests that the operating system start it. The operating system validates and maps the executable image according to platform rules, establishes a process environment, prepares required resources and transfers control through platform startup code.

In a hosted C++ environment, runtime startup performs implementation and library initialization before entering `main`. When `main` returns, the runtime performs the required termination work and the process reports a status to its host.

The exact executable format, loader, startup objects, virtual memory layout, calling convention and runtime implementation are platform-specific. The C++ standard specifies program behaviour at the language level; it does not prescribe the Windows PE loader or ELF process layout.

Do not confuse the call stack with all process memory. A process can contain code mappings, static storage, dynamically allocated storage, thread stacks, shared libraries and operating system-managed mappings. These topics will be revisited in the memory and operating systems modules.

### Lesson 07: Diagnostics and systematic debugging

Classify the failure before changing code.

| Failure | Typical stage | Example |
|---|---|---|
| Syntax or semantic diagnostic | Compilation | Missing semicolon or invalid type use |
| Undefined external symbol | Linking | A declared function has no linked definition |
| Missing runtime library or incompatible image | Loading or startup | Required platform component cannot be loaded |
| Crash or abnormal termination | Execution | Invalid runtime operation or external failure |
| Wrong game state | Logic | Health is displayed incorrectly despite successful execution |
| Command not found | Shell environment | The compiler is not on the active PATH |

A diagnostic is evidence, not a complete explanation. Read the first useful diagnostic, inspect the referenced file and line, identify the failing stage, form a hypothesis, make one focused change, then rebuild. Avoid random edits and avoid suppressing a warning before understanding it.

### Lesson 08: Language modes, warnings and configurations

The C++ standard evolves. The option `-std=c++20` asks GCC to use C++20 language mode. It does not upgrade the compiler, install missing libraries or guarantee that every optional facility is implemented.

A useful baseline command is:

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic -Wconversion -Wshadow -g main.cpp -o game.exe
```

The warning options request additional diagnostics. `-g` requests debugging information. They do not prove correctness and do not automatically enable every static analysis facility.

A Debug configuration usually prioritizes debugging information and a less transformed program. A Release configuration usually enables optimization and may omit some debugging support. The exact flags depend on the compiler and build system. Correct code must not rely on undefined behaviour, and a defect that appears only in Release must be investigated rather than dismissed.

### Lesson 09: Build automation and CMake foundations

A build system records how targets depend on source files, headers, libraries and compiler settings. CMake is a build-system generator. It configures a project and generates build files for a selected backend such as Ninja or a platform-native generator.

The purpose of this lesson is to understand the relationship between source configuration and generated build instructions, not to memorize a large CMake file. Use a separate build directory so generated files do not pollute source control. A build directory configured for one compiler or generator should not be casually reused with another.

### Lesson 10: First console program and engineering review

The final program is intentionally small. It prints a title and a player status panel. Its engineering value lies in reproducibility, clarity, evidence and the student's ability to explain the build and execution path.

The student must independently write the required program, build it with warnings enabled, deliberately investigate one defect, restore a correct version and explain why no manual dynamic allocation is necessary.

## 7. Guided laboratory

Create a working directory:

```powershell
mkdir CppLearning
cd CppLearning
```

Create `main.cpp`:

```cpp
#include <iostream>

int main()
{
    std::cout << "The Last Signal\\n";
    std::cout << "Player health: 100\\n";

    return 0;
}
```

Build and execute:

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic -g main.cpp -o game.exe
.\\game.exe
```

Expected output:

```text
The Last Signal
Player health: 100
```

Compare the expected output with your actual terminal output. The expected text is not evidence that your machine successfully built the program.

## 8. Laboratory sequence

### Lab A: Environment verification

Record compiler version, selected path, target triple and exact build command. Explain why two terminals can select different compiler installations.

### Lab B: Artifact inspection

Run the preprocessing, assembly and object generation commands. List the files produced. Describe what each artifact represents and what stage remains.

### Lab C: Compilation failure

Remove a required semicolon, rebuild and record the first useful diagnostic. Restore the semicolon and rebuild. Explain why the first failure is not a linker failure.

### Lab D: Linking failure

Use a supplied two-file example in the examples directory. Omit one implementation file from the build command and observe the result. Explain why a declaration can allow compilation to proceed while the linker still cannot produce the final executable.

### Lab E: Reproducibility

Delete generated files and repeat the build from source. Record the compiler, command and output. Explain why a clean rebuild is valuable.

## 9. Memory, ownership and performance

This unit does not require manual dynamic allocation. The program uses a string literal and the standard output stream. Do not introduce raw pointers, `new` or `delete` to solve a task that only prints fixed text.

An executable on disk is not a process. Process creation establishes runtime resources and virtual memory mappings. This is operating-system-managed behaviour, not an instruction to allocate every region manually in application code.

Build time, executable size and runtime performance are different measurements. Optimization can change generated instructions and program layout. Source line count is not a performance metric. Later modules introduce profiling and measurement before optimization.

## 10. Common misconceptions to eliminate

1. The compiler does not execute the program merely because it translates source code.
2. The CPU does not directly execute C++ source text.
3. The linker does not normally repair invalid C++ syntax.
4. A header is not automatically a separately linked library.
5. An object file is not necessarily a complete executable.
6. An executable file is not the same thing as a running process.
7. A warning is not proof of a defect, and the absence of warnings is not proof of correctness.
8. One successful run does not prove correctness for all inputs and environments.
9. C++20 mode is a compiler setting, not a guarantee of complete implementation support.
10. Optimization does not make undefined behaviour valid.

## 11. Independent programming task

Create `player_status.cpp` without copying the guided program and changing only the strings.

Required output:

```text
====================
THE LAST SIGNAL
====================
PLAYER STATUS
Health: 100
Lives: 3
Status: Alive
```

Requirements:

1. Use a hosted C++ program with a valid `main` function.
2. Use standard output and readable formatting.
3. Compile in C++20 mode with `-Wall -Wextra -Wpedantic`.
4. Deliberately introduce one syntax defect, record its diagnostic, then correct it.
5. Use no classes, pointers, dynamic allocation or third-party framework.
6. Submit the source, exact command, actual output and explanation of each statement.
7. Explain what the compiler driver coordinates and why successful linking is not proof that the output is logically correct.

## 12. Formal assessment

The assessment is individual and evidence-based. It is completed only after the student has performed the laboratories and independent task.

| Category | Weight | Required evidence |
|---|---:|---|
| Technical understanding | 25 | Accurate explanation of translation and execution |
| Code correctness | 30 | Independent source builds and meets output specification |
| Memory safety and C++ practice | 20 | Valid program structure and appropriate use of standard facilities |
| Engineering reasoning | 15 | Evidence-led failure investigation and design explanation |
| Code quality and communication | 10 | Readable source and reproducible submission |

**Pass threshold: 80/100.** The independent task must build, the student must explain the submitted source and process, and there must be no critical safety or correctness issue. A high theory score cannot compensate for failure to implement the task independently.

The assessment includes:
1. Technical questions about source files, translation units, object files, linking, executable images and processes.
2. Code analysis of a compilation defect and a linking defect.
3. An independent implementation and successful build.
4. Explanation of memory use, ownership, build reproducibility and diagnostic strategy.

## 13. Required submission

1. Compiler name, version, target and selected executable path.
2. Complete source code.
3. Exact build command.
4. Actual terminal output.
5. Preprocessed, assembly and object artifact observations.
6. One recorded diagnostic and the correction.
7. Answers to the assessment questions.
8. A short engineering reflection explaining what evidence establishes that the program was built and what evidence does not establish correctness.

## 14. Authoritative references

1. ISO C++ working draft: https://eel.is/c++draft/
2. cppreference language reference: https://en.cppreference.com/w/cpp
3. GCC overall options: https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html
4. GCC warning options: https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html
5. GCC developer options: https://gcc.gnu.org/onlinedocs/gcc/Developer-Options.html
6. Microsoft C++ build reference: https://learn.microsoft.com/en-us/cpp/build/reference/
7. Clang documentation: https://clang.llvm.org/docs/
8. CMake tutorial: https://cmake.org/cmake/help/latest/guide/tutorial/

## 15. Progression gate

Module 02 remains locked until the independent task and formal assessment are reviewed. Time spent, reading completion and a statement that the work is finished do not constitute proof of mastery. A failed attempt results in targeted remediation and a fresh reassessment with changed questions and code.
