function solution(s) {
    let answer = 0;
    let countAboutX = 0;
    let x = '';
    let flag = false;

    for (let i in s) {
        if(countAboutX === 0) {
            answer++;
            x = s[i];
            countAboutX++;
        } else {
            if(s[i] === x) { countAboutX++ }
            else { countAboutX-- }
        }
    }
    
    return answer;
}