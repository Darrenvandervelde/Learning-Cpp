# 2. Basic Syntax & Structure

## Goal
Understand the fundamental building blocks of a C++ program.

---

## 2.1 Comments

```cpp
// Single-line comment

/* 
   Multi-line
   comment
*/

/**
 * Documentation-style comment (often used with tools like Doxygen)
 */
```

Use comments to explain **why**, not **what** the code does.

---

## 2.2 Preprocessor Directives

```cpp
#include <iostream>   // Standard library header
#include "myheader.h" // Your own header
```

- `#include` copies the content of a header file into your source.
- Angle brackets `< >` → system / standard headers
- Quotes `" "` → local project headers

Other common directives:
```cpp
#define PI 3.14159
#ifdef DEBUG
    // debug-only code
#endif
```

---

## 2.3 The `main` Function

Every C++ program must have a `main` function. It is the entry point.

```cpp
int main() {
    // your code here
    return 0;   // 0 usually means success
}
```

Alternative form (less common for beginners):
```cpp
int main(int argc, char* argv[]) {
    // argc = argument count
    // argv = argument values
}
```

---

## 2.4 Statements & Expressions

- A **statement** is a complete instruction ending with `;`
- An **expression** produces a value

```cpp
int x = 5 + 3;     // statement containing an expression
std::cout << x;    // statement
```

---

## 2.5 Whitespace & Formatting

C++ ignores most whitespace. These are equivalent:

```cpp
int x=5;
int x = 5;
int     x
=
5;
```

**Recommended style** (common conventions):
- 4 spaces or 1 tab for indentation
- Space around operators: `a + b`
- Opening brace on the same line or next line (pick one style and stay consistent)

Example of clean style:
```cpp
#include <iostream>

int main() {
    int age = 25;

    if (age >= 18) {
        std::cout << "Adult" << std::endl;
    }

    return 0;
}
```

---

## 2.6 Namespaces (Brief Introduction)

```cpp
std::cout << "Hello";   // Fully qualified

using namespace std;    // Bring everything from std into scope (use carefully)
cout << "Hello";

using std::cout;        // Prefer this for specific names
cout << "Hello";
```

For beginners it is fine to write `std::` explicitly.

---

## Practice
1. Write a program with both single-line and multi-line comments.
2. Experiment with different indentation styles.
3. Intentionally forget a semicolon and observe the compiler error.

---

## Next Step
→ [03. Variables, Data Types & Constants](03-variables-data-types-and-constants.md)
