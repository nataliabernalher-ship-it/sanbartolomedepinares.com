import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const buttonClassName = [
  "inline-flex items-center justify-center",
  "rounded-xs border border-solid border-neutral-500 bg-transparent",
  "px-36 py-20",
  "font-bad-script text-[length:var(--size-20)] leading-[var(--line-height-24)] text-neutral-600 whitespace-nowrap",
  "transition-colors duration-200",
  "hover:border-transparent hover:bg-secondary-400",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500",
].join(" ");

type CommonProps = {
  children?: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** Botón outline — Figma node 38:124 (Default / hover) */
export function Button({
  children = "Saber más",
  className,
  ...props
}: ButtonProps) {
  const classes = className
    ? `${buttonClassName} ${className}`
    : buttonClassName;

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
