# Module 01 Project: Reproducible Console Program

## 1. Project purpose

Create the first verified artifact for the cumulative game project, The Last Signal. The project is intentionally small. Its engineering purpose is to establish a clean source file, a documented compiler configuration, a reproducible build and evidence that the executable behaves according to a specification.

## 2. Functional specification

The program must print the following information in the specified order:

1. Game title.
2. Player status heading.
3. Health value.
4. Lives value.
5. Player state.

Required initial output:

```text
====================
THE LAST SIGNAL
====================
PLAYER STATUS
Health: 100
Lives: 3
Status: Alive
```

The first version uses fixed output. Variables, input, state changes and game logic are introduced in later modules. Do not add advanced features to conceal gaps in the current learning outcomes.

## 3. Technical constraints

1. Use C++20 language mode.
2. Use the standard library only.
3. Compile with GCC and warnings enabled.
4. Use a valid hosted `main` function.
5. Do not use classes, pointers, manual dynamic allocation or third-party frameworks.
6. Keep the source readable and minimal.
7. Keep generated build artifacts out of the source submission unless specifically requested as evidence.

## 4. Required engineering process

1. Verify the compiler version and selected executable path.
2. Write the source independently.
3. Predict the expected output before running the program.
4. Compile with the documented C++20 and warning options.
5. Run the executable from the terminal.
6. Introduce one controlled syntax defect in a copy of the source.
7. Record and explain the diagnostic.
8. Restore the source and perform a clean rebuild.
9. Explain the difference between the source file, object file, executable and running process.

## 5. Required deliverables

1. Complete source file.
2. Compiler name, version and target.
3. Exact build command.
4. Actual program output.
5. One recorded diagnostic and explanation.
6. A short explanation of the build pipeline.
7. A short reflection identifying what the successful build proves and what it does not prove.

## 6. Acceptance criteria

The project is accepted when:

1. The independent program builds successfully.
2. The output matches the specification.
3. Build instructions are reproducible.
4. The student can explain the source and compiler options.
5. The student can classify the introduced defect.
6. The student distinguishes compilation, linking and execution.
7. No unnecessary memory management or unsafe construct has been introduced.

## 7. Extension investigation

Use GCC's preprocessing, assembly and object generation options to inspect the build artifacts. Explain why intermediate artifacts are useful when investigating a larger multi-file game engine.

This extension is an investigation, not a requirement to memorize compiler-specific assembly output.

## 8. Review questions

1. Why is a compiler driver useful?
2. What does the linker contribute that compilation alone does not?
3. Why can an object file contain unresolved references?
4. Why is a running process different from the executable on disk?
5. Why does a warning-enabled build still require testing and review?
6. Which parts of the process are defined by C++ and which are platform-specific?

The project is not passed merely because the program prints the expected text. The student must also demonstrate understanding of the process and evidence.
