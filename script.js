// - If 3 of same symbol in a row - declare winner.
//   - Array of 3 arrays.
//   - Check if 3 of the same symbols are in a straight line.
//   - Declare winner.
//   - If 9 spots are filled and no winner, declare game over.
//   - To declare winner we need to:
//     - Check each grid row for all same symbol.
//     - Check each grid column for all same symbol.
//     - Check both diagonals for all same symbol.
//   - To declare game over we need to:
//     - Check that all grid cells are filled.

let grid = [["X", "X", "X"],["O", "X", "O"],["O", "X", "O"]];

// later: function to check for both symbols


function loopThroughGrid(grid, symbol) {

  for (let i = 0; i < grid.length; i++) {
    let gridRowCheck = grid[i].every((sym) => {
      return sym === symbol;
    })

    return gridRowCheck;

  }
}