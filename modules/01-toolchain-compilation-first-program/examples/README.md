# Module 01 Examples and Experiments

## 1. Purpose

The examples are deliberately small. Each one isolates a build or execution concept so that the learner can predict behaviour, compile, inspect the result and explain the evidence. The independent player status task is not solved in this directory.

## 2. Example inventory

| File | Concept | Expected behaviour |
|---|---|---|
| `hello_world.cpp` | Hosted entry point and standard output | Prints a greeting |
| `two_file/main.cpp` | Declaration and call across translation units | Calls a function implemented elsewhere |
| `two_file/player.cpp` | Definition in a second translation unit | Supplies the external function definition |

## 3. Build the single-file example

From this directory in PowerShell:

```powershell
g++ --version
where.exe g++
g++ -std=c++20 -Wall -Wextra -Wpedantic -g hello_world.cpp -o hello_world.exe
.\\hello_world.exe
```

Record your own compiler version and actual output. Do not treat the expected output in this document as proof that your computer built the program.

## 4. Inspect the compiler stages

Run each command from the examples directory:

```powershell
g++ -std=c++20 -E hello_world.cpp -o hello_world.ii
g++ -std=c++20 -S hello_world.cpp -o hello_world.s
g++ -std=c++20 -c hello_world.cpp -o hello_world.o
g++ hello_world.o -o hello_world-linked.exe
```

Inspect the file names, sizes and text-readable artifacts. The preprocessed file may be large because standard headers introduce substantial declarations. Assembly output is target and compiler specific. An object file is not expected to be readable as ordinary text.

Answer these questions:
1. Which command stops after preprocessing?
2. Which command produces assembly?
3. Which command produces an object file without linking?
4. Which command performs the final link?
5. Why should you not compare assembly output from different compiler versions as if it were a language specification?

## 5. Two-translation-unit experiment

The `two_file` directory contains a small example with a declaration in one source file and a definition in another. Build both files:

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic two_file/main.cpp two_file/player.cpp -o two_file.exe
.\\two_file.exe
```

Then intentionally omit `two_file/player.cpp` from the command:

```powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic two_file/main.cpp -o missing-definition.exe
```

Record the diagnostic. Explain why the compiler can compile a call using a declaration but the linker still needs a matching definition.

Restore the complete build command and verify the result.

## 6. Diagnostic experiment

Make one controlled syntax change in a copy of `hello_world.cpp`. For example, remove the semicolon at the end of the output statement.

1. Predict which stage will reject the program.
2. Compile and record the first useful diagnostic.
3. Identify the source line and token context.
4. Restore the semicolon.
5. Rebuild and run the corrected program.

Do not rely on exact diagnostic wording. GCC, Clang and MSVC can report the same underlying issue differently.

## 7. Quality expectations

1. Use the standard header required by the program.
2. Use a valid hosted `main` function.
3. Compile with C++20 mode and warnings enabled.
4. Keep generated artifacts separate from source files where practical.
5. Do not add classes, pointers or dynamic allocation to examples that do not require them.
6. Record actual commands and outputs.
7. Explain what you observed rather than copying expected output.

A file existing in the repository is not evidence that it has been compiled on every supported compiler or operating system.
