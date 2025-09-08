function solution(numbers, hand) {
    const numPos = {
        '1': [0, 0],
        '2': [0, 1],
        '3': [0, 2],
        '4': [1, 0],
        '5': [1, 1],
        '6': [1, 2],
        '7': [2, 0],
        '8': [2, 1],
        '9': [2, 2],
        '*': [3, 0],
        '0': [3, 1],
        '#': [3, 2],
    }
    let rightPos = [3, 2];
    let leftPos = [3, 0];
    
    // 실제 구현 로직
    const answer = numbers.reduce((acc, target) => {
        target = Number(target);
        const targetPos = numPos[target];
        
        // 1, 4, 7 -> 왼쪽 손가락
        if (target % 3 === 1) {
            leftPos = targetPos;
            return acc += 'L';
        }
        // 3, 6, 9 -> 오른쪽 손가락
        if (target % 3 === 0 && target !== 0) {
            rightPos = targetPos;
            return acc += 'R';
        }
        
        // 2, 5, 8, 0 눌렀을 경우
        // 각 손가락에서 버튼까지 거리 계산
        const rightDist = Math.abs(rightPos[0] - targetPos[0]) + Math.abs(rightPos[1] - targetPos[1]);
        const leftDist = Math.abs(leftPos[0] - targetPos[0]) + Math.abs(leftPos[1] - targetPos[1]);
        
        if (rightDist > leftDist) {
            // 왼쪽손가락이 더 가까움
            leftPos = targetPos;
            return acc += 'L';
        }
        if (rightDist < leftDist) {
            // 오른쪽손가락이 더 가까움
            rightPos = targetPos;
            return acc += 'R';
        }
        
        // 둘 다 같을 경우, 어느쪽 손잡이인가에 따라 판단됨
        if (hand === 'right') {
            rightPos = targetPos;
            return acc += 'R';
        }
        if (hand === 'left') {
            leftPos = targetPos;
            return acc += 'L';
        }
        
        return acc;
    }, '')
    
    return answer;
}