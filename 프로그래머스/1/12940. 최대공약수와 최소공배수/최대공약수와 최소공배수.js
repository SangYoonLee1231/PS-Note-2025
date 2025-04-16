function solution(n, m) {
    let gcd_num = gcd(n, m) ;
    let lcm_num = lcm(n, m, gcd_num);
    
    let answer = [gcd_num, lcm_num];    
    
    return answer;
}

function gcd(a, b) {
    while(b != 0) {
        [a, b] = [b, a % b];
    }
    return a
}

function lcm(a, b, gcd_num) {
    return Number(a * b / gcd_num)
}