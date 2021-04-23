import Layout from './layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/postLoader';

export default function Home({ allPosts }) {
  return (
  <Layout>
    <h1>
      Software & Teams
      <small>Blog by <a href="https://twitter.com/MikielAgutu">@MikielAgutu</a></small>
    </h1>
    {
      allPosts.map(post =>
        <div key={post.slug}>
          <h2>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a>{post.title}</a>
            </Link>
            <small>{post.date}</small>
          </h2>
          <p>{post.excerpt}</p>
          <p>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a>Read</a>
            </Link>
          </p>
        </div>
      )
    }
  </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts }
  }
}