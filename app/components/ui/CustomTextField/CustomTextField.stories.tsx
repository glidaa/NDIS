import type { Meta, StoryObj } from '@storybook/react';

import { CustomTextField, CustomTextFieldPuckConfig } from '.';

const meta: Meta<typeof CustomTextField> = {
  title: "Components/UI/Inputs/TextField",
  component: CustomTextField,
};

export default meta;
type Story = StoryObj<typeof CustomTextField>;

export const Default: Story = {
  args: CustomTextFieldPuckConfig.defaultProps
};