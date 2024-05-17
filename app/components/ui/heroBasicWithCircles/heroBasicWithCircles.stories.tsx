import type { Meta, StoryObj } from '@storybook/react';

import { HeroBasicWithCirclesPuckConfig, HeroBasicWithCircles } from '.';

const meta: Meta<typeof HeroBasicWithCircles> = {
  title: "Components/UI/Heros/HeroBasicWithCircles",
  component: HeroBasicWithCircles,
};

export default meta;
type Story = StoryObj<typeof HeroBasicWithCircles>;

export const Default: Story = {
  args: HeroBasicWithCirclesPuckConfig.defaultProps
};