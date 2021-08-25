import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Cap = styled.p`
  font-size: 1.1rem;
  color: #a3a3a3;
  font-family: Ubuntu Mono, monospace;
  margin: 0 auto;
  min-width: 100%;
  white-space: break-spaces;
  overflow-wrap: auto;
  text-align: center;
  width: min-content;
`

const Caption = props => {
  return <Cap>
    {props.children}
  </Cap>
}

Caption.propTypes = {
  children: PropTypes.node
}

export default Caption
