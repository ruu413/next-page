// https://zenn.dev/thiragi/articles/ce13a4be4110c0
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import rehypeShiki from "@leafac/rehype-shiki"
import * as shiki from "shiki"

import rehypeHighlight from "rehype-highlight"

export const markdownToHtml = async (markdown: string) =>
  unified() // unifiedライブラリの処理をまとめる
    .use(remarkParse) // Markdownをmdast(Markdownの抽象構文木)に変換
    .use(remarkRehype) // mdastをhast(HTMLの抽象構文木)に変換
    /*.use(rehypeShiki, {
      highlighter: await shiki.getHighlighter({
        theme: "nord",
      }),
    })*/ // shikiハイライターでコードブロックをハイライト
    .use(rehypeStringify) // hastをHTMLに変換
    .use(rehypeHighlight)
    .processSync(markdown) // 上記の処理を行うデータをここで受け取る
