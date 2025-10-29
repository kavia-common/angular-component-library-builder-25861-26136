import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    // App-level stories if any
    '../src/**/*.stories.@(ts|mdx)',
    // Ocean UI library stories
    '../projects/ocean-ui/src/lib/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  typescript: {
    check: false,
  },
};
export default config;
