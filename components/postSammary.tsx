import { Typography, Button, Link } from "@mui/material"
import { PostData } from "../src/posts"
import HTMLViewer from "./htmlViewer"

const PostSammary = ({ post }: { post: PostData }) => {
  return (
    <>
      <Link href={post.path}>
        <Typography variant="h1">{post.title}</Typography>
      </Link>
      <Typography variant="body2">日にち: {post.date}</Typography>
      <Typography variant="body2" component="span">
        {"たぐ: "}
      </Typography>
      {post.tags.map((tag) => (
        <>
          <Button variant="outlined" style={{ marginRight: 10 }}>
            {tag}
          </Button>
        </>
      ))}
    </>
  )
}
export default PostSammary
