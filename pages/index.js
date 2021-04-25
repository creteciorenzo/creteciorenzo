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

const fetcher = async () => {
  const data = await fetch(`${baseURL}`)
  return data
}

export default function Home({ projects }) {
  const { data, error } = useSWR('/users/creteciorenzo/repos', fetcher)
  return (
    <>
      <Meta />
      <Box h='100vh'>
        <Flex
          margin='0 auto'
          direction='column'
          maxW={992}
          px={[5, 8, 8]}
          py={5}>
          <Heading as='h1' fontSize={40} color='grey.light'>
            {' '}
            {`Hi, I'm Renzo Cretecio.`}{' '}
          </Heading>{' '}
          <Text fontSize='lg' fontWeight='medium' mt={5}>
            {' '}
            {`I'm a PH based Frontend Developer.`}
          </Text>
          <Text fontSize='lg' fontWeight='medium' mt={5}>
            {`My current toolsets includes Vue.js/Quasar, React.js/Next Framework and all the other various libraries and technologies related to them.`}{' '}
          </Text>
          <Text fontSize='lg' fontWeight='medium' mt={5}>
            {` If you want to get in touch or talk about a project, send me a message or send an email to `}{' '}
            <Link
              color='pastel.custom'
              href='mailto:renzocretecio@gmail.com?Subject=Hello'
              target='_top'>
              renzocretecio @gmail.com
            </Link>
          </Text>
          <Heading as='h2' size='lg' color='slate.lighter' mt={5}>
            {`See my works below.`}{' '}
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
              More on GitHub{' '}
            </Button>{' '}
          </Center>{' '}
        </Flex>{' '}
      </Box>{' '}
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
