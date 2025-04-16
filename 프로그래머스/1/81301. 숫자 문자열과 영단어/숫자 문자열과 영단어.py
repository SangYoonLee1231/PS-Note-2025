num_eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
dict = {num_eng[i] : f"{i}" for i in range(10)}


def solution(s):
    answer = []
        
    start_idx = end_idx = 0
    
    while True:
        if end_idx == len(s) + 1:
            break
        
        if s[start_idx:end_idx] in dict:
            word = s[start_idx:end_idx]
            answer.append(dict[word])
            start_idx = end_idx
            
        if s[start_idx:end_idx] in [f"{i}" for i in range(10)]:
            answer.append(s[start_idx:end_idx])
            start_idx = end_idx
            
        end_idx += 1
    
    return int(''.join(answer))