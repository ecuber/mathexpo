import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Sub = styled.p`
  font-family: Ubuntu Mono, monospace;
  font-size: 1.25rem;
  color: #a3a3a3;
  

`

const Subtitle = props => {
  return <Sub>{props.children}</Sub>
}

Subtitle.propTypes = {
  children: PropTypes.node
}

export default Subtitle
