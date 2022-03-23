import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { logOut } from "../redux/apiCalls";
import {mobile} from "../responsive"
import ScrollToTop from "../ScrollToTop";



const Container = styled.div`
background: #eae8e6;
    height: 80px;
    ${mobile({ display: "none" })}
    // ${mobile({ height: "80px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`


const Center = styled.div`
    flex:1;
    margin-right: 140px;
    text-align: center;

   
   
    
`
const Image = styled.img`
width: 70px;
height:70px;
`


const Logo = styled.h1`
"Logo:link": { textDecoration: "none" },
"Logo:visited": { textDecoration: "none" },
"Logo:hover": { textDecoration: "underline" },
"Logo:active": { textDecoration: "underline" }
    color: black;
    font-size: 28px;
    font-weight: 800;
    ${mobile({ fontSize: "14px" })}
    ${mobile({ paddingLeft: "1px" })}
    ${mobile({ paddingBottom: "10px" })}
`
    
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    color: black;
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "8px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
    const dispatch = useDispatch();

    const scrollToBottom = () => window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })


    
  
    const handleClick = (e) => {
      e.preventDefault();
      logOut(dispatch);
    };

    return (
        <Container>
            <Wrapper>
                <ScrollToTop/>
            <Left>
            <Link to="/" style={{textDecoration:"none"}}>
                <MenuItem>Home</MenuItem>
                </Link>
                <Link to="/products/Products" style={{textDecoration:"none"}}>
                <MenuItem>Products</MenuItem>
                </Link>
                <MenuItem onClick={scrollToBottom}>About Us</MenuItem>
                <MenuItem onClick={scrollToBottom}>Contact</MenuItem> 
            </Left>
            <Link to="/" style={{textDecoration:"none"}}>
            <Center>
                <Image src ="https://i.postimg.cc/bwCJFWGx/Logo-S2.png"/>
                {/* <Logo>Al-Sukkariya</Logo> */}  
            </Center>
            </Link>
            <Right>
            <MenuItem onClick={handleClick}>Logout</MenuItem>
            <Link to="/register" style={{textDecoration:"none"}}>
                <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to="/login" style={{textDecoration:"none"}}>
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                <Link to="/cart">
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
                </Link>
            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
