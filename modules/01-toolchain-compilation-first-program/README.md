# Module 01: Toolchain, Compilation and Your First Program

## 1. Module specification

**Level:** Introductory undergraduate programming

**Suggested study time:** 8 to 10 hours

**Prerequisites:** Ability to create folders and files, use a terminal and edit plain text. No previous C++ knowledge is required.

**Language standard:** C++20

**Primary compiler:** GCC through MSYS2 on Windows

**Application context:** Establish a reproducible development environment for a small console game called The Last Signal.

## 2. Module description

This module introduces the C++ development toolchain and the transformation of source code into an executable program. Students learn the responsibilities of the preprocessor, compiler, assembler where applicable, linker, runtime library and operating system loader.

The module establishes a disciplined workflow: inspect the compiler, write source code, compile with an explicit language standard and warnings, execute the resulting program, inspect diagnostics and record reproducible evidence.

The module intentionally begins without classes, pointers, dynamic allocation or a game framework. The objective is to understand the complete path from a small source file to a running process.

## 3. Learning outcomes

By the end of this module, the student will be able to:

1. Identify the compiler, compiler driver, linker, executable and runtime environment.
2. Describe the major stages between C++ source code and program execution.
3. Explain the roles of preprocessing directives and standard library headers.
4. Compile a C++20 source file using GCC and warning options.
5. Execute the resulting program from PowerShell.
6. Distinguish a compiler diagnostic from a linker diagnostic and a runtime failure.
7. Interpret a simple syntax diagnostic and correct the underlying source.
8. Explain why successful compilation does not establish program correctness.
9. Produce a reproducible record containing source code, compiler version, build command and observed output.

## 4. Key terminology

| Term | Meaning |
|---|---|
| Source file | A text file containing C++ source code |
| Preprocessor | Processes directives such as include before normal compilation |
| Translation unit | The source file after preprocessing, considered with its included declarations |
| Compiler | Translates C++ constructs into a lower level representation and diagnoses violations |
| Object file | A compiled file containing machine code and related information, often with unresolved references |
| Assembler | Produces object code from assembly language when the toolchain uses this stage |
| Linker | Combines object files and libraries and resolves external references |
| Executable | A program image that the operating system can load |
| Runtime | The environment and library support used while a program executes |
| Diagnostic | A compiler or linker message describing an error, warning or other event |
| Build | The process of producing program artifacts from source and dependencies |

## 5. Topic sequence

### 5.1 The development toolchain

A toolchain is a coordinated set of programs used to transform and build software. A typical C++ environment includes a compiler driver, compiler front end, code generation tools, assembler, linker, standard library and system libraries.

The command g++ is commonly used as a compiler driver. It coordinates several stages and selects the C++ language mode when given an appropriate option. The command does more than one isolated translation step.

### 5.2 The build pipeline

A useful conceptual sequence is:

1. Preprocessing expands included headers and processes conditional compilation directives.
2. Compilation analyses C++ syntax and semantics and produces a lower level representation.
3. Code generation and assembly produce object code according to the toolchain.
4. Linking combines object files and libraries and resolves external symbols.
5. The operating system loads the executable and begins program execution.

Toolchains may combine or internally reorganize these stages. The sequence is a learning model, not a promise that every compiler writes a separate file for every stage.

### 5.3 Source code and the entry point

A hosted C++ program normally begins execution in main. The return type int communicates a status code to the host environment. Returning zero conventionally indicates successful termination.

### 5.4 Headers and standard output

The directive include iostream makes declarations for standard input and output facilities available to the translation unit. std::cout is an output stream object. The insertion operator sends values to that stream.

The std:: prefix identifies a name in the standard library namespace. It avoids relying on unqualified names.

### 5.5 Language standard and diagnostics

The option -std=c++20 requests C++20 language mode from GCC. The options -Wall, -Wextra and -Wpedantic enable additional diagnostic checks. Warnings are not proof of a defect, but they are evidence that code deserves inspection.

Warnings do not detect every logic error, memory error or invalid runtime condition. A clean build is one part of verification, not the end of it.

### 5.6 Compiler errors, linker errors and runtime errors

A syntax error may prevent compilation. An unresolved external symbol may be reported during linking. A program that builds successfully may still produce incorrect output, terminate unexpectedly or violate runtime requirements.

Students must identify the stage that produced a failure before attempting a fix.

## 6. Guided example

Create main.cpp:

~~~cpp
#include <iostream>

int main()
{
    std::cout << "THE LAST SIGNAL\n";
    std::cout << "Player health: 100\n";

    return 0;
}
~~~

Build in PowerShell:

~~~powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic main.cpp -o game.exe
~~~

Execute:

~~~powershell
.\game.exe
~~~

Expected output:

~~~text
THE LAST SIGNAL
Player health: 100
~~~

The expected output is a specification for comparison. Record the actual output from your own terminal when completing the laboratory.

## 7. Compiler stage investigation

GCC can expose parts of the build process. These commands are observational tools. They are not required for every normal build.

Preprocess without compiling:

~~~powershell
g++ -std=c++20 -E main.cpp -o main.preprocessed.cpp
~~~

Generate assembly output:

~~~powershell
g++ -std=c++20 -S main.cpp -o main.s
~~~

Compile to an object file without linking:

~~~powershell
g++ -std=c++20 -c main.cpp -o main.o
~~~

Link an object file into an executable:

~~~powershell
g++ main.o -o game.exe
~~~

Inspect the generated files. Explain what each command produced and which stage remains. Do not assume that assembly output is identical across compiler versions, processor targets or optimization settings.

## 8. Laboratory 01: Verify the environment

**Objective:** Demonstrate that the compiler is installed and can build a C++20 program.

Tasks:

1. Open PowerShell.
2. Run g++ --version.
3. Record the complete version output.
4. Run g++ -v and identify the target and configuration information that is visible.
5. Create the guided example.
6. Compile it using the stated C++20 warning options.
7. Execute the program.
8. Record the command, exit status where available and actual output.

**Evidence:** Screenshot or copied terminal transcript, source file and a short explanation of the compiler version.

## 9. Laboratory 02: Observe the build stages

**Objective:** Distinguish preprocessing, compilation and linking.

Tasks:

1. Run the preprocessing command.
2. Inspect the preprocessed file and locate content introduced by the standard header.
3. Generate assembly output.
4. Generate an object file.
5. Link the object file.
6. Compare the artifacts and explain the purpose of each.

**Evidence:** List of generated files, commands and a paragraph explaining the pipeline.

## 10. Laboratory 03: Diagnose a syntax error

**Objective:** Learn to use diagnostics as evidence.

Tasks:

1. Build the working example.
2. Remove the semicolon after one output statement.
3. Compile again.
4. Record the first meaningful diagnostic and the source location.
5. Explain why the source is invalid.
6. Restore the semicolon.
7. Rebuild and execute the corrected program.

Do not treat the exact wording of a diagnostic as portable. Different compiler versions may report the same underlying problem differently.

## 11. Independent programming exercise

Create player_status.cpp. The program must print a title and a player status panel containing health, lives and status.

Required output layout:

~~~text
====================
PLAYER STATUS
====================
Health: 100
Lives: 3
Status: Alive
~~~

Requirements:

1. Use standard output.
2. Use readable indentation.
3. Use a separate line for each output item.
4. Compile in C++20 mode.
5. Enable the warning options from the guided example.
6. Deliberately introduce and then correct one syntax error.
7. Do not copy the guided example and only change its text.

Submit the complete source file, exact build command, actual output and the diagnostic observed during the deliberate error.

## 12. Memory, ownership and performance

The examples in this module do not require application managed dynamic allocation. The output stream is provided by the standard library and runtime environment.

An executable file is not the same thing as a running process. When the operating system loads a program, it creates a process environment with memory mappings, runtime state, stack and other operating system resources. These details vary by platform and are studied more deeply in later modules.

Compilation time and executable size are build properties. Runtime performance depends on generated code, workload, algorithms, hardware and operating system behaviour. Do not infer runtime speed from source length or from a successful compilation.

## 13. Common misconceptions

1. A compiler does not execute the program merely by translating it.
2. A compiler does not prove that game logic is correct.
3. An executable does not continuously inspect source code.
4. The linker and compiler have different responsibilities, even when one driver command invokes both.
5. A warning is not always an error, but ignoring warnings without investigation is poor practice.
6. A program that prints the expected output once may still contain defects that appear with other inputs or environments.

## 14. Assessment

The assessment is completed only after the guided laboratories and independent exercise.

**A. Technical understanding, 25 points**

Explain the responsibilities of the preprocessor, compiler, object generation stage, linker and runtime. Explain the difference between source code, object code and an executable.

**B. Code analysis and correctness, 30 points**

Analyse a supplied program containing a syntax error and a separate build example containing an unresolved external symbol. Identify the likely failure stage and justify the diagnosis. Build the independent player status program correctly.

**C. Memory safety and C++ practices, 20 points**

Demonstrate appropriate standard header use, valid main structure, clear output statements and warning enabled compilation. Explain why the example does not require manual dynamic allocation.

**D. Engineering reasoning, 15 points**

Explain why reproducible compiler options matter, why compilation does not prove correctness and how you would investigate a build failure systematically.

**E. Code quality and communication, 10 points**

Submit readable source, exact commands, compiler version, actual output and a concise explanation of the investigation.

**Pass threshold:** 80 out of 100, with a successful independent build and no critical unresolved issue. The student must explain the submitted work.

## 15. Submission checklist

1. Source code for the guided example.
2. Source code for the independent player status program.
3. Compiler version.
4. Exact build commands.
5. Actual terminal output.
6. One recorded compiler diagnostic.
7. Explanation of the build stages.
8. Answers to the assessment questions.

## 16. References

1. ISO C++ working draft, program structure and execution: https://eel.is/c++draft/
2. cppreference, compiler support and language reference: https://en.cppreference.com/
3. GCC manual, overall options: https://gcc.gnu.org/onlinedocs/gcc/Overall-Options.html
4. GCC manual, warning options: https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html
5. Microsoft Learn, C++ build reference: https://learn.microsoft.com/en-us/cpp/build/reference/
6. LearnCpp, introduction to the compiler and linker: https://www.learncpp.com/

## 17. Progression rule

Module 02 remains unavailable until the student has completed the independent exercise, submitted evidence and achieved the required assessment result. A request to continue or a completed exercise alone does not constitute a pass.
