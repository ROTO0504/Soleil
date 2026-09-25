# Soleil

Astro + Panda CSS + TypeScript + Bun で構築したサイト。

## セットアップ

```sh
bun install        # postinstall 相当の prepare で `panda codegen` が走る
bun run dev        # http://localhost:4321
bun run build      # 型チェック (astro check) → dist/ へ静的ビルド
bun run preview    # ビルド結果の確認
```

## ディレクトリ構成

```
.
├── astro.config.ts        # Astro 設定
├── panda.config.ts        # Panda CSS 設定（トークン / グローバル CSS）
├── postcss.config.cjs     # Panda を PostCSS 経由で Astro(Vite) に組み込む
├── tsconfig.json          # strict + `@/*` エイリアス
├── public/                # そのまま配信される静的ファイル
├── styled-system/         # Panda の生成物（git 管理外）
└── src/
    ├── config/site.ts     # サイト名・ナビゲーション項目など
    ├── styles/global.css  # Panda の @layer 宣言
    ├── layouts/
    │   └── BaseLayout.astro   # <head> / Header / Drawer / <main>
    ├── components/
    │   ├── Header.astro   # 固定ヘッダー + メニューボタン
    │   ├── Drawer.astro   # <dialog> ベースのサイドメニュー
    │   └── NavList.astro  # ナビ（現在ページに aria-current）
    └── pages/             # ファイルベースルーティング
        ├── index.astro
        ├── about.astro
        └── 404.astro
```

## 方針

- ページ追加は `src/pages/` にファイルを置き、必要なら `src/config/site.ts` の `NAV_ITEMS` に追加する。
- スタイルは `styled-system/css` の `css()` を使う。色などは `panda.config.ts` のトークン（`accent`, `fg`, `brand.500` …）経由で指定する。
- クライアント JS は必要な箇所だけ `<script>` で書く（現状はドロワー開閉のみ）。
