def check(skill, skill_tree):
    pos = -1
    for skill_tree_elem in skill_tree:
        if skill_tree_elem in skill:
            for i, skill_elem in enumerate(skill):
                if skill_tree_elem == skill_elem:
                    if i == pos + 1:
                        pos = i
                        break
                    else:
                        return 0
    return 1

                    
def solution(skill, skill_trees):
    answer = 0
    for skill_tree in skill_trees:
        answer += check(skill, skill_tree)

    return answer