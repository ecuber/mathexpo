import React, { useState } from 'react'
import { Heading, Image, Box, Center, Button } from '@chakra-ui/react'
import { Emoji, Float, Caption, Quiz } from '../../components/layout'
import { TwoPixel } from '../../components/graphs'

const Predictions = props => {
  const [showDiagonal, setShowDiagonal] = useState(false)

  return <>
    <Heading size='lg'>Making Predictions</Heading>
    <p>So in order to determine whether there&apos;s a pedestrian in the crosswalk, we&apos;ll need to somehow process all 480,000 numbers to generate a useful output. In this case, it would be useful to produce a number: either a 0 (to indicate no pedestrian) or a 1 (for one or more pedestrians).</p>
    <p>There are endless ways to manipulate the grid of numbers that represents the image in order to get out that 0 or 1, but let&apos;s try this: look at <strong>a single, specific pixel somewhere in the image,</strong> and if its value is bigger than, say, 8388608, give an output of 1. If it&apos;s smaller, give an output of 0.</p>
    <Float dir='right'>
      <Image alt={'the pixel we\'re referring to'} loading='lazy' src='/assets/highlighted.png'/>
      <Caption>This is the pixel in question!</Caption>
    </Float>
    <p>Suppose the pixel we are checking is the one here, highlighted in blue, and that its numerical value is 4313. Based on the rule we defined, we would return a...</p>

    <Quiz>
      <>0, for no pedestrian <Emoji symbol='🚷' label='no pedestrian'/></>
      <>1, for pedestrian <Emoji symbol='🚶' label='walking'/></>
      <><Emoji symbol='✅' label='green check mark'/> Exactly, the number is smaller than 8388608, so our rule says we should give 0 as an output.</>
      <><Emoji symbol='🤔' label='thinking face'/> Well, the number is smaller than 8388608, so our rule says we should give 0 as output.</>
    </Quiz>

    <br/>
    <p>Great! Now I&apos;m wondering, what do you think about this rule? Is it practical for the task we&apos;re trying to accomplish?</p>
    <Quiz placeholder={1}>
      <>I think it would work</>
      <>It seems overly simplistic to a somewhat ridiculous extent</>
      <><Emoji symbol='🤔' label='thinking face'/> It turns out you&apos;re going to need to account for more than one pixel in order to do this task effectively.</>
      <><Emoji symbol='✅' label='green check mark'/> Agreed. You definitely need to account for more than one pixel to do this task effectively.</>
    </Quiz>
    <Box>
      <p>Even though this rule seems entirely useless, it&apos;s actually an excellent starting point. We&apos;re going to modify it, one step at a time, to work our way towards actual state-of-the-art methods used for this kind of problem.</p>
      <p>Here&apos;s the key idea: one pixel isn&apos;t very useful on its own, but what about two pixels? Instead of a single number, we&apos;ll now have a pair of numbers. And <strong>a pair of numbers can be naturally represented as a point on a...</strong></p>
    </Box>
    <Quiz palceholder={1}>
      <>line</>
      <>plane</>
      <>circle</>
      <><Emoji symbol='🤔' label='thinking face'/> Typically a <em>single number</em> would be represented as a point on a number line.</>
      <><Emoji symbol='✅' label='green check mark'/> Right! We can think of each of the numbers as the distance to one axis.</>
      <><Emoji symbol='🤔' label='thinking face'/> We can represent a point on a circle with a <em>single number</em>, namely how far around we have to rotate to get the point.</>
    </Quiz>

    <Box>
      <p>Here&apos;s a <strong>single point</strong> on a <strong>number line:</strong></p>
      <Image alt='number line with the 1.5 plotted on it' loading='lazy' w={{ base: '90%', md: '70%' }} maxW={400} m='auto' src='/assets/line.svg'/>
      <p style={{ marginTop: '2rem', width: '95%' }}>And here is a <strong>pair of numbers</strong> on a <strong>plane.</strong> We call the values 2 and 3 the coordinates of the point <strong>(2, 3).</strong></p>
      <Image alt='x y plane with with the point (2, 3) plotted on it' loading='lazy' w={{ base: '90%', sm: '70%', md: '50%' }} maxW={300} m='auto' mb='10' src='/assets/plane.svg'/>

      <p>Because this geometric connection between pixel colors and points in the plane is so important to the story, let&apos;s make it really tangible. You can control the colors of the two pixels in this mathlet by dragging the point around in the square on the right.</p>
      <br/>
      <Float dir='right'>
        <TwoPixel diagonal={showDiagonal}/>
        <Center><Button size='md' shadow='md' mt={1} mb={0} onClick={() => setShowDiagonal(!showDiagonal)}>{showDiagonal ? 'Hide Diagonal' : 'Show Diagonal'}</Button></Center>
      </Float>
      <p>For convenience, we&apos;re showing plotting the pixel-representing numbers on a scale from 0 to 1, rather than from 0 to 16777215.</p>
      <p>Notice that if we move the point in a direction parallel to one of the axes, we can keep one color constant. For example, <strong>if we move the point vertically,</strong> its first coordinate stays the same, while the second coordinate changes, changing the color of the pixel on the right.</p>
      <p>Notice also that the points along the diagonal (the line that connects (0, 0) and (1, 1)) have the property that the two pixel colors are the same.</p>
      <p>Now, the cool thing about looking at two pixels instead of one is that it gives us a lot more information to work with to try to separate out pedestrian-containing images from non-pedestrian-containing images. Let&apos;s see how we do that!</p>
    </Box>
  </>
}

export default Predictions
