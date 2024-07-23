function Players(makeMove) {
  const user = {
    name: "Player",
    symbol: "X",
    playerMove: async (row, col) => await makeMove(row, col, "X")
  }
  
  const computer = {
    name: "Computer",
    symbol: "O",
    playerMove: async (row, col) => await makeMove(row, col, "O")
  }

  return {user, computer}
}

function GameBoard() {
  let gameBoard = Array.from({length: 3}, () => Array(3).fill(''))

  function getGameBoard() {
    return gameBoard
  }

  function changeSymbol(row, col, symbol) {
    gameBoard[row][col] = symbol
    return new Promise(resolve => {
      setTimeout(() => {
        document.querySelector(`#cell-${row}-${col}`).textContent = symbol
        resolve()
      }, 10)
    })
  }

  function createNewBoard() {
    gameBoard = Array.from({length: 3}, () => Array(3).fill(''))
    document.querySelectorAll('.cell').forEach(cell => {
      cell.textContent = ''
    })
  }

  return {
    createNewBoard, getGameBoard, changeSymbol
  }
}

function GameController() {
  let gameBoard = GameBoard()
  let board = gameBoard.getGameBoard()
  const players = Players(gameBoard.changeSymbol)
    
  async function computerMove() {
    const openCells = []

    for (let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        if (board[i][j] !== 'X' && board[i][j] !== 'O') {
          openCells.push([i, j])
        }
      }
    }

    if (openCells.length === 0) {
      return null
    }

    function getRandomInt() {
      const min = 0
      const max = Math.ceil(openCells.length)
      return Math.floor(Math.random() * (max - min)) + min
    }
    const computerChoice = openCells[getRandomInt()]

    await players.computer.playerMove(computerChoice[0], computerChoice[1])
    board = gameBoard.getGameBoard()
  }

  async function playerMove(row, column) {
    const openCells = []
    const userChoice = [row, column]
    
    for (let i = 0; i < board.length; i++) {
      for(let j = 0; j < board.length; j++) {
        if (board[i][j] !== 'X' && board[i][j] !== 'O') {
          openCells.push([i, j])
        }
      }
    }

    const choiceAvail = openCells.some(
      arr => (arr.every((val, index) => val === userChoice[index]))
    )

    if (choiceAvail === true) {
      await players.user.playerMove(row, column)
      board = gameBoard.getGameBoard()
      await computerMove()
    } else {
      alert("Cell not available, go again!")
      return
    }

    await checkGameStatus()
  }

  async function checkWinInRows() {
    const isWinner = []
    
    board.forEach((row) => {
      if (hasAllSameSymbol(row)) {
        [isWinner[0], isWinner[1]] = [board.indexOf(row), row[0]]
      }
    })
    
    if (isWinner.length > 0 && isWinner[1] === 'X') {
      await alertUserWinLoss(true)
    } else if (isWinner.length > 0 && isWinner[1] === 'O') {
      await alertUserWinLoss(false)
    }
  }

  async function checkWinInColumns() {
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
      await alertUserWinLoss(true)
    } else if (isWinner.length > 0 && isWinner[1] === 'O') {
      await alertUserWinLoss(false)
    }
  }

  async function checkWinInDiagonals() {
    const isWinner = []
    const diagonal = [[], []]

    for (let i = 0; i < board.length; i++) {
      diagonal[0].push(board[i][i])
      diagonal[1].push(board[i][board.length - 1 - i])
    }
    
    diagonal.forEach((diag) => {
      if (hasAllSameSymbol(diag)) {
        [isWinner[0], isWinner[1]] = [diagonal.indexOf(diag), diag[0]]
      }
    })

    if (isWinner.length > 0 && isWinner[1] === 'X') {
      await alertUserWinLoss(true)
    } else if (isWinner.length > 0 && isWinner[1] === 'O') {
      await alertUserWinLoss(false)
    }
  }

  async function checkGameOver() {
    const flatGameBoard = board.flat()
    const boardFilled = flatGameBoard.every(val => val === 'X' || val === 'O')
    if (boardFilled) {
      await new Promise(resolve => setTimeout(() => {
        alert("Tie!")
        resolve()
      }, 10))
    }
  }

  function hasAllSameSymbol(arr) {
    if (arr[0] === 'X' || arr[0] === 'O'){
      return arr.every(sym => sym === arr[0])
    }
  }

  function alertUserWinLoss(bool) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(bool ? "You Win!" : "You Lose!")
        resolve()
      }, 10)
    })
  }

  async function checkGameStatus() {
    await checkWinInRows()
    await checkWinInColumns()
    await checkWinInDiagonals()
    await checkGameOver()
  }

  return {
    get board() { return gameBoard.getGameBoard() }, 
    newGame: () => {
      gameBoard.createNewBoard()
      board = gameBoard.getGameBoard()
    },
    playerMove,
  }
}

const game = GameController()
const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
  cell.addEventListener('click', async (e) => {
    const [row, col] = e.target.id.split('-').slice(1).map(Number)
    await game.playerMove(row, col)
  })
})