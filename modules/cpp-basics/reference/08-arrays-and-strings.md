# 8. Arrays & Strings

## Goal
Store and work with collections of values and text.

---

## 8.1 One-Dimensional Arrays

```cpp
int scores[5];                    // uninitialized
int scores[5] = {90, 85, 78, 92, 88};
int scores[] = {90, 85, 78};      // size deduced

// Access elements (0-based index)
scores[0] = 95;
std::cout << scores[2];           // 78
```

**Important**: Arrays do not know their own size. You must keep track of it.

---

## 8.2 Looping Through Arrays

```cpp
int numbers[] = {10, 20, 30, 40, 50};
int size = 5;

for (int i = 0; i < size; ++i) {
    std::cout << numbers[i] << " ";
}
```

Range-based for (C++11):
```cpp
for (int num : numbers) {
    std::cout << num << " ";
}
```

---

## 8.3 Multidimensional Arrays (Basics)

```cpp
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

std::cout << matrix[1][2];   // 6
```

---

## 8.4 C-style Strings

```cpp
char name[20] = "Darren";
char name[] = "Darren";     // size automatically includes null terminator

std::cout << name;
```

C-style strings end with a null terminator `\0`.

---

## 8.5 `std::string` (Recommended)

```cpp
#include <string>

std::string name = "Darren";
std::string greeting = "Hello, " + name;

std::cout << name.length() << std::endl;
std::cout << name[0] << std::endl;        // 'D'

name += " van der Velde";
```

Common useful methods:
- `.length()` / `.size()`
- `.empty()`
- `.substr(start, length)`
- `.find("text")`
- `.append(...)` or `+=`

---

## 8.6 Array vs Pointer (Preview)

The name of an array can decay into a pointer to its first element:

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* ptr = arr;          // points to arr[0]
std::cout << *(ptr + 2); // 3
```

You will learn more about this in the Pointers section.

---

## Practice
1. Create an array of 10 integers and print them.
2. Find the maximum value in an array.
3. Reverse an array in place.
4. Read a full name with `std::string` and print the initials.
5. Count how many times a letter appears in a string.

---

## Next Step
→ [09. Pointers & References](09-pointers-and-references.md)
