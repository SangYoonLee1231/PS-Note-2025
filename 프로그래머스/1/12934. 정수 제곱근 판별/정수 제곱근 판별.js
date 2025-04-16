// function solution(n) {
//     for (let x = 0; x*x <= n; x++) {
//         if (x * x === n)
//             return (x + 1) ** 2;
//     }
    
//     return -1;
// }

function solution(n) {
    if (n % Math.sqrt(n) == 0) {
        return Math.pow((Math.sqrt(n) + 1), 2)
    } else {
        return -1;
    }
}