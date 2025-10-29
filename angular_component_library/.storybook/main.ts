import type { StorybookConfig } from 'storybook';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  stories: [
    'projects/ocean-ui/src/lib/**/*.stories.ts'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  docs: {
    defaultName: 'Docs',
  },
};

export default config;
