import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
//import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from "styled-components";
import { mobile } from "../responsive";

const FooterContainer = styled.div`
background-color: white;

`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ paddingBottom: "5%" })}
`


const Home = () => {
    return (
        <div>
            <NavbarContainer>
          <Navbar/>
          </NavbarContainer>
            <Announcement/>
            <Slider/>
            {/* <Categories/> */}
            <Products />
            <FooterContainer>
      <Footer/>
      </FooterContainer>
        </div>
    )
}

export default Home
