import React, { useState } from 'react'
import { Heading, Box, Button, Flex, Tooltip } from '@chakra-ui/react'
import { Emoji, P, Float, InfoBlock } from '../../components/layout'
import { Scatter2D, Line2D, Slab } from '../../components/graphs'

const Predictions = props => {
  const [solution1, setSolution1] = useState(false)
  const [solution2, setSolution2] = useState(false)

  return <>
    <Box>
      <Heading>Learning from Data</Heading>
      <Float dir='right'>
        <Scatter2D/>
      </Float>
      <P>Suppose you collect four images with pedestrians and four images without pedestrians. You look at two specific pixel color values and plot them in a square on a plane (per the scheme above), coloring them teal (pedestrian) and orange (no pedestrian) so you can tell them apart.</P>
      <P>These eight points (which, remember, come from a pair of pixels from each of the images) are called <strong>training data.</strong> We&apos;re going to use them to try to figure out what to do to tell whether a given image has a pedestrian in it.</P>
      <P>This brings us to a key conceptual point about how machine learning is different from other kinds of computational tasks: in machine learning, <strong>the system looks at real data to figure out what to do.</strong></P>
      <P>In other words, we&apos;re acknowledging up front that we aren&apos;t going to be able to work out from scratch what the computer needs to do with those 480,000 numbers to give us a correct 0 or 1 response. Instead, <strong>we&apos;ll hand the computer lots of images and see if it can find patterns in the data</strong> that it can use to reliably discern which images have pedestrians in them.</P>

      <Heading as='h3' size='lg'>Separating Lines</Heading>
      <P>Alright, now back to our 8 training points. When you first saw those points, your visual cortex probably couldn&apos;t resist mentally separating the two groups using a line. Drag the two points on the dark blue line such that all of the teal points are on one side and all of the orange-colored points are on the other side.</P>
      <Box m='auto' w={{ base: '90%', sm: '70%', md: '50%' }}>
        <Line2D solution={solution1}/>
      </Box>
      <Flex dir='row' justifyContent='center' my={8}>
          <Button shadow='lg' size='lg' fontSize='xl' m={{ base: '0 auto', md: '0 2 0 0' }} onClick={() => setSolution1(!solution1)}>
            {!solution1
              ? 'Show a possible solution'
              : 'Restore default setup'
          }
          </Button>
        </Flex>
      <P>As you may have noticed, there are many lines that would separate the points correctly based on these criteria; we might as well pick a good one! Consider this question: what would be a good way of determining which separating line is &quot;better&quot; than the others?</P>
      <P>Here&apos;s an idea: let&apos;s thicken the line into a slab, and look for the thickest slab that still separates the points. This should be a bit more accurate for points closer to the line!</P>
      <InfoBlock><Emoji symbol='💡' label='lightbulb'/> <strong>Helpful Tip:</strong> In this mathlet, drag the arrow around to shift the whole slab, and drag the points to make it thicker, thinner, or to rotate the slab.</InfoBlock>
      <Box m='auto' w={{ base: '90%', sm: '70%', md: '50%' }}>
        <Slab solution={solution2}/>
      </Box>
      <Flex dir='row' justifyContent='center' my={8}>
        <Button shadow='lg' size='lg' fontSize='xl' m={{ base: '0 auto', md: '0 2 0 0' }} onClick={() => setSolution2(!solution2)}>
          {!solution2
            ? 'Show best solution'
            : 'Restore default setup'
          }
        </Button>
      </Flex>
      <P>The thing we just did—finding the thickest slab which separates two classes of points—is actually one of the most commonly used machine learning models! <strong>It&apos;s called a <Tooltip label='&quot;Support vector&quot; is a term used to describe points on the edge of the slab, like the two orange-colored points and one teal point in the example above.'><Button>support vector machine.</Button></Tooltip>.</strong></P>
      <P>You might guess that this particular support vector machine, which looks at only two pixels, isn&apos;t very useful if we have 480,000 pixels in our whole image that are available to make predictions. You&apos;d be right.</P>
      <P>But that&apos;s because it&apos;s only looking at two pixels. If we look at three pixel values, we&apos;d get points in three-dimensional space, and those points could be separated with— you guessed it— a three-dimensional plane!</P>
    </Box>
  </>
}

export default Predictions
