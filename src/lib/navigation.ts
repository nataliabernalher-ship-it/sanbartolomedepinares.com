export const navItems = [
  { href: "/", label: "inicio" },
  { href: "/el-municipio", label: "el municipio" },
  { href: "/lugares-de-interes", label: "lugares de interés" },
  { href: "/fiestas-y-tradiciones", label: "fiestas y tradiciones" },
  { href: "/historia", label: "historia" },
] as const;

export type NavItem = (typeof navItems)[number];

export function isNavItemSelected(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
