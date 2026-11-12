# 11 — Constructors, destructors and object lifetime

## Game-development context
Textures, files, audio devices, locks and temporary game objects all have lifetimes. Bugs happen when a resource outlives its owner or is released too early. C++ uses object lifetime and RAII to make these boundaries predictable.

## Learning objectives
- Understand construction and destruction.
- Use member initialiser lists.
- Distinguish storage duration at a practical level.
- Apply RAII to resources.

## Core concepts
A constructor establishes a valid object state. Prefer member initialiser lists because members are initialised before the constructor body, in declaration order. A destructor runs when an object's lifetime ends. RAII (Resource Acquisition Is Initialisation) ties resource acquisition to object lifetime: acquire during construction and release during destruction.

Do not write a destructor merely to print a message. Standard-library resource-owning types already manage their own resources.

## Focused C++20 example
```cpp
#include <fstream>
#include <stdexcept>

class SaveFile
{
public:
    explicit SaveFile(const char* path)
        : file_{path}
    {
        if (!file_) {
            throw std::runtime_error("Could not open save file");
        }
    }

    void write(const char* text)
    {
        file_ << text;
    }

private:
    std::ofstream file_;
};
```

When a `SaveFile` object is destroyed, its `std::ofstream` member closes the file, including during stack unwinding.

## Memory, ownership and performance
An automatic object is destroyed when its scope exits. Members are destroyed in reverse order of construction. RAII gives deterministic cleanup. Resource acquisition can fail, so construction must establish a valid state or report failure.

## Common mistakes
- Acquiring a resource and forgetting cleanup on an early return.
- Initialising members in a different order than declaration order.
- Calling a member function after an object's lifetime ended.
- Throwing from destructors during normal stack unwinding.
- Assuming destructors run after forced process termination.

## Independent exercise
Create a small RAII wrapper around an output file. Demonstrate normal scope exit and an early return, then verify cleanup.

## Code-review checklist
Check constructor failure behaviour, member order, deterministic release and whether a standard-library owner already solves the problem.

## Assessment gate
A. Explain object lifetime, destructor timing and RAII.  
B. Find a resource leak caused by early return and a member initialisation-order issue.  
C. Independently implement a resource-owning wrapper or explain a standard RAII owner with a working example.  
D. Explain how RAII makes engine shutdown and error paths safer.

**Pass:** 80/100 or higher; resource cleanup must be deterministic and correct.
