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
import Navbarmobile from '../components/Navbarmobile'

const FooterContainer = styled.div`
background-color: white;

`
const ProductsContainer = styled.div`
margin-bottom: 10%;

`

const NavbarContainer = styled.div`
background-color: white;
${mobile({ display: "none" })}
`


const Home = () => {
    return (
        <div>
            <NavbarContainer>
          <Navbar/>
          </NavbarContainer>
          <Navbarmobile/>
            <Announcement/>
            <Slider/>
            {/* <Categories/> */}
            <ProductsContainer>
            <Products />
            </ProductsContainer>
            <FooterContainer>
      <Footer/>
      </FooterContainer>
        </div>
    )
}

export default Home
