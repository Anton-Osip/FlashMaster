import { List, Root, Trigger } from '@radix-ui/react-tabs'
import clsx from 'clsx'
import { Typography } from '../typography'
import s from './tabs.module.scss'

export type Tab = {
  label: string
  value: string
  disabled?: boolean
}

type TabsProps = {
  ariaLabel?: string
  className?: string
  tabs: Tab[]
  defaultValue?: string
  onValueChange?: (value: string) => void
  value?: string
  orientation?: 'horizontal' | 'vertical'
  loop?: boolean
  activationMode?: 'automatic' | 'manual'
}

export const Tabs = (props: TabsProps) => {
  const {
    className,
    tabs,
    ariaLabel = 'Вкладки',
    defaultValue = tabs[0]?.value || '',
    value,
    onValueChange,
    orientation = 'horizontal',
    loop = true,
    activationMode = 'automatic',
  } = props

  if (!tabs.length) return null

  return (
    <Root
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
      data-orientation={orientation}
      className={clsx(s.Root, className)}
      activationMode={activationMode}
    >
      <List className={s.List} aria-label={ariaLabel} loop={loop}>
        {tabs.map(tab => (
          <Trigger
            key={tab.value}
            className={s.Trigger}
            value={tab.value}
            disabled={tab.disabled === true}
          >
            <Typography variant="body1" as="span">
              {tab.label}
            </Typography>
          </Trigger>
        ))}
      </List>
    </Root>
  )
}
