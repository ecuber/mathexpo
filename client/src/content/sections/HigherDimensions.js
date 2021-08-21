import React from 'react'
import { Heading, Center } from '@chakra-ui/react'
import { Emoji, Float, Quiz } from '../../components/layout'
import { Graph3D } from '../../components/graphs'
import { StaticMathField as Eq } from 'react-mathquill'
import graphs from '../graphs.json'

const HigherDimensions = props => {
  return <>
    <Heading as='h3' size='lg'>Support Vector Machines in Higher Dimensions</Heading>
    <p>Here&apos;s an example of a plane in three-dimensional space that separates four teal points from our orange-colored points (you can drag to rotate it around and see what&apos;s going on):</p>
    <Float dir='right'>
      <Graph3D dehydrated={graphs.basicSupportVector}/>
    </Float>
    <p>It&apos;s going to be important to think for a minute about what this looks like in equation form. Let&apos;s consider the 2D plane first. Suppose the equation for our separating line happens to be something like:</p>
    <Center mb='4' style={{ fontSize: '1.5rem' }}><Eq>2x+3y=6</Eq></Center>
    <p>This means that a point is on the line if twice its first coordinate plus three times its second coordinate is equal to 6.</p>
    <p>Then we can tell which side of this line a particular point (x, y) is on by checking...</p>

    <Quiz>
      <>whether 2x + 3y is bigger or smaller than 6</>
      <>whether 2x + 3y is positive or negative</>
      <><Emoji symbol='✅' label='green check mark'/> Exactly. The line is where <Eq>2x+3y=6</Eq> is equal to 6, and on one side it will be greater and on the other side less.</>
      <><Emoji symbol='🤔' label='thinking face'/> Not quite. The line is where <Eq>2x+3y=6</Eq> is equal to 6, and on one side it will be greater and on the other side less.</>
    </Quiz>

    <p>So, mathematically, the search for a separating line is equivalent to a search for an expression like <Eq>{'2x+3y'}</Eq> which happens to be larger than a certain value (6, say) for all teal points and smaller that value for all tomato-colored points.</p>
    <p>Likewise, the equation for a separating plane in three dimensions might be something that looks like:</p>
    <Center mb='4' style={{ fontSize: '1.5rem' }}><Eq>2x+3y+6z=12</Eq></Center>
    <p>in which case the <Eq>2x+3y+6z</Eq> value for each teal point would be greater than 12 and for each tomato point would be less than 12.</p>
    <p>Looking at things this way is important because...</p>
    <Quiz>
      <>we want to look at more than three pixels, and we can&apos;t visualize four-dimensional space</>
      <>spatial reasoning isn&apos;t mathematically rigorous</>
      <><Emoji symbol='✅' label='green check mark'/> Exactly. Handling even four tiny pixels with this approach will require a formulation like this one, which doesn&apos;t rely on our dimension-limited spatial reasoning ability.</>
      <><Emoji symbol='🤔' label='thinking face'/> Actually it is! Or, at least, it can be. But the main thing going on here is that we can&apos;t continue to visualize spatially in dimensions higher than 3.</>
    </Quiz>
    <p>Moving from three dimensions to four (that is, considering four pixels instead of three), we can say that we&apos;re looking for an equation like: </p>
    <Center mb='4' style={{ fontSize: '1.5rem' }}><Eq>−w+3x−2y+4.5z=1</Eq></Center>
    <p>where the left-hand side is smaller for each point <Eq>(w,\space x,\space y,\space z)</Eq> that corresponds to a pedestrian-containing image, and where the left-hand side is greater for the rest of the images.</p>
    <p>Of course, for the practical problem, four pixels is not really all that much better than 1. But the key thing now is that we&apos;re no long limited in how many pixels we can consider.</p>
    <p>What we&apos;re really looking for is <em>480,000</em> numbers that we can multiply in pairs with the actual 480,000 pixel values and add, yielding larger values for pedestrian-containing images and smaller values for the others.</p>
  </>
}

export default HigherDimensions
