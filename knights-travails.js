function createBoard() {
  let board = new Array();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push([i, j]);
    }
  }
  return board;
}

function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === target[0] && arr[i][1] === target[1]) {
      return i;
    }
  }
}

function buildInfoArr(boardArr, startIndex) {
  let newArr = new Array();
  for (let i = 0; i < boardArr.length; i++) {
    newArr[i] = {
      distance: null,
      prodecessor: null,
    };
  }
  newArr[startIndex].distance = 0;
  return newArr;
}

function buildAdjList(board) {
  let adjList = new Array();
  for (let i = 0; i < board.length; i++) {
    let neighbors = new Array();
    for (let j = 0; j < 8; j++) {
      let neighbor = findNextMove(j, board[i][0], board[i][1]);
      if (containsSpot(board, neighbor)) {
        neighbors.push(findIndex(board, neighbor));
      }
      adjList[i] = neighbors;
    }
    return adjList;
  }
}

function findNextMove(index, x, y) {
  if (index == 0) return [x + 2, y + 1];
  if (index == 1) return [x + 1, y + 2];
  if (index == 2) return [x - 1, y + 2];
  if (index == 3) return [x - 2, y + 1];
  if (index == 4) return [x - 2, y - 1];
  if (index == 5) return [x - 1, y - 2];
  if (index == 6) return [x + 1, y - 2];
  if (index == 7) return [x + 2, y - 1];
}

console.log(createBoard()[0]);
