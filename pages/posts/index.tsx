import { FC } from "react"
import Link from "next/link"
import PageHead from "../../components/PageHead"

interface Props {
  posts: string
}

const Post: FC<Props> = ({ posts }) => {
  return (
    <>
      <PageHead />
      <main></main>
      <h2>Post</h2>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: "",
    },
  }
}
