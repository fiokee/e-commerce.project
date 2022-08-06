import React from 'react'
import styled from 'styled-components'

export const Box = styled.div`
  padding: 80px 60px;
  background: #000;
  position: relative;
  margin-top: 300px;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding :20px 20px;
    margin: 20px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 100px;
  width: 100%
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #B2BEB5;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #684993;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#fff", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Promo Promo: Get up to
40% OFF
      </h1>
    <Container>
      <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Our Blog</FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
          </Column>
          <Column>
            <Heading>Payment</Heading>
            <FooterLink href="#">Wallet</FooterLink>
            <FooterLink href="#">Verve</FooterLink>
            <FooterLink href="#">Mastercard</FooterLink>
            <FooterLink href="#">Visa</FooterLink>
          </Column>
          <Column>
            <Heading>More Info</Heading>
            <FooterLink href="#">Site Map</FooterLink>
            <FooterLink href="#">Track my Order</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
      
      </Row>
      </Container>
      </Box>
  )
}

export default Footer