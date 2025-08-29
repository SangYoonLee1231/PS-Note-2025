function solution(bridge_length, weight, truck_weights) {
    // 최소 시간 = 다리 길이 + 대기 트럭 개수
    // 지연 되는 경우 -> 다리에 트럭이 올라갈 때, 다리게 무게를 못견디는 경우
    // 다리 배열 동작 원리
    // ㄴ 기본적으로 모든 트럭을 한 칸식 이동
    // ㄴ 이동 전에, 마지막 빠지는 트럭 제외한 모든 다리위 트럭 + 올라갈 트럭 무게가 괜찮은지?
    // ㄴ 괜찮으면 모두 이동, 아니면 올라갈 트럭은 한 번 대기
    
    let time = 0;
    const onBridge = Array.from({ length: bridge_length }, () => 0);

    function checkWeight() {
        let weightSum = onBridge.reduce((sum, cur, idx) => {
            return idx === 0 ? sum : sum + cur;
        }, 0)
        
        weightSum += truck_weights[0];
        
        return weightSum <= weight;
    }
    
    do {
        // 시간 경과
        time += 1
        
        // 이동 전 확인
        if (checkWeight()) {
            // 괜찮으면 모두 이동
            for (let i = 0; i < onBridge.length - 1; i++) {
                onBridge[i] = onBridge[i + 1];
            }
            onBridge[onBridge.length - 1] = (truck_weights.shift() || 0);
        } else{
            // 안 괜찮으면, 올라갈 트럭은 한 번 대기
            for (let i = 0; i < onBridge.length - 1; i++) {
                onBridge[i] = onBridge[i + 1];
            }
            onBridge[onBridge.length - 1] = 0;
        }
        // 모두 이동했는지 확인
    } while (!(truck_weights.length === 0 && onBridge.every(elem => elem === 0)));
    
    return time;
}