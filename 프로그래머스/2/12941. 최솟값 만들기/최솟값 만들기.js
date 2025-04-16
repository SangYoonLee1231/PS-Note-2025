function solution(a, b) {
    a.sort((a, b) => b - a);
    b.sort((a, b) => a - b);
    
    return a.reduce((acc, a_elem, idx) => acc += a_elem * b[idx], 0);;
}