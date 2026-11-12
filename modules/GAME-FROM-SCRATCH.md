# Build a Game from Scratch — C++20 Project Roadmap

This is the cumulative project that connects the 20 learning modules. Build it in small verified increments. Do not jump directly to a graphics engine before you can explain the game state and update logic.

## Project target

Create a small single-player adventure called **The Last Signal**. The player explores a sequence of encounters, manages health, collects items, fights enemies and reaches an ending. Start as a console game; later replace the console presentation with a 2D library while preserving the game rules.

## Stage 1 — Console foundation (Modules 01–06)

1. Create a C++20 project and verify the compiler and linker.
2. Print a title screen and instructions.
3. Represent player health, enemy health, score and game state.
4. Read and validate menu choices.
5. Implement movement or room selection using simple commands.
6. Use loops and conditions for repeated turns and win/loss conditions.

**Milestone:** a small playable loop that starts, accepts input, updates state and exits cleanly.

## Stage 2 — Functions and data modelling (Modules 07–09)

1. Extract input, output, combat and validation into focused functions.
2. Use `std::array` or `std::vector` for inventory and enemies.
3. Use structs for Player, Enemy and Item data.
4. Use `enum class` for GameState and command types.
5. Define boundary rules for health, inventory capacity and invalid commands.

**Milestone:** gameplay rules are separated from the console menu and can be tested independently.

## Stage 3 — Object design and lifetime (Modules 10–14)

1. Introduce classes only where they protect meaningful invariants.
2. Use constructors to create valid objects.
3. Use RAII for files and other acquired resources.
4. Distinguish references, pointers and ownership.
5. Prefer values and standard containers; use `std::unique_ptr` for exclusive dynamic ownership only when needed.
6. Implement or deliberately default copy/move operations based on resource semantics.

**Milestone:** the game has clear ownership and no dangling references, double deletion or unexplained raw owning pointers.

## Stage 4 — Reusable systems (Modules 15–18)

1. Use standard algorithms for searching and sorting inventory.
2. Introduce templates only for genuinely reusable operations.
3. Add unit tests for combat, state transitions and input validation.
4. Split the program into headers and source files.
5. Add CMake targets for game logic and executable.
6. Use Git branches and small commits.

**Milestone:** the project builds reproducibly and its core rules can be tested without running the whole game.

## Stage 5 — Complete console game (Modules 19–20)

Implement a predictable turn-based loop:

```text
Initialise
  ↓
Read player command
  ↓
Validate command
  ↓
Update game state
  ↓
Resolve encounters
  ↓
Check win/loss conditions
  ↓
Render console state
  └──────── repeat while running
```

Keep input, game rules and presentation separate. Test invalid input, zero health, lethal damage, empty inventory and game termination.

**Milestone:** a complete playable console game with documented controls, build instructions and tests.

## Stage 6 — 2D game (after the console milestone)

Choose SDL3 or SFML. Add one subsystem at a time:
1. Window and application lifecycle.
2. Input abstraction and action mapping.
3. Delta time and a fixed update timestep where physics requires it.
4. Texture and sprite rendering.
5. Camera and world coordinates.
6. Collision detection and response.
7. Audio resources.
8. Scene transitions and resource lifetime.

Keep gameplay rules independent of the rendering library wherever practical.

## Stage 7 — Custom engine foundations

Only after the 2D game is stable, extract reusable engine systems:
- Platform/application layer and logging.
- Renderer and resource handles.
- Entity/component or ECS storage.
- Transform and scene systems.
- Physics and spatial queries.
- Asset loading and caching.
- Events and input mapping.
- Profiling, tests and diagnostics.

Do not build an abstraction until a real use case demonstrates the need. Profile before optimising and aim for a 16.67 ms frame budget when targeting 60 FPS.

## Definition of done for each stage

- The program builds with warnings enabled.
- The feature works in normal and edge cases.
- Core rules have automated tests where practical.
- Ownership and object lifetimes are explainable.
- Build and run instructions are reproducible.
- The learner can explain the design without relying on copied code.

See [the module index](README.md) and complete each assessment gate before moving on.
