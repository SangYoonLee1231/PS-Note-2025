function solution(k, score) {
  let scoresRank = [];
  let answer = [];
    
  for (let i = 1; i <= score.length; i++) {
    scoresRank.push(score[i-1]);
    let rankIndex = -1;
      
    // scoresRank 오름차순 정렬
    scoresRank.sort((a, b) => a - b);
      
    if (k < i) { rankIndex = i - k }
    else { rankIndex = 0 }
      
    let announcedScore = scoresRank[rankIndex];
    answer.push(announcedScore);
  }
  
  return answer;
}