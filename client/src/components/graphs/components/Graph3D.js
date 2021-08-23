import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { AspectRatio } from '@chakra-ui/layout'
import { Emoji, Placeholder } from '../../layout'
import { ErrorBoundary } from 'react-error-boundary'
import InfoBlock from '../../layout/components/InfoBlock'
import { Button } from '@chakra-ui/react'

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

const BoundaryFallback = ({ resetErrorBoundary }) => (
  <>
  <div style={{ display: 'block', width: '100%' }}>
    <InfoBlock style={{ margin: 'auto' }}><Emoji symbol='❌' label='red x'/> Something went wrong.</InfoBlock>
    <Button shadow='md' m='auto' onClick={resetErrorBoundary}>Reset Graph</Button>
  </div>
  </>
)

BoundaryFallback.propTypes = {
  resetErrorBoundary: PropTypes.func
}

const Graph3D = (props) => {
  return <AspectRatio maxW='100%' ratio={props.aspectRatio ?? 5 / 4} m={4}>
    <Suspense fallback={<Placeholder/>}>
      <ErrorBoundary FallbackComponent={BoundaryFallback}>
        <Math3D {...props} save={saveGraph}/>
      </ErrorBoundary>
    </Suspense>
  </AspectRatio>
}

Graph3D.propTypes = {
  style: PropTypes.any,
  aspectRatio: PropTypes.number
}

export default Graph3D
