import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  stories: [
    // Include library stories
    '../projects/ocean-ui/src/lib/**/*.stories.ts'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  docs: {
    autodocs: 'tag'
  }
};

export default config;
