// Step 1. 이번 달 기준 선물 지수 계산
// Step 2. 다음 달 선물 주고 받기 계산

function solution(friends, gifts) {
    const peopleNum = friends.length;
    const giftGrid = Array.from(Array(peopleNum), () => Array(peopleNum).fill(0)); // 주고 받은 선물 표
    const giftNum = Array(peopleNum).fill(0); // 선물 지수 배열
    const takenGiftNum = Array(peopleNum).fill(0); // 이번 달 받은 선물 배열
    
    
    // Step 1. 이번 달 기준 선물 지수 계산
    function makeGiftGrid() {
        gifts.forEach((gift) => {
            const [from, to] = gift.split(" ");
            const [fromIdx, toIdx] = [friends.indexOf(from), friends.indexOf(to)];

            giftGrid[fromIdx][toIdx] += 1;
        })
    }
    
    function makeGiftNum() {
        for (let i = 0; i < peopleNum; i++) {
            let give = 0;
            for (let j = 0; j < peopleNum; j++) {
                give += giftGrid[i][j];
            }
            
            let take = 0;
            for (let j = 0; j < peopleNum; j++) {
                take += giftGrid[j][i];
            }
            
            giftNum[i] = give - take;
        }
    }
    
    makeGiftGrid();
    makeGiftNum();
    
    
    // Step 2. 다음 달 선물 주고 받기 계산
    function makeTakenGiftNum() {
        for (let i = 0; i < peopleNum; i++) {
            for (let j = i + 1; j < peopleNum; j++) {
                if (giftGrid[i][j] > giftGrid[j][i]) {
                    takenGiftNum[i] += 1;
                } else if (giftGrid[i][j] < giftGrid[j][i]) {
                    takenGiftNum[j] += 1;
                } else {
                    if (giftNum[i] > giftNum[j]) {
                        takenGiftNum[i] += 1;
                    } else if (giftNum[i] < giftNum[j]) {
                        takenGiftNum[j] += 1;
                    } else {
                        continue;
                    }
                }
            }
        }
    }
    
    makeTakenGiftNum();
    
    return Math.max(...takenGiftNum);
}
