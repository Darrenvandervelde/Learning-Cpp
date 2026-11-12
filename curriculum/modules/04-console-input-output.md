# 04 — Console input and output

## Game-development context
Before a graphical window exists, a console game can teach the same interaction loop: display state, accept a command, validate it, update the game and display the result.

## Learning objectives
- Use `std::cout`, `std::cin` and `std::cerr`.
- Read tokens and complete lines.
- Detect and recover from invalid input.
- Understand stream state.

## Core concepts
`std::cout` is standard output; `std::cerr` is for diagnostics. `<<` inserts values into an output stream. `>>` extracts formatted input and normally stops at whitespace. `std::getline` reads a complete line.

Input is untrusted. Extraction can fail when a user enters text where a number is expected. Check the stream before using the value. After failure, clear the error state and discard the invalid line before retrying.

## Focused C++20 example
```cpp
#include <iostream>

int main()
{
    int choice{};
    std::cout << "Choose 1 to start: ";
    if (!(std::cin >> choice)) {
        std::cerr << "Please enter a whole number.\n";
        return 1;
    }
    std::cout << "Selected: " << choice << '\n';
    return 0;
}
```

## Memory, ownership and performance
Streams manage their own buffers and resources. Do not manually allocate memory to print a line. Console I/O is slow relative to in-memory calculations, so avoid printing thousands of debug lines in a performance-critical update loop.

## Common mistakes
- Assuming input always succeeds.
- Mixing `operator>>` and `getline` without handling the pending newline.
- Using an uninitialised variable after failed extraction.
- Using `std::endl` for every line when `'\n'` is enough; `std::endl` also flushes.

## Independent exercise
Ask for a player name and starting health. Read the full name, validate health against a sensible range, print a status panel and reject invalid input clearly.

## Code-review checklist
Test normal input, empty input, letters where a number is expected, out-of-range values and names containing spaces.

## Assessment gate
A. Explain formatted extraction, line input and stream failure state.  
B. Find a bug where a variable is used after failed input.  
C. Independently build a validated player setup screen.  
D. Explain why input validation belongs at the boundary between user and game state.

**Pass:** 80/100 or higher; invalid input must not corrupt program state.
