function solution(arr) {
    let answer = arr[0];
    
    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b; b = temp; 
        }
        
        return a;
    }
    
    function lcm(a, b) {
        return Number(a * b / gcd(a, b));
    }
    
    // for(let i = 0; i < arr.length - 1; i++) {
    //     answer = lcm(answer, arr[i + 1]);
    // }
    
    answer = arr.reduce((sum, curr) => (lcm(sum, curr)), arr[0]);
    
    return answer;
}