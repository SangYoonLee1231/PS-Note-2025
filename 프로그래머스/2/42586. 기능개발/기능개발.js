function solution(progresses, speeds) {
    const length = progresses.length;
    const answer = [];
    
    // Step 1.
    const stepToEnd = [];
    for (let i = 0; i < length; i++) {
        stepToEnd.push(Math.ceil( (100 - progresses[i]) / speeds[i] ));    
    }
    
    // Step 2.
    let current = stepToEnd[0];
    let count = 1;
    
    for (let idx = 1; idx < length; idx++) {
        if (stepToEnd[idx] > current) {
            answer.push(count);
            count = 0;
            current = stepToEnd[idx];
        }
        
        count++;
    }
    answer.push(count);
    
    return answer;
}