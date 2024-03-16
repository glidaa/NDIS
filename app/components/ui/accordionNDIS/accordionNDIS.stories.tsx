import type { Meta, StoryObj } from '@storybook/react';

import { AccordionNDIS } from '.';

const meta: Meta<typeof AccordionNDIS> = {
  title: "Components/UI/AccordionNDIS",
  component: AccordionNDIS,
};

export default meta;
type Story = StoryObj<typeof AccordionNDIS>;

export const Default: Story = {
  args: {
    title: 'Writing for inclusivity',
    text: 'Australia is one of the most culturally diverse countries in the world so it\'s important to write for people from all backgrounds.',
    size: 'xl'
  }
};