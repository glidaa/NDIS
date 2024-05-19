import type { Meta, StoryObj } from '@storybook/react';

import { HeroBasicWithStripes, HeroBasicWithStripesComponent } from '.'; 

const meta: Meta<typeof HeroBasicWithStripesComponent> = {
  title: "Components/UI/Heros/HeroBasicWithStripesComponent",
  component: HeroBasicWithStripesComponent,
};

export default meta;
type Story = StoryObj<typeof HeroBasicWithStripesComponent>;

export const Default: Story = {
  args: HeroBasicWithStripes.defaultProps
};