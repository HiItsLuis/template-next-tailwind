import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (props) {
  return (
    <Html lang='es'>
      <Head>
        <link
          rel='preload'
          href='/fonts/ibm-plex-sans-var.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />

        {/* Start Favicons */}
        {/* TODO */}
        {/* End Favicons */}
      </Head>
      <body className='text-gray-900 bg-gray-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
