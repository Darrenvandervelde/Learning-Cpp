# 3. Variables, Data Types & Constants

## Goal
Learn how to store and work with data in C++.

---

## 3.1 Fundamental Data Types

| Type     | Typical Size | Range (approx)              | Example          |
|----------|--------------|-----------------------------|------------------|
| `int`    | 4 bytes      | -2 billion to 2 billion     | `42`             |
| `float`  | 4 bytes      | ~7 decimal digits           | `3.14f`          |
| `double` | 8 bytes      | ~15 decimal digits          | `3.14159`        |
| `char`   | 1 byte       | -128 to 127 (or 0-255)      | `'A'`            |
| `bool`   | 1 byte       | `true` / `false`            | `true`           |

Check size on your system:
```cpp
#include <iostream>

int main() {
    std::cout << "int: " << sizeof(int) << " bytes\n";
    std::cout << "double: " << sizeof(double) << " bytes\n";
    return 0;
}
```

---

## 3.2 Declaring and Initializing Variables

```cpp
int age;              // Declaration (uninitialized - dangerous)
int score = 0;        // Declaration + initialization (preferred)
double pi = 3.14159;
char grade = 'A';
bool isActive = true;
```

Modern C++ also allows:
```cpp
int x{10};            // Brace initialization (safer)
auto y = 3.14;        // Type deduced as double
```

---

## 3.3 Type Modifiers

```cpp
short int s = 100;
long int l = 100000L;
long long int ll = 10000000000LL;

unsigned int positive = 42;   // Only >= 0
signed int normal = -5;       // Default for int
```

---

## 3.4 Constants

```cpp
const double PI = 3.1415926535;     // Runtime constant
constexpr int MAX_SIZE = 100;       // Compile-time constant (preferred when possible)
```

`constexpr` allows the compiler to evaluate the value at compile time.

---

## 3.5 Type Conversion (Casting)

**Implicit conversion** (automatic):
```cpp
int x = 5;
double y = x;          // int → double
```

**Explicit conversion**:
```cpp
double pi = 3.14159;
int approx = static_cast<int>(pi);   // Modern C++ style (preferred)

int oldStyle = (int)pi;              // C-style cast (avoid when possible)
```

---

## 3.6 Naming Rules & Conventions

- Must start with letter or underscore
- Can contain letters, digits, underscores
- Case-sensitive (`Age` ≠ `age`)
- Cannot be a keyword (`int`, `return`, etc.)

**Common conventions**:
- `camelCase` for variables
- `PascalCase` for types / classes
- `ALL_CAPS` for constants

---

## Practice
1. Declare variables of every fundamental type and print them.
2. Try assigning a `double` to an `int` and observe the result.
3. Create a `const` and try to change its value (should fail).
4. Use `sizeof` on different types.

---

## Next Step
→ [04. Input & Output](04-input-and-output.md)
