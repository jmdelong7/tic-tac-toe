function Gameboard() {
  
  const gameboard = [];
  const dimension = 3;

  // add rows as arrays to gameboard
  for (let i = 0; i < dimension; i++) {
    const arr = new Array(dimension);
    gameboard.push(arr);
  }

  playerChoice = 4;
  symbol = 'X';

  if (playerChoice >= 0 && playerChoice < 3) {
    gameboard[0][playerChoice] = symbol;
  } else if (playerChoice >= 3 && playerChoice < 5) {
    gameboard[1][playerChoice - 3] = symbol;
  } else if (playerChoice >= 6 && playerChoice < 8) {
    gameboard[2][playerChoice - 6] = symbol;
  }


  function updateGameboard() {
    
  }

  // add x or o to gameboard based on position

  const getGameboard = () => gameboard;

  return { getGameboard }

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