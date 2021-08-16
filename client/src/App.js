import React from 'react'
import { Container } from '@chakra-ui/react'
import Graph3D from './components/Graph3D'
import graphs from './content/graphs.json'

function App () {
  return (
    <Container maxW='container.lg'>
      <Graph3D dehydrated={graphs.TvXwxo18}/>
    </Container>
  )
}

export default App
