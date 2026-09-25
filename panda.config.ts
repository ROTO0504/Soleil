import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx,astro}"],
  exclude: [],
  outdir: "styled-system",

  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            50: { value: "#ecfaf3" },
            500: { value: "#40b983" },
            600: { value: "#2f9a6b" },
          },
          ink: { value: "#2c3e50" },
        },
        fonts: {
          body: {
            value:
              '"Hiragino Sans", "Noto Sans JP", system-ui, -apple-system, sans-serif',
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: { value: "white" },
          fg: { value: "{colors.ink}" },
          accent: { value: "{colors.brand.500}" },
          border: { value: "{colors.gray.200}" },
        },
        // ヘッダー高さ（h と padding の両方で使うため sizes / spacing に定義）
        sizes: {
          header: { value: "64px" },
        },
        spacing: {
          header: { value: "64px" },
        },
      },
    },
  },

  globalCss: {
    "html, body": {
      fontFamily: "body",
      color: "fg",
      bg: "bg",
      WebkitFontSmoothing: "antialiased",
    },
    a: { color: "inherit", textDecoration: "none" },
  },
});
