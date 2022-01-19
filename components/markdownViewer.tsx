import React, { FC, useState, useEffect } from "react"
import HTMLViewer from "./htmlViewer"
import { markdownToHtml } from "../src/transpiler"
const MarkdownViewer = ({ markdown }: { markdown: string }) => {
  const [html, setHtml] = useState<string>("")
  useEffect(() => {
    markdownToHtml(markdown).then((result) => {
      if (typeof result.value === "string") {
        setHtml(result.value)
      }
    })
  }, [markdown])
  return <HTMLViewer html={html} />
}
export default MarkdownViewer
