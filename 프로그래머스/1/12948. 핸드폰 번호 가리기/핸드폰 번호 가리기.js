function solution(phone_number) {
//     const last_four_str = phone_number.substring(0, phone_number.length - 4);
    
//     return phone_number.replace(last_four_str, "*".repeat(phone_number.length - 4));
    
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
}