# Microsoft Visual C++ Toolchain Guide

## 1. Role of MSVC

Microsoft Visual C++ provides the compiler, linker, standard library, debugger integration, and Windows development tools. The `cl.exe` program is the compiler driver. It is commonly invoked from a Visual Studio Developer Command Prompt or Developer PowerShell.

## 2. Verify the environment

```powershell
cl
where.exe cl
```

If the command is not found, open the Developer PowerShell installed with Visual Studio or configure the Visual Studio Build Tools environment. A normal PowerShell session may not contain the required compiler paths and environment variables.

## 3. C++20 build command

```powershell
cl /std:c++20 /W4 /permissive- /EHsc main.cpp
.\main.exe
```

The standard flag selects C++20 mode. `/W4` enables a useful warning level. `/permissive-` requests more standards conforming behaviour. `/EHsc` selects the standard C++ exception handling model for synchronous exceptions.

## 4. Multiple source files

```powershell
cl /std:c++20 /W4 /permissive- /EHsc main.cpp player.cpp
```

The compiler compiles each implementation file and invokes the linker. Learn to distinguish compiler options from linker options. A missing function definition often produces an unresolved external symbol during linking.

## 5. Debug and release configurations

Debug builds normally include debug information and use less optimisation. Release builds enable optimisation and may change execution timing and memory layout. Correct programs must not depend on undefined behaviour. If a bug appears only in Release, investigate uninitialised values, invalid lifetimes, data races, and assumptions about evaluation order.

Use Visual Studio breakpoints, watch windows, call stacks, and memory inspection to investigate runtime state.

## 6. CMake integration

CMake can generate Visual Studio solutions or Ninja build files. Configure a separate build directory for each compiler and configuration. Keep build output outside the source tree and do not commit generated binaries.

## 7. Common problems

1. Running `cl.exe` outside a configured developer environment.
2. Passing GCC flags to MSVC.
3. Confusing compile options and linker options.
4. Assuming IDE and terminal builds use identical settings.
5. Ignoring warnings because the program appears to run.

## 8. Further reading

Microsoft C++ documentation: https://learn.microsoft.com/cpp/  
MSVC compiler options: https://learn.microsoft.com/cpp/build/reference/compiler-options
