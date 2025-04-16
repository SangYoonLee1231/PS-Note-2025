function solution(left, right) {
    answer = 0
    
    for (let i = left; i <= right; i++) {
        countDivisors(i) % 2 ? (answer -= i) : (answer += i);
    }
    
    return answer;
}

function countDivisors(num) {
    count = 0
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count += 1
        }
    }
    
    return count
}