function solution(arr) {
    const sumOfArr = arr.reduce((cur, sum) => cur + sum, 0)
    
    return sumOfArr / arr.length
}