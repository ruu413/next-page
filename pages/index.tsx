import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"

import { unified } from "unified"
import rehypeParse from "rehype-parse"
import rehypeReact from "rehype-react"

import Head from "next/head"
import { Image } from "../src/image"
import React, { useEffect, useState, FC } from "react"
import styles from "../styles/Home.module.css"

import CustomLink from "../src/customLink"

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
import ResponsiveAppBar from "../src/resposiveAppbar"
import { JsxEmit } from "typescript"

// HTMLをReactへ変換する関数
const processor = unified()
  .use(rehypeParse, { fragment: true }) // fragmentは必ずtrueにする
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      a: (props: any) => <CustomLink {...props} />, //CustomLink, //CustomLink, // ←ここで、<a>を<CustomLink>に置き換えるよう設定
    },
  })
interface Props {
  aboutMd: string
}
const buildContentURL = (url: string): string => {
  return "https://raw.githubusercontent.com/ruu413/next-page/main/" + url
}
export const getStaticProps = async () => {
  const p = await fetch(buildContentURL("contents/about.md"))
  const aboutMd = await p.text()
  //const aboutHTML = (await markdownToHtml(aboutMd)).value
  return {
    props: {
      aboutMd: aboutMd,
    },
  }
}
const MarkdownViewer = ({ markdown }: { markdown: string }) => {
  const [html, setHtml] = useState<string>("")
  useEffect(() => {
    markdownToHtml(markdown).then((result) => {
      if (typeof result.value === "string") {
        setHtml(result.value)
      }
    })
  }, [markdown])
  return <React.Fragment>{processor.processSync(html).result}</React.Fragment>
}

const Home: NextPage<Props> = ({ aboutMd }) => {
  return (
    <React.Fragment>
      <header>
        <ResponsiveAppBar></ResponsiveAppBar>
      </header>
      <main
        style={{
          margin: "auto",
          marginTop: "75px",
          maxWidth: 800,
        }}
      >
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
                    <Typography variant="h5" component="div">
                      るー
                    </Typography>

                    <Typography variant="body2" component="div">
                      電気通信大学の大学院生
                      <br />
                      ソフトウェアエンジニアとかやってるオタク
                      現在当サイトを鋭意(?)制作中なので見ていってね
                      ここらへんマークダウンで書きたくない？
                    </Typography>
                    <MarkdownViewer markdown={aboutMd} />
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
