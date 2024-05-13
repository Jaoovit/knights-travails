function createBoard() {
  let board = new Array();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push([i, j]);
    }
  }
  return board;
}

console.log(createBoard());
