# 7. Functions

## Goal
Break your code into reusable, named blocks of logic.

---

## 7.1 Basic Function

```cpp
#include <iostream>

// Function declaration (prototype)
void greet();

int main() {
    greet();          // call the function
    return 0;
}

// Function definition
void greet() {
    std::cout << "Hello from a function!\n";
}
```

You can also define the function before `main` and skip the prototype.

---

## 7.2 Parameters and Return Values

```cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    std::cout << result << std::endl;   // 8
    return 0;
}
```

- Parameters are local variables inside the function
- `return` sends a value back to the caller
- `void` means the function returns nothing

---

## 7.3 Pass by Value

By default, C++ passes a **copy** of the argument:

```cpp
void change(int x) {
    x = 100;   // only changes the local copy
}

int main() {
    int num = 5;
    change(num);
    std::cout << num;   // still 5
}
```

---

## 7.4 Function Overloading

Same name, different parameter lists:

```cpp
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}
```

The compiler chooses the correct version based on the arguments.

---

## 7.5 Default Arguments

```cpp
void printMessage(std::string msg = "Hello") {
    std::cout << msg << std::endl;
}

printMessage();           // uses default
printMessage("Welcome");  // overrides default
```

Default arguments must be the rightmost parameters.

---

## 7.6 Scope

```cpp
int global = 10;          // global scope

void example() {
    int local = 5;        // local scope
    // global is accessible here
}

int main() {
    // local is NOT accessible here
}
```

---

## 7.7 Recursion (Introduction)

A function that calls itself:

```cpp
int factorial(int n) {
    if (n <= 1) return 1;          // base case
    return n * factorial(n - 1);   // recursive case
}
```

Always define a base case to avoid infinite recursion.

---

## Practice
1. Write a function that returns the maximum of two numbers.
2. Write a function that checks if a number is prime.
3. Create overloaded functions for `print` that accept `int` and `string`.
4. Write a recursive function to calculate the sum of numbers from 1 to n.

---

## Next Step
→ [08. Arrays & Strings](08-arrays-and-strings.md)
