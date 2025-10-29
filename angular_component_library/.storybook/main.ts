import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  stories: [
    // Discover stories inside the Ocean UI library
    '../projects/ocean-ui/src/lib/**/*.stories.ts'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  docs: {
    autodocs: 'tag'
  }
};

export default config;
