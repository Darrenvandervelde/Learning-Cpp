# 11. Structures & Enums

## Goal
Group related data together and create named sets of constants.

---

## 11.1 Structures (`struct`)

A `struct` lets you define a custom data type that groups variables.

```cpp
struct Player {
    std::string name;
    int health;
    int level;
};

int main() {
    Player p1;
    p1.name = "Aria";
    p1.health = 100;
    p1.level = 5;

    std::cout << p1.name << " is level " << p1.level << std::endl;
    return 0;
}
```

You can also initialize at creation:

```cpp
Player p2 = {"Kael", 80, 3};
```

---

## 11.2 Accessing Members

- Use `.` for objects
- Use `->` for pointers to objects

```cpp
Player p;
p.health = 90;

Player* ptr = &p;
ptr->health = 70;      // same as (*ptr).health = 70
```

---

## 11.3 Nested Structures

```cpp
struct Position {
    float x;
    float y;
};

struct Enemy {
    std::string name;
    Position pos;
    int damage;
};

Enemy e;
e.pos.x = 10.5f;
e.pos.y = 20.0f;
```

---

## 11.4 Enums

Classic enum:

```cpp
enum Direction {
    North,
    East,
    South,
    West
};

Direction dir = North;
```

Modern enum class (recommended):

```cpp
enum class Color {
    Red,
    Green,
    Blue
};

Color c = Color::Red;
// Color c = Red;          // error – must use scope
```

`enum class` is type-safe and avoids name conflicts.

---

## 11.5 Using Enums with Switch

```cpp
switch (dir) {
    case North:
        std::cout << "Going up\n";
        break;
    case South:
        std::cout << "Going down\n";
        break;
    // ...
}
```

---

## Practice
1. Create a `Book` struct with title, author, and pages.
2. Create an array of 3 `Book`s and print them.
3. Define an `enum class` for game difficulty (Easy, Medium, Hard).
4. Write a function that takes a `Player` and prints its status.

---

## Next Step
→ [12. Object-Oriented Programming Basics](12-oop-basics.md)
