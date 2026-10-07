# 6. Control Flow

## Goal
Control the order in which your code executes using decisions and loops.

---

## 6.1 if / else if / else

```cpp
int score = 85;

if (score >= 90) {
    std::cout << "A\n";
} else if (score >= 80) {
    std::cout << "B\n";
} else if (score >= 70) {
    std::cout << "C\n";
} else {
    std::cout << "F\n";
}
```

---

## 6.2 switch Statement

Best for discrete values:

```cpp
int day = 3;

switch (day) {
    case 1:
        std::cout << "Monday\n";
        break;
    case 2:
        std::cout << "Tuesday\n";
        break;
    case 3:
        std::cout << "Wednesday\n";
        break;
    default:
        std::cout << "Other day\n";
        break;
}
```

**Always** use `break` unless you intentionally want fall-through.

---

## 6.3 Ternary Operator

```cpp
int age = 20;
std::string message = (age >= 18) ? "Can vote" : "Too young";
```

Useful for simple decisions, but don’t nest them too deeply.

---

## 6.4 for Loop

```cpp
for (int i = 0; i < 5; ++i) {
    std::cout << i << " ";
}
// Output: 0 1 2 3 4
```

Structure: `for (initialization; condition; increment)`

---

## 6.5 while Loop

```cpp
int i = 0;
while (i < 5) {
    std::cout << i << " ";
    ++i;
}
```

Use when you don’t know in advance how many times to loop.

---

## 6.6 do-while Loop

```cpp
int number;
do {
    std::cout << "Enter a positive number: ";
    std::cin >> number;
} while (number <= 0);
```

The body always executes at least once.

---

## 6.7 break and continue

```cpp
for (int i = 0; i < 10; ++i) {
    if (i == 3) continue;   // skip the rest of this iteration
    if (i == 7) break;      // exit the loop completely
    std::cout << i << " ";
}
// Output: 0 1 2 4 5 6
```

---

## 6.8 Nested Loops

```cpp
for (int row = 1; row <= 3; ++row) {
    for (int col = 1; col <= 3; ++col) {
        std::cout << "(" << row << "," << col << ") ";
    }
    std::cout << "\n";
}
```

---

## Practice Ideas
1. Print numbers from 1 to 100.
2. Print only even numbers between 1 and 50.
3. Create a simple number guessing game.
4. Print a multiplication table (nested loops).
5. Validate user input with a `do-while` loop.

---

## Next Step
→ [07. Functions](07-functions.md)
