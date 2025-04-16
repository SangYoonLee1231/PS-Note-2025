function solution(s) {
    let countChange = 0;
    let countErasedZero = 0;
    
    while (s !== '1') {
        countChange++;
        
        // Step 1. x의 모든 0 제거, 제거된 0의 개수 세기
        let sArray = [];
        let sNew = [];
        
        sArray = s.toString().split('');
        sArray.forEach((elem => {
            if(elem !== '0') {
                sNew.push(Number(elem));
            } else {
                countErasedZero++;
            }
        }));
        
        s = sNew.join('');

        // Step 2. s의 문자열 길이 구하기
        let sLength = s.length;

        // Step 3. s의 문자열 길이를 2진법으로 변환하기
        let sNewTwo = [];
        
        while (sLength !== 0) {
            sNewTwo.unshift(sLength % 2);
            sLength = Math.floor(sLength / 2);
        }
        
        sNewTwo = sNewTwo.map((elem) => String(elem));
        s = sNewTwo.join('');
        console.log(s);
    }
    
    return [countChange, countErasedZero]
}