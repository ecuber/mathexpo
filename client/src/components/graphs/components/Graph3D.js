import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { AspectRatio } from '@chakra-ui/layout'
import { Placeholder } from '../../layout'

const Math3D = React.lazy(() => import('math3d-component'))

// Sends a POST request to the development server to save the graph.
const saveGraph = (dehydrated) => {
  fetch('dev/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ dehydrated })
  })
    .then((res) => {
      if (res.ok) {
        console.log('successfully saved graph!')
      }
    })
}

const Graph3D = (props) => {
  return <AspectRatio maxW='100%' ratio={props.aspectRatio ?? 5 / 4} m={4}>
    <Suspense fallback={<Placeholder/>}>
      <Math3D {...props} save={saveGraph}/>
    </Suspense>
  </AspectRatio>
}

Graph3D.propTypes = {
  style: PropTypes.any,
  aspectRatio: PropTypes.number
}

export default Graph3D
