function makeBinary(n, num) {
  const answer = Array(n).fill(0);
  let idx = n - 1;

  while (num >= 1) {
    answer[idx] = num % 2;
    num = Math.floor(num / 2);
    idx -= 1;
  }

  return answer.join("");
}

console.log(makeBinary(5, 9)); // "01001"


function solution(n, arr1, arr2) {
  const temp = Array.from({ length: n }, () => Array(n).fill(0));
  const answer = Array(n).fill("");

  arr1.forEach((elem, idx) => {
    const binaryNum = makeBinary(n, elem);
    for (let i = 0; i < n; i++) {
      temp[idx][i] = parseInt(binaryNum[i], 10);
    }
  });

  arr2.forEach((elem, idx) => {
    const binaryNum = makeBinary(n, elem);
    for (let i = 0; i < n; i++) {
      if (parseInt(binaryNum[i], 10) === 1) {
        temp[idx][i] = 1;
      }
    }
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer[i] += temp[i][j] === 1 ? "#" : " ";
    }
  }

  return answer;
}