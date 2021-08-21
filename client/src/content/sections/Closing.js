import React from 'react'
import { Heading } from '@chakra-ui/layout'

const styles = { color: '#565875', textDecoration: 'underline' }

const Closing = props => (
  <>
    <Heading>Closing</Heading>
    <p>Just like that, you&apos;ve experienced the basis for the bleeding-edge of machine learning technology. Hopefully you found this introduction helpful!</p>
    <p>If you&apos;re hungry for more, I highly recommend the <a style={styles} href='https://youtu.be/aircAruvnKk' target='_blank' rel='noreferrer'>excellent video series</a> on neural networks by 3Blue1Brown. He goes through the key introductory ideas in vivid detail.</p>
    <p>If you&apos;re curious, the code for this website is hosted on GitHub, at <a style={styles} href='https://github.com/ecuber/mathexpo' target='_blank' rel='noreferrer'>this link.</a> You&apos;ll also find more information about how it was made and how you can use these components in your own web app!</p>
    <Heading size='lg' as='h3'>Contact Us</Heading>
    <p>If you&apos;d like to contact us, you can reach us by email: Elijah (<a style={styles} href='mailto:22esippel@cpsd.us'>22esippel@cpsd.us</a>) or Sam (<a style={styles} href='mailto:sam@prismia.chat'>sam@prismia.chat</a>)</p>
    <br/>
    <br/>
  </>
)

export default Closing
