function solution(phone_book) {
    phone_book.sort();
    
    for (let idx = 0; idx < phone_book.length - 1; idx++) {
        if (phone_book[idx + 1].startsWith(phone_book[idx])) {
            return false;
        };
    }
    
    return true;
}