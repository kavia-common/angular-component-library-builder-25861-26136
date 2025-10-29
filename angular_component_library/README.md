# Angular + Ocean UI Library

This workspace contains:
- The Angular demo application (port 3000).
- The Ocean UI component library at projects/ocean-ui using Angular Material.
- Storybook configuration for visual tests.

Quick start:
1) npm install
2) npm run build:lib  # build the library
3) npm run storybook  # starts Storybook at http://localhost:6006 via Storybook CLI
4) npm start          # run demo app (shows components)

Storybook usage (v8 CLI):
- Dev: npm run storybook  (http://localhost:6006)
- Build static: npm run build-storybook (outputs to storybook-static)

Notes:
- Storybook is configured via .storybook/main.ts using framework: { name: '@storybook/angular' }.
- Stories are discovered from: projects/ocean-ui/src/lib/**/*.stories.ts

Important:
- All Angular packages use the exact same version. This repo pins Angular core + Material/CDK to 19.2.1.
- Node compatibility: Node 18.x
- If you change Angular versions, update ALL @angular/* packages to the same exact version and re-install.
