import { Typography, Grid, Card, CardContent } from "@mui/material"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { FC, useEffect, useState } from "react"
import PageHead from "../../components/PageHead"
import PostSammary from "../../components/postSammary"
import {
  PostData,
  fetchPosts,
  fetchTags,
  fetchPostsFromTag,
} from "../../src/posts"

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await fetchTags()
  const paths = tags.map((tag) => {
    return `/tags/${tag}`
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { tag: string }
}) => {
  const posts = await fetchPostsFromTag(params.tag)
  return {
    props: {
      tag: params.tag,
      posts: posts,
    },
  }
}

interface Props {
  tag: string
  posts: PostData[]
}

const Tag: FC<Props> = ({ tag, posts }) => {
  return (
    <>
      <PageHead />
      <main>
        <Typography variant="h4">たぐ: {tag}</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="left"
          alignItems="center"
        >
          {posts.map((post) => (
            <Grid item xs={4} key={post.title}>
              <Card>
                <CardContent>
                  <PostSammary post={post} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  )
}
export default Tag
