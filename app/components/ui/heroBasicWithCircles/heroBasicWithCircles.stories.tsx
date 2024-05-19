import type { Meta, StoryObj } from '@storybook/react';

import { HeroBasicWithCircles, HeroBasicWithCirclesComponent } from '.';

const meta: Meta<typeof HeroBasicWithCirclesComponent> = {
  title: "Components/UI/Heros/HeroBasicWithCircles",
  component: HeroBasicWithCirclesComponent,
};

export default meta;
type Story = StoryObj<typeof HeroBasicWithCirclesComponent>;

export const Default: Story = {
  args: HeroBasicWithCircles.defaultProps
};