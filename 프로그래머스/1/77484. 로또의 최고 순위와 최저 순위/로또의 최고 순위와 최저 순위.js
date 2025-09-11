function solution(lottos, win_nums) {
    let matchCount = 0;
    let zeroCount = 0;
    
    lottos.forEach((num) => {
        if (win_nums.includes(num)) {
            matchCount += 1;
        }
        if (num === 0) {
            zeroCount += 1;
        }
    })
    
    function calcRate(count) {
        if (count === 0) {
            return 6;
        }
        return 7 - count;
    }
    
    return [calcRate(matchCount + zeroCount), calcRate(matchCount)];
}