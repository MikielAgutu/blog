import Head from 'next/head'

export default function Layout({children}) {
  return (
  <>
    <Head>
      <title>Blog</title>
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css" />
    </Head>

    <body>
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
          </div>
        </div>
      </div>
    </nav>

      <section className="section">
        <div className="container">
        {children}
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Copyright © Mikiel Agutu 2021. All rights reserved.
            <br />
            This site collects anonymous usage data via Google Analytics.
          </p>
        </div>
      </footer>
    </body>
  </>
  );
}