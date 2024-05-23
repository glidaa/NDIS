import type { Meta, StoryObj } from '@storybook/react';

import { HeroWhyChooseUs, HeroWhyChooseUsPuck } from '.';

const meta: Meta<typeof HeroWhyChooseUs> = {
  title: "Components/UI/Heros/HeroWhyChooseUs",
  component: HeroWhyChooseUs,
};

export default meta;
type Story = StoryObj<typeof HeroWhyChooseUs>;

export const Default: Story = {
  args: HeroWhyChooseUsPuck.defaultProps
};