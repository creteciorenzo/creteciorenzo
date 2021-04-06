import styles from '../styles/Home.module.css'
import Project from '../components/ProjectsCard'
import Meta from '../components/Meta'

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
} from '@chakra-ui/react'
export default function Home({ projects }) {
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
              renzocretecio@gmail.com
            </Link>
          </Text>
          <Heading as='h2' size='lg' color='slate.lighter' mt={5}>
            {`Recent Works`}
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={5} mt={5}>
            <Project projects={projects} />
          </SimpleGrid>
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
