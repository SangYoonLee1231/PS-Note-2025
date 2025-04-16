#!/usr/bin/env python3

import os
from urllib.parse import quote

# 마커: README.md 파일 내에 이 부분을 찾아 자동 생성 콘텐츠로 교체합니다.
MARKER = "<!-- 이 위치에 자동 생성을 구현하고 싶습니다. -->"

# 생성되는 콘텐츠의 상단 헤더 (필요에 따라 수정 가능)
HEADER = "## 📚 알고리즘 문제 풀이 목록 (백준 & 프로그래머스)\n\n"

def main():
    data = {}
    # 현재 디렉터리 내의 모든 파일을 순회합니다.
    # .git, .github 등 불필요한 폴더는 제외합니다.
    for root, dirs, files in os.walk("."):
        if root == ".":
            for skip in [".git", ".github"]:
                if skip in dirs:
                    dirs.remove(skip)
            continue
        
        # 해당 경로의 폴더 이름을 문제 카테고리로 사용합니다.
        category = os.path.basename(root)
        # 예를 들어, images 폴더 등은 무시합니다.
        if category.lower() == "images":
            continue

        # 상위 디렉터리의 이름을 기반으로 문제 사이트(예: 백준, 프로그래머스 등)로 분류합니다.
        parent = os.path.basename(os.path.dirname(root))
        if parent == ".":
            continue
        
        if parent not in data:
            data[parent] = []
        for file in files:
            file_path = os.path.join(root, file)
            data[parent].append((category, file_path))
    
    # 자동 생성될 콘텐츠를 구성합니다.
    generated_body = HEADER
    for site, items in data.items():
        count = len(items)
        # 각 사이트별 문제 개수를 제목에 표기합니다.
        generated_body += f"### {site} (문제 개수: {count})\n\n"
        generated_body += "| 문제 카테고리 | 링크 |\n"
        generated_body += "| --- | --- |\n"
        for problem_category, file_path in items:
            generated_body += f"| {problem_category} | [링크]({quote(file_path)}) |\n"
        generated_body += "\n"
    
    # 기존 README.md 파일을 읽어옵니다.
    try:
        with open("README.md", "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        content = ""
    
    # 마커가 있으면 해당 부분을 자동 생성된 콘텐츠로 완전히 대체합니다.
    if MARKER in content:
        new_content = content.replace(MARKER, generated_body)
    else:
        # 마커가 없으면 파일 끝에 추가합니다.
        new_content = content + "\n\n" + generated_body
    
    # 최종 결과를 README.md 파일에 저장합니다.
    with open("README.md", "w", encoding="utf-8") as f:
        f.write(new_content)

if __name__ == '__main__':
    main()