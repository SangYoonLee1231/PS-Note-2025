function solution(arr) {
//     [min_num, min_idx] = [arr[0], 0];
        
//     arr.forEach((elem, idx) => {
//         if (elem < min_num) {
//             min_num = elem;
//             min_idx = idx;
//         }
//     })
    
//     arr.splice(min_idx, 1);
    
//     return arr.length ? arr : [-1];
    
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
    return arr.length ? arr : [-1];
}