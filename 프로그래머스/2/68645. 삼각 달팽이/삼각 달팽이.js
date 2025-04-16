function solution(n) {
  let grid = new Array(n).fill(0);
  let answer = [];

  for (let i = 0; i < n; i++) {
    grid[i] = new Array(i + 1).fill(0);
  }

  grid = fill_grid(grid, n);

  for (let i in grid) {
    for (let j in grid[i]) {
      answer.push(grid[i][j]);
    }
  }

  return answer;
}

function fill_grid(grid, n) {
  let [x, y] = [0, 0];
  let [dx, dy] = [
    [1, 0, -1],
    [0, 1, -1],
  ];
  let total_num = (n * (n + 1)) / 2;
  let direction = 0;

  for (let i = 1; i <= total_num; i++) {
    grid[x][y] = i;

    let [nx, ny] = [x + dx[direction], y + dy[direction]];
    if (!in_range(nx, ny, n) || grid[nx][ny] !== 0) {
      direction = (direction + 1) % 3;
      [x, y] = [x + dx[direction], y + dy[direction]];
    } else {
      [x, y] = [nx, ny];
    }
  }

  return grid;
}

function in_range(x, y, n) {
  return (x < n) && (y <= x) ? true : false;
}
