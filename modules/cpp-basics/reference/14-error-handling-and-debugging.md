# 14. Error Handling & Debugging Basics

## Goal
Learn how to find and handle problems in your programs.

---

## 14.1 Compile-time vs Runtime Errors

| Type              | When it happens          | Example                          |
|-------------------|--------------------------|----------------------------------|
| Compile-time      | While compiling          | Missing semicolon, wrong type    |
| Runtime           | While the program runs   | Division by zero, null pointer   |
| Logic             | Program runs but wrong result | Incorrect formula             |

---

## 14.2 Using a Debugger

Most IDEs (Visual Studio, VS Code, CLion) have excellent debuggers.

Key actions:
- **Breakpoint** – pause execution at a specific line
- **Step Over** – execute current line and move to next
- **Step Into** – enter a function call
- **Step Out** – finish the current function
- **Watch / Inspect** – view variable values

Practice: Put a breakpoint inside a loop and watch variables change.

---

## 14.3 Assertions

```cpp
#include <cassert>

int divide(int a, int b) {
    assert(b != 0);          // program stops if condition is false
    return a / b;
}
```

Assertions are mainly for catching programmer mistakes during development. They are often disabled in release builds.

---

## 14.4 Introduction to Exceptions

```cpp
#include <iostream>
#include <stdexcept>

double divide(double a, double b) {
    if (b == 0.0) {
        throw std::runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        double result = divide(10.0, 0.0);
        std::cout << result << std::endl;
    }
    catch (const std::exception& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }

    return 0;
}
```

- `try` – code that might throw
- `catch` – handle the error
- `throw` – raise an exception

---

## 14.5 Common Beginner Runtime Problems

- Using uninitialized variables
- Array out-of-bounds access
- Forgetting to initialize pointers
- Division by zero
- Infinite loops

---

## Practice
1. Write a program with a deliberate bug and find it with the debugger.
2. Use `assert` to guard against invalid input.
3. Write a function that throws an exception and catch it in `main`.
4. Practice reading compiler error messages carefully.

---

## Next Step
→ [15. Good Practices for Beginners](15-good-practices.md)
