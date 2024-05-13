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

function knightMoves(start, end) {
  let board = createBoard();
  let startIndex = findIndex(board, start);
  let endIndex = findIndex(board, end);
  let bfsInfo = buildInfoArr(board, startIndex);
  let adjList = buildAdjList(board);
  let queue = [startIndex];
  let u;

  while (u != endIndex) {
    u = queue.shift();

    for (let i = 0; i < adjList[u].length; i++) {
      let vIndex = adjList[u][i];

      if (vIndex === endIndex) {
        bfsInfo[vIndex].prodecessor = u;
        let path = new Array();
        constructPath(board, bfsInfo, bfsInfo[vIndex], vIndex, path);
        result = path.reverse().splice(0, 0, start);
        console.log(
          `You made it in ${path.length - 1} moves! Here's your path:`
        );
        return path;
      } else {
        if (bfsInfo[vIndex].distance == null) {
          bfsInfo[vIndex].distance = bfsInfo[u].distance + 1;
          bfsInfo[vIndex].prodecessor = u;
          queue.push(vIndex);
        }
      }
    }
  }
}
