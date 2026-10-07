# Learning C++

Repository for learning **C++** programming fundamentals, concepts, and practice exercises.

This guide covers the **core basics** you need to get started with C++. Work through each section in order, write small programs for every topic, and practice regularly.

---

## 1. Setup & First Program
- Install a compiler (GCC / Clang / MSVC)
    * [MSVC](./docs/%20MSVC/%20MSVC.md)
    * [Clang](./docs/Clang/Clang.md)
    * [GCC](./docs/GCC/GCC.md)
- Install an IDE or editor (VS Code + C/C++ extension, Visual Studio, CLion)
    * [ ] Vs Code + C/C++ extension
    * [ ] Visual Studio
    * [ ] Clion
- Understand the compilation process (`.cpp` → object file → executable)
- Write, compile, and run your first `Hello World` program
- Learn basic terminal / command-line usage

---

## 2. Basic Syntax & Structure
- Comments (`//` and `/* */`)
- `#include` directives and the preprocessor
- `main()` function
- Statements, expressions, and the semicolon
- Whitespace and code formatting / style

---

## 3. Variables, Data Types & Constants
- Fundamental types: `int`, `float`, `double`, `char`, `bool`
- Size and range of types (`sizeof`)
- Variable declaration and initialization
- `const` and `constexpr`
- Type modifiers: `signed`, `unsigned`, `short`, `long`
- Type conversion / casting

---

## 4. Input & Output
- `std::cout` and `std::cin`
- `std::endl` vs `\n`
- Basic formatting with `<iomanip>`
- Reading different data types
- Handling simple input errors

---

## 5. Operators
- Arithmetic operators (`+`, `-`, `*`, `/`, `%`)
- Relational / comparison operators
- Logical operators (`&&`, `||`, `!`)
- Assignment operators
- Increment / decrement (`++`, `--`)
- Operator precedence and associativity

---

## 6. Control Flow
- `if`, `else if`, `else`
- `switch` / `case`
- Ternary operator (`? :`)
- `for`, `while`, `do-while` loops
- `break` and `continue`
- Nested control structures

---

## 7. Functions
- Function declaration vs definition
- Parameters and return types
- Pass by value
- Function overloading (basics)
- Default arguments
- Scope and lifetime of variables
- Recursion (introduction)

---

## 8. Arrays & Strings
- One-dimensional arrays
- Multidimensional arrays (basics)
- C-style strings (`char[]`)
- `std::string` (recommended)
- Common string operations
- Array vs pointer relationship (introduction)

---

## 9. Pointers & References (Introduction)
- What is a pointer?
- Address-of (`&`) and dereference (`*`) operators
- Null pointers
- References (`&`)
- Differences between pointers and references
- Basic pointer arithmetic

---

## 10. Dynamic Memory (Basics)
- `new` and `delete`
- Dynamic arrays
- Memory leaks (what they are and how to avoid them)
- Introduction to smart pointers (`std::unique_ptr`)

---

## 11. Structures & Enums
- `struct` definition and usage
- Accessing members (`.` and `->`)
- Nested structures
- `enum` and `enum class`

---

## 12. Object-Oriented Programming (Basics)
- Classes and objects
- Access specifiers (`public`, `private`, `protected`)
- Constructors and destructors
- Member functions
- `this` pointer
- Simple encapsulation

---

## 13. Standard Library Essentials
- `<vector>` – dynamic arrays
- `<string>`
- `<iostream>`
- Basic algorithms from `<algorithm>` (`std::sort`, `std::find`)
- Range-based `for` loops

---

## 14. Error Handling & Debugging Basics
- Common compile-time vs runtime errors
- Using a debugger (breakpoints, step-over, inspect variables)
- Assertions (`assert`)
- Introduction to exceptions (`try` / `catch`)

---

## 15. Good Practices for Beginners
- Write clean, readable code
- Use meaningful variable and function names
- Comment only when necessary
- Prefer `std::string` and `std::vector` over raw arrays/pointers when learning
- Compile with warnings enabled (`-Wall -Wextra`)
- Practice solving small problems daily

---

## Suggested Learning Path
1. Complete sections 1–6 thoroughly
2. Practice with simple console programs (calculators, number games, etc.)
3. Move to functions, arrays, and strings
4. Learn pointers and dynamic memory carefully
5. Start basic OOP
6. Build small projects (todo list, simple inventory, text-based game)

---

## Resources (Recommended)
- **Books**: *C++ Primer* (Lippman), *Programming: Principles and Practice Using C++* (Stroustrup)
- **Online**: learncpp.com, cppreference.com
- **Practice**: LeetCode (Easy), HackerRank C++, Codeforces (beginner problems)

---

Happy coding!  
Focus on understanding concepts deeply rather than rushing through topics.
