import type { Preview } from '@storybook/angular';
import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ['Ocean', ['Toolbar', 'Sidebar', 'Button', 'Fields', 'Tabs', 'Table', 'Badge']]
      }
    }
  }
};

export default preview;
