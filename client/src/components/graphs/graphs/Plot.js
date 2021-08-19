import React from 'react'
import { data, layout, config } from '../../../content/plotly.json'
import Plotly from 'react-plotly.js'
import { Box } from '@chakra-ui/layout'
// import { Placeholder } from '../../layout'

// const Plotly = lazy(() => import('react-plotly.js'))

const Plot = props => {
  // return <Suspense fallback={<Placeholder/>}>
  /* </Suspense> */
  return <Box w='90%'>
      <Plotly data={data} layout={layout} config={config}/>
    </Box>
}

export default Plot
