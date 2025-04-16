function solution(num) {
    count = 0;
    
    while(num !== 1 && count <= 500) {
        (num % 2) ? (num = num * 3 + 1) : (num = parseInt(num / 2));
        
        count += 1;
    }
    
    return num === 1 ? count : -1;
}