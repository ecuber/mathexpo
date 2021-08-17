import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Box, Flex, Center } from '@chakra-ui/react'

const Response = styled.p`
  margin-top: 1rem;
  font-family: Ubuntu Mono, monospace;
  font-size: 1.25rem;
  background: #F4F4F4;
  padding: 0.4rem;
  border-radius: 8px;
`

const Quiz = props => {
  const [selection, setSelection] = useState(-1)
  const midSlice = props.children.length / 2
  return <Box>
    <Center flexWrap='wrap' height=''>
      {props.children.slice(0, midSlice).map((option, i) => {
        return <Button
          key={i}
          py={2}
          px={3}
          color={selection === i ? 'white' : 'black'}
          display='inline-block'
          m={1.5}
          size='lg'
          fontSize='1.1rem'
          width='min-content'
          wordBreak='break-word'
          // borderRadius='3xl'
          shadow='lg'
          _hover={{
            backgroundColor: selection === i ? '#606275' : '#E4E9ED'
          }}
          backgroundColor={selection === i ? '#555875' : null}
          onClick={() => {
            if (selection !== i) {
              setSelection(i)
            } else {
              setSelection(-1)
            }
          }}>
            {option}
        </Button>
      })}
    <Response style={{ visibility: selection === -1 ? 'hidden' : 'visible' }}>
      {props.children.slice(midSlice)[selection !== -1 ? selection : 0]}
    </Response>
    </Center>
  </Box>
}

Quiz.propTypes = {
  children: PropTypes.node,
  responses: PropTypes.arrayOf(PropTypes.string),
  answer: PropTypes.number
}

export default Quiz