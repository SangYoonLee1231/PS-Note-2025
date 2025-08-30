// function solution(clothes) {
//     // 1. 주어진 clothes 배열을 분류된 객체 형태로 바꾼다.
//     // 2. dfs를 통해 [0, 1, 0, 0, 1] 이런 형태의 배열을 만든다.
//     //    각 index는 옷의 종류에 대응하며, 1은 입는다. 0은 안입는다를 의미
//     // 3. 각 케이스마다 경우의 수를 계산한다.
//     //    1에 해당하는 옷 종류의 개수들을 전부 곱해준다.
    
//     // 1 - 객체 형태로 바꾸기
//     const clothesObj = clothes.reduce((acc, cur) => {
//         if (acc[cur[1]] === undefined) {
//             acc[cur[1]] = [];
//         }
//         acc[cur[1]].push(cur[0]);
//         return acc;
//     }, {})
    
//     // 2 - dfs
//     const binArr = [];
//     let answer = 0;
//     const keys = Object.keys(clothesObj);
    
//     function countCase() {
//         answer += binArr.reduce((acc, cur, idx) => {
//             if (cur === 1) {
//                 acc *= clothesObj[keys[idx]].length;
//             }
//             return acc;
//         }, 1);
//     }
    
//     function dfs(idx) {
//         // 초기 조건
//         if (idx === keys.length) {
//             // 경우의 수 계산
//             if (binArr.every(elem => elem === 0)) return;
//             countCase();
//             return;
//         }
        
//         for (let i = 0; i <= 1; i++) {
//             binArr.push(i);
//             dfs(idx + 1);
//             binArr.pop();
//         }
//     }
    
//     dfs(0);
    
//     return answer;
// }

function solution(clothes) {
    // 1. 각 옷 종류별 개수를 나타내는 객체 만들기
    // 2. (각 옷 종류별 개수 + 1) 값을 모두 곱한 후 1 빼기
    
    const clothesObj = clothes.reduce((acc, [_, type]) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {})
    
    return Object.values(clothesObj).reduce((acc, cur) => 
        acc *= (cur + 1)
    , 1) - 1;
}