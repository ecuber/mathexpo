import React, { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import MathView from 'react-math-view'

const MathField = props => {
  const [value, setValue] = useState(props.value || 'd=\\sqrt[]{x^2+y^2}')
  const onChange = useCallback(e => {
    setValue(e.currentTarget.getValue())
    props.onChange && props.onChange(e)
  }, [props.onChange])

  const ref = useRef(null)
  useEffect(() => {
    console.log('ControlledMathView value changed', value)
  }, [value])

  return (
    <MathView
    style={{
      padding: '0.5rem 0.7rem',
      fontSize: '1.5rem',
      whiteSpace: 'none',
      height: 'min-content',
      display: `${props.inline ? 'inline-block' : 'block'}`,
      border: '1px #a5a5a5 solid',
      borderRadius: '8px'
    }}
      {...props}
      ref={ref}
      value={value}
      onChange={onChange}
      virtualKeyboardMode='auto'
    />
  )
}

MathField.propTypes = {
  value: PropTypes.string,
  inline: PropTypes.bool,
  onChange: PropTypes.func
}

export default MathField
