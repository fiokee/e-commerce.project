import React from 'react'
import styled from 'styled-components'
import {mobile,tablet,lapTop} from '../Responsive'
const Container = styled.div`
    height: 8rem;
    width: 100%;
    background-color: #684993;
    color:#fff;
    ${lapTop({
        padding:'20px',
    })}
    ${tablet({
        padding:'20px',

    })}
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
    ${mobile({
        fontSize:'14px',
        fontWeight: '300'
    })}
`
const Title = styled.h1`
    font-weight: 500;
    font-size: 30px;
    ${tablet({
        fontSize:' 20px;'
    })};
    ${mobile({
        fontSize:'16px',
        fontWeight: '300'
    })}
`
const Img = styled.img`
    width:100px;
    height:100px;
    background-color:#999;
    border-radius:50%;
    ${tablet({
        display:'none'
    })};
   
`
const Discount = styled.div`
      display:flex;
      flex-direction: column;
`
const Sale = styled.h3`
    font-weight: 500;
    font-size: 25px;
    ${tablet({
        fontSize:' 20px;'
    })}
    ${mobile({
        fontSize:'14px',
        fontWeight: '300'
    })}
`
const Off = styled.h1`
    font-weight: 700;
    font-size: 40px;
    ${tablet({
        fontSize:' 30px;'
    })};
    ${mobile({
        fontSize:'16px',
        fontWeight: '300'
    })}
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