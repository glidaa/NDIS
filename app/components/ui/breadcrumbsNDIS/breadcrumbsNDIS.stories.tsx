import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbsNDIS } from '.';

const meta: Meta<typeof BreadcrumbsNDIS> = {
  title: "Components/UI/BreadcrumbsNDIS",
  component: BreadcrumbsNDIS,
};

export default meta;
type Story = StoryObj<typeof BreadcrumbsNDIS>;

export const Default: Story = {
  args: {
    breadcrumbsLabels: [{ label: 'Home' }, { label: 'Parent' }, { label: 'Parent' }, { label: 'Parent' }, { label: 'Current Page' }]
  }
};