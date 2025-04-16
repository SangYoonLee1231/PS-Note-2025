def solution(s, skip, index):
    alphabet_num = []
    skip_num = []
    
    for elem in skip:
        skip_num.append(ord(elem))
    
    for i in range(97, 123):
        if i not in skip_num:
            alphabet_num.append(chr(i))
    
    #
    answer = []
    
    for elem in s:
        new_idx = (alphabet_num.index(elem) + index) % (26 - len(skip))
        answer.append(alphabet_num[new_idx])
        
    result = ''.join(s for s in answer)
    
    return result