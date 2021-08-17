import React, { useState } from 'react'
import { Box, Button, Container, Flex, Heading, Image, Center, Tooltip } from '@chakra-ui/react'
import Header from './components/layout/components/Header'
import { P, Subtitle, Float, Caption, Quiz, Emoji } from './components/layout'
import { Optimize2D, Scatter2D, TwoPixel, Line2D, Slab, ScatterNN, Semi } from './components/graphs'
import InfoBlock from './components/layout/components/InfoBlock'
import Graph3D from './components/Graph3D'
import graphs from './content/graphs.json'
import { StaticMathField as Eq } from 'react-mathquill'

const ContainerBreakpoints = ['100%', 'container.lg']

function App () {
  const [solution0, setSolution0] = useState(false)
  const [showDiagonal, setShowDiagonal] = useState(false)
  const [solution1, setSolution1] = useState(false)
  const [solution2, setSolution2] = useState(false)

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
          <Image mb={{ base: '5', md: 0 }} src='/assets/terminator.jpg'/>
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
        <Image w={{ base: '90%', sm: '70%', md: '50%' }} m='auto' mb='10' src='/assets/plane.svg'/>

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
        <P>The thing we just did—finding the thickest slab which separates two classes of points—is actually one of the most commonly used machine learning models! <strong>It&apos;s called a <u><Tooltip _hover={{ cursor: 'auto pointer' }} hasArrow label='Regarding the name, support vector is a term used to describe points on the edge of the slab, like the two orange-colored points and one teal point in the example above.'>support vector machine</Tooltip></u>.</strong></P>
        <P>You might be guessing that this particular support vector machine, which looks at only two pixels, isn&apos;t very useful if we have 480,000 pixels in our whole image that are available to make predictions. You&apos;d be right.</P>
        <P>But that&apos;s because it&apos;s only looking at two pixels. If we look at three pixel values, we&apos;d get points in three-dimensional space, and those points could be separated with— you guessed it— a three-dimensional plane!</P>
      </Box>

      {/** Support Vector Machines in Higher Dimensions */}
      <Box>
        <Heading as='h3' size='lg'>Support Vector Machines in Higher Dimensions</Heading>
        <P>Here&apos;s an example of a plane in three-dimensional space that separates four teal points from our orange-colored points (you can drag to rotate it around and see what&apos;s going on):</P>
        <Float dir='right'>
          <Graph3D dehydrated={graphs.basicSupportVector}/>
        </Float>
        <P>It&apos;s going to be important to think for a minute about what this looks like in equation form. Let&apos;s consider the 2D plane first. Suppose the equation for our separating line happens to be something like:</P>
        <Center mb='4' style={{ fontSize: '1.5rem' }}><Eq>2x+3y=6</Eq></Center>
        <P>This means that a point is on the line if twice its first coordinate plus three times its second coordinate is equal to 6.</P>
        <P>Then we can tell which side of this line a particular point (x, y) is on by checking...</P>

        <Quiz>
          <>whether 2x + 3y is bigger or smaller than 6</>
          <>whether 2x + 3y is positive or negative</>
          <><Emoji symbol='✅' label='green check mark'/> Exactly. The line is where <Eq>2x+3y=6</Eq> is equal to 6, and on one side it will be greater and on the other side less.</>
          <><Emoji symbol='🤔' label='thinking face'/> Not quite. The line is where <Eq>2x+3y=6</Eq> is equal to 6, and on one side it will be greater and on the other side less.</>
        </Quiz>

        <P>So, mathematically, the search for a separating line is equivalent to a search for an expression like <Eq>{'2x+3y=6'}</Eq> which happens to be larger than a certain value (6, say) for all teal points and smaller that value for all tomato-colored points.</P>
        <P>Likewise, the equation for a separating plane in three dimensions might be something that looks like:</P>
        <Center mb='4' style={{ fontSize: '1.5rem' }}><Eq>2x+3y+6z=12</Eq></Center>
        <P>in which case the <Eq>2x+3y+6z</Eq> value for each teal point would be greater than 12 and for each tomato point would be less than 12.</P>
        <P>Looking at things this way is important because...</P>
        <Quiz>
          <>we want to look at more than three pixels, and we can&apos;t visualize four-dimensional space</>
          <>spatial reasoning isn&apos;t mathematically rigorous</>
          <><Emoji symbol='✅' label='green check mark'/> Exactly. Handling even four tiny pixels with this approach will require a formulation like this one, which doesn&apos;t rely on our dimension-limited spatial reasoning ability.</>
          <><Emoji symbol='🤔' label='thinking face'/> Actually it is! Or, at least, it can be. But the main thing going on here is that we can&apos;t continue to visualize spatially in dimensions higher than 3.</>
        </Quiz>
        <P>Moving from three dimensions to four (that is, considering four pixels instead of three), we can say that we&apos;re looking for an equation like: </P>
        <Center mb='4' style={{ fontSize: '1.5rem' }}><Eq>−w+3x−2y+4.5z=1</Eq></Center>
        <P>where the left-hand side is smaller for each point <Eq>(w,\space x,\space y,\space z)</Eq> that corresponds to a pedestrian-containing image, and where the left-hand side is greater for the rest of the images.</P>
        <P>Of course, for the practical problem, four pixels is not really all that much better than 1. But the key thing now is that we&apos;re no long limited in how many pixels we can consider.</P>
        <P>What we&apos;re really looking for is <em>480,000</em> numbers that we can multiply in pairs with the actual 480,000 pixel values and add, yielding larger values for pedestrian-containing images and smaller values for the others.</P>
      </Box>

      {/** Numerical Optimization */}
      <Box>
        <Heading as='h3' size='lg'>Numerical Optimization</Heading>
        <P>While this might seem like a tall order, it turns out that this is something that computers are great at. There are general-purpose packages that you feed this problem into and get an answer back efficiently.</P>
        <P>Roughly speaking, the way this works is that the computer starts with <strong>480,000 random values</strong> (playing the role of the four numbers <Eq>[-1,\space 3,-2,\space 4.5]</Eq> in the expression <Eq>-w + 3x - 2y + 4.5z</Eq>), and it check how well they manage to separate the training data. It will almost certainly be terrible.</P>
        <P>But then the computer will propose small nudges each of those values it started with. It can say for each little nudge whether it would separate points <em>slightly better</em> than before, or slightly worse. Then it moves all 480,000 values in whichever direction made things a little better.</P>
        <P>It can apply this process repeatedly to achieve slightly better separation on each step. Eventually, we&apos;ll arrive at values which separate the training data about as well as possible.</P>
      </Box>

      {/** Neural Networks */}
      <Box>
        <P>While support vector machines work a lot better than nothing on image recognition tasks like identifying pedestrians, they&apos;re not good enough for real self-driving vehicle technology.</P>
        <P>To think about why this is the case, imagine a slightly different dataset. </P>
        <Float dir='right'>
          <ScatterNN/>
        </Float>
        <P>These points...</P>
        <Quiz>
          <>can&apos;t be separated by a line</>
          <>don&apos;t seem to show any patterns at all</>
          <><Emoji symbol='✅' label='green check mark'/> Exactly. There is no separating line. However, the teal ones do seem to be in the middle and the tomato ones near the edges.</>
          <><Emoji symbol='🤔' label='thinking face'/> Well, the teal ones do seem to be in the middle and the tomato ones near the edges.</>
        </Quiz>
        <P>We should be able to separate these points, just <em>not with a line.</em> We would want to use a <em>curve</em> instead, perhaps one which encircles the teal points in the middle.</P>
        <P>It shouldn&apos;t be surprising that this kind of situation comes up in practice a lot, because there&apos;s nothing all that special about lines and planes. It could very well happen that the data from each class (pedestrian/non-pedestrian) tend to show up in particular regions in the space of images, but that those regions happen to be entangled from the point of a view of a separating line/plane.</P>
        <P>If we&apos;re going to overcome the &quot;flatness&quot; limitation of lines and planes, we&apos;ll need the ability to <em>morph</em> or <em>fold</em> space somehow.</P>
        <P>Being able to use these two lines in tandem gives us a lot more flexibility.</P>
        <P>The mathematical term for the idea we&apos;re leveraging here is <strong>composition.</strong> In other words, we take two actions in sequence: first we reflect all the points based on the location of the gray line, and then we figure out which side of the blue line each resulting point is on.</P>
        <P>We call these sequential actions <strong>layers</strong>. For example, we&apos;d say that the reflection in the mathlet above is the first layer, and the separating line is the second layer.</P>
        <P>Furthermore, there&apos;s no reason to stop at two layers! We could, for example, fold across one line, then fold across a second line, and then separate the points with a third line.</P>
        <P>Another cool thing about this is that the training procedure is not complicated by the extra layers. We can still wiggle each line a little bit and ask whether it makes the final results slightly better or worse. Then we update everything at once (each line moving according to how it, individually, affected the final outcome) and repeat.</P>
        <P>This generalization of the support vector machine, which allows a sequence of space-morphing actions prior to separating the points, is called a <strong>neural network.</strong></P>
        <P>One popular space-morphing action is <em>to make the coordinate axes sticky.</em> This might seem strange, but actually it tends to work quite well.</P>
        <Float dir='right'>
          <Semi />
        </Float>
        <P>Consider the following problem, where we&apos;re trying to classify every point inside the semicircle as yellow, and every point outside as purple. </P>
        <P>To accomplish this feat, we&apos;re allowed to <em>linearly</em> transform the points however we want (rotate/scale/translate/etc). You can move the green and blue vectors to control this transformation. Then any points which happened to cross a coordinate axis get snapped back to it. Lastly, we try to separate the points using the line (which you can rotate using the tomtato handle or translate by grabbing it anywhere else).</P>
        {/* <Graph3D dehydrated={graphs.volumemin} dev/> */}
      </Box>
    </Container>
  </>
  )
}

export default App
