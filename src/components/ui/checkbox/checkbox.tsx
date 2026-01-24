import { Indicator, Root } from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { CheckIcon } from '../icons'
import { Typography } from '../typography'
import s from './checkbox.module.scss'

type CheckboxProps = {
  className?: string
  disabled?: boolean
  name: string
  label?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (value: boolean | 'indeterminate') => void
  required?: boolean
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  const {
    className,
    disabled = false,
    name,
    label,
    checked,
    defaultChecked = false,
    onCheckedChange,
    required = false,
  } = props

  return (
    <div className={clsx(s.wrapper, disabled && s.disabled, className)} data-disabled={disabled}>
      <Root
        ref={ref}
        className={s.Root}
        checked={checked}
        defaultChecked={defaultChecked}
        id={name}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
        required={required}
      >
        <Indicator className={s.Indicator}>
          <CheckIcon size={18} />
        </Indicator>
      </Root>
      {label && (
        <Typography variant="body2" as="label" htmlFor={name} className={s.Label}>
          {label}
        </Typography>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'
