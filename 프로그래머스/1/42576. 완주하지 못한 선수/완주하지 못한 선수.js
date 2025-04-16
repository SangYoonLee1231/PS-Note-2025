function solution(participant, completion) {
    const participant_map = new Map();
    
    participant.forEach((name) => {
        participant_map.set(name, (participant_map.get(name) || 0) + 1);
    })
    
    completion.forEach((name) => {
        participant_map.set(name, participant_map.get(name) - 1);
    })
    
    for (let [key, value] of participant_map) {
        if (value === 1) {
            return key;
        }
    }
}