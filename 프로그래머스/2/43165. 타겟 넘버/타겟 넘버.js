function solution(numbers, target) {
    let answer = 0;
    const signArr = []; // 1: 더하기, 0: 빼기
    
    function calc() {
        return numbers.reduce((acc, cur, idx) => {
            if (signArr[idx] === 1) {
                acc += cur;
            } else {
                acc -= cur;
            }
        
            return acc;
        }, 0);
    }
    
    function dfs(num) {
        if (num === numbers.length) {
            if (calc() === target) {
                answer += 1;
            }
            return;
        }
        
        for (let i = 0; i <= 1; i++) {
            signArr.push(i);
            dfs(num + 1);
            signArr.pop();
        }
    }
    
    dfs(0);
    
    return answer;
}