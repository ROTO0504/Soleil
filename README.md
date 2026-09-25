# ソレイユ音楽教室 Webサイト

A mobile-first music school website built with Astro and GSAP. The original ivory and brown palette is retained with a restrained text-only hero, rounded lesson cards, and a mobile quick navigation dock. No external images or web fonts are required.

## 開発

```sh
bun install
npm run dev
```

## 検証・ビルド

```sh
npm run build
npm run preview
```

`npm run build` はAstroの型チェックと静的サイトの生成を実行します。出力先は `dist/` です。

## 掲載情報の更新

- `src/config/site.ts`: 教室名、説明、メール、電話番号、予約URL、所在地
- `src/pages/index.astro`: レッスン、料金、FAQなどの掲載内容
- `src/styles/global.css`: 配色、レイアウト、レスポンシブ対応

教室名は `src/config/site.ts` の `name` で設定しています。体験レッスンのお申し込み・お問い合わせはLINEで受け付けます。`lineUrl` にLINE公式アカウントの友だち追加URLを設定すると、体験レッスンのご案内ページ（`/trial`）に友だち追加ボタンが表示されます。未設定の場合は「準備中」の案内を表示します。

子どものコースの月謝と年間回数はパンフレット記載値です。大人の料金・体験レッスンの料金・所在地など、資料にない情報は追加していません。

## Motion and responsive design

- `src/scripts/motion.ts`: GSAP intro timeline and ScrollTrigger section reveals.
- `src/components/Header.astro`: animated mobile menu.
- Mobile base styles expand at 600px and 1000px.
- `prefers-reduced-motion` disables decorative animations. Content stays readable without JavaScript.
- Native scrolling is preserved; no pinned sections or scroll interception.
- Reference: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
