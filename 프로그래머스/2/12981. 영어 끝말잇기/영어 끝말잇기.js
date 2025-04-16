function solution(n, words) {
    // 탈락 조건
    // 1. 끝말로 잇지 못할경우
    // 2. 이미 말했던 단어를 말할 경우
    // - 탈락자 없으면 [0, 0] 반환
    const spokeWords = [];
    
    for (let turn = 1; turn < words.length; turn++) {
        spokeWords.push(words[turn - 1]);
        if (!checkVaildWord(words[turn - 1], words[turn])) {
            return [(turn % n) + 1, parseInt(turn / n) + 1];
        }
    }

    return [0, 0];
    
    function checkVaildWord(prevWord, currWord) {
        // 1. 끝말로 이었는가?
        if (prevWord.slice(-1) !== currWord.slice(0, 1)) {
            return false;
        }
        
        // 2. 이미 말했던 단어인가?
        if (spokeWords.some((elem) => elem === currWord)) {
            return false;
        }
        
        return true;
    }
}