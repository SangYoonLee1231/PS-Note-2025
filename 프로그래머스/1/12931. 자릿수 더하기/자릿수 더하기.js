function solution(n) {
    return [...n.toString()].reduce((acc, cur) => {
        acc += Number(cur);
        return acc
    }, 0)
}