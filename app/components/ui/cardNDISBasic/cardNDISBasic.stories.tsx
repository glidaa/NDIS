import type { Meta, StoryObj } from '@storybook/react';

import { CardNDISBasic } from '.';

const meta: Meta<typeof CardNDISBasic> = {
  title: "Components/UI/Cards/CardNDISBasic",
  component: CardNDISBasic,
};

export default meta;
type Story = StoryObj<typeof CardNDISBasic>;

export const Default: Story = {
  args: {
    title: 'Active kids',
    variant: 'blue'
  }
};