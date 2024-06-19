// - Players
//   - Place "X" in board cell and computer pick random open cell and place "O"
//   - Utilize GameBoard() to add symbol at player1 location specified.
//   - If player1 add symbol, computer add symbol
//   - then run win conditions


let testBoard= [["X", "O", "X"],["O", "O", "O"],["O", "X", "X"]]

function Players(makeMove) {

	const user = {
		name: "Player",
		symbol: "X",
		playerMove	
	}
	
	const computer = {
		name: "Computer",
		symbol: "O",
		playerMove
	}

	function playerMove(row, col) {
		makeMove(row, col, this.symbol)
  }

	return {user, computer}
}

function GameBoard() {

  let gameBoard = []

  function getGameBoard() {
    return gameBoard
  }

  function changeSymbol(row, col, symbol) {
    gameBoard[row][col] = symbol
  }

  function createNewBoard(dimension) {

    for (let i = 0; i < dimension; i++) {
      [gameBoard[i]] = [Array.from({length: dimension}, () => '')]
    }

  }

  return {
    createNewBoard, getGameBoard, changeSymbol
  }

}

function GameController() {
	let gameBoard = GameBoard()
	let board = gameBoard.getGameBoard()

	const players = Players(gameBoard.changeSymbol)

	function computerMove() {
    
    const openCells = []

    for (let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        if (board[i][j] !== 'X' && board[i][j] !== 'O') {
          openCells.push([i, j])
        }
      }
    }

    function getRandomInt() {
      const min = 0
      const max = Math.ceil(openCells.length)
      return Math.floor(Math.random() * (max - min)) + min
    }
    const computerChoice = openCells[getRandomInt()]

    players.computer.playerMove(computerChoice[0], computerChoice[1])

  }

	function nextTurn() {
		
	}

	function checkWinInRows() {
		
		const isWinner = []
		
		board.forEach( (row) => {
			if (hasAllSameSymbol(row)) {
				[isWinner[0], isWinner[1]] = [board.indexOf(row), row[0]]
			}
		})
		
		return isWinner
	}

	function checkWinInColumns() {
		
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

	function checkWinInDiagonals() {

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

	function checkGameOver() {

		const symbolCheck = checkSymbolInCells()

		if (
			symbolCheck.flat().length === board.flat().length &&
			symbolCheck.flat().every(cell => cell === true)
		){
			console.log("Game Over")
		} else {
			console.log("Continue Game")
		}

	}

	function hasAllSameSymbol(arr) {
		return arr.every(sym => sym === arr[0])
	}

	function checkSymbolInCells() {
		board.map( (row) => {
			return row.map( (cell) => {
				return cell === "X" || cell === "O"
			})
		})
	}

	// get gameboard open spots
	// loop through gameboard
	// find open cells
	// return open cells
	function getOpenBoardCells() {

		board.forEach()

		for (let i = 0; i < board.length * 2; i++) {

		}
	}


	function checkGameStatus() {
		checkWinInColumns()
		checkWinInRows()
		checkWinInDiagonals()
		checkGameOver()
	}

	return {
		getGameBoard: board
	}

}