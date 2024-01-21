import React from "react"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"
import { unified } from "unified"
import Image from "next/image"
import CustomLink from "./customLink"
// HTMLをReactへ変換する関数
const processor = unified()
  .use(rehypeParse, { fragment: true }) // fragmentは必ずtrueにする
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: (props: any) => <CustomLink {...props} />, // ←ここで、<a>を<CustomLink>に置き換えるよう設定
    },
  })
const HTMLViewer = ({ html }: { html: string }) => {
  console.log(html)
  return <>{processor.processSync(html).result}</>
}
export default HTMLViewer
