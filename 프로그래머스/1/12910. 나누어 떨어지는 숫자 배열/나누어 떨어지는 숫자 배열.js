function solution(arr, divisor) {
    const filtered = arr.filter((elem) => (elem % divisor == 0))
    
    // if (filtered.length == 0) {
    //     return [-1]
    // } else {
    //     return filtered.sort((a, b) => a - b)
    // }
    
    return (filtered.length === 0) ? [-1] : filtered.sort((a, b) => a - b);
}