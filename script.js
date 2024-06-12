const gameboard = (function Gameboard() {
  
  // Private
  const gameboard = [];
  const dimension = 3;

  // Add rows as arrays to gameboard
  for (let i = 0; i < dimension; i++) {
    const arr = new Array(dimension);
    gameboard.push(arr);
  }

  // Public
  // Return function that shows the gameboard
  // Gameboard can't be modified
  return {getGameboard: function() {
    console.log(gameboard)
  }}

})()

function Controller() {

  playerChoice = 4;
  symbol = 'X';

  if (playerChoice >= 0 && playerChoice < 3) {
    board[0][playerChoice] = symbol;
  } else if (playerChoice >= 3 && playerChoice < 5) {
    board[1][playerChoice - 3] = symbol;
  } else if (playerChoice >= 6 && playerChoice < 8) {
    board[2][playerChoice - 6] = symbol;
  }

  
  // if player makes move, use correct value

  //get players

  //random who goes first

  //switch turns

  //must return position selected by player

  //player can choose 1 - 9 based on current gameboard


  return board;

}

function Player(player1, player2) {

  const players = [
    {
      name: player1,
      symbol: 'X'
    },

    {
      name: player2,
      symbol: 'O'
    }
  ]

  const getPlayers = () => players;
  return { getPlayers }

}

//controller function grabs gameboard