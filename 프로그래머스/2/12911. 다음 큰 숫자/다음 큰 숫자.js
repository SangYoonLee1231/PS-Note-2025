function solution(n) {
  let numberOfOneInN = 0;
  n.toString(2)
    .split("")
    .forEach((item) => {
      if (item === "1") {
        numberOfOneInN++;
      }
    });

  let i = 1;
  while (true) {
    let numberOfOneInNextN = 0;
    (n + i)
      .toString(2)
      .split("")
      .forEach((item) => {
        if (item === "1") {
          numberOfOneInNextN++;
        }
      });

    if (numberOfOneInN === numberOfOneInNextN) {
      return n + i;
    }

    i++;
  }
}