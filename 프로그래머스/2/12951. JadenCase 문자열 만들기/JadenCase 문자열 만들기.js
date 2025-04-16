function solution(s) {
  const arrayS = s.split(" ");
    
  for (let i = 0; i < arrayS.length; i++) {
    arrayS[i] = arrayS[i].split("");
      
    for (let j = 0; j < arrayS[i].length; j++) {
      if (arrayS[i][j].match(new RegExp(/^[0-9]/))) {
        continue;
      }
      if (j === 0) { arrayS[i][j] = arrayS[i][j].toUpperCase(); }
      else { arrayS[i][j] = arrayS[i][j].toLowerCase(); }
    }
    
    arrayS[i] = arrayS[i].join("");
  }
    
  return arrayS.join(" ");
}