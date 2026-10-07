# 9. Pointers & References (Introduction)

## Goal
Understand how to work with memory addresses and aliases.

---

## 9.1 What is a Pointer?

A pointer is a variable that stores a **memory address**.

```cpp
int number = 42;
int* ptr = &number;     // ptr holds the address of number

std::cout << number;    // 42          (value)
std::cout << &number;   // address     (e.g. 0x7ffd...)
std::cout << ptr;       // same address
std::cout << *ptr;      // 42          (dereference)
```

- `&` → address-of operator
- `*` → dereference operator (get the value at the address)

---

## 9.2 Declaring Pointers

```cpp
int* p1;           // pointer to int
double* p2;        // pointer to double
char* p3;          // pointer to char

int* p4 = nullptr; // modern null pointer (preferred)
int* p5 = NULL;    // old style
int* p6 = 0;       // also old style
```

Always initialize pointers. Uninitialized pointers are dangerous.

---

## 9.3 Changing Values Through Pointers

```cpp
int x = 10;
int* p = &x;

*p = 20;           // changes x
std::cout << x;    // 20
```

---

## 9.4 References

A reference is an **alias** for an existing variable.

```cpp
int original = 50;
int& ref = original;   // ref is another name for original

ref = 100;
std::cout << original; // 100
```

Key differences from pointers:
- Must be initialized when created
- Cannot be re-bound to another variable
- No need to dereference (`ref` instead of `*ptr`)
- Cannot be null

---

## 9.5 Pointers vs References (When to Use)

| Feature              | Pointer                  | Reference                |
|----------------------|--------------------------|--------------------------|
| Can be null          | Yes                      | No                       |
| Can be reseated      | Yes                      | No                       |
| Syntax               | `*ptr` / `&var`          | Just use the name        |
| Preferred for        | Dynamic memory, optional | Function parameters      |

---

## 9.6 Basic Pointer Arithmetic

```cpp
int arr[] = {10, 20, 30, 40};
int* p = arr;

std::cout << *p;       // 10
std::cout << *(p + 1); // 20
std::cout << *(p + 2); // 30

p++;                   // move to next element
```

---

## Practice
1. Create a variable and a pointer to it. Change the value via the pointer.
2. Create a reference and modify the original variable through it.
3. Print the addresses of several variables.
4. Walk through an array using pointer arithmetic.

---

## Next Step
→ [10. Dynamic Memory](10-dynamic-memory.md)
