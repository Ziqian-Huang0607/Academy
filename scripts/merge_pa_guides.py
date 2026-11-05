"""Merge the PA review-guide lessons into the corpus the app serves.

Run:  python3 scripts/merge_pa_guides.py
      (compile_notes.py also calls this at the end, so a full recompile keeps them.)

The Grade 9/10 Resource Department ("PA") review guides are committed as
markdown under content/pa-guides/<course>/<level>/<code>-<slug>.md, where
<level> is S, S+, H, H+ or `_all` (AP courses, which are not streamed). Unlike
content/notes/ these are tracked in git: they are the source, and this script
is the only thing that turns them into notes.

They are additive. Each guide is a student-written exam review, so it sits
beside the course's lessons rather than replacing any: codes are prefixed by
the exam (S1M-, S1MPA-, S1F-, S2M-, S2F-) so they never collide with a lesson's
section number, and the lessons are appended after each course's own.

Idempotent: notes whose id starts with `pa-` are dropped and re-added.
"""

import gzip
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
GUIDES = ROOT / "content" / "pa-guides"
CORPUS = ROOT / "public" / "course-notes.json"
SHARDS = ROOT / "public" / "notes"
MANIFEST = SHARDS / "manifest.json"

LEVELS = {"S", "S+", "H", "H+"}
EXAM_ORDER = ["S1M", "S1MPA", "S1F", "S2M", "S2F"]


def summary_of(body: str) -> str:
    """Lead prose, flattened the way compile_notes.py does it."""
    prose = re.sub(r"^```.*?^```", "", body, flags=re.M | re.S)
    prose = re.sub(r"^#.*$|^>.*$|^\|.*$", "", prose, flags=re.M)
    prose = re.sub(r"\*\*|\$", "", prose).replace("`", "")
    return re.sub(r"\s+", " ", prose).strip()[:200]


def open_first_section(body: str, title: str) -> str:
    """Give content that precedes any `##` heading a section of its own.

    parseNote() only renders blocks that sit inside a section; anything between
    the `#` title and the first `##` is dropped, including the writers' credit.
    Many guides start straight into prose, so without this they render empty.
    """
    lines = body.split("\n")
    i = 1  # past the "# code title" line
    while i < len(lines) and not lines[i].strip():
        i += 1
    # The credit callout counts as content: it has to sit inside a section too,
    # or the writers' names never reach the page.
    if i >= len(lines) or re.match(r"^#{2,4}\s", lines[i]):
        return body
    return "\n".join(lines[:i] + [f"## {title}", ""] + lines[i:])


def defuse_stray_titles(body: str) -> str:
    """A later `# …` line (a Python comment in a CS guide) would be read as the
    note's title. Outside code fences, drop the space so it stays plain text."""
    out, fenced = [], False
    for n, line in enumerate(body.split("\n")):
        if line.startswith("```"):
            fenced = not fenced
        elif n > 0 and not fenced and re.match(r"^#\s", line):
            line = "#" + line[1:].lstrip()
        out.append(line)
    return "\n".join(out)


def load_guides():
    notes = []
    if not GUIDES.is_dir():
        return notes
    for path in sorted(GUIDES.rglob("*.md")):
        level_dir = path.parent.name
        course = path.parent.parent.name
        level = level_dir if level_dir in LEVELS else None
        body = path.read_text().strip()
        heading = re.match(r"^#\s+(\S+)\s+(.+)$", body, re.M)
        if not heading:
            print(f"  ! {path.relative_to(ROOT)} has no '# <code> <title>' heading; skipped")
            continue
        code, title = heading.group(1), heading.group(2).strip()
        body = open_first_section(defuse_stray_titles(body), title)
        notes.append({
            "id": f"pa-{course}-{level or 'all'}-{code}",
            "courseId": course,
            **({"level": level} if level else {}),
            "code": code,
            "title": title,
            "summary": summary_of(body),
            "revision": 1,
            "updated": "PA review guide",
            "markdown": body,
            "sections": [],
            "written": True,
        })

    def order(note):
        exam, _, n = note["code"].partition("-")
        rank = EXAM_ORDER.index(exam) if exam in EXAM_ORDER else len(EXAM_ORDER)
        return (note["courseId"], note.get("level") or "", rank, int(n) if n.isdigit() else 0)

    return sorted(notes, key=order)


def write_shards(corpus):
    by_course = defaultdict(list)
    for note in corpus:
        by_course[note["courseId"]].append(note)
    if SHARDS.exists():
        for stale in SHARDS.glob("*.json*"):
            if stale.name != "manifest.json":
                stale.unlink()
    SHARDS.mkdir(parents=True, exist_ok=True)
    manifest = []
    for course_id, notes in sorted(by_course.items()):
        body = json.dumps(notes, ensure_ascii=False, separators=(",", ":")) + "\n"
        path = SHARDS / f"{course_id}.json"
        path.write_text(body)
        gz_path = SHARDS / f"{course_id}.json.gz"
        # mtime=0: an unchanged corpus produces byte-identical output.
        with gzip.GzipFile(gz_path, "wb", compresslevel=9, mtime=0) as gz:
            gz.write(body.encode("utf-8"))
        manifest.append({"courseId": course_id, "notes": len(notes),
                         "bytes": path.stat().st_size, "gzBytes": gz_path.stat().st_size})
    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + "\n")
    return manifest


def merge():
    existing = json.loads(CORPUS.read_text()) if CORPUS.exists() else []
    kept = [n for n in existing if not str(n.get("id", "")).startswith("pa-")]
    guides = load_guides()
    # Keep each course's own lessons first, in their existing order; append its
    # review guides after them.
    by_course = defaultdict(list)
    for note in kept:
        by_course[note["courseId"]].append(note)
    for note in guides:
        by_course[note["courseId"]].append(note)
    corpus = [note for course in sorted(by_course) for note in by_course[course]]
    CORPUS.write_text(json.dumps(corpus, ensure_ascii=False, separators=(",", ":")) + "\n")
    manifest = write_shards(corpus)
    courses = {n["courseId"] for n in guides}
    print(f"PA guides: {len(guides)} lessons across {len(courses)} courses "
          f"({len(existing) - len(kept)} replaced); corpus {len(corpus)} notes, {len(manifest)} shards")


if __name__ == "__main__":
    merge()
