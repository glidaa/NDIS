import type { Meta, StoryObj } from "@storybook/react";
import { SwitchButton } from "./switch-button";

const meta = {
  title: "Components/UI/SwitchButton",
  component: SwitchButton,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof SwitchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    options: ["Yes", "No"],
  },
};
