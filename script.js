// - Board
//   - Array of 3 arrays.
//   - Add symbol to board.
//   - Clear board if winner or game over.
//   - Have it private so it can't be accessed by players.


// Use .fill to fill arrays with blank values
let board = [["X", "O", "X"],["O", "O", "O"],["O", "X", "X"]]

function GameBoard() {

  let gameBoard

  function getGameBoard() {
    return gameBoard
  }

  function pushSymbol(row, col, symbol) {
    board[row][col] = symbol
  }

  function newBoard(dimension) {

    const newBoard = []

    for (let i = 0; i < dimension; i++) {
      newBoard.push(Array.from({length: dimension}, () => ''))
    }

    return newBoard
  }

  return {
    newBoard, getGameBoard, pushSymbol, newBoard
  }

}

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
  } else {
    console.log("Continue Game")
  }

}

function hasAllSameSymbol(arr) {
  return arr.every(sym => sym === arr[0])
}