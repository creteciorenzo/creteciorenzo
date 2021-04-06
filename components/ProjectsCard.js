import { useState, useEffect } from 'react'
import { Box, Text, Flex, Icon, IconButton } from '@chakra-ui/react'

import { IoLogoGithub, IoMdOpen } from 'react-icons/io'
import { MdFolderOpen } from 'react-icons/md'

function Projectscard({ projects }) {
  return (
    <>
      {projects.slice(0, 4).map((project) => (
        <Box
          bg='blue.light'
          borderRadius='md'
          px={5}
          pt={5}
          pb='60px'
          position='relative'
          key={project.id}>
          <Flex justifyContent='space-between'>
            <Icon color='pastel.custom' as={MdFolderOpen} boxSize={8} />
            <Box>
              <IconButton
                variant='link'
                _hover={{
                  color: 'pastel.custom',
                }}
                _focus={{
                  borderColor: 'transparent',
                }}
                aria-label='Open github link'
                icon={<IoLogoGithub size={30} />}
                onClick={() => openLinkInNewTab(project.html_url)}
              />
            </Box>
          </Flex>
          <Text color='grey.lighter' fontSize='xl' fontWeight='bold' mt={4}>
            {project.name}
          </Text>
          <Text fontWeight='medium' mt={3}>
            {project.description}
          </Text>
          <Flex alignItems='center' position='absolute' mt={3} bottom={5}>
            <Text fontWeight='medium'>{project.language}</Text>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export default Projectscard
