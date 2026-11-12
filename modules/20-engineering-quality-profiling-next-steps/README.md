# 20 — Engineering quality, profiling and next steps

## Game-development context
A working game is a milestone, not the finish line. Engine code must remain understandable, testable and measurable as features grow. This module reviews the engineering habits needed before graphics, physics or an ECS.

## Learning objectives
- Review code for cohesion, coupling and ownership.
- Use profiling evidence rather than guesses.
- Understand frame-time budgets.
- Plan the next engine milestone without skipping fundamentals.

## Core concepts
Prefer small interfaces, explicit dependencies and single-purpose functions. Composition is often a better starting point than deep inheritance. Keep ownership visible and lifetimes predictable. Use assertions for programmer invariants, tests for expected behaviour and logs for diagnosis.

At 60 FPS, the total frame budget is about 16.67 milliseconds. That budget includes input, simulation, rendering submission, audio and other work. A slow frame may be caused by CPU work, GPU work, synchronisation, allocation or I/O. Measure the relevant subsystem before changing its design.

Complexity analysis estimates how work grows with input size. Cache locality and allocation patterns matter for large data sets, but should be investigated with a profiler and representative workloads.

## Focused C++20 example
```cpp
#include <chrono>
#include <iostream>

int main()
{
    using clock = std::chrono::steady_clock;
    const auto start = clock::now();

    int result{};
    for (int i = 0; i < 100'000; ++i) {
        result += i;
    }

    const auto elapsed = clock::now() - start;
    const auto microseconds =
        std::chrono::duration_cast<std::chrono::microseconds>(elapsed);

    std::cout << "Elapsed: " << microseconds.count() << " us\n";
}
```

This demonstrates timing mechanics only. A single microbenchmark is not a reliable performance conclusion; use optimised builds, repeat measurements and representative workloads.

## Memory, ownership and performance
Measure allocation count, memory use, cache behaviour and frame time when relevant. Avoid premature object pools and custom allocators. A custom allocator adds complexity and should solve a measured problem. Keep resource ownership independent of transient frame data where possible.

## Common mistakes
- Optimising before measuring.
- Treating average frame time as the whole story; spikes matter too.
- Using global mutable state to connect systems.
- Adding patterns without a concrete need.
- Confusing a clean build with verified runtime behaviour.

## Independent capstone
Review and improve the console game from Module 19. Add build/run instructions, separate source files by responsibility, add tests for core rules, document ownership and measure one representative workload. Record before/after results only if measurements are repeatable.

## Code-review checklist
Submit a design overview, source tree, build instructions, tests, ownership notes, profiling method and known limitations.

## Assessment gate
A. Explain cohesion, coupling, ownership, complexity and the 16.67 ms frame budget at 60 FPS.  
B. Review a design with global state, unclear ownership and an unmeasured optimisation.  
C. Independently deliver the capstone with reproducible build and tests.  
D. Defend the architecture, identify bottlenecks from evidence and propose the next smallest useful improvement.

**Pass:** 80/100 or higher; capstone builds, tests pass, ownership is clear and performance claims are measured.

## After Module 20
Next is a 2D application using SDL3 or SFML: window lifecycle, event/input handling, delta time, textures, rendering, collision and audio. Then build a reusable 2D engine, followed by 3D mathematics/rendering. Do not skip ahead until the cumulative console-game milestone is independently demonstrated.
