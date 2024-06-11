function Gameboard() {
  
  const gameboard = [];
  const dimension = 3;

  for (let i = 0; i < dimension; i++) {
    gameboard.push([]);
    
    for (let j = 0; j < dimension; j++) {
      gameboard[i].push([]);
    }

  }

  const getGameboard = () => gameboard;

  return {getGameboard}

}

function Controller() {
  
  //get players

  //random who goes first

  //switch turns

  board = Gameboard()

  return board;

}

function Player(player1, player2) {

  players = [
    {
      player1,
      marker: 'X'
    },

    {
      player2,
      marker: 'O'
    }
  ]

  // when player makes a move append gameboard with player marker

}

//controller function grabs gameboard