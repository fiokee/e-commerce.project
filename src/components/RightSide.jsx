import React from 'react'
import styled from 'styled-components'
import { tablet,lapTop } from '../Responsive'
const Container = styled.section`
   flex: 1; 
   height: auto;
   padding: 0 24px;
   position: sticky;
  top:0;
   background-color: #f1f1f1;
  z-index:9999;
  ${tablet({  
    display: 'none',
})}
${lapTop({  
  display: 'none',
})};
`
const RightSide = () => {
  return (
    <Container>
    </Container>
  )
}

export default RightSide