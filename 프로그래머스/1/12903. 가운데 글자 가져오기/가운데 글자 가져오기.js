function solution(s) {
    // if (s.length % 2) {
    //     return s.slice(parseInt(s.length / 2), parseInt(s.length / 2) + 1);
    // } else {
    //     return s.slice(parseInt(s.length / 2) - 1, parseInt(s.length / 2) + 1);
    // }
    
    const mid_idx = parseInt(s.length / 2);
    
    return s.slice(s.length % 2 ? mid_idx : mid_idx - 1, mid_idx + 1);
}