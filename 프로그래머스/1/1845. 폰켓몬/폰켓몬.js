function solution(nums) {
    const nums_set_len = new Set(nums).size;
    const half_len = nums.length / 2;
    
    return half_len < nums_set_len ? half_len : nums_set_len;
}