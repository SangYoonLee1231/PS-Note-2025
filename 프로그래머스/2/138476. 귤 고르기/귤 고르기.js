function solution(k, tangerine) {
    const tangInfo = new Map();
    const tangSizeCount = [];
    
    tangerine.forEach((elem) => {
        tangInfo.set(elem, (tangInfo.get(elem) || 0) + 1);
    })
    
    const tangInfoArray = [...tangInfo];
    
    tangInfoArray.forEach((elem) => tangSizeCount.push(elem[1]));
    tangSizeCount.sort((a, b) => b - a);
    
    let answer = 0;
    while (k > 0) {
        k -= tangSizeCount[answer];
        answer += 1;
    }
    
    return answer;
}