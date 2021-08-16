import React from 'react'
import PropTypes from 'prop-types'
import Math3D from 'math3d-component'
import { AspectRatio } from '@chakra-ui/layout'

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
  return <AspectRatio maxW='100%' ratio={5 / 3} m={4}>
    <Math3D {...props} save={saveGraph} style={{ boxShadow: 'lightgray 0 0 40px 2px' }}/>
  </AspectRatio>
}

Graph3D.propTypes = {
  style: PropTypes.any
}

export default Graph3D
