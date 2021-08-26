import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import MathView from 'react-math-view'

const StaticEq = props => {
  const ref = useRef(null)
  return <MathView
    style={{
      whiteSpace: 'none',
      height: 'min-content',
      display: `${props.inline ? 'inline-block' : 'block'}`
    }}
    value={props.value}
    ref={ref}
    readOnly
  />
}

StaticEq.propTypes = {
  value: PropTypes.string,
  inline: PropTypes.bool
}

export default StaticEq
