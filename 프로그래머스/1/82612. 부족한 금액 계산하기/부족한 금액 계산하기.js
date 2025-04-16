function solution(price, money, count) {
    cost = 0;
    
    for (let i = 1; i <= count; i++) {
        cost += (i * price);
    }
    
    return cost - money >= 0 ? cost - money : 0;
}