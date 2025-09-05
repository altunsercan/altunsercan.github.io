# Task 2: Configure Content Collections

## Objective
Set up Astro Content Collections for blog posts, portfolio items, and documentation.

## Current Context
- Gridsome uses `@gridsome/source-filesystem` to process markdown files
- Content types: Post (blog), PortfolioItem (portfolio), Documentation (docs)
- Current structure:
  - Blog: `blog/**/*.md` with tags
  - Portfolio: `portfolio/**/*.md` with tags  
  - Docs: `docs/*.md`

## Content Schemas
Define schemas for each collection:

### Blog Posts (`src/content/blog/`)
- title: string
- date: date
- summary: string
- tags: array of strings
- path: slug string

### Portfolio Items (`src/content/portfolio/`)
- title: string
- date: date
- summary: string
- tags: array of strings
- path: slug string
- featured_image: optional string

### Documentation (`src/content/docs/`)
- title: string
- description: string
- path: slug string

## Tasks to Complete
1. Create `src/content/config.ts` with Zod schemas
2. Set up content collections structure
3. Migrate existing markdown files to new locations
4. Update frontmatter to match schemas
5. Test content collection queries

## Expected Deliverables
- Functional content collections with type safety
- Migrated content files in correct structure
- Working collection queries for development