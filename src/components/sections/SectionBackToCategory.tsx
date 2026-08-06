import { Button } from "@/components/ui/Button";

export type SectionBackToCategoryProps = {
  href: string;
  label: string;
  className?: string;
};

/** CTA al índice de la categoría padre — al final de subpáginas */
export function SectionBackToCategory({
  href,
  label,
  className,
}: SectionBackToCategoryProps) {
  return (
    <section
      className={[
        "flex w-full items-center justify-center bg-neutral-100 px-12 py-40",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Button href={href} className="!text-[length:var(--size-16)]">
        {label}
      </Button>
    </section>
  );
}
