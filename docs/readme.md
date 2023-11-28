# Meta Dashboard Development

Objective: User dashboard with real-time forex data via metaapi.

- [x] Init with Create React App.
- [x] Install dependencies: React Router, Axios, Redux, Material-UI.
- [x] Set up React Router.
- [x] Real-time data implementation:
  - [x] Connect MetaApi.
  - [x] Fetch and update UI with trades.
- [x] Create `src/services/metaApiService.js`.
- [x] Create `src/pages/Dashboard.js`, `src/pages/Login.js`.
- [x] Develop trade table component:
  - [x] Define columns: Symbol, Type, Volume, Profit, Swap.
  - [x] Add sorting, filtering.
- [ ] Customize 'Isomorphic' Template:
  - [x] Install template.
  - [x] Review features.
  - [x] Integrate existing code:
          - [x] Understand structure.
          - [x] Create new page for testing table. isomorphic/src/app/(hydrogen)/positions/page.tsx
          - [ ] create the table component as per the isomorphic template guide.  See `docs/howto_table.md` ONLY use isomorphic provided components,styles, methods etc.
          - [ ] Move `src/services/metaApiService.js` to inside the approproate place in the isomorphic folder
          - [ ] Refactor data-fetching.
          - [ ] Test integration.
          - [ ] Update routing.
          - [ ] Feedback and iteration.
  - [ ] Integrate API services.
  - [ ] Customize components, pages.
  - [ ] Apply branding, styling.
  - [ ] Update routing, navigation.
  - [ ] Test thoroughly.
  - [ ] Deploy.
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