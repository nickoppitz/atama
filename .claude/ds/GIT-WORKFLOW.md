# Git Workflow — Design System & Component Tombment

---

## Branch Strategy

### Per-Sprint Branch
Each sprint gets its own feature branch for isolation and easy review.

```bash
git checkout -b ds/[N]-[component-name]
# Example: ds/1-button, ds/2-badge, ds/12-[component-name]
```

**Branch naming:**
- `ds/[N]-[component-name]` → Sprint N, component name in kebab-case
- Example: `ds/1-button`, `ds/5-dropdown-menu`, `ds/12-[component-name]`

### Merging
- Merge to `main` after QA sign-off (✅ Validation gate passed)
- Squash commits for clean history (optional, but recommended for readable log)
- PR title: `[DS] Sprint [N] — [Component Name]`

---

## Commit Messages

### Atomic Commits per Phase

**Discovery Phase:**
```
[DS] Sprint [N] — [Component] discovery: add Figma Values & props table

- Extract Figma Values for all variants
- Document props table from design
- Sync header: markdown updated [timestamp]
```

**Implementation Phase:**
```
[DS] Sprint [N] — [Component] implement: code sync with design

- Implement [count] variants from .md spec
- Add Tailwind CSS v4 classes matching Figma Values
- Test all states: desktop, mobile, responsive
- Sync header: code updated [timestamp]
```

**Validation Phase:**
```
[DS] Sprint [N] — [Component] validate: QA pixel-perfect passed

- Validate layout, typography, colors, responsive
- All variants match design spec
- Sync header: Figma validated [timestamp]
- Ref: .claude/knowledge/sprint-[N]-[component]-retrospective.md
```

### Commit Message Format
```
[TAG] Subject line (under 50 chars)

Body (wrapped at 72 chars):
- Bullet point 1
- Bullet point 2

Ref: [file path or issue link, if applicable]
```

**Tags:**
- `[DS]` — Design System work
- `[FEAT]` — New feature
- `[FIX]` — Bug fix
- `[REFACTOR]` — Code restructure
- `[DOCS]` — Documentation only

---

## Files Modified per Phase

### Discovery Phase (PD)
**Modified:**
- `.claude/ds/components/[component-name].md` (new or updated)

**Not touched:**
- Code files
- Retrospective files

### Implementation Phase (FullStack)
**Modified:**
- `components/[component-name].tsx` (new or updated)
- `.claude/ds/components/[component-name].md` (sync header only)

**Not touched:**
- Design files (Figma)
- Retrospective files (yet)

### Validation Phase (QA)
**Modified:**
- `.claude/knowledge/sprint-[N]-[component]-retrospective.md` (new)
- `.claude/ds/components/[component-name].md` (sync header: validated)

**Not touched:**
- Code
- Figma

---

## Pre-Commit Checklist

Before pushing, verify:

- [ ] Branch name is `ds/[N]-[component-name]`
- [ ] Sync headers in `.md` files have correct timestamps
- [ ] No git conflicts with `main`
- [ ] Commits are atomic (one per phase)
- [ ] Commit messages follow format (tag + subject)
- [ ] Code changes match `.md` specification exactly (FullStack phase)
- [ ] Retrospective file created and linked (QA phase)

---

## PR Template (GitHub)

```markdown
## Sprint [N] — [Component Name]

**Component:** [component-name].tsx
**Variants:** [count] — [default, outline, ghost, etc.]
**Phase:** [Discovery | Implementation | Validation]

### Checklist
- [ ] `.md` documentation updated with Figma Values / Props
- [ ] Code matches `.md` specification
- [ ] All variants tested (desktop + mobile)
- [ ] QA validation passed
- [ ] Retrospective filed

### Links
- Design: [Figma artboard link, if available]
- Retrospective: `.claude/knowledge/sprint-[N]-[component]-retrospective.md`
```

---

## Merge to Main

**Condition:** QA sign-off (✅ Validation gate passed)

```bash
# Switch to main
git checkout main
git pull origin main

# Merge with --squash (optional, cleaner history)
git merge --squash ds/[N]-[component-name]
git commit -m "[DS] Sprint [N] — [Component] complete"

# Or merge without squash (preserves all commits)
git merge ds/[N]-[component-name]

# Push
git push origin main

# Delete branch
git branch -d ds/[N]-[component-name]
git push origin --delete ds/[N]-[component-name]
```

---

## Example Workflow (Full Sprint)

```bash
# 1. Create branch
git checkout main
git pull origin main
git checkout -b ds/1-button

# 2. PD commits discovery
git add .claude/ds/components/button.md
git commit -m "[DS] Sprint 1 — Button discovery: add Figma Values & props"
git push -u origin ds/1-button

# 3. FullStack commits implementation
git add components/ui/button.tsx .claude/ds/components/button.md
git commit -m "[DS] Sprint 1 — Button implement: code sync with design"
git push

# 4. QA commits validation + retrospective
git add .claude/knowledge/sprint-1-button-retrospective.md .claude/ds/components/button.md
git commit -m "[DS] Sprint 1 — Button validate: QA pixel-perfect passed"
git push

# 5. PM merges to main
git checkout main
git pull origin main
git merge --squash ds/1-button
git commit -m "[DS] Sprint 1 — Button complete"
git push
git push origin --delete ds/1-button
```

---

## Troubleshooting

### "Sync header timestamp is wrong"
- Use the project's timezone
- Format: `YYYY-MM-DD HH:MM:SS`
- Example: `2026-04-26 14:30:45`

### "Code doesn't match .md specification"
- QA blocks merge until divergence is fixed
- FullStack re-implements or updates `.md`
- New commit on same branch, no force push

### "Retrospective file not created"
- QA creates before merge attempt
- File path: `.claude/knowledge/sprint-[N]-[component]-retrospective.md`
- Use boilerplate: `.claude/knowledge/BOILERPLATE-SPRINT-RETROSPECTIVE.md`

---

## Anti-patterns

- ❌ Mixing phases in one commit (e.g., discovery + implementation)
- ❌ Force push to `main` or shared branches
- ❌ Skipping atomic commits (everything in one giant commit)
- ❌ Merging without QA sign-off
- ❌ Deleting or modifying retrospective files after merge
- ❌ Changing `.md` without updating sync header timestamp
