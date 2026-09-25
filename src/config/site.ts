export const SITE = {
  name: "Soleil",
  description: "Soleil official website",
  lang: "ja",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "ホーム", href: "/" },
  { label: "About", href: "/about" },
];
