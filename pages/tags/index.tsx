import {
  Typography,
  Grid,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { FC, useEffect, useState } from "react"
import PageHead from "../../components/PageHead"
import PostSammary from "../../components/postSammary"
import {
  PostData,
  fetchPosts,
  fetchTags,
  fetchPostsFromTag,
} from "../../src/posts"

export const getStaticProps = async () => {
  const tags = await fetchTags()
  return {
    props: {
      tags: tags,
    },
  }
}

interface Props {
  tags: string[]
}

const Tags: FC<Props> = ({ tags }) => {
  return (
    <>
      <PageHead />
      <main>
        <Typography variant="h4">たぐ</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="left"
          alignItems="center"
        >
          {tags.map((tag) => (
            <Grid item xs={4} key={tag}>
              <Card>
                <CardContent>
                  <Typography variant="h2">
                    <MuiLink href={`/tags/${tag}`}>{tag}</MuiLink>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  )
}
export default Tags
