import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'Ubuntu Mono, monospace',
        paddingBottom: '0.7rem'
      }
    },
    Button: {
      baseStyle: {
        fontFamily: 'Ubuntu Mono, monospace',
        margin: 'auto'
      }
    }
  }
})

export default theme
