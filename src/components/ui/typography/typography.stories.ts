import type { Meta, StoryObj } from '@storybook/react-vite'

import { Typography } from './typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
  },
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    variant: 'h4',
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
  },
}
