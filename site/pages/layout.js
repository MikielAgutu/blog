import Head from 'next/head'
import Link from 'next/link'

export default function Layout({children}) {
  return (
  <>
    <Head>
      <title>Software & Teams - Mikiel Agutu</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://cdn.rawgit.com/Chalarangelo/mini.css/v3.0.1/dist/mini-default.min.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LY4TN960M8"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-LY4TN960M8');
        `
          }}
        />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
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