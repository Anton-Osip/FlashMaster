import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import s from "./typography.module.scss";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body1"
  | "body2"
  | "subtitle1"
  | "subtitle2"
  | "caption"
  | "overline"
  | "link1"
  | "link2";

export type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  variant?: TypographyVariant;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Typography = <T extends ElementType = "p">(
  props: TypographyProps<T>,
) => {
  const { variant = "Body 1", className, as: Component = "p", ...rest } = props;

  return (
    <Component
      className={clsx(s.typography, s[variant], className)}
      {...rest}
    />
  );
};
