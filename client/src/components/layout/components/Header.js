import React from 'react'
import PropTypes, { string } from 'prop-types'
import { chakra, Container, Heading } from '@chakra-ui/react'
import styled from 'styled-components'

const rest = {
  Heading: {
    fontFamily: 'Source Sans Pro',
    fontWeight: 900,
    py: '3rem',
    fontStyle: 'italic',
    color: 'white'
  },
  Container: {
    display: 'flex'
  }
}

const Gradient = styled.div`
  margin: 0 0 3em 0;
  background-color: #6B72EB;
  background: rgb(21,0,36);
  background: -moz-linear-gradient(35deg, rgba(21,0,36,1) 0%, rgba(64,9,121,1) 42%, rgba(0,136,255,1) 100%);
  background: -webkit-linear-gradient(35deg, rgba(21,0,36,1) 0%, rgba(64,9,121,1) 42%, rgba(0,136,255,1) 100%);
  background: linear-gradient(35deg, rgba(21,0,36,1) 0%, rgba(64,9,121,1) 42%, rgba(0,136,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#150024",endColorstr="#0088ff",GradientType=1);
`

const HeaderComposite = (props) => {
  return <chakra.header shadow='2xl' minW='100%'>
    <Gradient>
      <Container maxW={props.breakpoints} {...rest.Container}>
        <Heading as='h1' {...rest.Heading}>beautiful data science</Heading>
      </Container>
    </Gradient>
  </chakra.header>
}

HeaderComposite.propTypes = {
  breakpoints: PropTypes.arrayOf(string)
}

export default HeaderComposite
