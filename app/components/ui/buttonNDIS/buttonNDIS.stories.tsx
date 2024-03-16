import type { Meta, StoryObj } from '@storybook/react';

import { ButtonNDIS } from '.';

const meta: Meta<typeof ButtonNDIS> = {
  title: "Components/UI/ButtonNDIS",
  component: ButtonNDIS,
};

export default meta;
type Story = StoryObj<typeof ButtonNDIS>;

export const Default: Story = {
  args: {
    label: 'Button',
    variant: 'blue'
  }
};