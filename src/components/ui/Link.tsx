import NextLink from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

const baseClassName = [
  "inline-block font-montserrat",
  "text-[length:var(--size-14)] leading-[var(--line-height-24)]",
  "tracking-[var(--letter-spacing-2)] uppercase whitespace-nowrap",
  "transition-colors duration-200",
  "hover:font-bold hover:text-link-hover",
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-500",
].join(" ");

export type LinkProps = Omit<
  ComponentPropsWithoutRef<typeof NextLink>,
  "children" | "className"
> & {
  children: ReactNode;
  className?: string;
  /** Estado selected de Figma (ruta activa) */
  selected?: boolean;
};

/** Link de navegación — Figma node 55:2605 (Default / selected / hover) */
export function Link({
  children,
  className,
  selected = false,
  ...props
}: LinkProps) {
  const classes = [
    baseClassName,
    selected
      ? "font-bold text-link-selected"
      : "font-normal text-link-default",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <NextLink className={classes} {...props}>
      {children}
    </NextLink>
  );
}
