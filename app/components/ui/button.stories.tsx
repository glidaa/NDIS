import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { UploadIcon } from "lucide-react";

const meta = {
  title: "Components/UI/Button",
  component: Button,
  args: {
    children: "Button",
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [{ name: "dark", value: "#22272B" }],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const OutlineDark: Story = {
  args: {
    variant: "dark-outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      <UploadIcon className="w-5 h-5 mt-[-3px]" viewBox="0 0 24 24" />
      {args.children}
    </Button>
  ),
};

export const WithIconOnRight: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      {args.children}
      <UploadIcon className="w-5 h-5 mt-[-3px]" viewBox="0 0 24 24" />
    </Button>
  ),
};

export const Light: Story = {
  args: {
    variant: "light",
  },
};

export const OutlineLight: Story = {
  args: {
    variant: "light-outline",
  },
};

export const LightWithIcon: Story = {
  args: { variant: "light" },
  render: (args) => (
    <Button {...args}>
      <UploadIcon className="w-5 h-5 mt-[-3px]" viewBox="0 0 24 24" />
      {args.children}
    </Button>
  ),
};

export const LightDisabled: Story = {
  args: { variant: "light", disabled: true },
  render: (args) => (
    <Button {...args}>
      <UploadIcon className="w-5 h-5 mt-[-3px]" viewBox="0 0 24 24" />
      {args.children}
    </Button>
  ),
};

export const White: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    variant: "white",
  },
};

export const WhiteWithIcon: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },

  args: { variant: "white" },
  render: (args) => (
    <Button {...args}>
      <UploadIcon className="w-5 h-5 mt-[-3px]" viewBox="0 0 24 24" />
      {args.children}
    </Button>
  ),
};

export const WhiteDisabled: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },

  args: {
    variant: "white",
    disabled: true,
  },
};

export const Green: Story = {
  args: {
    variant: "green",
  },
};

export const GreenWithIcon: Story = {
  args: { variant: "green" },
  render: (args) => (
    <Button {...args}>
      <UploadIcon className="w-5 h-5 mt-[-3px]" viewBox="0 0 24 24" />
      {args.children}
    </Button>
  ),
};

export const GreenDisabled: Story = {
  args: {
    variant: "green",
    disabled: true,
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
  },
  render: (args) => (
    <Button {...args}>
      <UploadIcon className="w-5 h-5" viewBox="0 0 24 24" />
      {args.children}
    </Button>
  ),
};
