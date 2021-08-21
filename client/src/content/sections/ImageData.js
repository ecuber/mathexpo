import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'
import { Emoji, Float, Caption, Quiz } from '../../components/layout'

const ImageData = props => {
  return <>
    <Heading>Image Data</Heading>
    <p>Suppose you want a computer to accomplish a complex task, such as recognizing a pedestrian in a self-driving car&apos;s camera feed.</p>
    <Box w='100%' mb={5}>
      <Image mx='auto' w={{ base: '90%', lg: '50%' }} loading='lazy' src='/assets/pedestrian.jpeg'/>
      <Caption>Pedestrian near a crosswalk</Caption>
    </Box>
    <p>Which most accurately describes how a computer would &quot;perceive&quot; this image?</p>
    <Quiz placeholder={2}>
      <>Through conscious experience like a human</>
      <>Through brushstrokes like a painting</>
      <>Through numbers representing colors in tiny squares</>
      <><Emoji symbol='😅' label='laughing face'/> Computers don&apos;t have consciousness (as far as we know), so they don&apos;t really experience anything. <strong>Pictures taken by digital cameras are stored as a grid of color values.</strong></>
      <><Emoji symbol='🤔' label='thinking face'/> Images are indeed sometimes stored using drawing instructions. These are called <em>vector graphics</em>. However, <strong>pictures taken by digital cameras are stored as a grid of color values.</strong></>
      <><Emoji symbol='✅' label='green check mark'/> Yep. Pictures taken by digital cameras are stored as <strong>a grid of color values.</strong></>
    </Quiz>
    <Float dir='right'>
      <Image mx='auto' loading='lazy' src='/assets/zoom.gif'/>
      <Caption>Look at those pixels</Caption>
    </Float>
    <p>You probably don&apos;t notice it when the photo is zoomed out, but let&apos;s take a closer look at the little squares that comprise the image. We&apos;ll zoom in on the corner of the crosswalk stripe.</p>
    <p>Internally, each little square (or pixel) is stored as a number (specifically, a number between 0 and 16777215) and the computer knows how present that number as a color on your monitor.</p>
    <p>This particular image is 800 pixels wide by 600 pixels tall, for a total of 480,000 pixels.</p>
    <br/>
  </>
}

export default ImageData
