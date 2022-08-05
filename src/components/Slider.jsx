import React from 'react'
import styled from 'styled-components'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Data }from '../rawData/data'
const Container = styled.div`
   width:100%;
   height: 500px;
   position: relative; 
   
`
const Arrow = styled.div`
   width: 50px;
   height:50px;
   background-color: #684993;
   color: #fff;
   cursor: pointer;
   border-radius: 50%;
   display:flex;
   align-items:center;
   justify-content: center;
   position:absolute; 
   top:0;
   bottom: 0;
   left: ${props=>props.dir==="left" && "15px"};
   right: ${props=>props.dir==="right" && "15px"};
   margin: auto;
   z-index:9999;
   &:hover{
    opacity:.5;
   }
`
const Wrapper = styled.div`
   height: 100%;
   display:flex;
   width:100%;
   transition: all .5s ease;
   transform:translateX(${props=>props.slideIndex * -100}%);
   
`
const Slide = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    min-width:100%;
    height:100%;
    overflow: hidden;
`
const ImageContainer = styled.div`
   flex:1; 
   /* display: flex;
   align-items: center;
   height:100%; */
`
const Image = styled.img`
    width:80%;
    background-color: #999;

`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
`
const Title = styled.h1`
    font-size:40px;
    font-weight:500;
    text-transform: uppercase;
`
const Button = styled.button`
    margin-top:40px;
    padding: 10px;
    background-color:transparent;
    color: #684993;
    font-size:20px;
    font-weight:500;
    cursor:pointer;
    width: 180px;
    border-color: #684993;
`
const Slider = ()=>{
    const[slideIndex,setSlideIndex]=React.useState(0)
    const sliderController = (dir)=>{
        if(dir ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)  
        }
    }
   
   
    return(
        <Container>
          <Arrow dir ="left" onClick ={()=>sliderController('left')}>
            <KeyboardArrowLeftIcon/>
          </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {Data.map(product=>(

                    <Slide>
                        <ImageContainer>
                            <Image src={product.image} /> 

                        </ImageContainer> 
                        <Text>
                            <Title>{product.title}</Title>
                            <Button>SHOP NOW</Button>
                        </Text> 
                    </Slide>
           
           ))}
            </Wrapper>
          <Arrow dir ="right" onClick ={()=>sliderController('left')}>
            <KeyboardArrowRightIcon/>
          </Arrow>
        </Container>
    )
}
export default Slider