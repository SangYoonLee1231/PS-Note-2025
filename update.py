#!/usr/bin/env python

import os
from urllib import parse

# 자동 생성 콘텐츠 블록의 시작/끝 마커
START_MARKER = "<!-- auto-gen-start -->"
END_MARKER = "<!-- auto-gen-end -->"

HEADER = """


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

    generated_body = HEADER
    # 생성된 문제 목록 및 문제 개수 표시
    for directory, entries in data.items():
        problem_count = len(entries)
        if directory in ["백준", "프로그래머스"]:
            generated_body += "### 📚 {} (문제 수: {})\n".format(directory, problem_count)
            for category, file_path in entries:
                generated_body += "| {} | [링크]({}) |\n".format(category, parse.quote(file_path))
        else:
            generated_body += "#### 🚀 {} (문제 수: {})\n".format(directory, problem_count)
            generated_body += "| 문제번호 | 링크 |\n"
            generated_body += "| ----- | ----- |\n"
            for category, file_path in entries:
                generated_body += "| {} | [링크]({}) |\n".format(category, parse.quote(file_path))

    # 자동 생성 콘텐츠 블록 (마커 포함)
    auto_gen_block = START_MARKER + "\n" + generated_body + "\n" + END_MARKER

    # 기존 README.md 파일 읽어오기 (파일 없으면 빈 문자열)
    try:
        with open("README.md", "r") as fd:
            readme_old = fd.read()
    except FileNotFoundError:
        readme_old = ""

    import re
    # 기존의 생성 콘텐츠 블록(시작/끝 마커로 둘러싸인)을 모두 제거
    pattern = re.compile(r"{}\s*.*?\s*{}".format(re.escape(START_MARKER), re.escape(END_MARKER)), re.DOTALL)
    cleaned_readme = pattern.sub("", readme_old).strip()
    new_readme = cleaned_readme + "\n\n" + auto_gen_block + "\n"

    with open("README.md", "w") as fd:
        fd.write(new_readme)

if __name__ == "__main__":
    main()