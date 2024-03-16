import type { Meta, StoryObj } from '@storybook/react';

import { CardNDISWithDate } from '.';

const meta: Meta<typeof CardNDISWithDate> = {
  title: "Components/UI/Cards/CardNDISWithDate",
  component: CardNDISWithDate,
};

export default meta;
type Story = StoryObj<typeof CardNDISWithDate>;

export const Default: Story = {
  args: {
    category: 'Family',
    date: "2 Sep 2020",
    title: "Active kids",
    text: "$100 voucher for children's sport, fitness and recreation.",
    variant: "major"
  }
};