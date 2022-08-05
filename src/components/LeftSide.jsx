import React from 'react'
import styled from 'styled-components'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShirt,faTv,faMobile,faHighlighter,faCartShopping } from "@fortawesome/free-solid-svg-icons"

const Container = styled.section`
  flex: 1.5;
  height: 100vh;
  background-color: #f1f1f1;
  z-index:9999;
  padding: 0 24px;
  margin: 0 auto;
  /* background-color:#fff; */
   box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
`
const Wrapper = styled.div`
    width:95%;
    padding:30px;
   
`
const List = styled.ul`
  margin-top: 40px;
  display:flex;
  flex-direction:column;
  list-style-type: none;
  
`
const ListItems = styled.li`
    color: #111;
    font-size: 20px;
    font-weight: 400;
    margin-top:20px;
    &:hover{
      color: #684993;
    }
   
`
const LeftSide = () => {
  return (
    <Container>
        <Wrapper>
          <List>
           <NavLink to ="/villagemarket" style={{textDecoration:'none'}}>
           <ListItems><LocalGroceryStoreIcon  style={{color:'#684993', marginRight:'10px'}}/>Village Market</ListItems>
           </NavLink>
           <NavLink to ="/villagemarket" style={{textDecoration:'none'}}>
           <ListItems><FontAwesomeIcon icon={faShirt  } style={{color:'#684993', marginRight:'10px'}}/> Fashion</ListItems>
           </NavLink>
           <NavLink to ="/villagemarket" style={{textDecoration:'none'}}>
           <ListItems><FontAwesomeIcon icon={faTv  } style={{color:'#684993', marginRight:'10px'}}/>ELectronics</ListItems>
           </NavLink>
           <NavLink to ="/villagemarket" style={{textDecoration:'none'}}>
           <ListItems><FontAwesomeIcon icon={faMobile } style={{color:'#684993', marginRight:'10px'}}/>Phones</ListItems>
           </NavLink>
           <NavLink to ="/villagemarket" style={{textDecoration:'none'}}>
           <ListItems>
           <FontAwesomeIcon icon={faCartShopping  } style={{color:'#684993', marginRight:'10px'}}/>
            Supermarket
            </ListItems>
           </NavLink>
           <NavLink to ="/villagemarket" style={{textDecoration:'none'}}>
           <ListItems><FontAwesomeIcon icon={faHighlighter } style={{color:'#684993', marginRight:'10px'}}/>Health & Beauty</ListItems>
           </NavLink>
          </List>
        </Wrapper>
    </Container>
  )
}

export default LeftSide