import Layout from '../layout'
import { getAllPosts } from '../../lib/postLoader';
import { useRouter } from 'next/router';

export default function Post({ post }) {
  return (
  <Layout>
    {
        <>
          <p>{post.title}</p>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
          <p>{post.content}</p>
        </>
    }
  </Layout>
  );
}

export const getStaticProps = async (nextJsParams) => {
  const allPosts = await getAllPosts();
  const slug = nextJsParams.params.slug;
  const post = allPosts.find(post => post.slug === slug);

  return {
    props: { post }
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();

  return {
    paths: allPosts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}