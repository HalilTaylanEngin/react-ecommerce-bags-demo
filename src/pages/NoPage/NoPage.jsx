import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
 width: 100vw;
 height: 100vh;
 background-color: '#222';
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const H1 = styled.h1`
text-align: center;
`

const NoPage = () => {
  return (
    <Container>
      <H1>SAYFA BULUNAMADI</H1>
    </Container>
  )
}

export default NoPage
