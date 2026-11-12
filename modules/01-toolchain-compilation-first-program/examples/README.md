# Module 01 Examples

## 1. Purpose

These examples are small and independently buildable. Their purpose is to demonstrate the minimum C++ structure and a repeatable compiler command.

## 2. Example inventory

| File | Concept | Expected behaviour |
|---|---|---|
| hello_world.cpp | Entry point and standard output | Prints a greeting |

The player status program is an independent exercise. Its solution is intentionally not included in the examples directory.

## 3. Build procedure

Open PowerShell in this directory and compile the example.

~~~powershell
g++ -std=c++20 -Wall -Wextra -Wpedantic hello_world.cpp -o hello_world.exe
.\hello_world.exe
~~~

## 4. Required experiments

1. Change one output line and predict the new output.
2. Remove a semicolon and record the diagnostic.
3. Restore the semicolon and rebuild.
4. Compare the source file with the executable file.
5. Use the preprocessing command from the main module guide and inspect the result.

## 5. Quality expectations

Use standard headers, a valid main function and readable indentation. Do not add classes, pointers or dynamic allocation to solve a problem that only requires output statements.

Record actual build results. The presence of an example in this repository is not evidence that it has been executed on every supported compiler.
