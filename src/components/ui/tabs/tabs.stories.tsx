import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Tabs } from './tabs'
const logAction =
  (message: string) =>
  (...args: any[]) => {
    console.log(message, ...args)
  }
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    tabs: [
      { label: 'Switcher1', value: 'Switcher1' },
      { label: 'Switcher2', value: 'Switcher2' },
      { label: 'Switcher3', value: 'Switcher3' },
      { label: 'Switcher4', value: 'Switcher4', disabled: true },
    ],
    onValueChange: logAction('Tab changed:'),
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация вкладок',
    },
    activationMode: {
      control: 'radio',
      options: ['automatic', 'manual'],
      description: 'Режим активации вкладок',
    },
    loop: {
      control: 'boolean',
      description: 'Зацикленная навигация по клавиатуре',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA-лейбл для доступности',
    },
    tabs: {
      control: 'object',
      description: 'Массив вкладок',
    },
    value: {
      control: { type: 'select' },
      options: ['Switcher1', 'Switcher2', 'Switcher3', 'Switcher4'],
      description: 'Текущая активная вкладка (контролируемый режим)',
    },
    defaultValue: {
      control: { type: 'select' },
      options: ['Switcher1', 'Switcher2', 'Switcher3', 'Switcher4'],
      description: 'Вкладка по умолчанию (неконтролируемый режим)',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS-классы',
    },
    onValueChange: {
      action: 'onValueChange',
      description: 'Колбэк при изменении вкладки',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Switcher2',
  },
}

export const DisabledTab: Story = {
  args: {
    tabs: [
      { label: 'Активная вкладка', value: 'tab1' },
      { label: 'Отключенная вкладка', value: 'tab2', disabled: true },
      { label: 'Еще одна активная', value: 'tab3' },
    ],
  },
  name: 'С отключенной вкладкой',
}

export const ManualActivation: Story = {
  args: {
    activationMode: 'manual',
    tabs: [
      { label: 'Первая', value: 'first' },
      { label: 'Вторая', value: 'second' },
      { label: 'Третья', value: 'third' },
    ],
  },
  name: 'Ручная активация',
}

export const NoLoop: Story = {
  args: {
    loop: false,
    tabs: [
      { label: 'Первая', value: 'first' },
      { label: 'Средняя', value: 'middle' },
      { label: 'Последняя', value: 'last' },
    ],
  },
  name: 'Без зацикливания',
}

export const LongLabels: Story = {
  args: {
    tabs: [
      { label: 'Очень длинный заголовок вкладки', value: 'long1' },
      { label: 'Еще один пример длинного заголовка', value: 'long2' },
      { label: 'Короткий', value: 'short' },
    ],
  },
  name: 'Длинные заголовки',
}

export const WithCustomAriaLabel: Story = {
  args: {
    ariaLabel: 'Навигация по категориям товаров',
    tabs: [
      { label: 'Электроника', value: 'electronics' },
      { label: 'Одежда', value: 'clothing' },
      { label: 'Книги', value: 'books' },
    ],
  },
  name: 'С кастомным ARIA-лейблом',
}

export const SingleTab: Story = {
  args: {
    tabs: [{ label: 'Единственная вкладка', value: 'only' }],
  },
  name: 'Одна вкладка',
}

// Интерактивный пример с контентом
const TabsWithContent = (props: any) => {
  const [activeTab, setActiveTab] = useState(props.defaultValue || props.tabs[0]?.value)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px' }}>
      <Tabs {...props} value={activeTab} onValueChange={setActiveTab} />

      <div
        style={{
          padding: '20px',
          border: '1px solid #e5e5e5',
          marginTop: '20px',
          borderRadius: '8px',
          background: '#f9f9f9',
        }}
      >
        {activeTab === 'Switcher1' && (
          <div>
            <h3 style={{ marginTop: 0 }}>Контент для Switcher1</h3>
            <p>Это содержимое отображается, когда активен Switcher1.</p>
          </div>
        )}
        {activeTab === 'Switcher2' && (
          <div>
            <h3 style={{ marginTop: 0 }}>Контент для Switcher2</h3>
            <p>Эта вкладка показывает другой контент для второго варианта.</p>
          </div>
        )}
        {activeTab === 'Switcher3' && (
          <div>
            <h3 style={{ marginTop: 0 }}>Контент для Switcher3</h3>
            <p>Третья вкладка имеет свою уникальную область контента.</p>
          </div>
        )}
        {activeTab === 'Switcher4' && (
          <div style={{ opacity: 0.5 }}>
            <h3 style={{ marginTop: 0 }}>Контент отключенной вкладки</h3>
            <p>Этот контент не должен быть виден, так как вкладка отключена.</p>
          </div>
        )}
        {!activeTab && <p>Вкладка не выбрана</p>}
      </div>

      <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
        Активная вкладка: <strong>{activeTab}</strong>
      </div>
    </div>
  )
}

export const WithContentExample: Story = {
  render: args => <TabsWithContent {...args} />,
  args: {
    tabs: [
      { label: 'Switcher1', value: 'Switcher1' },
      { label: 'Switcher2', value: 'Switcher2' },
      { label: 'Switcher3', value: 'Switcher3' },
    ],
  },
  name: 'Пример с контентом',
}

// Контролируемый пример
export const ControlledTabs: Story = {
  render: function Render(args) {
    const [value, setValue] = useState('Switcher2')

    return (
      <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: '600px' }}>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setValue('Switcher1')}
            style={{
              marginRight: '8px',
              padding: '8px 16px',
              background: value === 'Switcher1' ? '#007bff' : '#f0f0f0',
              color: value === 'Switcher1' ? 'white' : 'black',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Выбрать Switcher1
          </button>
          <button
            onClick={() => setValue('Switcher3')}
            style={{
              padding: '8px 16px',
              background: value === 'Switcher3' ? '#007bff' : '#f0f0f0',
              color: value === 'Switcher3' ? 'white' : 'black',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Выбрать Switcher3
          </button>
        </div>
        <Tabs {...args} value={value} onValueChange={setValue} />
        <div style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Программно управляемое значение: <strong>{value}</strong>
        </div>
      </div>
    )
  },
  args: {
    tabs: [
      { label: 'Switcher1', value: 'Switcher1' },
      { label: 'Switcher2', value: 'Switcher2' },
      { label: 'Switcher3', value: 'Switcher3' },
    ],
  },
  name: 'Контролируемые вкладки',
}

export const AllDisabled: Story = {
  args: {
    tabs: [
      { label: 'Вкладка 1', value: 'tab1', disabled: true },
      { label: 'Вкладка 2', value: 'tab2', disabled: true },
      { label: 'Вкладка 3', value: 'tab3', disabled: true },
    ],
  },
  name: 'Все вкладки отключены',
}
