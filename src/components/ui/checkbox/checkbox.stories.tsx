import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './checkbox'
const logAction =
  (message: string) =>
  (...args: any[]) => {
    console.log(message, ...args)
  }
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    onCheckedChange: logAction('on Checked Change'),
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Уникальное имя чекбокса',
    },
    label: {
      control: 'text',
      description: 'Текст метки чекбокса',
    },
    disabled: {
      control: 'boolean',
      description: 'Заблокирован ли чекбокс',
    },
    checked: {
      control: 'boolean',
      description: 'Состояние чекбокса (управляемое)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Начальное состояние чекбокса (неуправляемое)',
    },
    required: {
      control: 'boolean',
      description: 'Обязателен ли чекбокс для заполнения',
    },
    onCheckedChange: {
      description: 'Обработчик изменения состояния',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'default-checkbox',
    label: 'Чекбокс по умолчанию',
  },
}

export const WithoutLabel: Story = {
  args: {
    name: 'no-label-checkbox',
  },
}

export const WithLabel: Story = {
  args: {
    name: 'with-label-checkbox',
    label: 'Чекбокс с меткой',
  },
}

export const Checked: Story = {
  args: {
    name: 'checked-checkbox',
    label: 'Выбранный чекбокс',
    checked: true,
  },
}

export const Unchecked: Story = {
  args: {
    name: 'unchecked-checkbox',
    label: 'Невыбранный чекбокс',
    checked: false,
  },
}

export const Disabled: Story = {
  args: {
    name: 'disabled-checkbox',
    label: 'Заблокированный чекбокс',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked-checkbox',
    label: 'Заблокированный и выбранный чекбокс',
    disabled: true,
    checked: true,
  },
}

export const Required: Story = {
  args: {
    name: 'required-checkbox',
    label: 'Обязательный чекбокс',
    required: true,
  },
}

export const DefaultChecked: Story = {
  args: {
    name: 'default-checked-checkbox',
    label: 'Чекбокс с начальным состоянием',
    defaultChecked: true,
  },
}

// Интерактивный пример
export const Interactive: Story = {
  args: {
    name: 'interactive-checkbox',
    label: 'Кликните меня',
  },
  parameters: {
    docs: {
      description: {
        story: 'Попробуйте кликнуть на чекбокс, чтобы увидеть изменение состояния',
      },
    },
  },
}

// Группа чекбоксов
export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox
        name="option1"
        label="Опция 1"
        onCheckedChange={checked => console.log('Опция 1:', checked)}
      />
      <Checkbox
        name="option2"
        label="Опция 2"
        checked={true}
        onCheckedChange={checked => console.log('Опция 2:', checked)}
      />
      <Checkbox
        name="option3"
        label="Опция 3 (заблокирована)"
        disabled={true}
        onCheckedChange={checked => console.log('Опция 3:', checked)}
      />
      <Checkbox
        name="option4"
        label="Опция 4 (заблокирована и выбрана)"
        disabled={true}
        checked={true}
        onCheckedChange={checked => console.log('Опция 4:', checked)}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Пример группы чекбоксов с различными состояниями',
      },
    },
  },
}
