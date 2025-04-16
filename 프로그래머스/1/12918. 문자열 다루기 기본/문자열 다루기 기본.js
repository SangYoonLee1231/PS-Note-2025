function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    let flag = true;
    
    s.split("").forEach((elem) => {
        if (elem.charCodeAt() < 48 || elem.charCodeAt() > 57) {
            flag = false;
        }
    })
    
    return flag;
}