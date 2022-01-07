import * as yaml from "js-yaml"
import request from "request"
import matter from "gray-matter"
import { markdownToHtml } from "./transpiler"

//imported from github.com/gotti/gotti.dev

const buildContentURL = (url: string): string => {
  return `https://raw.githubusercontent.com/ruu413/next-page/main/contents/${url}`
}
const buildPostURL = (title: string): string => {
  return buildContentURL(`posts/${title}/index.md`)
}
const buildPostsListURL = () => {
  return buildContentURL("postsList.yaml")
}
export const fetchContent = async (url: string): Promise<string> => {
  const p = await fetch(buildContentURL(url))
  return await p.text()
}

export interface PostData {
  title: string
  date: string
  tags: string[]
  articleHTML: string
  articleMd: string
  path: string
}

export const fetchPost = async (post: string): Promise<PostData> => {
  const p = await fetch(buildPostURL(post))
  const articleData = await p.text()
  const article = matter(articleData)
  const articleHTML = String((await markdownToHtml(article.content)).value)

  return {
    title: article.data["title"],
    date: article.data["date"],
    tags: article.data["tags"],
    articleMd: article.content,
    articleHTML: articleHTML,
    path: "/posts/" + post,
  }
}
interface PostsListYaml {
  posts: string[]
}

export const fetchPostsList = async (): Promise<string[]> => {
  const p = await fetch(buildPostsListURL())
  const postsYaml = await p.text()
  const posts = (yaml.load(postsYaml) as PostsListYaml).posts
  const postNames = posts.map((post) => {
    return post.replace("./posts/", "")
  })
  return postNames
}

export const fetchPosts = async (): Promise<PostData[]> => {
  const postsList = await fetchPostsList()
  const posts = postsList.map(async (post) => {
    return await fetchPost(post)
  })
  return Promise.all(posts)
}

//insert only name not insert posts
export const fetchTags = async (): Promise<string[]> => {
  const posts = await fetchPosts()
  let tags = new Set<string>()
  for (const p of posts) {
    for (const t of p.tags) {
      if (!tags.has(t)) {
        tags.add(t)
      }
    }
  }
  return Array.from(tags)
}

export const fetchPostsFromTag = async (tag: string): Promise<PostData[]> => {
  const posts = (await fetchPosts()).filter((post) => {
    console.log(post.tags, tag, post.tags.includes(tag))
    return post.tags.includes(tag)
  })
  return Promise.all(posts)
}
