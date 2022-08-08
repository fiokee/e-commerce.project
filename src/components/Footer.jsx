import React from "react";
import styled from "styled-components";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GooglePlus from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Link} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import {mobile,tablet,lapTop} from '../Responsive'

const FooterContainer = styled.div`
  background-color:#684993;
  min-height: 300px;
  padding: 30px 24px;
  color: #f1f1f1;
 
`
const Container =styled.div`
display:flex;
gap:20px;
${tablet({
  flexDirection:'column',
})}
`
const ColumnOne = styled.div`
flex: 1;
display:flex;
flex-direction: column;
${tablet({
  alignItems:'center',
})}

`
const Logo =styled.h1`
font-size: 25px;
`
const Text =styled.p`
margin:20px 0;
font-size: 16px; 
  font-weight: 500;
`
const SocialContainer = styled.div`
display: flex;
margin: 20px 0;

`
const SocialIcon = styled.div`
width:40px;
height: 40px;
background-color:#${props=>props.color};
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
color:#fff;
cursor: pointer;
`
const ColumnTwo= styled.div`
flex:1;
`
const Title= styled.h3`
font-size:20px;
text-align: center;
margin-bottom:20px;
`
const List= styled.ul`
display: flex;
align-items: center;
flex-direction: column;
list-style: none;
`
const ListItems = styled.li`
  margin-bottom: 10px;
  font-size: 18px; 
  font-weight: 500;
  &:hover{
    color: red;
  }
`
const ColumnThree = styled.div`
flex:1;

`
const Payment = styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const PaymentImage = styled.img`
  width:80px;
  height:80px;
  cursor:pointer;
  &:hover{
    bacground:red;
  }
  
`
const Hr = styled.hr`
 border: 1px solid #f1f1f1;
`
const AllRight = styled.div`
  font-size: 16px;
  font-weight:400;
  text-align:center;
`


 

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
      <ColumnOne>
      <Logo>market place</Logo>
      <Text>Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
         Eum inventore magnam, eveniet,
          nemo nesciunt aliquam est pariatur,
           voluptas ratione modi ducimus sint 
           cupiditate nostrum libero saepe 
           autem numquam sit placeat.
       </Text>
      <SocialContainer>
        <SocialIcon color ="e4405f">
          <InstagramIcon/>
        </SocialIcon >
        <SocialIcon color ="3b5999">
          <FacebookIcon/>
        </SocialIcon>
        <SocialIcon color ="55acee">
          <TwitterIcon />
        </SocialIcon>
        <SocialIcon color ="e60023">
          <PinterestIcon />
        </SocialIcon>
        <SocialIcon color ="db4a39">
          <GooglePlus />
        </SocialIcon>
      </SocialContainer>
      </ColumnOne>
      <ColumnTwo>
       <Title>Quick Links</Title>
       <List>
         <ListItems>
            <Link to="/"  style ={{textDecoration:"none",color:'inherit'}}>Home</Link>
         </ListItems>
         <ListItems>
            <Link to="/" style ={{textDecoration:"none",color:'inherit'}}>Vallage market</Link>
         </ListItems>
         <ListItems>
            <Link to="/" style ={{textDecoration:"none",color:'inherit'}}>Fashion</Link>
         </ListItems>
         <ListItems>
            <Link to="/" style ={{textDecoration:"none",color:'inherit'}}>Electtonics</Link>
         </ListItems>
         <ListItems>
            <Link to="/" style ={{textDecoration:"none",color:'inherit'}}>Phones</Link>
         </ListItems>
         <ListItems>
            <Link to="/" style ={{textDecoration:"none",color:'inherit'}}>Supermarket</Link>
         </ListItems>
         <ListItems>
            <Link to="/" style ={{textDecoration:"none",color:'inherit'}}>Health & Beauty</Link>
         </ListItems>
      </List>
      </ColumnTwo>
      <ColumnThree>
        <Title>Payment Method</Title>
        <Payment> 
          <PaymentImage src ='../images/visa.png'/>
          <PaymentImage src ='../images/master.png'/>
          <PaymentImage src ='../images/paypal.png'/>
          <PaymentImage src ='../images/quickteller.png'/>

        </Payment>
      </ColumnThree>
      </Container>
      <Hr/>
      <AllRight>
          <Text>&copy; 2022 Developed by DcodingHand. All rights reserved </Text>
      </AllRight>
    </FooterContainer>
  );
};

export default Footer;
