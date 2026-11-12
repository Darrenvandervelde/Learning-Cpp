# Module 01 Formal Assessment

## 1. Assessment purpose

This assessment determines whether the student can independently explain, build and investigate a small C++20 program. It evaluates engineering understanding rather than memorization of command syntax.

The assessment is completed after the lessons, laboratories and independent exercises. The student may consult official language and compiler documentation, but must disclose any external code and explain all submitted work.

## 2. Assessment conditions

1. Submit original source code.
2. Record the actual compiler and version.
3. Record the exact build command.
4. Provide actual output and diagnostic evidence.
5. Be prepared to explain the source and build process orally or in writing.
6. Do not submit a binary without the corresponding source and reproducible build instructions.

## 3. Weighted rubric

| Category | Weight | Evidence |
|---|---:|---|
| Technical understanding | 25 | Accurate explanation of translation, linking and execution |
| Code correctness | 30 | Independent program builds and meets specification |
| Memory safety and C++ practices | 20 | Valid program structure and appropriate resource choices |
| Engineering reasoning | 15 | Systematic diagnosis and reproducibility reasoning |
| Code quality and communication | 10 | Readable code, complete evidence and clear explanation |
| **Total** | **100** | |

## 4. Part A: Technical understanding, 25 points

Answer in your own words.

1. Distinguish a source file, translation unit, object file, executable image and running process.
2. Explain the responsibilities of a compiler driver, compiler front end, assembler and linker.
3. Explain why preprocessing a header does not mean that the complete standard library implementation is copied into the executable as plain text.
4. Explain how an object file can contain an unresolved external symbol.
5. Describe at a high level what the operating system and runtime do before the hosted program enters `main`.
6. Explain why the C++ standard does not prescribe the Windows PE loader or ELF process layout.
7. Explain why `-std=c++20` does not guarantee that every C++20 library facility is available in every toolchain.

## 5. Part B: Code analysis and correctness, 30 points

The assessor will provide two short source/build scenarios.

Scenario 1 contains a source-level defect. The student must identify the relevant language rule, explain why compilation fails and propose a minimal correction.

Scenario 2 contains a valid call based on a declaration but does not supply the matching implementation to the link step. The student must explain why compilation can proceed and why linking fails.

The student must also submit and successfully build the independent player status program. The assessor may request a small change to the output specification to verify that the student understands the implementation rather than memorizing it.

## 6. Part C: Memory safety and C++ practices, 20 points

Demonstrate:

1. Correct use of the required standard header.
2. A valid hosted `main` function.
3. Clear output statements and readable formatting.
4. Warning-enabled C++20 compilation.
5. No unnecessary raw pointers or manual dynamic allocation.
6. A clear explanation of why the program does not need application-managed dynamic memory.

Critical safety defects or an inability to explain the submitted code block progression.

## 7. Part D: Engineering reasoning, 15 points

Explain how you would investigate a build that fails on one machine but succeeds on another. Your answer must discuss compiler identity, target, language mode, include and library paths, build command and the first useful diagnostic.

Explain why a successful build is evidence of translation and linking success for that build, but not proof that the program's logic is correct for every input.

## 8. Part E: Code quality and communication, 10 points

The submission must be reproducible by another developer. Source must be readable, commands exact, outputs genuine and explanations technically accurate.

## 9. Mandatory pass conditions

The student must satisfy all conditions:

1. Score at least 80/100.
2. Independently complete the required program.
3. Build the program successfully using the documented C++20 command.
4. Explain the submitted implementation.
5. Demonstrate reasonable understanding of the build and execution path.
6. Have no critical unresolved memory safety, undefined behaviour or ownership defect.

Theory marks cannot compensate for an inability to implement the required task. Time spent and a statement that the work is complete do not constitute evidence of mastery.

## 10. Reassessment

If the student does not pass, provide a breakdown by rubric category and identify the specific learning outcomes not demonstrated. Teach the weak areas, assign focused practice and prepare a new assessment using changed questions and a different code sample.

The pass threshold remains 80/100. Module 02 remains locked until the student passes.
