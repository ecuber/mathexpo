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
    },
    Tooltip: {
      baseStyle: {
        size: 'lg',
        fontFamily: 'Ubuntu Mono, monospace',
        padding: 2,
        fontSize: '0.9rem',
        fontWeight: 'bold'
      }
    }
  }
})

export default theme
