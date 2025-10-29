import type { Preview } from 'storybook';
// Ensure global Ocean theme styles are applied to stories
import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: ['Ocean', ['Toolbar', 'Sidebar', 'Button', 'Fields', 'Tabs', 'Table', 'Badge']],
      },
    },
  },
};

export default preview;
