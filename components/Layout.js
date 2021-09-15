import theme from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
const Layout = ({ children }) => {
  return (
    <>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </>
  )
}

export default Layout
