import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <meta name="description" content="Mainardi è un'azienda specializzata nella lavorazione di marmi e graniti, con una lunga tradizione familiare nel settore." />
        <meta name="robots" content="index, follow" />
        <meta name='tags' content='marmi, graniti, lavorazione, monumenti, bassorilievi, arte funeraria, personalizzazione, consulenza professionale, funerarie, sacra, arredo, decorazioni' />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="/favicon-180x180.png" />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
