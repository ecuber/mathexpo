import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const EmojiWrapper = styled.span`
  font-size: 23pt;
  vertical-align: middle;
  line-height: 1.2;
`
export default function Emoji (props) {
  return <EmojiWrapper
    role='img'
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}>
      {props.symbol}
  </EmojiWrapper>
}

Emoji.propTypes = {
  symbol: PropTypes.string,
  label: PropTypes.label
}
