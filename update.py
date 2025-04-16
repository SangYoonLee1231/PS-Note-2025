#!/usr/bin/env python

import os
from urllib import parse

# 자동 생성 콘텐츠 블록의 시작/끝 마커
START_MARKER = "<!-- auto-gen-start -->"
END_MARKER = "<!-- auto-gen-end -->"

HEADER = """# 
## 알고리즘 문제 풀이 목록 (백준 & 프로그래머스)

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
            if not (file.endswith(".js") or file.endswith(".py")):
                continue
            file_path = os.path.join(root, file)
            data[directory].append((category, file_path))

    generated_body = HEADER
    
    # 생성된 문제 목록 및 문제 개수 표시
    for directory, entries in data.items():
        problem_count = len(entries)
        if directory in ["백준", "프로그래머스"]:
            generated_body += "### 📚 {}\n".format(directory)
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

    # 이미 마커가 존재하면 해당 블록을 교체하고, 없으면 파일 끝에 추가
    if START_MARKER in readme_old and END_MARKER in readme_old:
        before, rest = readme_old.split(START_MARKER, 1)
        # rest에서 END_MARKER를 기준으로 분할 (앞 부분은 기존 블록, 뒷 부분은 이후 내용)
        _, after = rest.split(END_MARKER, 1)
        new_readme = before + auto_gen_block + after
    else:
        new_readme = readme_old + "\n\n" + auto_gen_block

    with open("README.md", "w") as fd:
        fd.write(new_readme)

if __name__ == "__main__":
    main()