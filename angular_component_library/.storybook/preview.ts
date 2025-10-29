import type { Preview } from '@storybook/angular';

import '../projects/ocean-ui/src/lib/theme/ocean-theme.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: '#FFFFFF' },
        { name: 'Surface', value: '#F9FAFB' }
      ]
    }
  }
};

export default preview;
