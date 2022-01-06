import type { NextPage } from "next"
import Head from "next/head"
import { Image } from "../src/image"
import React from "react"
import styles from "../styles/Home.module.css"
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

interface Props {
  about: string
}
export const getStaticProps = async () => {
  const p = await fetch("")
  return {
    props: {
      about: "a",
    },
  }
}

const Home: NextPage<Props> = ({ about }) => {
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
