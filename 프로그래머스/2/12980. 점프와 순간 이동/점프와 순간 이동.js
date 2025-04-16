function solution(n)
{
    let count = 1;
    
    while (n != 1) {
        if (n % 2) {
            n -= 1
            count++;
        } else {
            n /= 2
        }
    }
    
    return count;
}