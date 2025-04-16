function solution(absolutes, signs) {
//     const length = absolutes.length;
//     let answer = 0;
    
//     for (let i = 0; i < length; i++) {
//         signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
//     }
    
//     return answer;
    
    return absolutes.reduce((acc, cur, idx) => (signs[idx] ? (acc + cur) : (acc - cur)), 0);
}