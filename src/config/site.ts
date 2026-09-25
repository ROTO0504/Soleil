export const SITE = {
  name: "ソレイユ音楽教室",
  description: "音楽を一生の楽しみに。年中から中学生までのバイオリン・ピアノと、大人のためのバイオリンサロン。一人ひとりのペースで音楽を楽しむ力を育てます。",
  lang: "ja",
  email: "",
  phone: "",
  bookingUrl: "",
  // LINE公式アカウントの友だち追加URL（例: https://lin.ee/xxxxxxx）
  lineUrl: "",
  // 教室の場所（詳しい住所は出さず、区まで表示）
  address: "名古屋市中川区",
} as const;
export type NavItem = { label: string; href: string };
export const NAV_ITEMS: NavItem[] = [
  { label: "教室について", href: "/#about" },
  { label: "レッスン", href: "/#lessons" },
  { label: "コース・料金", href: "/#courses" },
  { label: "よくあるご質問", href: "/#faq" },
];
