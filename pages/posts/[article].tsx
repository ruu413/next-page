import { FC } from "react"
import Link from "next/link"
import PageHead from "../../components/PageHead"
import { Card } from "@mui/material"
import matter from "gray-matter"
import { markdownToHtml } from "../../src/transpiler"
import HTMLViewer from "../../components/htmlViewer"

const buildContentURL = (url: string): string => {
  return "https://raw.githubusercontent.com/ruu413/next-page/main/" + url
}

export const getStaticPaths = async () => {
  const posts = ["a"] //await fetchPathList()
  const paths = posts.map((p) => {
    return `/posts/${p}`
  })
  console.log("posts")
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({
  params,
}: {
  params: { article: string }
}) => {
  console.log(params)
  console.log("contents" + params.article + "/index.md")
  const p = await fetch(buildContentURL("contents" + params.article + ".md"))
  const articleData = await p.text()
  console.log("aa", articleData)
  const article = matter(articleData)
  const articleHTML = (await markdownToHtml(article.content)).value
  return {
    props: {
      title: article.data["title"],
      date: article.data["date"],
      tags: article.data["tags"],
      articleHTML: articleHTML,
    },
  }
}

interface Props {
  title: string
  date: string
  tags: string[]
  articleHTML: string
}

const Article: FC<Props> = ({ title, date, tags, articleHTML }) => {
  return (
    <>
      <PageHead />
      <main>
        <Card>
          <HTMLViewer html={articleHTML} />
        </Card>
      </main>
    </>
  )
}
export default Article
