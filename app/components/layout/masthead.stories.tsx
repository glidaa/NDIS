import type { Meta, StoryObj } from "@storybook/react";

import { MastHead } from "./masthead";

const meta = {
  title: "Components/Layout/MasterHead",
  component: MastHead,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      values: [{ name: "dark", value: "#22272B" }],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof MastHead>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    className: "m-0 p-0 w-full",
  },
};
