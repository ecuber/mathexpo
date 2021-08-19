import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import JSXGraph from '@sswatson/jsxgraph-react-js'

function Graph2D (props) {
  const { aspectRatio } = props
  const [forceRerender, setForceRerender] = useState(1)

  useEffect(() => {
    let timeoutId

    const resizeUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setForceRerender(forceRerender + 1)
      }, 100)
    }
    window.addEventListener('resize', resizeUpdate)

    return () => {
      window.removeEventListener('resize', resizeUpdate)
    }
  }, [window.innerWidth])

  return (
    <JSXGraph
      key={forceRerender}
      jessieCode
      logic={props.logic}
      boardAttributes={{
        showCopyright: false,
        screenshot: true,
        showNavigation: false,
        resize: { enabled: true, throttle: 0 }
      }}
      style={{
        width: '100%',
        height: 0,
        paddingBottom: `${Math.floor(aspectRatio * 100)}%`,
        showReload: true,
        margin: 'auto'
      }}
    />
  )
}

Graph2D.propTypes = {
  aspectRatio: PropTypes.number,
  logic: PropTypes.string
}

export default Graph2D
