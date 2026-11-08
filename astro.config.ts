import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 本番のURL（canonical・OGP・sitemap・robots.txt に反映される）。独自ドメインにしたらここを変える
export default defineConfig({
  site: "https://soleil-violin.vercel.app",
  integrations: [
    sitemap({
      // 404 とリダイレクト専用ページは除外
      filter: (page) => !/\/(404|about)\/?$/.test(new URL(page).pathname),
    }),
  ],
});
