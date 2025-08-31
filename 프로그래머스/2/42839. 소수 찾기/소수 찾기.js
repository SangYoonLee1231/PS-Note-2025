function solution(numbers) {
  const digits = numbers.split('');
  const used = Array(digits.length).fill(false);
  const made = new Set(); // 중복 숫자 제거

  // 길이 1..n의 모든 순열 생성
  function backtrack(path) {
    // 길이가 1 이상이면 숫자 하나 완성해서 Set에 추가
    if (path.length) {
      made.add(Number(path.join(''))); // '011' -> 11
    }
    if (path.length === digits.length) return;

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(digits[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);

  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;          // 짝수 배제
    const lim = Math.floor(Math.sqrt(n));
    for (let d = 3; d <= lim; d += 2) {     // 홀수만 검사
      if (n % d === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (const x of made) {
    if (isPrime(x)) count++;
  }
  return count;
}