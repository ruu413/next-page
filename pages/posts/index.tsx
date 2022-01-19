import { FC } from "react"
import Link from "next/link"
import PageHead from "../../components/PageHead"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material"
import { fetchPosts, PostData } from "../../src/posts"
import PostSammary from "../../components/postSammary"

export const getStaticProps = async () => {
  const posts = await fetchPosts()
  return {
    props: {
      posts: posts,
    },
  }
}

interface Props {
  posts: PostData[]
}

const Posts: FC<Props> = ({ posts }) => {
  return (
    <>
      <PageHead />
      <main>
        <Typography variant="h4">ぶろぐ</Typography>
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
export default Posts
