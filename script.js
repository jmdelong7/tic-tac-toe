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

const playersModule = (function Players() {

  function playerChoice(choice, arr) {
    if (choice >= 0 && choice < 3) {
      arr[0][choice] = choice;
    } else if (choice >= 3 && choice <= 5){
      arr[1][choice - 3] = choice;
    } else if (choice >= 6 && choice <= 8){
      arr[2][choice - 6] = choice;
    }
  }

  function checkUndefined(i, symbol) {
    if (i !== undefined) {
      return symbol;
    }
  }

  function numToSymbol(arr, symbol) {
    for (let i = 0; i < 3; i++) {
      arr[i].forEach( e => {
        checkUndefined(e, symbol)
      })
    }
  }

  function choosePosition(choice) {
    this.position = choice;
    playerChoice(choice, this.positionHistory)
    numToSymbol(this.positionHistory, this.symbol)
    return choice;
  };

  const players = 
  [
    {
    name: "John",
    symbol: 'X',
    choosePosition,
    positionHistory: [[], [], []]
    },
  
    {
    name: "Sue",
    symbol: 'O',
    choosePosition,
    positionHistory: [[], [], []]
    }
  ]

  function getPlayers() {
    return { players, playerChoice }
  }

  return getPlayers;
})()


function Controller() {

  const players = playersModule();

  function determineTurn() {
    
    let turn;

    if (players[0].positionHistory > 5) {
      console.log('end game')
    } else if (players[0].positionHistory.length === 0) {
      turn = players[0];
    } else if (players[0].positionHistory.length < players[1].positionHistory.length){
      turn = players[0];
    } else {
      turn = players[1]
    }

    return turn;

  }

  let turn = determineTurn();
  let inputChoice = prompt(`${turn.name} Choose Position.`);
  let position = turn.choosePosition(inputChoice)

  function playerSelection(player, position) {
    if (position >= 0 && position < 3) {
      grid.addSymbol(0, position, player.symbol)
    } else if (position >= 3 && position <= 5){
      grid.addSymbol(1, position - 3, player.symbol)
    } else if (position >= 6 && position <= 8) {
      grid.addSymbol(2, position - 6, player.symbol)
    }
  }

  function determineWinner() {
    playersPositionHistory = [players[0].positionHistory, players[1].positionHistory];
    console.log(playersPositionHistory);
  }

  playerSelection(players[0], position);

  determineWinner();

}

