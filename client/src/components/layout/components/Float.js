import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'

const Float = props => (
<Box
  className='float-container'
  float={{
    base: 'none',
    md: props.dir
  }}
  width={{
    base: 'none',
    md: '60%',
    lg: '50%'
  }}
  mx={{
    base: 4,
    lg: 5
  }}
  mb={3}
  >
    {props.children}
  </Box>
)

Float.propTypes = {
  children: PropTypes.node,
  dir: PropTypes.oneOf(['right', 'left', 'none'])
}

export default Float
