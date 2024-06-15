// - If 3 of same symbol in a row - declare winner.
//   - Array of 3 arrays.
//   - Check if 3 of the same symbols are in a straight line.
//   - Declare winner.
//   - If 9 spots are filled and no winner, declare game over.
//   - To declare winner we need to:
//     - Check each board row for all same symbol.
//     - Check each board column for all same symbol.
//     - Check both diagonals for all same symbol.
//   - To declare game over we need to:
//     - Check that all board cells are filled.

let board = [["X", "O", "O"],["O", "X", "O"],["O", "X", "O"]];
// Use .fill to fill arrays with blank values

// later: function to check for both symbols

const columnWinCondition = [[0, 3, 6][1, 4, 7], [2, 5, 8]];

function checkWinnerInColumns(board) {

  const isWinner = [];
  let winningColumn;

  for (let i = 0; i < board.length; i++) {
    let columnArray = [];
    for (let j = 0; j < board.length; j++) {
      columnArray.push(board[j][i]);
      winningColumn = i;
    }
    if (hasAllSameSymbol(columnArray)) {
      [isWinner[0], isWinner[1]] = [winningColumn, columnArray[0]]
    }
  }

  return isWinner;

}

function hasWinnerInRows(board) {

  const isWinner = [];

  board.forEach( (row) => {
    if (hasAllSameSymbol(row)) {
      [isWinner[0], isWinner[1]] = [board.indexOf(row), row[0]]
    }
  })

  return isWinner;

}


function hasAllSameSymbol(arr) {
  return arr.every((sym) => {return sym === arr[0]});
}

// Convert win conditions into arrays which we can call hasAllSameSymbol on.