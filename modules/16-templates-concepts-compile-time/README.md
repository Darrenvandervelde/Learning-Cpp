# 16 — Templates, concepts and compile-time tools

## Game-development context
Engine code often needs reusable algorithms for different numeric types, components or resource handles. Templates provide compile-time generality without requiring every operation to use a runtime base class.

## Learning objectives
- Read and write function templates.
- Understand type deduction.
- Use a C++20 concept to constrain a template.
- Recognise when a normal function is simpler.

## Core concepts
A function template describes a family of functions parameterised by types or values. The compiler instantiates a concrete version when used. Templates are checked in the context of supplied types, which can produce long diagnostics when requirements are unclear.

Concepts name requirements on template parameters. They improve interfaces and diagnostics by stating what operations a type must support. Use templates when behaviour is genuinely type-generic; do not template everything merely to appear advanced.

## Focused C++20 example
```cpp
#include <concepts>

template <std::integral T>
constexpr T clampHealth(T value, T maximum)
{
    return value < T{0} ? T{0}
         : value > maximum ? maximum
         : value;
}
```

The `std::integral` concept restricts `T` to integral types. `constexpr` allows compile-time evaluation when the arguments and context permit it; it does not force every call to execute at compile time.

## Memory, ownership and performance
Templates usually generate specialised code for concrete types, enabling optimisation but potentially increasing compile times and binary size. They do not inherently allocate memory. A generic interface can still copy or retain a reference unsafely.

## Common mistakes
- Writing templates when one ordinary function is enough.
- Putting template definitions where instantiation cannot see them.
- Using overly broad constraints.
- Assuming every `constexpr` call is compile-time evaluated.
- Ignoring code-size and compile-time trade-offs.

## Independent exercise
Write a constrained template that returns the larger of two values of the same comparable type. Test integers and floating-point values. Explain when a separate overload is clearer.

## Code-review checklist
Check constraints, type deduction, value categories, compile-time expectations and whether the abstraction reduces duplication.

## Assessment gate
A. Explain template instantiation, concepts and `constexpr`.  
B. Analyse a template whose body uses operations not guaranteed by its constraints.  
C. Independently implement and test the constrained comparison template.  
D. Explain when templates are preferable to overloads or runtime polymorphism and identify compile-time costs.

**Pass:** 80/100 or higher, valid constraints and useful tests.
