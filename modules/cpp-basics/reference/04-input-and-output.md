# 4. Input & Output

## Goal
Learn how to display information and read user input using the standard library.

---

## 4.1 Output with `std::cout`

```cpp
#include <iostream>

int main() {
    std::cout << "Hello";
    std::cout << " World!" << std::endl;

    int age = 25;
    std::cout << "I am " << age << " years old." << std::endl;

    return 0;
}
```

- `<<` is the stream insertion operator
- `std::endl` inserts a newline **and** flushes the buffer
- `\n` is usually faster when you only need a newline:

```cpp
std::cout << "Line 1\n";
```

---

## 4.2 Input with `std::cin`

```cpp
#include <iostream>

int main() {
    int age;
    std::cout << "Enter your age: ";
    std::cin >> age;

    std::cout << "You are " << age << " years old.\n";
    return 0;
}
```

`>>` is the stream extraction operator.

---

## 4.3 Reading Different Types

```cpp
int number;
double price;
char initial;
std::string name;          // needs #include <string>

std::cin >> number >> price >> initial;
std::cin >> name;          // reads until whitespace
```

---

## 4.4 Reading Full Lines

`std::cin >>` stops at whitespace. To read a full line:

```cpp
#include <iostream>
#include <string>

int main() {
    std::string fullName;
    std::cout << "Enter your full name: ";
    std::getline(std::cin, fullName);

    std::cout << "Hello, " << fullName << "!\n";
    return 0;
}
```

**Important**: If you mix `std::cin >>` and `std::getline`, you often need to ignore the leftover newline:

```cpp
std::cin >> age;
std::cin.ignore(10000, '\n');   // discard leftover newline
std::getline(std::cin, name);
```

---

## 4.5 Basic Formatting

```cpp
#include <iostream>
#include <iomanip>     // for manipulators

int main() {
    double pi = 3.1415926535;

    std::cout << std::fixed << std::setprecision(2);
    std::cout << pi << std::endl;          // 3.14

    std::cout << std::setw(10) << 42 << std::endl;  // right-aligned width 10

    return 0;
}
```

---

## 4.6 Common Beginner Pitfalls

| Problem                          | Solution                              |
|----------------------------------|---------------------------------------|
| Input skipped after `cin >>`     | Use `cin.ignore()` before `getline`   |
| Reading fails (wrong type)       | Check with `if (!(std::cin >> x))`    |
| Extra spaces in output           | Be careful with `<<` chaining         |

---

## Practice
1. Ask the user for their name and age, then print a greeting.
2. Read two numbers and print their sum.
3. Read a full sentence with `getline` and print it back.
4. Format a floating-point number to 3 decimal places.

---

## Next Step
→ [05. Operators](05-operators.md)
