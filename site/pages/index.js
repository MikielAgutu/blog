import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hello world
        </h1>
      </main>

      <footer>
        Footer
      </footer>
    </div>
  )
}
