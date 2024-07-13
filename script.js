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
	const gameBoard = GameBoard()
	const board = gameBoard.getGameBoard()

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

    checkGameStatus()

  }

  function playerMove(row, column) {

    const openCells = []
    const userChoice = [row, column]
    
    for (let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        if (board[i][j] !== 'X' && board[i][j] !== 'O') {
          openCells.push([i, j])
        }
      }
    }

    // boolean for if userChoice is in openCells
    const choiceAvail = openCells.some(
      arr => (arr.every((val, index) => val === userChoice[index]))
    )

    if (choiceAvail === true) {
      players.user.playerMove(row, column)
    } else {
      console.log("Cell not available, go again!")
    }

    checkGameStatus()

  }

	function checkWinInRows() {
		
		const isWinner = []
		
		board.forEach( (row) => {
			if (hasAllSameSymbol(row)) {
				[isWinner[0], isWinner[1]] = [board.indexOf(row), row[0]]
			}
		})
		
    if (isWinner.length > 0 && isWinner[1] === 'X') {
      console.log("You Win!")
    } else if (isWinner.length > 0 && isWinner[1] === 'O') {
      console.log("You Lose.")
    }

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
			
      if (hasAllSameSymbol(column)) {
				[isWinner[0], isWinner[1]] = [winningColumn, column[0]]
			}
		}
		
    if (isWinner.length > 0 && isWinner[1] === 'X') {
      console.log("You Win!")
    } else if (isWinner.length > 0 && isWinner[1] === 'O') {
      console.log("You Lose.")
    }
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

    if (isWinner.length > 0 && isWinner[1] === 'X') {
      console.log("You Win!")
    } else if (isWinner.length > 0 && isWinner[1] === 'O') {
      console.log("You Lose.")
    }
	}

	function checkGameOver() {

		const symbolCheck = checkSymbolInCells()

		if (
			symbolCheck.flat(Infinity).length === board.flat(Infinity).length &&
			symbolCheck.flat(Infinity).every(cell => cell === true)
		){
			console.log("Game Over")
		}

	}

	function hasAllSameSymbol(arr) {
    if (arr[0] === 'X' || arr[0] === 'O'){
		  return arr.every(sym => sym === arr[0])
    }
	}

	function checkSymbolInCells() {
		board.map( (row) => {
			return row.map( (cell) => {
				return cell === "X" || cell === "O"
			})
		})
	}

	function checkGameStatus() {
    checkWinInRows()
    checkWinInColumns()
    checkWinInDiagonals()
	}

	return {
		getGameBoard: board, 
    newGame: gameBoard.createNewBoard,
    computerMove,
    playerMove,
	}

}