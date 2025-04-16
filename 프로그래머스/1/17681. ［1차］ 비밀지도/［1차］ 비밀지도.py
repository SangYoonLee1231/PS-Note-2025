def make_binary(n, num):
    answer = [0 for _ in range(n)]
    idx = n - 1
    
    while num >= 1:
        answer[idx] = num % 2
        num //= 2
        idx -= 1
    
    return ''.join(map(str, answer))

print(make_binary(5, 9))
    
    
def solution(n, arr1, arr2):
    temp = [
        [0] * n
        for _ in range(n)
    ]
    
    answer = [
        "" for _ in range(n)
    ]
    
    for idx, elem in enumerate(arr1):
        binary_num = make_binary(n, elem)
        for i in range(n):
            temp[idx][i] = int(binary_num[i])
        
    for idx, elem in enumerate(arr2):
        binary_num = make_binary(n, elem)
        for i in range(n):
            if int(binary_num[i]) == 1:
                temp[idx][i] = int(binary_num[i])
            else:
                pass
    
    
    for i in range(n):
        for j in range(n):
            if temp[i][j] == 1:
                answer[i] += '#'
            else:
                answer[i] += ' '
        
    return answer