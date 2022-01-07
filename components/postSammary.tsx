import { Typography, Button, Link as MuiLink } from "@mui/material"
import { PostData } from "../src/posts"
import Link from "next/link"

const PostSammary = ({ post }: { post: PostData }) => {
  return (
    <>
      <Typography variant="h2">
        <MuiLink href={post.path}>{post.title}</MuiLink>
      </Typography>
      <Typography variant="body2">日にち: {post.date}</Typography>
      <Typography variant="body2" component="span">
        {"たぐ: "}
      </Typography>
      {post.tags.map((tag) => (
        <Button
          key={tag}
          href={`/tags/${tag}`}
          variant="outlined"
          style={{ marginRight: 10 }}
        >
          {tag}
        </Button>
      ))}
    </>
  )
}
export default PostSammary
