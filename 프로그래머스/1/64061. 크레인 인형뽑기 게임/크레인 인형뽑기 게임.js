function solution(board, moves) {
  const basket = [];
  let answer = 0;

  for (const move of moves) {
    answer += moveToBasket(board, basket, move - 1);
  }

  return answer;
}

function checkIfBlow(basket) {
  if (basket.length >= 2 && basket.at(-1) === basket.at(-2)) {
    basket.pop();
    basket.pop();
    return 2;
  }
  return 0;
}

function moveToBasket(board, basket, move) {
  for (let row = 0; row < board.length; row++) {
    if (board[row][move]) {
      basket.push(board[row][move]);
      board[row][move] = 0;
      return checkIfBlow(basket);
    }
  }
    return 0;
}

// board[row][col] -> row: 1->size, col: move