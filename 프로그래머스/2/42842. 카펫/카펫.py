# import math

def solution(brown, yellow):
    # brown + yellow = row * col
    # brown = (row + col - 2) * 2
    
    for i in range(2, int((brown + yellow) ** 1/2) + 1):
        if (brown + yellow) % i == 0:
            if (((brown + yellow) // i) + (i) - 2) * 2 == brown:
                return [(brown + yellow) // i, i]