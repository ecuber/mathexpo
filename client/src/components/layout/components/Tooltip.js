import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Popover, PopoverBody, PopoverContent, PopoverTrigger, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react'

const Tooltip = props => {
  const [open, setOpen] = useState(false)
  const toggle = e => {
    e.preventDefault()
    setOpen(!open)
  }
  return <Popover closeOnBlur onClose={() => setOpen(false)} isOpen={open}>
    <PopoverTrigger>
      <a style={{ color: 'inherit' }} onClick={toggle}>{props.children}</a>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow bgColor='#212233'/>
      <PopoverCloseButton color='#a2a2a2' />
      <PopoverBody
        pr='2'
        fontSize='1rem'
        fontWeight='normal'
        color='white'
        fontFamily='Ubuntu Mono, monospace'
        bgColor='#212233'
      >
        {props.label}
      </PopoverBody>
    </PopoverContent>
  </Popover>
}

Tooltip.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
}

export default Tooltip
