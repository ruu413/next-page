import { FC } from "react"
import Link from "next/link"
import PageHead from "../../components/PageHead"
import { Button, Card, CardContent, Typography } from "@mui/material"
import HTMLViewer from "../../components/htmlViewer"
import { fetchPost, fetchPostsList, PostData } from "../../src/posts"
import PostSammary from "../../components/postSammary"

export const getStaticPaths = async () => {
  const posts = await fetchPostsList()
  const paths = posts.map((p) => {
    return `/posts/${p}`
  })
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({
  params,
}: {
  params: { article: string }
}): Promise<{ props: { post: PostData } }> => {
  const post = await fetchPost(params.article)
  return {
    props: {
      post: post,
    },
  }
}

interface Props {
  post: PostData
}

const Article: FC<Props> = ({ post }) => {
  return (
    <>
      <PageHead />
      <main>
        <Card>
          <CardContent>
            <PostSammary post={post} />
            <HTMLViewer html={post.articleHTML} />
          </CardContent>
        </Card>
      </main>
    </>
  )
}
export default Article
