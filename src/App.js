import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import styled from 'styled-components'
import Banner from './components/Banner';
import Footer from './components/Footer'
import Header from './components/Header'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Electronics from './pages/Electronics';
import Fashion from './pages/Fashion';
import Home from './pages/Home'
import Login from './pages/Login';
import VillageMarket from './pages/VillageMarket';

const Container = styled.div`
  
`
const Wrapper = styled.div`
  flex: 5;
`
const Main = styled.main`
  display: flex;
  height: 100vh;
  z-index: 0;
`
const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />

        <Main>
          <LeftSide />
          <Wrapper>
            <Banner />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/villagemarket' element={<VillageMarket />} />
              <Route path='/fashion' element={<Fashion />} />
              <Route path='/electronics' element={<Electronics />} />
            </Routes>
          </Wrapper>
          <RightSide />
        </Main>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
