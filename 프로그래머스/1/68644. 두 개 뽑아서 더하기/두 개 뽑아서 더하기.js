function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    let sumSet = new Set();
    let [left, right] = [0, 1];
    
    while (left < numbers.length - 1) {
        sumSet.add(numbers[left] + numbers[right]);
        
        if (right === numbers.length - 1) {
            left++;
            right = left + 1;
            continue;
        }
        
        right++;
    }
    
    return [...sumSet].sort((a, b) => a - b);
}