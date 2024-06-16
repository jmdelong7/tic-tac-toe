# tic-tac-toe

- Player click on cell in board.
- Place "X" in board cell.
- Change turns.
- Computer pick random open cell and place "O".
- If 3 of same symbol in a row - declare winner. 
- If 9 board cells are filled - declare game over.
- Repeat above steps until winner or game over.
- Clear board.

- If 3 of same symbol in a row - declare winner.
  - Array of 3 arrays.
  - Check if 3 of the same symbols are in a straight line.
  - Declare winner.
  - If 9 spots are filled and no winner, declare game over.
  - To declare winner we need to:
    - Check each board row for all same symbol.
    - Check each board column for all same symbol.
    - Check both diagonals for all same symbol.
  - To declare game over we need to:
    - Check that all board cells are filled.

- Board
  - In function GameBoard()
  - function to create board based on dimension argument and return it (newBoard)
    - Given dimension, create dimension x dimension matrix and input blank values
    - Can be used on start and new game.
  - Add symbol to board.
  - Clear board if winner or game over.
  - Have it private so it can't be accessed by players.

- Place "X" in board cell and computer pick random open cell and place "O"

-
