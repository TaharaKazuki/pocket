# Task Completion Checklist

When completing a development task, ensure the following steps are performed:

## 1. Code Quality Checks
- [ ] Run ESLint: `npm run lint`
- [ ] Auto-fix ESLint errors: `npm run lint -- --fix`
- [ ] Verify Prettier formatting: `npx prettier --check .`

## 2. Type Safety
- [ ] No TypeScript errors in the IDE
- [ ] Build succeeds: `npm run build` (if applicable)

## 3. Testing
- [ ] Manual testing in development mode: `npm run dev`
- [ ] Test on http://localhost:3000
- [ ] Verify responsive design (if UI changes)
- [ ] Check dark mode compatibility (if applicable)

## 4. Code Review
- [ ] Imports are properly organized (automatic via ESLint)
- [ ] No unused variables or imports (automatic via ESLint)
- [ ] Tailwind classes are properly formatted (automatic via Prettier)
- [ ] Code follows project conventions

## 5. Git Workflow
- [ ] Stage changes: `git add .`
- [ ] Commit with descriptive message: `git commit -m "message"`
- [ ] Push to remote (if needed): `git push`

## 6. Documentation
- [ ] Update README.md if new features added
- [ ] Add comments for complex logic
- [ ] Update type definitions if API changed

## Notes
- VSCode auto-formatting on save handles most formatting issues automatically
- ESLint and Prettier are configured to work together (no conflicts)
- The project uses Tailwind CSS v4 canonical class names
