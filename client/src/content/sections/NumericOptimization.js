import React from 'react'
import { Heading } from '@chakra-ui/layout'
import { P } from '../../components/layout'
import { StaticMathField as Eq } from 'react-mathquill'

const NumericOptimization = props => {
  return <>
    <Heading as='h3' size='lg'>Numerical Optimization</Heading>
    <P>While this might seem like a tall order, it turns out that this is something that computers are great at. There are general-purpose packages that you feed this problem into and get an answer back efficiently.</P>
    <P>Roughly speaking, the way this works is that the computer starts with <strong>480,000 random values</strong> (playing the role of the four numbers <Eq>[-1,\space 3,-2,\space 4.5]</Eq> in the expression <Eq>-w + 3x - 2y + 4.5z</Eq>), and it check how well they manage to separate the training data. It will almost certainly be terrible.</P>
    <P>But then the computer will propose small nudges each of those values it started with. It can say for each little nudge whether it would separate points <em>slightly better</em> than before, or slightly worse. Then it moves all 480,000 values in whichever direction made things a little better.</P>
    <P>It can apply this process repeatedly to achieve slightly better separation on each step. Eventually, we&apos;ll arrive at values which separate the training data about as well as possible.</P>
  </>
}

export default NumericOptimization
