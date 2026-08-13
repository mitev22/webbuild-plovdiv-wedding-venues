#!/usr/bin/env python3
"""Heal content-pack schema drift against the gravura template.

Reads tsc errors ("Property 'X' does not exist"), copies the missing key's
line block from the TEMPLATE's placeholder content file into the venue pack
(both bg and en dict blocks). Refuses to merge values that contain placeholder
venue text (Марица/Maritsa/Сребро/Злато/Платина leak check) — those are
reported for manual authoring instead.
"""
import re, subprocess, sys
from pathlib import Path

work, tpl = Path(sys.argv[1]), Path(sys.argv[2])
LEAK = re.compile(r"Марица|Maritsa|Сребро|Злато|Платина|Silver|Platinum")

def key_block(src: str, key: str):
    # all occurrences of the key line-block at 4-space indent (bg then en)
    out, lines = [], src.splitlines(keepends=True)
    i = 0
    while i < len(lines):
        if re.match(rf"    {re.escape(key)}:", lines[i]):
            j = i + 1
            while j < len(lines) and not re.match(r"    [\w$]+:|^  \},", lines[j]):
                j += 1
            out.append("".join(lines[i:j]))
            i = j
        else:
            i += 1
    return out

def insert(pack_src: str, key: str, blocks):
    # insert block n into the n-th dict lang block (bg, en) before its closing "  },"
    marks = [m.start() for m in re.finditer(r"^  (bg|en): \{", pack_src, re.M)]
    if len(marks) < 2 or not blocks:
        return pack_src, False
    if len(blocks) == 1:
        blocks = [blocks[0], blocks[0]]
    for idx in (1, 0):  # insert from the back so offsets stay valid
        start = marks[idx]
        close = pack_src.find("\n  },", start)
        if close == -1:
            return pack_src, False
        blk = blocks[min(idx, len(blocks) - 1)]
        pack_src = pack_src[: close + 1] + blk + pack_src[close + 1 :]
    return pack_src, True

for round_ in range(6):
    r = subprocess.run(["npx", "tsc", "--noEmit", "--pretty", "false"],
                       cwd=work, capture_output=True, text=True)
    missing = sorted(set(re.findall(r"Property '([\w$]+)' does not exist", r.stdout + r.stderr)))
    if not missing:
        print("PACK OK after", round_, "rounds")
        sys.exit(0)
    print("round", round_, "missing:", ",".join(missing))
    fixed_any = False
    for f in ("content.ts", "content-extra.ts"):
        tsrc = (tpl / "lib" / f).read_text()
        ppath = work / "lib" / f
        psrc = ppath.read_text()
        for key in missing:
            if re.search(rf"    {re.escape(key)}:", psrc):
                continue
            blocks = key_block(tsrc, key)
            if not blocks:
                continue
            if any(LEAK.search(b) for b in blocks):
                print(f"  LEAK-RISK {key} in {f}: needs manual authoring, skipped")
                continue
            psrc, ok = insert(psrc, key, blocks)
            if ok:
                fixed_any = True
                print(f"  merged {key} <- template {f}")
        ppath.write_text(psrc)
    if not fixed_any:
        print("UNRESOLVED:", ",".join(missing))
        print((r.stdout + r.stderr)[:1200])
        sys.exit(1)
print("gave up after 6 rounds")
sys.exit(1)
