# Angular + Ocean UI Library

This workspace contains:
- The Angular demo application (port 3000).
- The Ocean UI component library at projects/ocean-ui using Angular Material.
- Storybook configuration for visual tests.

Quick start:
1) npm install
2) npm run build:lib  # build the library
3) npm run storybook  # starts Storybook at http://localhost:6006
4) npm start          # run demo app (shows components)

Storybook targets:
- App: ng run angular:storybook (http://localhost:6006)
- App build: ng run angular:build-storybook (static export to storybook-static)
- Library: ng run ocean-ui:storybook (http://localhost:6007)
- Library build: ng run ocean-ui:build-storybook (static export to dist/storybook/ocean-ui)

Important:
- All Angular packages use the exact same version. This repo pins Angular core + Material/CDK to 19.2.1.
- Node compatibility: Node 18.x
- If you change Angular versions, update ALL @angular/* packages to the same exact version and re-install.
