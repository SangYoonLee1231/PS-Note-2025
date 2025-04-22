function solution(d, budget) {
    let acc = 0;
    let answer = 0;
    
    sortedD = d.sort((a, b) => a - b);
    
    sortedD.some((cur) => {
        if (acc + cur > budget) return true;
        acc += cur;
        answer += 1;
        return false;
    })
    
    return answer;
}