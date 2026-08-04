import NextLink from "next/link";
import { Link } from "@/components/ui/Link";

const footerLinks = [
  { href: "/telefono-de-interes", label: "teléfono de interés" },
  { href: "/callejero", label: "callejero" },
  { href: "/como-llegar", label: "cómo llegar" },
] as const;

type FooterProps = {
  className?: string;
};

/** Footer — Figma node 55:1730 */
export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={[
        "flex w-full flex-col items-center justify-center gap-40",
        "border-t border-solid border-neutral-200 bg-neutral-100",
        "px-16 py-40",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav
        className="flex flex-wrap items-center justify-center gap-32 sm:gap-60"
        aria-label="Enlaces del pie"
      >
        {footerLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <NextLink
        href="/"
        className="font-dm-serif text-center text-[24px] leading-6 text-neutral-500 whitespace-nowrap"
      >
        San Bartolomé de Pinares
      </NextLink>

      <p className="font-montserrat text-center text-[14px] leading-6 font-normal text-neutral-500">
        {year}
      </p>
    </footer>
  );
}
