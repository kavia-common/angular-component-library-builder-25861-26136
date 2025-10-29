import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../projects/ocean-ui/src/lib/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
  ],
  // Explicitly pin to webpack5 builder to avoid builder-vite selection
  core: { builder: '@storybook/builder-webpack5' },
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // No vite-related configuration here
};

export default config;
