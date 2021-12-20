import Layout from '../layout'
import { getAllPosts } from '../../lib/postLoader';

export default function Post({ post }) {

  const imageUrl = "/images/" + post.imageFilename;

  return (
  <Layout slug={post.slug}>
    {
        <>
          <figure className="post-figure">
            <img className="post-image" src={imageUrl} alt={post.imageCaption} />
            <figcaption>{post.imageCaption}</figcaption>
          </figure>
          <h2>
            {post.title}
            <small>{post.date}</small>
            <small><a href="https://twitter.com/MikielAgutu">@MikielAgutu</a></small>
          </h2>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
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