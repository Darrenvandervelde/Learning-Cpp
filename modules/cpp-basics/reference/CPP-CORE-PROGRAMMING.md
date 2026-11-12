# Types, Expressions, Functions, and Control Flow

## 1. Objects and types

An object is a region of storage with a type and lifetime. Its type determines valid operations, alignment, size requirements, and how values are interpreted. A variable name is an identifier used to refer to an object.

Use types that reflect domain meaning. Health and score are discrete quantities and normally use integer types. Movement speed and elapsed time may need floating point representation. Fixed width integer types from <cstdint> are useful when an interface requires a specific width, but they should not be selected without considering range and portability.

## 2. Initialisation and constants

Prefer direct or brace initialisation. Brace initialisation rejects many narrowing conversions.

```cpp
int health{100};
double movement_speed{4.25};
const int maximum_health{100};
constexpr int starting_lives{3};
```

An uninitialised local scalar can contain an indeterminate value. Reading it can cause undefined behaviour. Initialise objects at declaration unless there is a clear reason not to.

`const` prevents modification through a particular name. `constexpr` additionally requires compile time constant evaluation when the context and expression permit it. Neither keyword automatically makes every object reachable through aliases immutable.

## 3. Expressions and conversions

Expressions combine operands and operators. Precedence determines grouping and associativity determines grouping among operators of equal precedence. Parentheses are useful when they make intent obvious.

Integer division truncates toward zero. Signed integer overflow is undefined behaviour. Floating point calculations have finite precision and may not represent decimal fractions exactly. Avoid assuming that two independently calculated floating point values will compare exactly equal.

Conversions can change range, signedness, or precision. Enable conversion warnings and make intentional conversions explicit after checking the value range.

## 4. Control flow

Selection uses if, else, and switch. Iteration uses while, for, and range based for. Every loop needs a termination argument. In a game, state transitions should be explicit: menu to playing, playing to paused, and playing to game over.

Avoid using many unrelated boolean flags to represent mutually exclusive states. A scoped enumeration is often clearer and makes invalid combinations harder to express.

## 5. Functions as contracts

A function interface states its inputs, outputs, and intended effects. Keep calculations independent from terminal output where practical.

```cpp
int apply_damage(int health, int damage)
{
    if (damage <= 0)
    {
        return health;
    }

    return damage >= health ? 0 : health - damage;
}
```

This function has a simple value in, value out contract. Production code should also define valid health ranges and behaviour for invalid inputs.

Pass small scalar values by value. Pass large read only objects by const reference when copying is unnecessary. Use a non const reference when the function is intended to modify the caller's object. Never return a reference or pointer to a local object whose lifetime ends at function return.

## 6. Input is untrusted

Stream extraction can fail. Always check the stream state before using parsed values. Validate the domain range as well as the data type. A correctly parsed difficulty value of 900 is still invalid if the game supports only three levels.

## 7. Practice

Write a health update function, a function that checks whether the player is alive, and a menu parser. Test normal, boundary, and invalid values. Explain types, conversions, loop termination, and function contracts.
