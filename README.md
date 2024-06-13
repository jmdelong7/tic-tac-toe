# tic-tac-toe

Use the revealing module pattern and factory functions to create the game.
- grid
- 2 players
- 2 symbols
- turns
- player position selection on the grid
- A position can be selected once per game by 1 player
- 3 in a row wins

GRID / CONTROLLER / PLAYERS

GRID
- Private
  - Main grid held in an array.
  - Add player symbol based on position choice to array.
- Public
  - Return grid array.

CONTROLLER
- Private
  - Player turn. 
  - Win case.
- Public
  - Player selection.

PLAYER
- Private
  - Player name & symbol.
