"use client";

import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Link } from "@/components/ui/Link";
import { isNavItemSelected, navItems } from "@/lib/navigation";

type NavigationProps = {
  className?: string;
};

/** Navegación — Figma node 38:92 (desktop / mobile) */
export function Navigation({ className }: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={[
        "relative w-full bg-neutral-100",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex w-full items-center justify-between px-16 py-24 lg:p-40">
        <NextLink
          href="/"
          className="font-dm-serif shrink-0 text-center text-[length:var(--logo-nav-size-mobile)] leading-6 text-neutral-600 whitespace-nowrap lg:text-[length:var(--logo-nav-size-desktop)]"
        >
          San Bartolomé de Pinares
        </NextLink>

        <nav
          className="hidden items-center gap-32 lg:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              selected={isNavItemSelected(pathname, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-6 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-[12px] w-[18px] overflow-hidden">
            <Image
              src="/icons/menu.svg"
              alt=""
              width={18}
              height={12}
              className="size-full"
              unoptimized
            />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id={menuId}
          className="flex flex-col gap-24 border-t border-neutral-200 px-16 py-24 lg:hidden"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              selected={isNavItemSelected(pathname, item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
