import type { Preview } from '@storybook/angular';

// Global Storybook configuration for Angular stories.
// Keeping default settings minimal and compatible with Storybook v8.
const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Ocean', ['Toolbar', 'Sidebar', 'Button', 'Tabs', 'Table', 'Badge', 'Fields']]
      }
    }
  },

  tags: ['autodocs', 'autodocs']
};

export default preview;
