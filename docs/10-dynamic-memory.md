# 10. Dynamic Memory (Basics)

## Goal
Allocate memory at runtime and understand the responsibility that comes with it.

---

## 10.1 Stack vs Heap (Simple View)

- **Stack**: Automatic memory (local variables). Fast, limited size, cleaned up automatically.
- **Heap**: Manual memory. You request it, you must release it.

---

## 10.2 Allocating with `new`

```cpp
int* p = new int;       // allocate one int
*p = 42;

int* arr = new int[10]; // allocate array of 10 ints
arr[0] = 100;
```

---

## 10.3 Releasing with `delete`

```cpp
delete p;        // free single object
delete[] arr;    // free array  (note the [])
```

**Rule**: Every `new` must have a matching `delete`. Every `new[]` must have a matching `delete[]`.

---

## 10.4 Memory Leaks

```cpp
void leak() {
    int* data = new int[1000];
    // forgot to delete[] data;
} // memory is lost forever when function ends
```

If you lose the pointer without calling `delete`, the memory stays allocated until the program ends.

---

## 10.5 Null After Delete (Good Habit)

```cpp
delete p;
p = nullptr;     // prevents accidental double-delete or use-after-free
```

---

## 10.6 Introduction to Smart Pointers

Modern C++ strongly prefers smart pointers over raw `new`/`delete`.

```cpp
#include <memory>

std::unique_ptr<int> p = std::make_unique<int>(42);
// automatically deleted when p goes out of scope
```

`std::unique_ptr` is the simplest and most common smart pointer for exclusive ownership.

---

## 10.7 When Do You Need Dynamic Memory?

- Size not known at compile time
- Object must outlive the current scope
- Large amounts of data that would overflow the stack

For most beginner programs, prefer `std::vector` and `std::string` instead of manual `new`/`delete`.

---

## Practice
1. Allocate a single integer with `new`, assign a value, print it, then `delete` it.
2. Allocate an array of 5 doubles, fill it, print it, then `delete[]` it.
3. Intentionally create a small memory leak and then fix it.
4. Rewrite one of the previous exercises using `std::unique_ptr`.

---

## Next Step
→ [11. Structures & Enums](11-structures-and-enums.md)
