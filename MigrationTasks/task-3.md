# Task 3: Migrate Core Layout and Base Styles

## Objective
Convert Gridsome's Default.vue layout and CSS setup to Astro.

## Current Context
- Main layout: `src/layouts/Default.vue`
- CSS: Tailwind v1 with custom configuration in `tailwind.config.js`
- Custom CSS: `src/css/main.css` and `src/css/github-markdown.css`
- Font: Nunito Sans from Google Fonts

## Current Tailwind Config Features
- CSS custom properties for theming (dark/light mode)
- Extended spacing, border widths
- Custom color palette using CSS variables
- Container padding configuration

## Tasks to Complete
1. Create `src/layouts/BaseLayout.astro` based on Default.vue
2. Migrate Tailwind configuration to v3+ compatible syntax
3. Update CSS custom properties for theming
4. Set up global styles and markdown styling
5. Configure font loading (Nunito Sans)
6. Ensure responsive design patterns work
7. Test dark/light theme functionality

## Expected Deliverables
- Functional base layout with header/footer
- Updated Tailwind config with theme support
- Working responsive design
- Proper font loading

## Notes
- Maintain existing visual design
- Ensure theme switcher compatibility
- Keep sidebar and navigation structure