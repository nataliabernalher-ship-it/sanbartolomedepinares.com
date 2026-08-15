import Image from "next/image";
import NextLink from "next/link";

export type IconBoxColor = "green" | "coral" | "blue" | "grey";

const colorConfig: Record<
  IconBoxColor,
  { background: string; iconSrc: string }
> = {
  green: {
    background: "bg-secondary-300",
    iconSrc: "/icons/icon-box-green.svg",
  },
  coral: {
    background: "bg-accent-300",
    iconSrc: "/icons/icon-box-coral.svg",
  },
  blue: {
    background: "bg-primary-300",
    iconSrc: "/icons/icon-box-blue.svg",
  },
  grey: {
    background: "bg-neutral-200",
    iconSrc: "/icons/icon-box-grey.svg",
  },
};

export type IconBoxProps = {
  label: string;
  color?: IconBoxColor;
  /** Sustituye el icono por defecto de la variante de color */
  iconSrc?: string;
  href?: string;
  className?: string;
};

/** Icon box — Figma node 38:370 (green / coral / blue / grey) */
export function IconBox({
  label,
  color = "green",
  iconSrc,
  href,
  className,
}: IconBoxProps) {
  const config = colorConfig[color];
  const src = iconSrc ?? config.iconSrc;

  const content = (
    <>
      {href ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/icons/arrow-up-right.svg"
          alt=""
          width={12}
          height={12}
          className="pointer-events-none absolute top-20 right-[15.5px] size-3"
          aria-hidden
        />
      ) : null}
      <span className="relative size-14 shrink-0 overflow-hidden">
        <Image
          src={src}
          alt=""
          width={56}
          height={56}
          className="size-full"
          unoptimized
        />
      </span>
      <p className="font-montserrat w-full text-center text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-4)] text-neutral-600 uppercase">
        {label}
      </p>
    </>
  );

  const classes = [
    "relative flex w-full max-w-[290px] flex-col items-center gap-12 rounded-m px-24 py-20",
    config.background,
    href ? "transition-opacity hover:opacity-90" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <NextLink href={href} className={classes}>
        {content}
      </NextLink>
    );
  }

  return <div className={classes}>{content}</div>;
}
