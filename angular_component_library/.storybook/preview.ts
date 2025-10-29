import type { Preview } from '@storybook/angular';

// Import the Ocean theme globally so stories have correct styles.
import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Ocean', ['Toolbar', 'Sidebar', 'Button', 'Input', 'Select', 'Tabs', 'Table', 'Badge', 'Fields']]
      }
    }
  }
};

export default preview;
