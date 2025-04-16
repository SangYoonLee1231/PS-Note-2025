function solution(triangle) {
    const size = triangle.length;
    const dpArray = [];
    
    dpArray.unshift(triangle[size - 1]);
    
    for(let i = size - 2; i >= 0; i--) {
        dpArray.unshift(triangle[i].map((elem, idx) => {
            return Math.max(dpArray[0][idx], dpArray[0][idx + 1]) + elem
        }))
    }
    
    return dpArray[0][0];
}