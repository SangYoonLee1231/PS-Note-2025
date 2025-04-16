function solution(answers) {
  const supoAnswers = makeSupoAnswers(answers.length);
  const supoScores = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (supoAnswers[i][j] === answers[j]) {
        supoScores[i] += 1;
      }
    }
  }

  return checkScores(supoScores);
}

function makeSupoAnswers(num) {
  const supoPatterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const supoAnswers = [];

  for (let i = 0; i < 3; i++) {
    const oneAnswers = [];

    for (j = 0; j < num; j++) {
      oneAnswers.push(supoPatterns[i][j % supoPatterns[i].length]);
    }

    supoAnswers.push(oneAnswers);
    //   supoAnswerss
    //     .push
    //     Array.from(
    //       { num },
    //       (_, idx) => supoPatterns[i][idx % supoPatterns[i].length]
    //     )
    //     ();
  }
  return supoAnswers;
}

function checkScores(supoScores) {
  const maxScore = Math.max(...supoScores);

  return supoScores.reduce((acc, elem, idx) => {
    if (elem === maxScore) {
      acc.push(idx + 1);
    }
    return acc;
  }, []);
}