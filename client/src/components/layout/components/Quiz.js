import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Box, Center } from '@chakra-ui/react'
import InfoBlock from './InfoBlock'

const Quiz = props => {
  const [selection, setSelection] = useState(-1)
  const midSlice = props.children.length / 2
  return <Box>
    <Center flexWrap='wrap'>
      {props.children.slice(0, midSlice).map((option, i) => {
        return <Button
          key={i}
          px={3}
          py={2}
          m={1.5}
          overflow='auto'
          height='max-content'
          color={selection === i ? 'white' : 'black'}
          display='inline-block'
          fontSize='1.1rem'
          whiteSpace='break-spaces'
          shadow='md'
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
    <InfoBlock style={{ visibility: selection === -1 ? 'hidden' : 'visible' }}>
      {props.children.slice(midSlice)[selection !== -1 ? selection : props.placeholder ?? 0]}
    </InfoBlock>
    </Center>
  </Box>
}

Quiz.propTypes = {
  placeholder: PropTypes.number,
  children: PropTypes.node
}

export default Quiz
