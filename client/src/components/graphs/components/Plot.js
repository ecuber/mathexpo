import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Plotly from 'react-plotly.js'
import { Box } from '@chakra-ui/layout'
// import { Placeholder } from '../../layout'

// const Plotly = lazy(() => import('react-plotly.js'))

const Plot = props => {
  // return <Suspense fallback={<Placeholder/>}>
  /* </Suspense> */
  const { data, layout, config } = props

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

  return <Box
    key={forceRerender}
    w='100%'
    m='auto'
    // pass aditional style props to Box
    {...{ ...props, data: undefined, layout: undefined, config: undefined }}
    >
      <Plotly data={data} layout={layout} config={config} style={{ width: '100%', margin: 'auto' }}/>
    </Box>
}

Plot.propTypes = {
  data: PropTypes.any,
  layout: PropTypes.any,
  config: PropTypes.any
}

export default Plot
