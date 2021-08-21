import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'
import { Subtitle, Float } from '../../components/layout'

const Introduction = props => (
  <>
  <Box pb='2rem'>
    <Heading as='h1' fontSize='2.75rem'>Machine Learning: The Rudiments, Visualized</Heading>
    <Subtitle>by Elijah Sippel and Sam Watson</Subtitle>
  </Box>
  <Box>
    <Float dir='right'>
      <Image alt='terminator' mb={{ base: '5', md: 0 }} loading='eager' src='/assets/terminator.jpg'/>
    </Float>
    <p>For most, the words &quot;artificial intelligence&quot; and evoke images of the Terminator and robot armies taking over the world. While we haven&apos;t reached that point (yet), <strong>machine learning</strong>, a subset of modern AI, has become ubiquitous in the tech industry and data science field.</p>
    <p>Pop culture and media tend to depict machine learning (generally abbreviated as ML) as a mystical branch of computer science that only the most talented programmers and mathematicians are capable of comprehending. While that may have been true decades ago, the barrier to entry in 2021 has fallen dramatically. </p>
    <Heading as='h3' size='lg'>Why we think ML is hard</Heading>
    <p>The real barrier for understanding ML concepts is not the actual complexity of the ideas, but that they are typically communicated through math notation and code. For those who aren&apos;t familiar with those modes of expression, the ideas can still be made readily accessible if expressed in other ways. By the end of this interactive article, you too will be well on your way to a rudimentary understanding of the mathematical basis for modern ML algorithms.</p>
  </Box>
  </>
)

export default Introduction
