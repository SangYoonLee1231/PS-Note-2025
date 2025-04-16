// function solution(seoul) {
//     let KimIdx = -1;
    
//     seoul.forEach((elem, idx) => {
//         if (elem === "Kim") {
//             KimIdx = idx;
//         }
//     })
    
//     return `김서방은 ${KimIdx}에 있다`;
// }

function solution(seoul) {
    let KimIdx = seoul.findIndex((elem) => elem == "Kim");
    
    return `김서방은 ${KimIdx}에 있다`;
}