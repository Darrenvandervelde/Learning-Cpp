# 1. Setup & First Program

## Goal
Get a working C++ development environment and run your first program.

---

## 1.1 Install a Compiler

### Windows
- **Recommended**: Install [Visual Studio Community](https://visualstudio.microsoft.com/) and select the "Desktop development with C++" workload.
- Alternative: Install MinGW-w64 via [MSYS2](https://www.msys2.org/) or use the compiler that comes with Visual Studio.

### macOS
```bash
xcode-select --install
```
This installs Clang.

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install build-essential
```

Verify installation:
```bash
g++ --version
# or
clang++ --version
```

---

## 1.2 Choose an Editor / IDE

| Tool              | Best For                  | Notes                              |
|-------------------|---------------------------|------------------------------------|
| Visual Studio     | Full IDE experience       | Excellent debugger                 |
| VS Code           | Lightweight + extensions  | Install "C/C++" extension by Microsoft |
| CLion             | Professional              | Paid, very powerful                |
| Vim / Neovim      | Terminal lovers           | Requires configuration             |

---

## 1.3 Your First Program

Create a file named `hello.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}
```

### Compile & Run

**Using g++ / clang++:**
```bash
g++ hello.cpp -o hello
./hello          # macOS / Linux
hello.exe        # Windows
```

**Using Visual Studio:**
- Create a new Console App project
- Replace the code
- Press Ctrl + F5 to run without debugging

---

## 1.4 Understanding the Compilation Process

1. **Preprocessing** – Handles `#include`, `#define`, etc.
2. **Compilation** – Turns source code into object files (`.o` / `.obj`)
3. **Linking** – Combines object files + libraries into an executable

Command that shows the steps:
```bash
g++ -E hello.cpp -o hello.i    # Preprocessed
g++ -S hello.cpp -o hello.s    # Assembly
g++ -c hello.cpp -o hello.o    # Object file
g++ hello.o -o hello           # Link
```

---

## 1.5 Useful Compiler Flags (Beginner)

```bash
g++ -Wall -Wextra -std=c++17 hello.cpp -o hello
```

- `-Wall -Wextra` → Enable useful warnings
- `-std=c++17` (or `c++20`) → Use a modern C++ standard

---

## Practice
1. Change the message and recompile.
2. Add a second `std::cout` line.
3. Intentionally make a syntax error and read the compiler message.

---

## Next Step
→ [02. Basic Syntax & Structure](02-basic-syntax-and-structure.md)
