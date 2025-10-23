# Project Overview - Pocket

## Purpose
Next.js web application project initialized with `create-next-app`. Currently in initial development stage.

## Tech Stack
- **Framework**: Next.js 15.3.2 (App Router)
- **React**: 19.0.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Linting**: ESLint 9 with `eslint-config-next`
- **Formatting**: Prettier with `prettier-plugin-tailwindcss`
- **Node Version**: 20+

## Key Features
- TypeScript strict mode enabled
- Path aliases: `@/*` maps to `./src/*`
- Geist font family (next/font optimization)
- VSCode integration with auto-format on save

## Project Structure
```
pocket/
├── src/
│   └── app/           # App Router pages and layouts
│       ├── layout.tsx # Root layout
│       ├── page.tsx   # Home page
│       ├── globals.css # Global styles
│       └── favicon.ico
├── public/            # Static assets
├── .vscode/           # VSCode settings
├── eslint.config.mjs  # ESLint configuration
├── tsconfig.json      # TypeScript configuration
├── next.config.ts     # Next.js configuration
└── .prettierrc        # Prettier configuration
```

## Development Server
- Runs on: http://localhost:3000
- Uses Turbopack for fast refresh
