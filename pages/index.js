import Project from '../components/ProjectsCard'
import Meta from '../components/Meta'
import SkeletonLoader from '../components/SkeletonLoader'
import useSWR from 'swr'
const baseURL = 'https://api.github.com/users/creteciorenzo/repos'
import {
  Box,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Center,
  IconButton,
} from '@chakra-ui/react'
import Head from 'next/head'
const fetcher = async () => {
  const data = await fetch(`${baseURL}`)
  return data
}

export default function Home({ projects }) {
  const { data, error } = useSWR('/users/creteciorenzo/repos', fetcher)
  return (
    <>
      <Head>
        <title> Renzo Cretecio | Frontend Developer </title>
        <meta
          name='description'
          content='Hi, I am a web development enthusiast that is armed with experience, learning, and passion.'></meta>
        <meta
          name='thumbnail'
          content='https://creteciorenzo.vercel.app/thumbnail.png'></meta>
        <meta
          property='og:title'
          content='Renzo Cretecio | Frontend Developer'
        />
        <meta property='og:site_name' content='Renzo Cretecio' />
        <meta
          name='keywords'
          content='Frontend developer, Web developer'
        />{' '}
        <meta
          name='thumbnail'
          content='https://creteciorenzo.vercel.app/thumbnail.png'
        />
        <meta property='og:type' content='website' />{' '}
        <meta
          property='og:description'
          content='Hi, I am a web development enthusiast that is armed with experience, learning, and passion.'
        />
        <meta
          property='og:image'
          content='https://creteciorenzo.vercel.app/thumbnail.png'
        />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:title'
          content='Renzo Cretecio | Frontend Developer'
        />
        <meta
          name='twitter:description'
          content='Hi, I am a web development enthusiast that is armed with experience, learning, and passion.'
        />
        <meta
          name='twitter:image'
          content='https://creteciorenzo.vercel.app/thumbnail.png'
        />
        <meta name='twitter:site' content='https://creteciorenzo.vercel.app' />
        <meta name='twitter:creator' content='@rnzous' />
        <meta name='fb:page_id' content='323482201948526' />
        <meta name='author' content='Renzo R. Cretecio' />
        <meta name='robots' content='index,follow' />
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
      </Head>

      <Box h='100vh'>
        <Flex
          margin='0 auto'
          direction='column'
          maxW={992}
          px={[5, 8, 8]}
          py={5}>
          <Heading as='h1' fontSize={40} color='grey.light'>
            {`Hi, I'm Renzo Cretecio.`}
          </Heading>
          <Text fontSize='lg' fontWeight='medium' mt={5}>
            {`I'm a PH based Frontend Developer.`}
          </Text>
          <Text fontSize='lg' fontWeight='medium' mt={5}>
            {`My current toolsets includes Vue.js/Quasar, React.js/Next Framework and all the other various libraries and technologies related to them.`}
          </Text>
          <Text fontSize='lg' fontWeight='medium' mt={5}>
            {` If you want to get in touch or talk about a project, send me a message or send an email to `}
            <Link
              color='pastel.custom'
              href='mailto:renzocretecio@gmail.com?Subject=Hello'
              target='_top'>
              renzocretecio @gmail.com
            </Link>
          </Text>
          <Heading as='h2' size='lg' color='slate.lighter' mt={5}>
            {`See my works below.`}
          </Heading>
          {error ? (
            <Text mt={5}> An error occurred.Please refresh. </Text>
          ) : (
            <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
              {data ? (
                <Project projects={projects} />
              ) : (
                [...Array(4).keys()].map((loaderCard) => (
                  <SkeletonLoader key={loaderCard} />
                ))
              )}{' '}
            </SimpleGrid>
          )}
          <Center mt={5}>
            <Button
              size='lg'
              _hover={{}}
              _active={{}}
              _focus={{}}
              borderColor='pastel.custom'
              color='pastel.custom'
              variant='outline'
              onClick={() =>
                window.open('https://github.com/creteciorenzo', '_blank')
              }>
              More on GitHub
            </Button>
          </Center>
        </Flex>
      </Box>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${baseURL}?sort=created_at`)
  const projects = await res.json()
  return {
    props: {
      projects,
    },
  }
}
