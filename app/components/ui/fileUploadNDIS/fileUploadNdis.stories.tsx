import type { Meta, StoryObj } from '@storybook/react';

import { FileUploadNDIS } from '.';

const meta: Meta<typeof FileUploadNDIS> = {
  title: "Components/UI/FileUploadNDIS",
  component: FileUploadNDIS,
};

export default meta;
type Story = StoryObj<typeof FileUploadNDIS>;

export const Default: Story = {
  args: {
    title: 'Upload drivers license',
    text: 'Formats accepted: JPG, PNG or PDF File size must not exceed 350MB',
    buttonLabel: 'Select file',
    variant: 'default'
  }
};