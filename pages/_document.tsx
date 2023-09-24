import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="Mainardi è un'azienda specializzata nella lavorazione di marmi e graniti, con una lunga tradizione familiare nel settore." />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='marmi, graniti, lavorazione, monumenti, bassorilievi, arte funeraria, personalizzazione, consulenza professionale, funerarie, sacra, arredo, decorazioni' />
        <link
          rel="shortcut icon"
          href="/icon.png"
          type="image/png"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
