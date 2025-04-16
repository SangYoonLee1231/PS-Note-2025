function solution(x, n) {
    const array = [];
    let tempNum = 0;
    
    for (let i = 0; i < n; i++) {
        tempNum += x;
        array.push(tempNum);
    }
    
    return array
}