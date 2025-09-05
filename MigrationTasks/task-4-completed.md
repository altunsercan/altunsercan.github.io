# Task 4: Migrate Vue Components to Astro

## Objective
Convert existing Vue.js components to Astro components or maintain as Vue islands where needed.

## Current Components to Migrate

### Pure UI Components (Convert to Astro)
- `SideBar.vue` - Navigation sidebar
- `PaginationPosts.vue` - Pagination controls  
- `TransitionComponent.vue` - Page transitions (may need client:load)

### Interactive Components (Keep as Vue islands)
- `ThemeSwitcher.vue` - Theme toggle functionality
- `SearchInput.vue` - Search functionality using Vue-Fuse
- `SearchFocus.vue` - Search focus management
- `CounterComponent.vue` - Interactive counter

## Tasks to Complete
1. Analyze component dependencies and interactivity needs
2. Convert static components to `.astro` format
3. Maintain Vue components that require client-side state
4. Update component imports and usage patterns
5. Test client-side hydration for interactive components
6. Ensure proper prop passing and event handling

## Expected Deliverables
- Converted Astro components for static UI
- Working Vue islands for interactive features
- Updated component registry and imports
- Functional component interactions

## Notes
- Use `client:load`, `client:idle`, or `client:visible` directives appropriately
- Maintain existing component APIs where possible
- Test search functionality thoroughly