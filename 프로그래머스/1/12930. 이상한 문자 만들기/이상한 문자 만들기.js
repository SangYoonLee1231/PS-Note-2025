function solution(s) {
    return [...s].reduce((acc, cur) => {
        if (cur === " ") {
            acc.idx = 0; 
            acc.sum += " ";
            return acc;
        }
        
        if (acc.idx % 2) {
            acc.sum += cur.toLowerCase();
        } else {
            acc.sum += cur.toUpperCase();
        }
        acc.idx++;
        
        return acc;
    }, { idx: 0, sum: "" }).sum;
}