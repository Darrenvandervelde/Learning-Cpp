# 17 — Errors, debugging, testing and sanitizers

## Game-development context
A game that compiles can still crash, corrupt state or behave incorrectly. Professional development depends on reproducible debugging and tests, not guessing at fixes.

## Learning objectives
- Distinguish compile, link, runtime and logic errors.
- Use breakpoints and variable inspection.
- Add assertions and focused tests.
- Understand sanitizers and their limits.

## Core concepts
A compile error means the compiler cannot translate the source. A linker error means required definitions or libraries cannot be resolved. A runtime error occurs during execution. A logic error produces an incorrect result while the program may continue normally.

Debug systematically: reproduce the issue, minimise the case, inspect relevant state, form a hypothesis, change one thing and verify. Assertions document programmer assumptions during development. Tests verify expected behaviour from known inputs. Sanitizers detect classes of memory and undefined-behaviour defects during instrumented runs.

## Focused C++20 example
```cpp
#include <algorithm>
#include <cassert>

int applyDamage(int health, int damage)
{
    assert(health >= 0);
    assert(damage >= 0);
    return std::max(health - damage, 0);
}

int main()
{
    assert(applyDamage(100, 25) == 75);
    assert(applyDamage(10, 50) == 0);
}
```

Assertions are not a replacement for validating untrusted player input.

## Memory, ownership and performance
Debug builds may include symbols and runtime checks that increase execution time. Sanitizers add instrumentation and are not representative performance builds. Use them to find defects, then profile an optimised build separately. Never disable a warning or sanitizer merely to hide a failure.

## Common mistakes
- Changing multiple things before reproducing a bug.
- Treating a passing test as proof every input is correct.
- Using assertions for recoverable user errors.
- Debugging only in Release without symbols.
- Claiming code was tested when it was only reviewed.

## Independent exercise
Introduce a deliberate off-by-one error or invalid input path. Reproduce it, use a debugger or diagnostics to identify the cause, fix it and add a regression test.

## Code-review checklist
Include reproduction steps, expected and actual results, root cause, fix and verification evidence.

## Assessment gate
A. Distinguish compile, link, runtime and logic errors; explain assertions and tests.  
B. Analyse a crash caused by invalid indexing or a dangling pointer.  
C. Independently debug a supplied defect and add a regression test.  
D. Explain how Debug, Release, warnings and sanitizers fit into the workflow.

**Pass:** 80/100 or higher; root cause is demonstrated and regression test passes.
