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

console.log(createBoard()[0]);
