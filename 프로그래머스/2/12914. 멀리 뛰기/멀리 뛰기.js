function solution(n) {
    dp = Array(n + 1).fill(0);
    dp[1] = 1; dp[2] = 2;
    
    function func(currN) {
        if (dp[currN] !== 0) {
            return dp[currN];
        }
    
        return dp[currN] = (func(currN - 1) + func(currN - 2)) % 1234567;
    }
    
    return func(n);
}