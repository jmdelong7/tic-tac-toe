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

let board = [["X", "O", "X"],["O", "O", "O"],["O", "X", "X"]]
// Use .fill to fill arrays with blank values
// later: function to check for both symbols

const columnWinCondition = [[0, 3, 6][1, 4, 7], [2, 5, 8]]

function checkWinInRows(board) {
  
  const isWinner = []
  
  board.forEach( (row) => {
    if (hasAllSameSymbol(row)) {
      [isWinner[0], isWinner[1]] = [board.indexOf(row), row[0]]
    }
  })
  
  return isWinner
}

function checkWinInColumns(board) {
  
  const isWinner = []
  let winningColumn
  
  for (let i = 0; i < board.length; i++) {
    let column = []
    for (let j = 0; j < board.length; j++) {
      column.push(board[j][i])
      winningColumn = i
    }
    if (hasAllSameSymbol(columnArray)) {
      [isWinner[0], isWinner[1]] = [winningColumn, column[0]]
    }
  }
  
  return isWinner
}

function checkWinInDiagonals(board) {

  const isWinner = []
  const diagonal = [[], []]

  for (let i = 0; i < board.length; i++) {
    diagonal[0].push(board[i][i])
    diagonal[1].push(board[i][board.length - 1 - i])
  }
  
  diagonal.forEach( (diag) => {
    if (hasAllSameSymbol(diag)) {
      [isWinner[0], isWinner[1]] = [diagonal.indexOf(diag), diag[0]]
    }
  })

  return isWinner
}

function checkGameOver(board) {

  const checkSymbolInCells = board.map( (row) => {
    return row.map( (cell) => {
      return cell === "X" || cell === "O"
    })
  })

  if (
    checkSymbolInCells.flat().length === board.flat().length &&
    checkSymbolInCells.flat().every(cell => cell === true)
  ){
    console.log("Game Over")
  }

}

function hasAllSameSymbol(arr) {
  return arr.every(sym => sym === arr[0])
}