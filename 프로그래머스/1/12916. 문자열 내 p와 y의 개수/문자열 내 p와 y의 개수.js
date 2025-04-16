// function solution(s){
//     s = s.toLowerCase().split('');
    
//     p_count = 0
//     y_count = 0
    
//     for (const elem of s) {
//         // console.log(elem);
//         if (elem == 'p') {
//             p_count += 1;
//         } else if (elem == 'y') {
//             y_count += 1;
//         }
//     }
    
//     return (p_count === y_count) ? true : false;
// }

function solution(s) {
    return [...s.toLowerCase()].reduce((acc, cur) => {
        if (cur == 'p') { acc += 1 }
        else if (cur == 'y') { acc -= 1 }
        console.log(acc);
        return acc
    }, 0) ? false : true;
}