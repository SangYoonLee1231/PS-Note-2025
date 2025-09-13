// 객체 설계
// {
//     5961: [["05:34", "07:59"], ["22:59", "23:00"]]
// }

function solution(fees, records) {
    function calcTime(start, end) {
        const startArr = start.split(":").map(Number);
        const startTime = startArr[0] * 60 + startArr[1];
        const endArr = end.split(":").map(Number);
        const endTime = endArr[0] * 60 + endArr[1];
        
        const elapsedTime = endTime - startTime;
        
        return elapsedTime;
    }
    
    function calcFee(fees, elapsedTime) {
        return fees[1] + (elapsedTime <= fees[0] ? 0 : Math.ceil((elapsedTime - fees[0]) / fees[2]) * fees[3]);
    }
    
    const timeMap = new Map();
    const moneyMap = new Map();
    
    //
    records.forEach((record) => {
        const [time, carNo, type] = record.split(" ");
        if (!timeMap.has(carNo)) {
            timeMap.set(carNo, []);
        }
        if (type === "IN") {
            const tempArr = [time, "X"];
            timeMap.get(carNo).push(tempArr);
        }
        if (type === "OUT") {
            timeMap.get(carNo)[timeMap.get(carNo).length - 1][1] = time;
        }
    })
    
    // 
    timeMap.forEach((value, key, mapObj) => {
        let timeSum = 0;
        value.forEach((timeArr) => {
            timeSum += calcTime(timeArr[0], timeArr[1] === "X" ? "23:59" : timeArr[1]);
        })
        
        const fee = calcFee(fees, timeSum);
        moneyMap.set(key, fee);
    })
    
    // console.log(moneyMap);
    
    // 정렬
    const sortedMap = new Map([...moneyMap.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    
    return [...sortedMap.values()];
}