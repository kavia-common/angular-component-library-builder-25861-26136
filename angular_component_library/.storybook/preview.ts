import type { Preview } from '@storybook/angular';

// Global CSS: load the Ocean theme so all components inherit CSS variables
import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' }
  }
};

export default preview;
