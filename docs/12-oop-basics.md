# 12. Object-Oriented Programming (Basics)

## Goal
Start organizing code using classes and objects.

---

## 12.1 Classes vs Structs

In C++, `class` and `struct` are almost identical. The only difference is default access:

- `struct` → members are `public` by default
- `class` → members are `private` by default

By convention we use `class` when we want encapsulation.

```cpp
class Player {
public:
    std::string name;
    int health;

    void takeDamage(int amount) {
        health -= amount;
        if (health < 0) health = 0;
    }
};
```

---

## 12.2 Access Specifiers

```cpp
class Example {
public:      // accessible from anywhere
    int x;

private:     // only accessible inside the class
    int y;

protected:   // accessible inside the class and derived classes
    int z;
};
```

---

## 12.3 Constructors

Special function that runs when an object is created.

```cpp
class Player {
public:
    std::string name;
    int health;

    // Constructor
    Player(std::string n, int h) {
        name = n;
        health = h;
    }
};

Player hero("Aria", 100);
```

You can have multiple constructors (overloading).

---

## 12.4 Destructors

Runs when an object is destroyed.

```cpp
class Player {
public:
    ~Player() {
        std::cout << name << " destroyed\n";
    }
};
```

Useful for releasing resources (more important with dynamic memory).

---

## 12.5 Member Functions

Functions that belong to the class.

```cpp
class Player {
public:
    void heal(int amount) {
        health += amount;
    }

    void printStatus() const {   // const means it won't modify the object
        std::cout << name << " - HP: " << health << std::endl;
    }
};
```

---

## 12.6 The `this` Pointer

Inside a member function, `this` is a pointer to the current object.

```cpp
void setHealth(int health) {
    this->health = health;   // distinguishes parameter from member
}
```

---

## 12.7 Simple Encapsulation

Hide data and expose controlled access:

```cpp
class Player {
private:
    int health;

public:
    void setHealth(int h) {
        if (h < 0) h = 0;
        health = h;
    }

    int getHealth() const {
        return health;
    }
};
```

---

## Practice
1. Create a `Rectangle` class with width, height, and a method to calculate area.
2. Add a constructor that initializes width and height.
3. Make the data private and provide getters/setters.
4. Create multiple objects and call their methods.

---

## Next Step
→ [13. Standard Library Essentials](13-standard-library-essentials.md)
