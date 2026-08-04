import { IconBox, type IconBoxColor } from "@/components/ui/IconBox";

export type IconBoxItem = {
  label: string;
  color: IconBoxColor;
  href?: string;
};

export type IconBoxSectionProps = {
  items: IconBoxItem[];
  className?: string;
};

/** Fila de IconBox — Figma `Iconbox-section` */
export function IconBoxSection({ items, className }: IconBoxSectionProps) {
  return (
    <section
      className={[
        "flex w-full justify-center px-12 py-60",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="grid w-full max-w-[1220px] grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <IconBox
            key={item.label}
            label={item.label}
            color={item.color}
            href={item.href}
            className="max-w-none justify-self-center"
          />
        ))}
      </div>
    </section>
  );
}
