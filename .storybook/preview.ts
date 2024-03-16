import "../styles/tailwind.css"
import "../styles/storybook.css"
import type { Preview } from "@storybook/react";
import { decorators } from '../app/components/layout/root-layout'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators
};

export default preview;
