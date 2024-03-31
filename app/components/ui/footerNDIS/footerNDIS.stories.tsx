import type { Meta, StoryObj } from '@storybook/react';

import { FooterNDIS } from '.';

const meta: Meta<typeof FooterNDIS> = {
  title: "Components/UI/FooterNDIS",
  component: FooterNDIS,
};

export default meta;
type Story = StoryObj<typeof FooterNDIS>;

export const Default: Story = {
  args: {
    footerTitle: 'We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their continued connection to their country and culture.',
    footerText: 'Copyright © 2019',
    footerLinks: [{ label: 'Google', link: 'https://www.google.com' }, { label: 'Facebook', link: 'https://www.facebook.com' }]
  }
};