import React, { useState } from 'react'
import { Box, Button, Container, Flex, Heading, Image, Center } from '@chakra-ui/react'
import Header from './components/layout/components/Header'
import { P, Subtitle, Float, Caption, Quiz, Emoji } from './components/layout'
import { Optimize2D, Scatter2D, TwoPixel, Line2D } from './components/graphs'

const ContainerBreakpoints = ['100%', 'container.lg']

function App () {
  const [solution0, setSolution0] = useState(false)
  const [showDiagonal, setShowDiagonal] = useState(false)

  return (
  <>
    <Header breakpoints={ContainerBreakpoints} />
    <Container as='section' maxW={ContainerBreakpoints}>

      {/** Introduction */}
      <Box pb='2rem'>
        <Heading as='h1' fontSize='2.75rem'>Machine Learning: The Rudiments, Visualized</Heading>
        <Subtitle>by Elijah Sippel and Sam Watson</Subtitle>
      </Box>
      <Box>
        <Float dir='right'>
          <Image mb={{ base: '5', md: 0 }} src='/assets/terminator.png'/>
        </Float>
        <P>For most, the words &quot;artificial intelligence&quot; and evoke images of the Terminator and robot armies taking over the world. While we haven&apos;t reached that point (yet), <strong>machine learning</strong>, a subset of modern AI, has become ubiquitous in the tech industry and data science field.</P>
        <P>Pop culture and media tend to depict machine learning (generally abbreviated as ML) as a mystical branch of computer science that only the most talented programmers and mathematicians are capable of comprehending. While that may have been true decades ago, the barrier to entry in 2021 has fallen dramatically. </P>
        <Heading as='h3' size='lg'>Why we think ML is hard</Heading>
        <P>The real barrier for understanding ML concepts is not the actual complexity of the ideas, but that they are typically communicated through math notation and code. For those who aren&apos;t familiar with those modes of expression, the ideas can still be made readily accessible if expressed in other ways. By the end of this interactive article, you too will be well on your way to a rudimentary understanding of the mathematical basis for modern ML algorithms.</P>
      </Box>

      {/** Machine Learning */}
      <Box>
        <Heading>Machine Learning</Heading>
        <P>Let&apos;s begin by taking a look at this mathlet (interactive graphic). Just about everything you see here is manipulative— try dragging one of the white points around and see what happens!</P>
        <Box>
          <Float dir='right'>
            <Optimize2D solution={solution0}/>
          </Float>
          <P><strong>Notice how the orange area changes as you move the points; </strong>try to adjust the line by dragging the white points around and try to minimize the total orange area! What&apos;s the lowest value you can get?</P>
          <Flex dir='row' justifyContent='center' my={8}>
            <Button shadow='lg' size='lg' fontSize='xl' m={{ base: '0 auto', md: '0 2 0 0' }} onClick={() => setSolution0(!solution0)}>
              {!solution0
                ? 'Reveal best solution'
                : 'Restore default setup'
            }
            </Button>
          </Flex>
          <P>The best we can do is roughly 1.373, so if you managed to get there, great job!</P>
          <P>Incidentally, one way to get there without having to rely on luck is to adjust one handle at a time: we move one of the two ends up and down to get the orange area as low as possible. Then we drag the other dot to get the area even lower. Then back to the first dot, and so on, back and forth. Pretty soon we&apos;ll get it to a point where the orange area isn&apos;t decreasing anymore, and then we can declare victory!</P>
          <P>Just like that, you&apos;ve already learned your first machine learning idea! By dragging the line into place one end at a time, you&apos;ve carried out an optimization algorithm called <strong>coordinate descent</strong>. Making adjustments to try to minimize some undesirable quantity (like the orange area in the mathlet) is a major theme in machine learning. You&apos;re well on your way at this point, even though we still need to talk about what machine learning is.</P>
        </Box>
      </Box>

      <Box>
        {/** Image Data */}
        <Heading>Image Data</Heading>
        <P>Suppose you want a computer to accomplish a complex task, such as recognizing a pedestrian in a self-driving car&apos;s camera feed.</P>
        <Box w='100%' mb={5}>
          <Image mx='auto' w={{ base: '90%', lg: '50%' }} src='/assets/pedestrian.jpeg'/>
          <Caption>Pedestrian near a crosswalk</Caption>
        </Box>
        <P>Which most accurately describes how a computer would &quot;perceive&quot; this image?</P>
        <Quiz placeholder={2}>
          <>Through conscious experience like a human</>
          <>Through brushstrokes like a painting</>
          <>Through numbers representing colors in tiny squares</>
          <><Emoji symbol='😅' label='laughing face'/> Computers don&apos;t have consciousness (as far as we know), so they don&apos;t really experience anything. <strong>Pictures taken by digital cameras are stored as a grid of color values.</strong></>
          <><Emoji symbol='🤔' label='thinking face'/> Images are indeed sometimes stored using drawing instructions. These are called <em>vector graphics</em>. However, <strong>pictures taken by digital cameras are stored as a grid of color values.</strong></>
          <><Emoji symbol='✅' label='green check mark'/> Yep. Pictures taken by digital cameras are stored as <strong>a grid of color values.</strong></>
        </Quiz>
        <Float dir='right'>
          <Image mx='auto' src='/assets/zoom.gif'/>
          <Caption>Look at those pixels</Caption>
        </Float>
        <P>You probably don&apos;t notice it when the photo is zoomed out, but let&apos;s take a closer look at the little squares that comprise the image. We&apos;ll zoom in on the corner of the crosswalk stripe.</P>
        <P>Internally, each little square (or pixel) is stored as a number (specifically, a number between 0 and 16777215) and the computer knows how present that number as a color on your monitor.</P>
        <P>This particular image is 800 pixels wide by 600 pixels tall, for a total of 480,000 pixels.</P>
        <br/>

        {/** Predictions */}
        <Heading size='lg'>Making Predictions</Heading>
        <P>So in order to determine whether there&apos;s a pedestrian in the crosswalk, we&apos;ll need to somehow process all 480,000 numbers to generate a useful output. In this case, it would be useful to produce a number: either a 0 (to indicate no pedestrian) or a 1 (for one or more pedestrians).</P>
        <P>There are endless ways to manipulate the grid of numbers that represents the image in order to get out that 0 or 1, but let&apos;s try this: look at <strong>a single, specific pixel somewhere in the image,</strong> and if its value is bigger than, say, 8388608, give an output of 1. If it&apos;s smaller, give an output of 0.</P>
        <Float dir='right'>
          <Image src='/assets/highlighted.png'/>
          <Caption>This is the pixel in question!</Caption>
        </Float>
        <P>Suppose the pixel we are checking is the one here, highlighted in blue, and that its numerical value is 4313. Based on the rule we defined, we would return a...</P>

        <Quiz>
          <>0, for no pedestrian <Emoji>🚷</Emoji></>
          <>1, for pedestrian <Emoji>🚶</Emoji></>
          <><Emoji symbol='✅' label='green check mark'/> Exactly, the number is smaller than 8388608, so our rule says we should give 0 as an output.</>
          <><Emoji symbol='🤔' label='thinking face'/> Well, the number is smaller than 8388608, so our rule says we should give 0 as output.</>
        </Quiz>

        <P>Great! Now I&apos;m wondering, what do you think about this rule? Is it practical for the task we&apos;re trying to accomplish?</P>
        <Quiz>
          <>It seems overly simplistic to a somewhat ridiculous extent</>
          <>I think it would work</>
          <><Emoji symbol='✅' label='green check mark'/> Agreed. You definitely need to account for more than one pixel to do this task effectively.</>
          <><Emoji symbol='🤔' label='thinking face'/> It turns out you&apos;re going to need to account for more than one pixel in order to do this task effectively.</>
        </Quiz>

      </Box>

      <Box>
        <P>Even though this rule seems entirely useless, it&apos;s actually an excellent starting point. We&apos;re going to modify it, one step at a time, to work our way towards actual state-of-the-art methods used for this kind of problem.</P>
        <P>Here&apos;s the key idea: one pixel isn&apos;t very useful on its own, but what about two pixels? Instead of a single number, we&apos;ll now have a pair of numbers. And <strong>a pair of numbers can be naturally represented as a point on a...</strong></P>
      </Box>
      <Quiz>
        <>plane</>
        <>line</>
        <>circle</>
        <><Emoji symbol='✅' label='green check mark'/> Right! We can think of each of the numbers as the distance to one axis.</>
        <><Emoji symbol='🤔' label='thinking face'/> Typically a <em>single number</em> would be represented as a point on a number line.</>
        <><Emoji symbol='🤔' label='thinking face'/> We can represent a point on a circle with a <em>single number</em>, namely how far around we have to rotate to get the point.</>
      </Quiz>

      <Box>
        <P>Here&apos;s a <strong>single point</strong> on a <strong>number line:</strong></P>
        <Image w={{ base: '90%', md: '70%' }} m='auto' src='/assets/line.svg'/>
        <P style={{ marginTop: '2rem', width: '95%' }}>And here is a <strong>pair of numbers</strong> on a <strong>plane.</strong> We call the values 2 and 3 the coordinates of the point <strong>(2, 3).</strong></P>
        <Image w={{ base: '80%', md: '50%' }} m='auto' mb='10' src='/assets/plane.svg'/>

        <P>Because this geometric connection between pixel colors and points in the plane is so important to the story, let&apos;s make it really tangible. You can control the colors of the two pixels in this mathlet by dragging the point around in the square on the right.</P>
        <br/>
        <Float dir='right'>
          <TwoPixel diagonal={showDiagonal}/>
          <Center><Button size='md' mt={1} mb={0} onClick={() => setShowDiagonal(!showDiagonal)}>{showDiagonal ? 'Hide Diagonal' : 'Show Diagonal'}</Button></Center>
        </Float>
        <P>For convenience, we&apos;re showing plotting the pixel-representing numbers on a scale from 0 to 1, rather than from 0 to 16777215.</P>
        <P>Notice that if we move the point in a direction parallel to one of the axes, we can keep one color constant. For example, <strong>if we move the point horizontally,</strong> its second coordinate stays the same, while the first coordinate changes, changing the color of the first pixel.</P>
        <P>Notice also that the points along the diagonal (the line that connects (0, 0) and (1, 1)) have the property that the two pixel colors are the same.</P>
        <P>Now, the cool thing about looking at two pixels instead of one is that it gives us a lot more information to work with to try to separate out pedestrian-containing images from non-pedestrian-containing images. Let&apos;s see how we do that!</P>
      </Box>

      {/** Learning from Data */}
      <Box>
        <Heading>Learning from Data</Heading>
        <Float dir='right'>
          <Scatter2D/>
        </Float>
        <P>Suppose you collect four images with pedestrians and four images without pedestrians. You look at two specific pixel color values and plot them in a square on a plane (per the scheme above), coloring them teal (pedestrian) and tomato (no pedestrian) so you can tell them apart.</P>
        <P>These eight points (which, remember, come from a pair of pixels from each of the images) are called <strong>training data.</strong> We&apos;re going to use them to try to figure out what to do to tell whether a given image has a pedestrian in it.</P>
        <P>This brings us to a key conceptual point about how machine learning is different from other kinds of computational tasks: in machine learning, <strong>the system looks at real data to figure out what to do.</strong></P>
        <P>In other words, we&apos;re acknowledging up front that we aren&apos;t going to be able to work out from scratch what the computer needs to do with those 480,000 numbers to give us a correct 0 or 1 response. Instead, <strong>we&apos;ll hand the computer lots of images and see if it can find patterns in the data</strong> that it can use to reliably discern which images have pedestrians in them.</P>

        <Heading as='h3' size='lg'>Separating Lines</Heading>
        <P>Alright, now back to our 8 training points. When you first saw those points, your visual cortex probably couldn&apos;t resist mentally separating the two groups using a line. Drag the two points on the dark blue line such that all of the teal points are on one side and all of the orange-colored points are on the other side.</P>
        <Box m='auto' w={{ base: '80%', md: '50%' }}>
          <Line2D/>
        </Box>
      </Box>
    </Container>
  </>
  )
}

export default App
