# C++20 Game Development and Engine Engineering

## 1. Course identity

**Course level:** University style introductory undergraduate sequence with progressive intermediate and advanced material.

**Language baseline:** ISO C++20.

**Primary application domain:** Console games, 2D games, 3D rendering foundations and custom engine architecture.

**Delivery model:** Independent study supported by lectures, guided laboratories, programming assignments, code reviews, practical examinations and cumulative projects.

This repository is an educational curriculum. It is not an accredited degree programme, does not award academic credit and is not represented as an official university course.

## 2. Course description

This course develops the ability to design, implement, test, debug and evaluate software in modern C++. Students progress from language fundamentals to modular game systems and engine architecture. Instruction emphasizes the C++ object model, compilation, program execution, value semantics, resource lifetime, ownership, data structures, algorithms, graphics, physics, concurrency and performance.

Students must explain not only how to use a feature, but why it exists, what guarantees it provides, what its limitations are and how it affects correctness, maintainability and runtime performance.

## 3. Course level and prerequisites

Module 01 assumes no previous C++ experience. Students should be able to use a computer, manage files and directories, run a terminal and edit text files. Familiarity with algebra is useful for later mathematics and graphics modules.

The sequence introduces concepts in prerequisite order. A student may not claim mastery of a later topic merely because they have seen its syntax in an example.

## 4. Course learning outcomes

On successful completion of the full curriculum, a student should be able to:

1. Explain how source code is preprocessed, compiled, assembled where applicable, linked and executed.
2. Design, implement and evaluate C++ programs that meet stated functional and quality requirements.
3. Use modern C++ language and standard library facilities with appropriate type safety and const correctness.
4. Explain object lifetime, ownership, resource management and the consequences of invalid access.
5. Design modular interfaces and separate responsibilities across source files and components.
6. Apply data structures, algorithms and mathematical models to game problems.
7. Build and test a small game using a documented and reproducible toolchain.
8. Diagnose compiler, linker, runtime, logic and performance problems using appropriate tools.
9. Evaluate trade offs among correctness, complexity, maintainability, memory use and execution time.
10. Communicate technical decisions through readable code, documentation, test evidence and design explanations.
11. Recognize professional responsibilities involving attribution, licensing, privacy, security and responsible software development.
12. Integrate knowledge from earlier modules into a substantial game development project.

## 5. Instructional design

Each module contains the following learning elements:

1. A module specification with prerequisites and measurable outcomes.
2. A detailed theory guide explaining terminology, mechanisms and design implications.
3. Annotated examples that students compile, modify and explain.
4. Laboratory activities with predicted outcomes and recorded observations.
5. Independent exercises that require transfer of knowledge to a new problem.
6. A project task that contributes to the cumulative game.
7. A formal assessment with a published rubric.
8. A reference list identifying authoritative material.

## 6. Assessment philosophy

Assessment measures demonstrated competence rather than time spent or pages completed. Evidence must include working code where implementation is required, explanation of relevant concepts, test results and design reasoning.

The standard module assessment is graded out of 100:

| Criterion | Weight |
|---|---:|
| Technical understanding | 25 |
| Code correctness and task completion | 30 |
| Memory safety and C++ practices | 20 |
| Engineering reasoning | 15 |
| Code quality and communication | 10 |
| **Total** | **100** |

The pass threshold is 80. A critical memory safety defect, undefined behaviour, unresolved ownership defect, failure to complete the independent task or inability to explain the submitted work blocks progression regardless of the numerical score.

A failed assessment results in targeted remediation and a new assessment with different questions and implementation requirements.

## 7. Academic integrity

Students must understand and be able to explain all submitted work. External references, libraries and assistance must be acknowledged where relevant. Do not submit copied code as independent work. When using AI assistance, record the assistance when the assignment requires it, verify all generated code and remain responsible for correctness and attribution.

## 8. Technical environment

The primary instructional environment is Windows with PowerShell and a C++20 compiler. GCC through MSYS2 is supported. Clang and Microsoft Visual C++ may be used when the equivalent build settings are documented.

The course introduces direct compiler commands before introducing CMake. This makes the compilation model visible before build system automation is added.

## 9. Curriculum sequence

| Module | Subject | Main evidence |
|---:|---|---|
| 01 | Toolchain, compilation and first program | Build and diagnose a standalone C++ program |
| 02 | Program structure, headers and namespaces | Build a multi file program |
| 03 | Types, variables and constants | Model game values with appropriate types |
| 04 | Console input and output | Implement a validated command interface |
| 05 | Operators and expressions | Calculate movement, damage and scores |
| 06 | Decisions and loops | Implement rules and repeated game updates |
| 07 | Functions and interfaces | Decompose gameplay into focused operations |
| 08 | Arrays, strings and views | Process sequences and text safely |
| 09 | Structs, enums and value types | Model entities and game states |
| 10 | Classes and encapsulation | Protect object invariants |
| 11 | Constructors, destructors and lifetime | Explain construction, destruction and RAII |
| 12 | Pointers, references and const | Express access and mutation safely |
| 13 | Ownership and dynamic memory | Manage resources with explicit ownership |
| 14 | Copy, move and value semantics | Transfer resources correctly |
| 15 | Containers, algorithms and iterators | Select and use standard library data structures |
| 16 | Templates, concepts and compile time | Build reusable constrained components |
| 17 | Errors, debugging and testing | Investigate and verify software behaviour |
| 18 | CMake, multiple files and Git | Build and maintain a reproducible project |
| 19 | Console game architecture and game loop | Deliver a playable console game |
| 20 | Engineering quality and profiling | Evaluate and improve a complete project |

## 10. Continuous improvement

After each module, record common misconceptions, assessment outcomes and areas requiring further instruction. Revise examples and exercises when evidence shows that learning outcomes are unclear or poorly assessed. Preserve previous assessment criteria when changing a module so that progress remains meaningful.

## 11. Academic alignment references

The course design uses the following public guidance as reference points. These documents inform the structure; they do not certify this repository or establish university credit.

1. ABET, Criteria for Accrediting Computing Programs, 2026 to 2027: https://www.abet.org/accreditation/accreditation-criteria/criteria-for-accrediting-computing-programs-2026-2027/
2. ISO C++ working draft: https://eel.is/c++draft/
3. C++ reference: https://en.cppreference.com/
4. GCC documentation: https://gcc.gnu.org/onlinedocs/
5. Microsoft C++ documentation: https://learn.microsoft.com/en-us/cpp/
