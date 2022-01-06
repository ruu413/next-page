import React, { FC, useState, useEffect } from "react"
import { markdownToHtml } from "../src/transpiler"
import HTMLViewer from "./htmlViewer"

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
