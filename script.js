function Gameboard() {
  
  const gameboard = [];
  const dimension = 3;

  // add rows as arrays to gameboard
  for (let i = 0; i < dimension; i++) {
    const arr = new Array(dimension);
    gameboard.push(arr);
  }

  let test = 'X';
  playerChoice = 1;

  if (playerChoice > 0 < 3) {
    gameboard[0][playerChoice] = test;
  }

  // add x or o to gameboard based on position

  const getGameboard = () => gameboard;

  return {getGameboard}

}

function Controller() {
  
  // if player makes move, use correct value

  //get players

  //random who goes first

  //switch turns

  //must return position selected by player

  //player can choose 1 - 9 based on current gameboard

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