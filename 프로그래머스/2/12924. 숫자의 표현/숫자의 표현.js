// 연속된 숫자의 개수가
// 1개: n = k, 2개: n = 2k + 1
// 3개: n = 3k, 4개: n = 4k + 2
// 5개: n = 5k, 6개: n = 6k + 3
// ...
//
// 연속된 숫자의 개수를 i라 할 때
// i가 짝수: n이 i로 나누어 떨어지면 된다
// i가 홀수: n을 i로 나누었을 때 나머지가 i / 2면 된다.
// 다만 k >= i / 2인 경우만 성립
// (k는 연속된 숫자의 정중앙에 위치한 수)

function solution(n) {
    let count = 0;
    
    for (let i = 1; (n / i) >= (i / 2); i++) {
        if (i % 2) { // 홀수
            if (n % i == 0) count++;
        } else { // 짝수
            if (n % i == (i / 2)) count ++;
        }
    }
    
    return count;
}