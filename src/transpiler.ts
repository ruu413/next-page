// https://zenn.dev/thiragi/articles/ce13a4be4110c0
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
export const markdownToHtml = async (markdown: string) =>
  unified() // unifiedライブラリの処理をまとめる
    .use(remarkParse) // Markdownをmdast(Markdownの抽象構文木)に変換
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true }) // mdastをhast(HTMLの抽象構文木)に変換
    .use(rehypeRaw)
    .use(rehypeSanitize)
    .use(rehypeStringify) // hastをHTMLに変換
    .use(rehypeHighlight) // shikiの代わりのハイライト
    .processSync(markdown) // 上記の処理を行うデータをここで受け取る
