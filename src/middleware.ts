import { defineMiddleware } from "astro:middleware";
import { HTMLProcessor, loadDefaultJapaneseParser } from "budoux";
import { parseHTML } from "linkedom";

// 日本語の改行位置を整える（Google の BudouX）。
// 本文の日本語を文節ごとに区切って <wbr> を入れ、CSS（body の word-break: keep-all）と
// 組み合わせて、単語の途中で改行されないようにする。ビルド時に HTML へ埋め込むので、
// ブラウザ側では何も実行しない。
const parser = loadDefaultJapaneseParser();

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get("content-type")?.includes("text/html")) return response;

  const { document } = parseHTML(await response.text());
  const processor = new HTMLProcessor(parser, {
    separator: document.createElement("wbr") as unknown as Node,
  });
  processor.applyToElementInternal(document.body as unknown as HTMLElement, false);

  // .nowrap の中では改行させない。Chrome は white-space: nowrap の中でも <wbr> で
  // 改行してしまうため、中の <wbr> は取り除く（先頭のものは外に出して区切りとして残す）。
  for (const element of document.querySelectorAll(".nowrap")) {
    for (const wbr of element.querySelectorAll("wbr")) {
      if (wbr === element.firstChild) element.before(wbr);
      else wbr.remove();
    }
  }

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(document.toString(), { status: response.status, statusText: response.statusText, headers });
});
