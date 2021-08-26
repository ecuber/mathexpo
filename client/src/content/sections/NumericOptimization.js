import React from 'react'
import { Heading } from '@chakra-ui/layout'
import { StaticEq } from '../../components/layout'

const NumericOptimization = props => {
  return <>
    <Heading as='h3' size='lg'>Numerical Optimization</Heading>
    <p>While this might seem like a tall order, it turns out that this is something that computers are great at. There are general-purpose software packages that you can feed this problem into and get an answer back remarkably efficiently.</p>
    <p>Roughly speaking, the way this works is that the computer starts with 480,000 <strong>random values</strong> (playing the role of the four numbers <StaticEq inline value='[-1,\space 3,-2,\space 4.5]'/> in the expression <StaticEq inline value='-w + 3x - 2y + 4.5z'/>), and it checks how well those values manage to separate the training data. It will almost certainly be terrible.</p>
    <p>But then the computer will propose small nudges each of those values it started with. It can say for each little nudge whether it would separate points <em>slightly better</em> than before, or slightly worse. Then it moves all 480,000 values in whichever direction made things a little better.</p>
    <p>It can apply this process repeatedly to achieve slightly better separation on each step. Eventually, we&apos;ll arrive at values which separate the training data about as well as possible.</p>
  </>
}

export default NumericOptimization
