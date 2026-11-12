# 5. Operators

## Goal
Master the operators that let you calculate, compare, and combine values.

---

## 5.1 Arithmetic Operators

```cpp
int a = 10, b = 3;

std::cout << a + b << std::endl;   // 13
std::cout << a - b << std::endl;   // 7
std::cout << a * b << std::endl;   // 30
std::cout << a / b << std::endl;   // 3  (integer division!)
std::cout << a % b << std::endl;   // 1  (modulo / remainder)
```

**Important**: Integer division truncates. Use floating-point if you need decimals:

```cpp
double result = 10.0 / 3.0;   // 3.333...
```

---

## 5.2 Relational (Comparison) Operators

```cpp
int x = 5, y = 10;

x == y   // equal to
x != y   // not equal to
x <  y   // less than
x >  y   // greater than
x <= y   // less than or equal
x >= y   // greater than or equal
```

These produce `bool` values (`true` / `false`).

---

## 5.3 Logical Operators

```cpp
bool isAdult = true;
bool hasLicense = false;

isAdult && hasLicense   // AND – both must be true
isAdult || hasLicense   // OR  – at least one true
!isAdult                // NOT – inverts the value
```

---

## 5.4 Assignment Operators

```cpp
int x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
```

---

## 5.5 Increment & Decrement

```cpp
int i = 5;

++i;   // pre-increment  → i becomes 6, expression value is 6
i++;   // post-increment → i becomes 7, expression value was 6

--i;   // pre-decrement
i--;   // post-decrement
```

Prefer `++i` when you don’t need the old value (slightly more efficient conceptually).

---

## 5.6 Operator Precedence (Simplified)

Highest to lowest (most common):

1. `++` `--` (postfix)
2. `++` `--` `!` (prefix / unary)
3. `*` `/` `%`
4. `+` `-`
5. `<` `<=` `>` `>=`
6. `==` `!=`
7. `&&`
8. `||`
9. `=` `+=` `-=` etc.

When in doubt, use parentheses:

```cpp
int result = (a + b) * c;
```

---

## 5.7 Ternary Operator (Preview)

```cpp
int age = 20;
std::string status = (age >= 18) ? "Adult" : "Minor";
```

---

## Practice
1. Calculate the average of three numbers.
2. Check if a number is even or odd using modulo.
3. Write expressions using `&&` and `||`.
4. Experiment with pre- and post-increment in `std::cout`.

---

## Next Step
→ [06. Control Flow](06-control-flow.md)
