import type { Preview } from '@storybook/angular';

// Import the theme CSS so components render with expected styles in Storybook
import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: ['Ocean', ['Toolbar', 'Sidebar', 'Button', 'Input', 'Select', 'Tabs', 'Table', 'Badge', 'Fields']],
      },
    },
  },
};

export default preview;
