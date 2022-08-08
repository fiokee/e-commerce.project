import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { mobile, tablet, lapTop } from "../Responsive";
const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  ${mobile({
    fontSize: "16px",
    fontWeight: "300",
  })}
`;
const Hr = styled.hr`
  border: 2px solid #ccc;
`;
const Wrapper = styled.div`
  margin-top: 20px;
`;
const Product = styled.div`
  border-bottom: 1px solid #999;
  display: flex;
  flex: 3;
  gap: 20px;
  margin-top: 20px;
  ${mobile({
    gap: "16px",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
  border: 1px solid #f1f1f1;
  padding: 20px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: #999;
  display: block;
  margin: auto;
  ${mobile({
    width: "80px",
    height: "80px",
  })}
`;
const ProductInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 16px;
  font-weight: 500;
  ${mobile({
    fontSize: "14px",
    fontWeight: "300",
  })}
`;

const QtyInfo = styled.div`
  margin-top: 20px;
`;
const Qty = styled.span`
  padding: 0 20px;
  font-weight: 600;
  ${mobile({
    padding: "5px",
    fontWeight: "300",
  })}
`;
const Button = styled.button`
  height: 40px;
  width: 40px;
  font-size: 25px;
  background-color: #684993;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  ${mobile({
    width: "25px",
    height: "25px",
    fontSize: "16px",
  })}
`;
const PriceInfo = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  ${mobile({
    gap: "16px",
  })}
`;
const Price = styled.span`
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  ${mobile({
    fontSize: "16px",
    fontWeight: "300",
  })}
`;
const Remove = styled.span`
  flex: 1;
  display: flex;
  cursor: pointer;
`;
const RemoveText = styled.span`
  ${mobile({
    display: "none",
  })}
`;
const CheckOut = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 230px;
`;
const CheckOutContent = styled.div`
  width: 65.3%;
  background-color: #f1f1f1;
`;
const SubTotalContainer = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
const SubTotal = styled.span`
  font-size: 20px;
  font-weight: 600;
  flex: 1;
  ${mobile({
    fontSize: "16px",
    fontWeight: "300",
  })}
`;
const Amount = styled.span`
  flex: 1;
  font-size: 20px;
  font-weight: 600;
  ${mobile({
    fontSize: "16px",
    fontWeight: "300",
  })}
`;
const CheckOutButton = styled.button`
  flex: 1;
  font-size: 25px;
  font-weight: 600;
  margin-top: 20px;
  width: 100%;
  color: #684993;
  padding: 10px;
  border-color: #684993;
  cursor: pointer;
  ${mobile({
    fontSize: "16px",
    fontWeight: "300",
  })}
`;
const Cart = () => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <Hr />
      <Wrapper>
        <Product>
          <ImageContainer>
            <Image src="../images/bb.jpg" />
          </ImageContainer>
          <ProductInfo>
            <Name>MCVITIES DIGESTIVE</Name>
            <QtyInfo>
              <Button>-</Button>
              <Qty>1</Qty>
              <Button>+</Button>
            </QtyInfo>
          </ProductInfo>
          <PriceInfo>
            <Price>₦ 200.00</Price>
            <Remove>
              <DeleteIcon style={{ color: "#684993" }} />
              <RemoveText>Remove</RemoveText>
            </Remove>
          </PriceInfo>
        </Product>
        <Product>
          <ImageContainer>
            <Image src="../images/bb.jpg" />
          </ImageContainer>
          <ProductInfo>
            <Name>MCVITIES DIGESTIVE</Name>
            <QtyInfo>
              <Button>-</Button>
              <Qty>1</Qty>
              <Button>+</Button>
            </QtyInfo>
          </ProductInfo>
          <PriceInfo>
            <Price>₦ 200.00</Price>
            <Remove>
              <DeleteIcon style={{ color: "#684993" }} />
              <RemoveText>Remove</RemoveText>
            </Remove>
          </PriceInfo>
        </Product>
        <Product>
          <ImageContainer>
            <Image src="../images/bb.jpg" />
          </ImageContainer>
          <ProductInfo>
            <Name>MCVITIES DIGESTIVE</Name>
            <QtyInfo>
              <Button>-</Button>
              <Qty>1</Qty>
              <Button>+</Button>
            </QtyInfo>
          </ProductInfo>
          <PriceInfo>
            <Price>₦ 200.00</Price>
            <Remove>
              <DeleteIcon style={{ color: "#684993" }} />
              <RemoveText>Remove</RemoveText>
            </Remove>
          </PriceInfo>
        </Product>
        <CheckOut>
          <CheckOutContent>
            <SubTotalContainer>
              <SubTotal>Subtotal</SubTotal>
              <Amount>₦5,200</Amount>
            </SubTotalContainer>
            <SubTotalContainer>
              <SubTotal>Shipping</SubTotal>
              <Amount>₦200</Amount>
            </SubTotalContainer>
            <SubTotalContainer>
              <SubTotal>Tax</SubTotal>
              <Amount>₦50</Amount>
            </SubTotalContainer>
            <SubTotalContainer>
              <SubTotal>Total Amount</SubTotal>
              <Amount>₦5,450</Amount>
            </SubTotalContainer>
            <CheckOutButton>Checkout</CheckOutButton>
           
          </CheckOutContent>
        </CheckOut>
      </Wrapper>
    </Container>
  );
};
export default Cart;
