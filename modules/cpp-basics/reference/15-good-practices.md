# 15. Good Practices for Beginners

## Goal
Build habits that will make you a better programmer long-term.

---

## 15.1 Write Clean, Readable Code

- Prefer clarity over cleverness
- Keep functions short and focused on one task
- Use consistent indentation and spacing

---

## 15.2 Naming Matters

```cpp
// Bad
int x = 10;
int fn(int a, int b);

// Good
int playerHealth = 10;
int calculateDamage(int baseDamage, int multiplier);
```

Names should reveal intent.

---

## 15.3 Comment Wisely

```cpp
// Bad: state the obvious
int age = 25;  // set age to 25

// Good: explain why or non-obvious decisions
// Using a fixed timestep of 1/60s for stable physics
const float FIXED_DT = 1.0f / 60.0f;
```

---

## 15.4 Prefer Modern C++ Features

| Prefer                  | Instead of              |
|-------------------------|-------------------------|
| `std::string`           | C-style `char[]`        |
| `std::vector`           | Raw arrays + manual size|
| `std::unique_ptr`       | Raw `new` / `delete`    |
| Range-based for         | Index-based loops when possible |
| `nullptr`               | `NULL` or `0`           |

---

## 15.5 Compile with Warnings

Always enable warnings:

```bash
g++ -Wall -Wextra -Wpedantic -std=c++17 main.cpp -o main
```

Treat warnings as errors while learning (`-Werror`).

---

## 15.6 Practice Regularly

- Solve small problems every day
- Rewrite old code with new knowledge
- Read other people’s code
- Build tiny projects that interest you

---

## 15.7 Project Structure Habit

Even for small programs, start organizing:

```
project/
├── src/
│   └── main.cpp
├── include/
│   └── (headers later)
├── docs/
└── README.md
```

---

## Final Advice

Master the fundamentals deeply before chasing advanced topics.  
Understanding **why** something works is more valuable than memorizing syntax.

Happy coding!
