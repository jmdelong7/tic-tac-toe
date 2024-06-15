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

const columnWinCondition = [[0, 3, 6][1, 4, 7], [2, 5, 8]];

function columnsToRows(grid) {

  const columnsInRows = [];

  for (let i = 0; i < grid.length; i++) {
    let columnArray = [];
    for (let j = 0; j < grid.length; j++) {
      columnArray.push(grid[j][i]);
    }
    columnsInRows.push(columnArray);
  }

  return columnsInRows;
}

function checkWinnerInRows(grid, symbol) {

  for (let i = 0; i < grid.length; i++) {
    const gridRowCheck = grid[i].every((sym) => {
      return sym === symbol;
    })

    return gridRowCheck;

  }
}

function hasAllSameSymbol(arr, symbol) {
  arr.every((sym) => {return sym === symbol})
}

// Convert win conditions into arrays which we can call hasAllSameSymbol on.