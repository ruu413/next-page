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
import { create } from "domain"
interface Props {
  aboutMeHTML: string
  myLinksHTML: string
  linksHTML: string
}
export const getStaticProps = async () => {
  return {
    props: {
    },
  }
}
interface ImageInfo {
  fileName: string,
  width: number,
  height: number,
  illustrator: string,
  link?: string
}
const imageList: ImageInfo[] = [
  {
    fileName: "ruu_icon.jpg",
    width: 2891,
    height: 4096,
    illustrator: "うさ山にこ",
    link: "https://twitter.com/DAINZIA_usayama"
  },
  {
    fileName: "ruu1.jpg",
    width: 654,
    height: 1024,
    illustrator: "うさ山にこ",
    link: "https://twitter.com/DAINZIA_usayama"
  },
  {
    fileName: "ruu2.jpg",
    width: 3211,
    height: 4096,
    illustrator: "うさ山にこ",
    link: "https://twitter.com/DAINZIA_usayama"
  },
  {
    fileName: "handoruu1.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu2.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu3.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu4.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu5.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu6.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu7.png",
    width: 1536,
    height: 1752,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
  {
    fileName: "handoruu8.png",
    width: 1500,
    height: 1500,
    illustrator: "はんどる",
    link: "https://twitter.com/handoruuu"
  },
]
const createImageCard = (imageInfo: ImageInfo) => {
  return (
    <React.Fragment>
    <Grid
      item
      xs={4}
      md={4}
      style={{ display: "flex", alignItems: "stretch" }}
    >
        <Card style={{ width: "100%" }}>
          <CardContent>
            <Image
              //src={"/ruu_icon.jpg"}
              src={
                `${imageInfo.fileName}`
              }
              alt={`Painted by ${imageInfo.illustrator}`}
              width={imageInfo.width}
              height={imageInfo.height}
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="caption" component="div">
              Painted by {
              imageInfo.link ? 
              <Link href={imageInfo.link!}>{imageInfo.illustrator}</Link>:imageInfo.illustrator
              }
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>

    </React.Fragment>
  )
}

const Home: NextPage<Props> = ({ }) => {
  return (
    <React.Fragment>
      <PageHead />
      <main>
        <Typography variant="h4">ぎゃらりー</Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, xl:16 }}
          justifyContent="center"
          alignItems="center"
          style={{ display: "flex", alignItems: "stretch" }}
        >
                {imageList.map((imageInfo)=> {
                  return createImageCard(imageInfo)
                })}
        </Grid>
      </main>
    </React.Fragment>
  )
}

export default Home
