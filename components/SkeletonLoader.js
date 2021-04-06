import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
const SkeletonLoader = () => {
  return (
    <Box
      bg='blue.light'
      borderRadius='md'
      px={5}
      pt={5}
      pb='60px'
      position='relative'>
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' />
    </Box>
  )
}

export default SkeletonLoader
