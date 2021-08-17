import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { AspectRatio } from '@chakra-ui/layout'
import ContentLoader from 'react-content-loader'

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

const Placeholder = props => <ContentLoader viewBox="0 0 600 400" height='100%' width='100%' {...props}>
  <rect x="20" y="5" rx="0" ry="0" width="1" height="170" />
  <rect x="20" y="175" rx="0" ry="0" width="360" height="1" />

  <rect x="40" y="75" rx="0" ry="0" width="35" height="100" />
  <rect x="80" y="125" rx="0" ry="0" width="35" height="50" />
  <rect x="120" y="105" rx="0" ry="0" width="35" height="70" />
  <rect x="160" y="35" rx="0" ry="0" width="35" height="140" />
  <rect x="200" y="55" rx="0" ry="0" width="35" height="120" />
  <rect x="240" y="15" rx="0" ry="0" width="35" height="160" />
  <rect x="280" y="135" rx="0" ry="0" width="35" height="40" />
  <rect x="320" y="85" rx="0" ry="0" width="35" height="90" />
</ContentLoader>

const Graph3D = (props) => {
  return <AspectRatio maxW='100%' ratio={5 / 4} m={4}>
    <Suspense fallback={<Placeholder/>}>
      <Math3D {...props} save={saveGraph}/>
    </Suspense>
  </AspectRatio>
}

Graph3D.propTypes = {
  style: PropTypes.any
}

export default Graph3D
