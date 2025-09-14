function solution(n, k) {
    function isPrime(num) {
        if (num === 1) return false;
        if (num === 2) return true;
        
        for (let i = 2; i*i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        
        return true;
    }
    
    const convertToK = n.toString(k);
    
    return [...convertToK].reduce((acc, cur, idx) => {
        if (cur === '0') {
            acc.count += isPrime(parseInt(acc.str || '1')) ? 1 : 0;
            acc.str = "";
        } else {
            acc.str += cur;
        }
        
        if (idx === [...convertToK].length - 1) {
            acc.count += isPrime(parseInt(acc.str || '1')) ? 1 : 0;
        }
        
        return acc;
    }, { count: 0, str: "" }).count;
}