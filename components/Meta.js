import Head from 'next/head'
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title> {title} </title> <link rel='icon' href='favicons/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='favicons/android-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='favicons/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='favicons/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='favicons/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='favicons/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='favicons/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='favicons/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='favicons/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='favicons/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='favicons/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='favicons/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='favicons/manifest.json' />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content='Renzo Cretecio' />
      <meta name='description' content={description} />
      <meta name='keywords' content='Frontend developer, Web developer' />
      <meta
        name='thumbnail'
        content='https://creteciorenzo.vercel.app/thumbnail.png'
      />
      <meta property='og:type' content='website' />
      <meta property='og:description' content={description} />
      <meta
        property='og:image'
        content='https://creteciorenzo.vercel.app/thumbnail.png'
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content='https://creteciorenzo.vercel.app/thumbnail.png'
      />
      <meta name='twitter:site' content='https://creteciorenzo.vercel.app' />
      <meta name='twitter:creator' content='@rnzous' />
      <meta name='fb:page_id' content='323482201948526' />
      <meta name='author' content='Renzo R. Cretecio' />
      <meta name='robots' content='index,follow' />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Renzo Cretecio | Frontend Developer',
  description:
    'Hi, I am a web development enthusiast that is armed with experience, learning, and passion.',
}

export default Meta
