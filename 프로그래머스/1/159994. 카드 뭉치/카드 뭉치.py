def solution(cards1, cards2, goal):
    i, j, k = 0, 0, 0
    flag = False
    
    while i < len(cards1) or j < len(cards2):
        if i < len(cards1) and goal[k] == cards1[i]:
            i += 1
            k += 1
        elif j < len(cards2) and goal[k] == cards2[j]:
            j += 1
            k += 1
        else:
            break
            
        if k == len(goal):
            flag = True
            break
        
        
    if(flag):
        answer = "Yes"
    else:
        answer = "No"
    
    return answer