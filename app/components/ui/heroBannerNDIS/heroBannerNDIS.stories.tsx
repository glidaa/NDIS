import type { Meta, StoryObj } from '@storybook/react';

import { HeroBannerNDIS } from '.';

const meta: Meta<typeof HeroBannerNDIS> = {
  title: "Components/UI/Cards/HeroBannerNDIS",
  component: HeroBannerNDIS,
};

export default meta;
type Story = StoryObj<typeof HeroBannerNDIS>;

export const Default: Story = {
  args: {
    title: 'Helping you deliver great government services',
    text: 'Find the building blocks for creating user-centred digital services, as well as policy, tools and guidance',
    variant: 'white'
  }
};