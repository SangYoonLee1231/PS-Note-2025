// < 필요한 전역 변수 >
// 경로 배열
// 경로 temp 배열 (시작점 ICN을 경로 배열에 담고 시작)
// 체크 배열

// < 한 번의 확인 과정 - DFS 방식 >
// 시작점 찾기 - tickets 2차원 배열의 [i][0] 인덱스 순차적으로 확인 (체크 배열에 체크 안 된 요소만 확인)
// 찾으면 경로 temp 배열에 하나씩 담고 다음 과정으로 이동 (깊이 + 1)
// 깊이가 tickets 배열 크기에 도달하면 '성공'으로 확인 종료
// 그 전에 다음 경로 없으면 '실패'로 확인 종료
// 경로 temp 배열을 경로 배열에 담기

// 모든 경로 확인 후 경로 배열 중 알파벳 순서가 가장 앞서는 경로를 답으로 결정


function solution(tickets) {
    const answer = [];
    const len = tickets.length + 1;

    const checkArray = new Array(tickets.length).fill(false);
    const answerTemp = ['ICN'];

    function makeTrackDfs(depth, start) {
        if (depth === len) {
            // 경로를 깊은 복사하여 결과에 저장
            answer.push([...answerTemp]);
            return;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            // 사용하지 않은 티켓이면서 시작점이 일치하는 경우에만 진행
            if (!checkArray[i] && tickets[i][0] === start) {
                checkArray[i] = true;
                answerTemp.push(tickets[i][1]);
                makeTrackDfs(depth + 1, tickets[i][1]);
                answerTemp.pop();
                checkArray[i] = false;
            }
        }
    }

    makeTrackDfs(1, 'ICN');
    
    // 알파벳 순서가 가장 앞선 경로 선택
    answer.sort((a, b) => {
        const routeA = a.join('');
        const routeB = b.join('');
        return routeA.localeCompare(routeB);
    });
    
    return answer[0];
}
