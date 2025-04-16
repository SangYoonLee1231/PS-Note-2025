function solution(x) {
    const xArray = x.toString().split('');
    let num = 0;
          
    xArray.forEach((elem) => {
        num += Number(elem);
    })
    
    return (x % num) ? false : true;
}