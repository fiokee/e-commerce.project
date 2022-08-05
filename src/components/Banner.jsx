import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 8rem;
    width: 100%;
    background-color: #684993;
    color:#fff;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    gap:20px;
`
const Text= styled.div`
    display: flex;
    flex-direction: column;
`
const Desc = styled.p`
     font-weight: 400;
    font-size: 20px;
`
const Title = styled.h1`
    font-weight: 500;
    font-size: 30px;
`
const Img = styled.img`
    width:100px;
    height:100px;
    background-color:#999;
    border-radius:50%;
`
const Discount = styled.div`
      display:flex;
      flex-direction: column;
`
const Sale = styled.h3`
    font-weight: 500;
    font-size: 25px;
`
const Off = styled.h1`
    font-weight: 700;
    font-size: 50px;
`
const Banner = () => {
  return (
    <Container>
        <Wrapper>
           <Img />
           <Text>
            <Title>Promo! Promo!</Title>
            <Desc>Best deal ever don't miss out of this great opportunity</Desc>
           </Text>
           <Discount>
                <Sale>Get up to</Sale>
                <Off>40% OFF</Off>
           </Discount>
        </Wrapper>
    </Container>
  )
}

export default Banner