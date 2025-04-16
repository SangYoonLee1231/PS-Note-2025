function solution(n) {
    const str = n.toString();
    const array = [];
    
    for (const e of str) {
        array.push(Number(e));
    }
    
    array.sort((a, b) => b - a);
    
    return Number(array.join(''))
}