import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 本番ドメインが決まったら site を変更する（canonical・OGP・sitemap・robots.txt に反映される）
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap({
      // 404 とリダイレクト専用ページは除外
      filter: (page) => !/\/(404|about)\/?$/.test(new URL(page).pathname),
    }),
  ],
});
