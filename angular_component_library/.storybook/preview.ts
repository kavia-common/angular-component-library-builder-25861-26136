import type { Preview } from '@storybook/angular';

import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical'
      }
    }
  }
};

export default preview;
