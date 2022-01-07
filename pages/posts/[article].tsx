import { FC } from "react"
import Link from "next/link"
import PageHead from "../../components/PageHead"
import { Button, Card, CardContent, Typography } from "@mui/material"
import matter from "gray-matter"
import { markdownToHtml } from "../../src/transpiler"
import HTMLViewer from "../../components/htmlViewer"
import { typography } from "@mui/system"

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
  const p = await fetch(
    buildContentURL("contents/posts/" + params.article + "/index.md")
  )
  console.log(buildContentURL("contents/posts/" + params.article + "/index.md"))
  const articleData = await p.text()
  const article = matter(articleData)
  const articleHTML = (await markdownToHtml(article.content)).value
  console.log(article)
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
          <CardContent>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="body2">{date}</Typography>
            {tags.map((tag) => {
              ;<Button>{tag}</Button>
            })}
            <HTMLViewer html={articleHTML} />
          </CardContent>
        </Card>
      </main>
    </>
  )
}
export default Article
