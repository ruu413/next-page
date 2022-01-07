import * as yaml from "js-yaml"
import request from "request"
import matter from "gray-matter"
import { markdownToHtml } from "./transpiler"

//imported from github.com/gotti/gotti.dev
export interface posts {
  posts: postData[]
}
export interface postData {
  title: string
  date: Date
  tags: string[]
  text: string
  url: string
  name: string
  path: string
  ogpImagePath: string
}

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
  console.log(article)
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

/*

const mattertoPostData = (
  post: string,
  mpost: matter.GrayMatterFile<string>,
  ogppath: string
): postData => {
  console.log(mpost.data["tags"])
  //ほんとに引数の型あってる？
  const ret: postData = {
    title: mpost.data["title"],
    date: mpost.data["date"],
    tags: mpost.data["tags"],
    text: mpost.content,
    url: buildSiteURL(post),
    name: post,
    path: `/post/${post}`,
    ogpImagePath: `https://gotti.dev/post/${post}/${ogppath}`,
  }
  return ret
}

export const fetchPost = async (post: string): Promise<postData> => {
  const p = await fetch(buildPostURL(post))
  const rawpost = await p.text()
  const mpost = matter(rawpost)
  const ipath = mpost.content.match(/\!\[.+\]\((.+)\)/)
  const imagepath = ipath === null ? "" : ipath[1]
  const ret = mattertoPostData(post, mpost, imagepath)
  console.log(ret)
  return ret
}

export const fetchPosts = async (): Promise<postData[]> => {
  const postlist = await fetchPathList()
  const posts = postlist.map(async (post: string) => {
    const ret = await fetchPost(post)
    return ret
  })
  const ret = Promise.all(posts)
  return ret
}

export interface Tag {
  name: string
  posts: postData[]
}

interface Tags {
  tags: Tag[]
}

export const getTags = (posts: postData[]): Tags => {
  let tags = new Map<string, postData[]>()
  for (const p of posts) {
    for (const t of p.tags) {
      if (tags[t] === undefined) {
        tags[t] = []
      }
      tags[t].push(p)
    }
  }
  let ret: Tags = { tags: [] }
  for (const t of Object.keys(tags)) {
    //const tmp: Tag = { name: t, posts: tags[t] }
    //ret.tags.push(tmp)
  }
  return ret
}
*/
