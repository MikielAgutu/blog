import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = join(process.cwd(), 'posts')

const convertMarkdownToHtml = async markdown => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const getPostFilenames = () => fs.readdirSync(postsDirectory)

const getPostByFilename = async postFilename => {
  const postFilepath = join(postsDirectory, postFilename)
  const fileContents = fs.readFileSync(postFilepath, 'utf8')
  const post = matter(fileContents)
  const contentHtml = await convertMarkdownToHtml(post.content)
  
  const postObject = {
    title: post.data.title,
    excerpt: post.data.excerpt,
    date: post.data.date,
    contentHtml: contentHtml,
    slug: post.data.slug,
  }

  return postObject;
}

export const getAllPosts = async () => {
  const postFilenames = getPostFilenames();
  const posts = [];

  for (let postFilename of postFilenames) {
    const post = await getPostByFilename(postFilename);
    posts.push(post);
  }

  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}