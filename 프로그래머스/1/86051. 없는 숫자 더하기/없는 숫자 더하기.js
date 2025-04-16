function solution(numbers) {
    // return numbers.reduce((acc, cur) => (acc - cur), 45);
    
    answer = 0;
    
    for (let i = 0; i < 10; i++) {
        if (!numbers.includes(i)) {
            answer += i
        }
    }
    
    return answer;
}