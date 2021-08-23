import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from './components/layout/components/Header'
import {
  HigherDimensions,
  ImageData,
  Introduction,
  MachineLearning,
  Predictions,
  NumericOptimization,
  NeuralNetworks,
  Closing,
  LearningFromData
} from './content'
import { Graph2D } from './components/graphs'

const ContainerBreakpoints = ['100%', 'container.lg']

function App () {
  return (
  <>
    <Header breakpoints={ContainerBreakpoints} />
    <Container as='section' maxW={ContainerBreakpoints}>
      {/* Moved sections to own components because App.js was lagging vscode */}
      <Introduction/>
      <MachineLearning/>
      <ImageData/>
      <Predictions/>
      <LearningFromData/>
      <HigherDimensions/>
      <NumericOptimization/>
      <NeuralNetworks/>
      <Closing/>
    </Container>
  </>
  )
}

export default App
