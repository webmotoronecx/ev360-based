# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EV360 is a Next.js web application built with TypeScript, the App Router architecture, and Tailwind CSS.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure

This project uses Next.js App Router (not Pages Router). All routes and pages are located in the `app/` directory:

- `app/layout.tsx` - Root layout component that wraps all pages
- `app/page.tsx` - Homepage component (maps to `/`)
- `app/globals.css` - Global styles and Tailwind directives

To create new routes, add directories within `app/`. For example:
- `app/about/page.tsx` creates `/about` route
- `app/blog/[slug]/page.tsx` creates dynamic route `/blog/:slug`

### TypeScript Configuration

- **Strict mode enabled** - All TypeScript strict checks are active
- **Path aliases** - Use `@/*` to import from the root directory (e.g., `import Component from '@/components/Button'`)
- **Target**: ES2017

### Styling

- **Tailwind CSS v4** configured via PostCSS (`postcss.config.mjs`)
- Global styles in `app/globals.css`
- Font optimization using `next/font` with Geist and Geist Mono fonts

### Static Assets

Place static files in the `public/` directory. They're accessible from the root URL:
- `public/image.png` → `/image.png`

## File-based Routing

Next.js App Router uses file-based routing with special file conventions:
- `page.tsx` - Makes a route publicly accessible
- `layout.tsx` - Shared UI wrapper for a route segment
- `loading.tsx` - Loading UI using Suspense
- `error.tsx` - Error UI boundary
- `not-found.tsx` - 404 UI

## Server vs Client Components

By default, all components in the `app/` directory are React Server Components. Use `'use client'` directive at the top of files that need:
- Browser APIs (window, localStorage, etc.)
- Event handlers (onClick, onChange, etc.)
- React hooks (useState, useEffect, etc.)
- Context providers
