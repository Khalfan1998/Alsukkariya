import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import {mobile} from "../responsive"


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
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
    text-align: center;
    ${mobile({ textAlign: "left" })}
    
`
const Image = styled.img`
width: 8%;
`


const Logo = styled.h1`
"Logo:link": { textDecoration: "none" },
"Logo:visited": { textDecoration: "none" },
"Logo:hover": { textDecoration: "underline" },
"Logo:active": { textDecoration: "underline" }
    color: black;
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
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)



    return (
        <Container>
            <Wrapper>
            <Left>
            <Image src ="https://i.postimg.cc/7LBs7Mwv/sukariya-logo.png"/>
            </Left>
            <Link to="/" style={{textDecoration:"none"}}>
            <Center><Logo>Al-Sukkariya</Logo></Center>
            </Link>
            <Right>
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
