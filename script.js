const grid = (function Grid() {

  const gridArr = [[],[],[]];

  // Symbol needs to be correct player's symbol
  // gridArr needs to be player's choice
  function addSymbol(row, col, symbol){
    return gridArr[row][col] = symbol;
  }

  function displayGrid() {
    return gridArr;
  }

  return { addSymbol, displayGrid }

})()

function Controller() {

  let turn;
  let position;

  function playerSelection(player, position) {
    if (position >= 0 && position < 3) {
      grid.addSymbol(0, position, player.symbol)
    } else if (position >= 3 && position < 5){
      grid.addSymbol(1, position - 3, player.symbol)
    } else if (position >= 5 && position < 8) {
      grid.addSymbol(2, position - 6, player.symbol)
    }
  }

}

function Player(player1, player2) {

  function choosePosition(choice) {
    this.position = choice;
    this.positionHistory.push(choice);
  };

  const players = 
  [
    {
    name: player1,
    symbol: 'X',
    choosePosition,
    positionHistory: []
    },
  
    {
    name: player2,
    symbol: 'O',
    choosePosition,
    positionHistory: []
    }
  ]

  return players;
}
