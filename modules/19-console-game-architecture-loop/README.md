# 19 — Console game architecture and game loop

## Game-development context
This module combines the fundamentals into a small playable console game. You will practise separating state, rules, input and presentation before moving to a graphical framework.

## Learning objectives
- Separate game state from input and output.
- Use functions and value types to isolate responsibilities.
- Implement a predictable update loop.
- Handle win, loss and quit states explicitly.

## Core concepts
A simple game loop repeatedly obtains an input command, updates game state and presents the result. In a console game, input may block while waiting for the player. A real-time graphical game usually polls input and advances simulation using elapsed time; that comes later.

Represent game state explicitly with an `enum class`. Keep rule functions independent of console I/O so they can be tested. Avoid putting every responsibility into `main`.

## Focused C++20 example
```cpp
enum class GameState { Playing, Won, Lost, Quit };

struct Game
{
    int playerHealth{100};
    int enemyHealth{50};
    GameState state{GameState::Playing};
};

void update(Game& game, int playerDamage)
{
    if (game.state != GameState::Playing) {
        return;
    }

    game.enemyHealth -= playerDamage;
    if (game.enemyHealth <= 0) {
        game.enemyHealth = 0;
        game.state = GameState::Won;
    }
}
```

This is a focused simulation example, not a complete game. Input and display should be separate functions.

## Memory, ownership and performance
Value members are sufficient for this small game; no dynamic allocation or owning raw pointers are needed. Predictable ownership makes the update function easy to reason about. Avoid premature ECS or object-pool abstractions for a game with only a few entities.

## Common mistakes
- Mixing input, rules and rendering in one function.
- Allowing updates after a terminal state.
- Using magic numbers without names.
- Making the game loop impossible to exit.
- Building abstractions before a real requirement exists.

## Independent exercise
Build a turn-based encounter with player and enemy, attack and heal commands, health limits, victory/defeat states and a quit option. Split it into focused functions and provide at least three tests for game rules.

## Code-review checklist
Review state transitions, input validation, function responsibilities, ownership, test coverage and reproducible build steps.

## Assessment gate
A. Explain the input-update-present loop and why state should be explicit.  
B. Analyse a game that updates after defeat or permits negative health.  
C. Independently complete the playable console encounter and its tests.  
D. Justify module boundaries and explain why simple design is better than premature engine architecture.

**Pass:** 80/100 or higher; game is independently playable, terminates correctly and preserves state invariants.
