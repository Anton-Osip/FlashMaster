import type { Meta, StoryObj } from '@storybook/react-vite'

import { LogOutIcon } from '../icons'
import { Button } from './'
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const DisabledPrimary: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Primary Button',
    disabled: true,
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Primary With Icon Button',
    disabled: false,
  },
  render: args => <Button {...args} icon={<LogOutIcon size={16} />} />,
}

export const DisabledPrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Primary With Icon Button',
    disabled: true,
  },
  render: args => <Button {...args} icon={<LogOutIcon size={16} />} />,
}

export const PrimaryFullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Full Width Button',
    disabled: false,
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const PrimaryAsLink: Story = {
  args: {
    variant: 'primary',
    children: 'Primary As Link Button',
    as: 'a',
    href: '#',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}

export const SecondaryPrimary: Story = {
  args: {
    variant: 'secondary',
    children: 'Disabled Secondary Button',
    disabled: true,
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary With Icon Button',
    disabled: false,
  },
  render: args => <Button {...args} icon={<LogOutIcon size={16} />} />,
}

export const DisabledSecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    children: 'Disabled Secondary With Icon Button',
    disabled: true,
  },
  render: args => <Button {...args} icon={<LogOutIcon size={16} />} />,
}

export const SecondaryFullWidth: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Full Width Button',
    disabled: false,
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
}

export const SecondaryAsLink: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary As Link Button',
    as: 'a',
    href: '#',
  },
}
