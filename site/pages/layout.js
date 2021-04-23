import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children}) {
  return (
  <>
    <Head>
      <title>Blog</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
    </Head>

    <nav role="navigation">
      <header>
        <Link href="/">
          <a className="nav-home">Software & Teams</a>
        </Link>
      </header>
    </nav>

    <div className="container">
      <div className="row">
        <div className="col-md-3" /> 
        <div className="col-md-6">
          {children}
        </div>
        <div className="col-md-1" /> 
      </div>
    </div>

    <footer className="footer">
      <div>
        <p>
          Copyright © Mikiel Agutu 2021. All rights reserved.
          <br />
          This site collects anonymous usage data via Google Analytics.
        </p>
      </div>
    </footer>
  </>
  );
}