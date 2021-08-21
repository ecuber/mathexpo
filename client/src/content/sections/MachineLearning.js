import React, { useState } from 'react'
import { Box, Heading, Button, Flex } from '@chakra-ui/react'
import { Float } from '../../components/layout'
import { Optimize2D, Graph3D } from '../../components/graphs'
import graphs from '../graphs.json'

const MachineLearning = props => {
  const [solution0, setSolution0] = useState(false)

  return <Box>
    <Heading>Machine Learning</Heading>
    <p>Let&apos;s begin by taking a look at this mathlet (interactive graphic). Just about everything you see here is manipulative— try dragging one of the white points around and see what happens!</p>
    <Box>
      <Float dir='right'>
        <Optimize2D solution={solution0}/>
      </Float>
      <p><strong>Notice how the orange area changes as you move the points; </strong>try to adjust the line by dragging the white points around and try to minimize the total orange area! What&apos;s the lowest value you can get?</p>
      <Flex dir='row' justifyContent='center' my={8}>
        <Button shadow='md' size='lg' fontSize='xl' m={{ base: '0 auto', md: '0 2 0 0' }} onClick={() => setSolution0(!solution0)}>
          {!solution0
            ? 'Reveal best solution'
            : 'Restore default setup'
        }
        </Button>
      </Flex>
      <p>The best we can do is roughly 1.373, so if you managed to get there, great job!</p>
      <p>Incidentally, one way to get there without having to rely on luck is to adjust one handle at a time: we move one of the two ends up and down to get the orange area as low as possible. Then we drag the other dot to get the area even lower. Then back to the first dot, and so on, back and forth. Pretty soon we&apos;ll get it to a point where the orange area isn&apos;t decreasing anymore, and then we can declare victory!</p>
      <p>Let&apos;s try it again, this time on a 3D plane instead of 2D. Drag the sliders on the left side to transform the gray plane, and see how small you can get the orange area!</p>
      <Box m='auto' w='95%'>
        <Graph3D dehydrated={graphs.volumemin} drawer aspectRatio={16 / 9}/>
      </Box>
      <br/>
      <p>Just like that, you&apos;ve already learned your first machine learning idea! By dragging the line into place one end at a time, you&apos;ve carried out an optimization algorithm called <strong>coordinate descent</strong>. Making adjustments to try to minimize some undesirable quantity (like the orange area in the mathlet) is a major theme in machine learning. You&apos;re well on your way at this point, even though we still need to talk about what machine learning is.</p>
    </Box>
  </Box>
}

export default MachineLearning
