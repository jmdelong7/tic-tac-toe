let game;

(function Gameboard() {
  
  // Private
  const gameboard = [];
  const dimension = 3;

  // Add rows as arrays to gameboard
  for (let i = 0; i < dimension; i++) {
    const arr = new Array(dimension);
    gameboard.push(arr);
  }

  // Public
  // Set game to return gameboard when invoked
  // Gameboard can't be modified

  game = function() {
    return gameboard;
  }

})()

function Controller() {

  // Make player selection method on player object
  
  const players = players.getPlayers();

  function firstTurn() {
    return Math.random() >= 0.5 ? players[1]: players[0];
  }

  // Make turn switcher
  let counter = 0;
  if (counter === 0) {
    
  }

  players[0].symbol

  playerChoice = 4;
  symbol = 'X';
  let boardPosition;

  // This should return position to push symbol
  if (playerChoice >= 0 && playerChoice < 3) {
    boardPosition = board[0][playerChoice];
  } else if (playerChoice >= 3 && playerChoice < 5) {
    boardPosition = board[1][playerChoice - 3];
  } else if (playerChoice >= 6 && playerChoice < 8) {
    boardPosition = board[2][playerChoice - 6]
  }

  function displaySymbol(boardPosition) {
    boardPosition = player.symbol;
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