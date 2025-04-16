function solution(s) {
    const arr = s.split(" ").map((elem) => parseInt(elem));
    
    return `${Math.min(...arr)} ${Math.max(...arr)}`;
}