function Gameboard() {
  
  const gameboard = [];
  const dimension = 3;

  for (let i = 0; i < dimension; i++) {
    gameboard.push([])
    
    for (let j = 0; j < dimension; j++) {
      gameboard[i].push([]);
    }

  }



  // get 0 - dimension = index x index


  const getGameboard = () => gameboard;

  return {getGameboard}

}

function Controller() {

  board = Gameboard()

  return board;

}

//controller function grabs gameboard