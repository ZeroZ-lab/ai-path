import os
import re

PAGES_DIR = "03-L3-Dify-LAD/pages"
SLIDES_PATH = "03-L3-Dify-LAD/slides.md"

def find_unreferenced_files():
    # 1. Get all actual files in the pages directory
    actual_files = set()
    for f in os.listdir(PAGES_DIR):
        if f.endswith(".md"):
            actual_files.add(f)

    # 2. Get all referenced files from slides.md
    referenced_files = set()
    try:
        with open(SLIDES_PATH, 'r') as f:
            content = f.read()
            # Extract paths like src: ./pages/filename.md
            # Handles both ./pages/ and pages/ prefixes if present
            matches = re.findall(r'src:\s+\.?/?pages/([^ \n]+)', content)
            for m in matches:
                referenced_files.add(m.strip())
    except FileNotFoundError:
        print(f"Error: {SLIDES_PATH} not found.")
        return

    # 3. Find the difference
    unreferenced = actual_files - referenced_files

    print(f"Total files in pages/: {len(actual_files)}")
    print(f"Total referenced files: {len(referenced_files)}")
    print(f"Unreferenced files count: {len(unreferenced)}")

    if unreferenced:
        print("\n--- Unreferenced Files (Not in slides.md) ---")
        for f in sorted(list(unreferenced)):
            print(f)
    else:
        print("\nAll files are referenced!")

if __name__ == "__main__":
    find_unreferenced_files()
