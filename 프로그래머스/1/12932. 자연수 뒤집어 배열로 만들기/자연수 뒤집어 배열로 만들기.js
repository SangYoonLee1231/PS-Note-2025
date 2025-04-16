function solution(n) {
    const arr = [...(n + "")];
    const len = arr.length;
    const answer = []
    
    for (let i = len - 1; i >= 0; i--) {
        answer.push(Number(arr[i]));
    }
    
    return answer;
}