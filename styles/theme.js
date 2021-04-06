import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'blue.base',
        color: 'grey.base',
      },
    },
  },
  colors: {
    blue: {
      base: '#283655',
      light: '#4d648d',
      lighter: '#d0e1f9',
    },
    grey: {
      base: '#dfe3ee',
      light: '#f7f7f7',
      lighter: '#ffffff',
    },
    while: '#fffef9',
    pastel: {
      custom: '#ffaaa5',
    },
  },
})

export default theme
