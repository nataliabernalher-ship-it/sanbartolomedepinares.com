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

/** Footer — Figma node 106:848 (Default / Variant2 móvil) */
export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={[
        "relative flex w-full flex-col items-center justify-center gap-40",
        "border-t border-solid border-neutral-200 bg-neutral-100",
        "overflow-hidden px-16 py-16 lg:pt-40 lg:pb-16",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav
        className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-60"
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
        className="font-dm-serif text-center text-[length:var(--logo-footer-size-mobile)] leading-6 text-neutral-500 lg:text-[length:var(--logo-footer-size-desktop)]"
      >
        San Bartolomé de Pinares
      </NextLink>

      <div className="flex h-[55px] items-center justify-center gap-[10px]">
        <p className="font-montserrat flex items-center gap-2 overflow-hidden px-4 py-[3px] text-center text-[14px] leading-6 font-normal text-neutral-500">
          <span>Creado y diseñado por N&amp;D con</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/heart.svg"
            alt=""
            width={20}
            height={18}
            className="h-[18px] w-5 shrink-0"
            aria-hidden
          />
        </p>
        <p className="font-montserrat text-center text-[14px] leading-6 font-normal text-neutral-500">
          2026
        </p>
      </div>
    </footer>
  );
}
