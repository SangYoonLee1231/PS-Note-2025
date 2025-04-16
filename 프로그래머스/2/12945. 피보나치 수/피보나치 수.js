// function solution(n) {
//     const dp = Array(n + 1).fill(-1);
    
//     const fibo = (currN) => {
//         if (currN <= 1) {
//             return currN
//         }
//         if (dp[currN] !== -1) {
//             return dp[currN];
//         }
        
//         return dp[currN] = (fibo(currN - 1) % 1234567) + (fibo(currN - 2) % 1234567);
//     }
    
//     return fibo(n) % 1234567;
// }

// 재귀 횟수 제한으로 인해 반복문으로 다시 풀기
function solution(n) {
    const dp = Array(n + 1).fill(-1);
    dp[0] = 0; dp[1] = 1
    
    for (let i = 2; i < n + 1; i++) {
        dp[i] = (dp[i - 1] % 1234567) + (dp[i - 2] % 1234567);
    }
    
    return dp[n] % 1234567;
}