# Code Style and Conventions

## TypeScript Configuration
- **Strict mode**: Enabled
- **Target**: ES2017
- **Module**: ESNext with bundler resolution
- **JSX**: Preserve (handled by Next.js)

## Import Organization
Imports are automatically organized by ESLint (`eslint-plugin-import`) in the following order:
1. Node.js built-in modules (e.g., `path`, `fs`)
2. External packages (npm modules)
3. Internal modules (path aliases like `@/*`)
4. Parent/sibling relative imports
5. Index imports
6. Object imports
7. Type imports

- Alphabetically sorted within each group
- Empty line between groups
- Unused imports are automatically removed (`eslint-plugin-unused-imports`)

## Code Formatting (Prettier)
- **Semi-colons**: Required
- **Quotes**: Double quotes
- **Trailing commas**: ES5 style
- **Tab width**: 2 spaces
- **Print width**: 80 characters
- **Tailwind classes**: Automatically sorted by `prettier-plugin-tailwindcss`

## Tailwind CSS
- **Version**: v4
- **Class naming**: Use canonical class names
  - Font families: `font-(family-name:--variable-name)`
  - Opacity: Use percentage without brackets (e.g., `bg-black/5` not `bg-black/[.05]`)
- **Class order**: Automatically sorted by Prettier plugin

## File Naming
- Components: PascalCase (e.g., `MyComponent.tsx`)
- Utilities: camelCase (e.g., `myUtil.ts`)
- Pages (App Router): lowercase with hyphens or default names like `page.tsx`, `layout.tsx`

## VSCode Integration
- Auto-format on save enabled
- ESLint auto-fix on save enabled
- Tailwind CSS IntelliSense enabled for class suggestions

## React/Next.js Conventions
- Use App Router (not Pages Router)
- Server Components by default (add `'use client'` only when needed)
- Path aliases: Use `@/` for imports from `src/` directory
