import React from 'react'
import PropTypes, { string } from 'prop-types'
import { Container, Heading } from '@chakra-ui/react'
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

const Header = styled.header`
  min-width: 100%;
  margin: 0 0 3em 0;
  background-color: #6B72EB;
  background: rgb(21,0,36);
  background: -moz-linear-gradient(35deg, rgba(21,0,36,1) 0%, rgba(64,9,121,1) 42%, rgba(0,136,255,1) 100%);
  background: -webkit-linear-gradient(35deg, rgba(21,0,36,1) 0%, rgba(64,9,121,1) 42%, rgba(0,136,255,1) 100%);
  background: linear-gradient(35deg, rgba(21,0,36,1) 0%, rgba(64,9,121,1) 42%, rgba(0,136,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#150024",endColorstr="#0088ff",GradientType=1);
  box-shadow: 2px 8px 104px 20px rgba(0,0,0,0.23);
  -webkit-box-shadow: 2px 8px 104px 20px rgba(0,0,0,0.23);
  -moz-box-shadow: 2px 8px 104px 20px rgba(0,0,0,0.23);

`

const HeaderComposite = (props) => {
  return <Header>
    <Container maxW={props.breakpoints} {...rest.Container}>
      <Heading as='h1' {...rest.Heading}>beautiful data science</Heading>
    </Container>
  </Header>
}

HeaderComposite.propTypes = {
  breakpoints: PropTypes.arrayOf(string)
}

export default HeaderComposite
