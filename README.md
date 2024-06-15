# tic-tac-toe

- If 3 of same symbol in a row - declare winner.
- Player click on cell in grid.
- Place "X" in grid cell.
- Change turns.
- Computer pick random open cell and place "O".
- Repeat steps 2 - 5 until grid is full.
- If 3 of same symbol in a row - declare winner. Or declare game over if no 3 in a row.
- Clear grid.

- If 3 of same symbol in a row - declare winner.
  - Array of 3 arrays.
  - Check if 3 of the same symbols are in a straight line.
  - Declare winner.
  - If 9 spots are filled and no winner, declare game over.
  - To declare winner we need to:
    - Check each grid row for all same symbol.
    - Check each grid column for all same symbol.
    - Check both diagonals for all same symbol.