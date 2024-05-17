import type { Meta, StoryObj } from '@storybook/react';

import { HeroBasicWithStripesPuckConfig, HeroBasicWithStripes } from '.'; 

const meta: Meta<typeof HeroBasicWithStripes> = {
  title: "Components/UI/Heros/HeroBasicWithStripes",
  component: HeroBasicWithStripes,
};

export default meta;
type Story = StoryObj<typeof HeroBasicWithStripes>;

export const Default: Story = {
  args: HeroBasicWithStripesPuckConfig.defaultProps
};