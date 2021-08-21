import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Link } from '@chakra-ui/layout'
import { Center, HStack, Tooltip } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const LINK_COLOR = '#565875'

const styles = { color: LINK_COLOR, textDecoration: 'underline' }
const icon = { ...styles, color: LINK_COLOR, textDecoration: 'none', fontSize: '2.5rem' }
const hover = { ...icon, color: '#42445A' }

const IconLink = props => (
  <Tooltip placement='top' hasArrow label={props.label}>
    <Link style={icon} _hover={hover} href={props.href} target='_blank' rel='noreferrer'>
      {props.icon}
    </Link>
  </Tooltip>
)

IconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string
}

const Closing = props => (
  <Box pb='5rem'>
    <Heading>Closing</Heading>
    <p>Just like that, you&apos;ve experienced the basis for the bleeding-edge of machine learning technology. Hopefully you found this introduction helpful!</p>
    <p>If you&apos;re hungry for more, I highly recommend the <a style={styles} href='https://youtu.be/aircAruvnKk' target='_blank' rel='noreferrer'>excellent video series</a> on neural networks by 3Blue1Brown. He goes through the key introductory ideas in vivid detail.</p>
    <p>If you&apos;re curious, the code for this website is hosted on GitHub, at the link below. There, you&apos;ll also find more information about how it was made and how you can use these components in your own web app!</p>
    <p>Feel free to also reach out by email with any other questions.</p>
    <br/>
    <br/>
    <Center flexDirection='column'>
      <HStack spacing='3.5rem'>
        <IconLink label={'Email Elijah'} href='mailto:22esippel@cpsd.us' icon={<HiOutlineMail/>}/>
        <IconLink label='GitHub' href='https://github.com/ecuber/mathexpo' icon={<FaGithub/>}/>
        <IconLink label='Email Sam' href='mailto:sam@prismia.chat' icon={<HiOutlineMail/>}/>
      </HStack>
    </Center>
  </Box>
)

export default Closing
