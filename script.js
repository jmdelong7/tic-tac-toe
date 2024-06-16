// - Players
//   - Place "X" in board cell and computer pick random open cell and place "O"
//   - Utilize GameBoard() to add symbol at player1 location specified.
//   - If player1 add symbol, computer add symbol
//   - then run win conditions


let testBoard= [["X", "O", "X"],["O", "O", "O"],["O", "X", "X"]]

function Players() {

	const players = [
		{
			name: "Player 1",
			symbol: "X",
			addPlayerSymbol,
		},
		{
			name: "Computer",
			symbol: "O",
			addPlayerSymbol,
		}
	]

	return {players}
}

function GameBoard() {

  let gameBoard = []

  function getGameBoard() {
    return gameBoard
  }

  function pushSymbol(row, col, symbol) {
    gameBoard[row][col] = symbol
  }

	function getPushSymbol(row, col, symbol){
		pushSymbol(row, col, symbol)
	}

  function createNewBoard(dimension) {

    for (let i = 0; i < dimension; i++) {
      [gameBoard[i]] = [Array.from({length: dimension}, () => '')]
    }

  }

  return {
    createNewBoard, getGameBoard, getPushSymbol
  }

}

function GameController() {

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
}