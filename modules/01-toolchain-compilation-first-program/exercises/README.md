# Module 01 Independent Exercises

## 1. Exercise protocol

These exercises are designed to test independent reasoning. Before compiling, predict what should happen and write down the reason. Then run the experiment and compare the observation with your prediction.

You may use the module theory and official documentation. Do not copy a completed solution from another person or an answer generator. You must be able to explain every line and every build command you submit.

## 2. Exercise A: Toolchain identification

Record:

1. Compiler family and exact version.
2. Full path of the selected compiler executable.
3. Target triple or target information.
4. Operating system and shell.
5. C++ standard option used.
6. Exact build command.

Explain why the statement “I have GCC installed” is not enough information to reproduce a build.

## 3. Exercise B: Translation artifact investigation

Using `hello_world.cpp`, generate preprocessed output, assembly output and an object file.

For each artifact:
1. State which command produced it.
2. Explain what information it represents.
3. Identify what the next build stage would do.
4. Explain why the artifact is not necessarily the final executable.

Do not paste thousands of lines of preprocessed headers. Provide a small relevant excerpt and your explanation.

## 4. Exercise C: Multi-file build diagnosis

Build the supplied two-translation-unit example successfully. Then omit one implementation file from the command.

Explain:
1. Why the compiler can accept the function call in the first source file.
2. What information is present in the object file.
3. Why the linker cannot finish the executable.
4. Why adding an unrelated header is not the correct fix.

## 5. Exercise D: Player status program

Create `player_status.cpp` independently.

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

1. Use a valid hosted C++ program and standard output.
2. Use readable indentation and one logical output item per line.
3. Compile in C++20 mode.
4. Enable `-Wall -Wextra -Wpedantic`.
5. Introduce one syntax error deliberately, record the diagnostic and then correct it.
6. Do not use classes, pointers, dynamic allocation or third-party libraries.
7. Explain every statement and the purpose of the return value from `main`.

The implementation must be your own. A program that merely changes the strings in the guided example does not demonstrate sufficient independent work.

## 6. Exercise E: Failure classification

For each case, identify the likely failure domain and justify the classification.

1. A required semicolon is missing.
2. A function is declared and called, but its definition is not supplied to the linker.
3. The executable exists, but the operating system reports that a required runtime component is missing.
4. The program starts and then terminates abnormally.
5. The program runs but displays 80 health when the expected value is 90.
6. The shell reports that `g++` is not recognized.
7. The program builds on one machine but fails to find a required library on another.

Do not just name a category. Explain which evidence would distinguish it from the other categories.

## 7. Exercise F: Reproducibility report

Write a short report that another developer could use to reproduce your build. Include the source revision, compiler version, target, build command, dependencies if any, actual output and known limitations.

## 8. Submission evidence

Submit:

1. Complete source for the independent player status program.
2. Compiler version and selected path.
3. Exact commands for each experiment.
4. Actual terminal output and relevant diagnostics.
5. A concise explanation of the build stages.
6. Answers to the failure classification cases.
7. The reproducibility report.
8. A statement identifying which parts of the explanation are defined by C++ and which are implementation or operating-system details.

Screenshots may supplement evidence but must not replace source code, commands or reasoning.
