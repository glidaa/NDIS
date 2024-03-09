import type { Meta, StoryObj } from '@storybook/react';

import { CardNDIS } from '.';

const meta: Meta<typeof CardNDIS> = {
  title: "Components/UI/Cards/CardNDIS",
  component: CardNDIS,
};

export default meta;
type Story = StoryObj<typeof CardNDIS>;

export const Default: Story = {
  args: {
    title: 'Active kids',
    text: '$100 voucher for children\'s sport, fitness and recreation.',
    variant: 'major'
  },
};