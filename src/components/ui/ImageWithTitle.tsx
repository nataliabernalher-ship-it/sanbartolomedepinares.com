import Image from "next/image";
import NextLink from "next/link";

export type ImageWithTitleProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  className?: string;
};

/** Card imagen + título — Figma node 38:346 (`imageWithTitle`) */
export function ImageWithTitle({
  title,
  description,
  imageSrc,
  imageAlt = "",
  href,
  className,
}: ImageWithTitleProps) {
  const content = (
    <>
      <div className="relative mb-[-46px] aspect-[620/437] w-full shrink-0 overflow-hidden rounded-s">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 620px"
        />
      </div>
      <div className="relative z-10 flex w-4/5 flex-col items-center justify-center gap-4 rounded-xs bg-secondary-300 p-12 text-center text-neutral-600">
        <h3 className="font-montserrat w-full text-[length:var(--size-title-card)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-4)] uppercase">
          {title}
        </h3>
        <p className="font-lora w-full text-[length:var(--size-16)] leading-[var(--line-height-24)] font-normal tracking-[var(--letter-spacing-0)]">
          {description}
        </p>
      </div>
    </>
  );

  const classes = [
    "relative flex w-full max-w-[620px] flex-col items-center",
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

  return <article className={classes}>{content}</article>;
}
