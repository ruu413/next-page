import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"

import Head from "next/head"
import { Image } from "../components/image"
import React, { useEffect, useState, FC } from "react"

import { markdownToHtml } from "../src/transpiler"
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Container,
  Link,
} from "@mui/material"
import PageHead from "../components/PageHead"
import HTMLViewer from "../components/htmlViewer"
import { fetchContent } from "../src/posts"

interface Props {
  aboutMeHTML: string
}
export const getStaticProps = async () => {
  const aboutMeMd = await fetchContent("aboutMe.md")
  const aboutMeHTML = (await markdownToHtml(aboutMeMd)).value
  return {
    props: {
      aboutMeHTML: aboutMeHTML,
    },
  }
}

const Home: NextPage<Props> = ({ aboutMeHTML }) => {
  return (
    <React.Fragment>
      <PageHead />
      <main>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  あばうとみー
                </Typography>
                <Grid
                  container
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  spacing={{ xs: 2, md: 3 }}
                >
                  <Grid item xs={4} sm={3} md={5}>
                    <Image
                      src={"/ruu_icon.jpg"}
                      style={{ width: 300, height: 300 }}
                      alt="icon painted by DAINZIA"
                    />
                    <Typography variant="caption" component="div">
                      painted by{" "}
                      <Link href="https://twitter.com/DAINZIA/">DAINZIA</Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={1} md={1}></Grid>
                  <Grid item xs={4} sm={4} md={6}>
                    <HTMLViewer html={aboutMeHTML} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  まいりんく
                </Typography>
                <Typography variant="body2">るー</Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  ほかのひとのぶろぐとか
                </Typography>
                <Typography variant="body2">るー</Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  とくに役割のないカード
                </Typography>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
        </Grid>
      </main>
    </React.Fragment>
  )
}

export default Home
