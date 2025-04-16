#!/usr/bin/env python

import os
from urllib import parse

# 플레이스홀더 설정: README.md 파일 내에 해당 주석이 있어야 함
PLACEHOLDER = "<!-- 이 위치에 자동 생성을 구현하고 싶습니다. -->"

HEADER = """# 

"""

def main():
    data = {}
    # os.walk로 디렉터리 순회 (루트 디렉터리 제외)
    for root, dirs, files in os.walk("."):
        # 최상위(root)에서 .git, .github 폴더 제외
        if root == '.':
            for skip in ['.git', '.github']:
                if skip in dirs:
                    dirs.remove(skip)
            continue

        category = os.path.basename(root)
        if category == 'images':  # images 폴더는 무시
            continue

        # 상위 디렉터리 이름을 카테고리로 사용 (예: 백준, 프로그래머스, 그 외)
        directory = os.path.basename(os.path.dirname(root))
        if directory == '.':
            continue

        if directory not in data:
            data[directory] = []
        for file in files:
            file_path = os.path.join(root, file)
            data[directory].append((category, file_path))

    generated_content = HEADER
    # 생성된 문제 목록 및 문제 개수 표시
    for directory, entries in data.items():
        problem_count = len(entries)
        if directory in ["백준", "프로그래머스"]:
            generated_content += "### 📚 {} (문제 수: {})\n".format(directory, problem_count)
            for category, file_path in entries:
                generated_content += "| {} | [링크]({}) |\n".format(category, parse.quote(file_path))
        else:
            generated_content += "#### 🚀 {} (문제 수: {})\n".format(directory, problem_count)
            generated_content += "| 문제번호 | 링크 |\n"
            generated_content += "| ----- | ----- |\n"
            for category, file_path in entries:
                generated_content += "| {} | [링크]({}) |\n".format(category, parse.quote(file_path))

    # 기존 README.md 파일 읽어오기 (파일 없으면 빈 문자열)
    try:
        with open("README.md", "r") as fd:
            readme_old = fd.read()
    except FileNotFoundError:
        readme_old = ""

    # 플레이스홀더가 있다면 해당 위치에 생성 내용 삽입, 없으면 앞에 추가
    if PLACEHOLDER in readme_old:
        before, after = readme_old.split(PLACEHOLDER, 1)
        new_readme = before + PLACEHOLDER + "\n" + generated_content + "\n" + after
    else:
        new_readme = generated_content + "\n" + readme_old

    with open("README.md", "w") as fd:
        fd.write(new_readme)

if __name__ == "__main__":
    main()