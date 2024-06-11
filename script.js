function Gameboard() {
  
  const gameboard = [];
  const dimension = 3;

  for (let i = 0; i < (dimension * dimension); i++) {
    gameboard.push([])
  }

  const getGameboard = () => gameboard;

  return {getGameboard}

}

function Controller() {

  board = Gameboard()

  return board;

}

//controller function grabs gameboard