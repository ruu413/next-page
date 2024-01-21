import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import Image from "next/image"
import Head from "next/head"
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
  Link as MuiLink,
} from "@mui/material"
import PageHead from "../components/PageHead"
import HTMLViewer from "../components/htmlViewer"
import { fetchContent } from "../src/posts"
import Link from "next/link"
interface Props {
  aboutMeHTML: string
  myLinksHTML: string
  linksHTML: string
}
export const getStaticProps = async () => {
  const aboutMeMd = await fetchContent("aboutMe.md")
  const myLinksMd = await fetchContent("myLinks.md")
  const linksMd = await fetchContent("links.md")
  const aboutMeHTML = (await markdownToHtml(aboutMeMd)).value
  const myLinksHTML = (await markdownToHtml(myLinksMd)).value
  const linksHTML = (await markdownToHtml(linksMd)).value
  return {
    props: {
      aboutMeHTML: aboutMeHTML,
      myLinksHTML: myLinksHTML,
      linksHTML: linksHTML,
    },
  }
}

const Home: NextPage<Props> = ({ aboutMeHTML, myLinksHTML, linksHTML }) => {
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
          style={{ display: "flex", alignItems: "stretch" }}
        >
          <Grid
            item
            xs={8}
            md={8}
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  あばうとみー
                </Typography>
                <Grid
                  container
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  spacing={{ xs: 2, md: 3 }}
                  style={{ display: "flex", alignItems: "stretch" }}
                >
                  <Grid item xs={4} sm={3} md={5}>
                    <Image
                      //src={"/ruu_icon.jpg"}
                      src={
                        "https://raw.githubusercontent.com/ruu413/next-page/main/public/ruu_icon.jpg"
                      }
                      alt="icon painted by DAINZIA"
                      width={2891}
                      height={4096}
                      style={{ width: "100%", height: "auto" }}
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
          <Grid item xs={4} style={{ display: "flex", alignItems: "stretch" }}>
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  まいりんく
                </Typography>
                <HTMLViewer html={myLinksHTML} />
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  ほかのひとのぶろぐとか
                </Typography>
                <HTMLViewer html={linksHTML} />
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </Grid>
          <Grid item xs={8} style={{ display: "flex", alignItems: "stretch" }}>
            <Card style={{ width: "100%" }}>
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
