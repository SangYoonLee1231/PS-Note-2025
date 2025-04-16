max_num = 0
visited = [0] * 8


def backtrack(curr_num, curr_k, k, dungeons):
    global max_num
    
    if curr_k < 0:
        # max_num = max(curr_num, max_num)
        return
    
    for idx, elem in enumerate(dungeons):
        if curr_k >= elem[0] and not visited[idx]:
            visited[idx] = 1
            backtrack(curr_num + 1, curr_k - elem[1], k, dungeons)
            visited[idx] = 0
        
        max_num = max(curr_num, max_num)

    
def solution(k, dungeons):
    backtrack(0, k, k, dungeons)
    return max_num