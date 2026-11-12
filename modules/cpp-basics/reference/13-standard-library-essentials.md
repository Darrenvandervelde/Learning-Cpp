# 13. Standard Library Essentials

## Goal
Start using the most useful parts of the C++ Standard Library.

---

## 13.1 `std::vector` – Dynamic Arrays

```cpp
#include <vector>

std::vector<int> numbers;           // empty
std::vector<int> scores = {90, 85, 78};

scores.push_back(92);               // add element
scores.size();                      // number of elements
scores[0] = 95;                     // access

for (int score : scores) {
    std::cout << score << " ";
}
```

Prefer `std::vector` over raw arrays in almost all modern code.

---

## 13.2 `std::string`

Already covered earlier, but remember it is part of the standard library and far safer than C-style strings.

---

## 13.3 `<iostream>`

You already use this heavily (`cin`, `cout`, `cerr`).

---

## 13.4 Basic Algorithms (`<algorithm>`)

```cpp
#include <algorithm>
#include <vector>

std::vector<int> v = {5, 2, 8, 1, 9};

std::sort(v.begin(), v.end());              // ascending
std::sort(v.begin(), v.end(), std::greater<>()); // descending

auto it = std::find(v.begin(), v.end(), 8);
if (it != v.end()) {
    std::cout << "Found 8\n";
}
```

---

## 13.5 Range-based for Loops

```cpp
for (int n : v) {
    std::cout << n << " ";
}

// by reference if you want to modify
for (int& n : v) {
    n *= 2;
}
```

---

## 13.6 Other Useful Headers (Preview)

| Header        | Purpose                          |
|---------------|----------------------------------|
| `<vector>`    | Dynamic array                    |
| `<string>`    | Text                             |
| `<algorithm>` | sort, find, etc.                 |
| `<memory>`    | Smart pointers                   |
| `<map>`       | Key-value pairs                  |
| `<set>`       | Unique sorted elements           |
| `<utility>`   | `std::pair`, `std::move`, etc.   |

---

## Practice
1. Create a `vector` of integers, add elements, and print them.
2. Sort a vector and find the largest element.
3. Store a list of names in a `vector<std::string>` and search for one.
4. Use a range-based for loop to double every number in a vector.

---

## Next Step
→ [14. Error Handling & Debugging](14-error-handling-and-debugging.md)
