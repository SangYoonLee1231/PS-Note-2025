function solution(s){
    s_arr = [...s];
    stack = [];
    
    for (i=0; i<s_arr.length; i++) {
        item = s_arr[i];
        
        if(item === "(") {
            // push
            stack.push(item);
        } else {
            // pop
            if (stack.length == 0)
                return false;
            stack.pop();
        }
    }
    
    // s_arr.forEach((item) => {
    //     if(item === "(") {
    //         // push
    //         stack.push(item);
    //     } else {
    //         // pop
    //         if (stack.length == 0)
    //             return false;
    //         stack.pop();
    //     }
    // })
    
    if (stack.length !== 0) {
        return false;
    }
    return true;
}