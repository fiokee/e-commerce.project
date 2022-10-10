import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile,tablet,lapTop} from '../Responsive'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
const Container = styled.header`
   display : flex;
   height: 6rem;
   background-color: #e5e5e5;
   align-items: center;
   justify-content: space-between;
   padding: 0 24px;
   position: relative;
   top:0;
  
   
`
const Logo = styled.h1`
    font-size: 30px;
    font-weight: 500;
    color:#684993;
    ${lapTop({
        fontSize: ' 25px',
        
    })};
    ${mobile({
        fontSize:'16px',
        fontWeight: '300'
    })}
    
`
const Nav = styled.nav`
${tablet({  
    position:"absolute",
    width:"100%",
    height:"60vh",
    backgroundColor:"#201e1e",
    top: "6rem",
    transition:"all .4s ease-in-out",
    zIndex:"1000"
})}
   
`
const NavItem = styled.ul`
     display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
    justify-content: space-between;
    ${tablet({
        marginTop:"30px",
        flexDirection:"column",
    
    })}
`
const NavList = styled.li`
   margin: 0 20px;
   font-size: 20px;
   font-weight: 400;
   ${lapTop({
    marginLeft: ' 10px',
    marginRight: ' 10px', 
})};
   ${tablet({
        marginTop:"30px",
        color:"#fff"
    })};
`

const User = styled.div`
    display: flex;
    align-items: center;
   
`
const Login = styled.div`
    display: flex;
    border: 1px solid #ccc;
    padding:  10px 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
`
const Button = styled.button`
 border: none;
 background-color: transparent;
 cursor: pointer;
 font-size: 16px;
 ${mobile({
    fontSize:'16px',
    fontWeight: '300'
})}
`
const CartContainer =styled.div`
    display: flex;
    position:relative;
    
`
const Cart = styled.span`
   position:absolute;
   top:-15px;
   color: #201e1e;
   right: 7px;
   font-weight: 700;
   ${mobile({
    fontWeight: '300'
})}
 
`
const Hamburger= styled.div`
    flex-direction: column;
    border: 1px solid #ccc;
    width: 40px;
    cursor:pointer;
    display: none;
    ${tablet({display:'flex'})}
`
const Header = ()=> {
    const [mobileNav,setMobileNav] = React.useState(false)
  return (
    <Container>
     <Logo>Market Place</Logo>
     <Nav style={{left:mobileNav ? '0' :"100%"}}>
        <NavItem>
            <NavList>
                <Link to ='/' style={{textDecoration:'none',color:'inherit'}}>
                    All
                </Link>               
            </NavList>
            <NavList>
                <Link to ='/villagemarket' style={{textDecoration:'none',color:'inherit'}}>
                    Village Market
              </Link>
            </NavList>
            <NavList>
                <Link to ='/fashion' style={{textDecoration:'none',color:'inherit'}}>
                    Fashion
                </Link>
            </NavList>
            <NavList>
            <Link to ='/electronics' style={{textDecoration:'none',color:'inherit'}}>
             Electronics
            </Link>
            </NavList>
        </NavItem>
     </Nav>
     <User>
       <Login> 
        <PersonIcon/>
        <Link to ='/login' style={{textDecoration:'none',color:'inherit'}}>
        <Button>Login</Button>
        </Link>
       
      </Login>
      <Link to ='/cart' style={{textDecoration:'none',color:'inherit',cursor:'pointer'}}>
      <CartContainer>
       <ShoppingCartIcon style={{fontSize:'30px'}} />
        <Cart>09</Cart>
      </CartContainer>
      </Link>
    </User>
    <Hamburger onClick={()=>(setMobileNav(!mobileNav))}>
      { mobileNav ? <> <CloseIcon style={{fontSize:'30px'}}/></>  : <><MenuIcon style={{fontSize:'40px'}}/></>}
       
    </Hamburger>
    </Container>
  )
}

export default Header