import clsx from 'clsx'
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  className?: string
  icon?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    variant = 'primary',
    fullWidth,
    className,
    as: Component = 'button',
    icon,
    children,
    ...rest
  } = props

  return (
    <Component
      className={clsx(
        s.button,
        s[variant],
        icon && s.withIcon,
        fullWidth && s.fullWidth,
        className
      )}
      {...rest}
    >
      {icon && icon}
      {children}
    </Component>
  )
}
