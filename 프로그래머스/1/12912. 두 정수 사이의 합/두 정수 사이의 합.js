function solution(a, b) {
    let sumOfNums = 0;
    let lower = a < b ? a : b;
    let higher = a < b ? b : a;
    
    for (let i = lower; i <= higher; i++) {
      sumOfNums += i;
    }
    
    return sumOfNums;
}