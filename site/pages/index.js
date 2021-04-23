import Layout from './layout'
import Link from 'next/link'
import { getAllPosts } from '../lib/postLoader';

export default function Home({ allPosts }) {
  return (
  <Layout>
    {
      allPosts.map(post =>
        <>
          <p>{post.title}</p>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
          <p>{post.content}</p>

          <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
            <a className="hover:underline">{post.title}</a>
          </Link>
        </>
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