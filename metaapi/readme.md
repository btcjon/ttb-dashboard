# TTB Dashboard Development

Objective: User dashboard with real-time forex data via metaapi using 'isomorphic' react template

- [x] Real-time data implementation:
- [x] Create `src/services/metaApiService.js`.
  - [ ] test for function `src/services/metaApiService.js`.
- [ ] Develop trade table component:
  - [x] Define columns: Symbol, Type, Volume, Profit, Swap.
- [ ] Prepare 'Isomorphic' Template Page and Table:
          - [x] Understand structure.
          - [x] Create new page for testing table. src/app/(hydrogen)/positions/page.tsx (may need to fix code?)
          - [ ] create the table component as per the isomorphic template guide.  See `docs/howto_table.md` ONLY use isomorphic provided components,styles, methods etc.
- [ ] Populate table with metaapi data:
          - [ ] Refactor metaApiService.js data-fetching as needed.
          - [ ] Test integration.
          - [ ] Update routing.
          - [ ] Use built-in template features for sorting, filtering.
          - [ ] Feedback and iteration.
  - [ ] Customize components, pages.
  - [ ] Add side nav like on main page, routing, navigation.
  - [ ] Apply branding, styling.
  - [ ] Test thoroughly.
  - [ ] Deploy onto vercel
  - [ ] Iterate based on feedback.

**Complete tasks as done. Modify todo as needed.

## Isomorphic Template Guide

- **Install**: See `docs/howto_Introduction.md`.
- **Structure**: See `docs/howto_iso_structure.txt`.
- **New Pages**: See `docs/howto_new_page.md`.
- **Routing**: See `docs/howto_nav_routing.md`.
- **Layouts**: See `docs/howto_layout.md`.
- **Tables**: See `docs/howto_table.md`.
- **Customize**: See `docs/howto_nav_routing.md`.
- **Support**: See `docs/howto_Introduction.md`.

Guide for developers to integrate and customize Isomorphic for dashboards.