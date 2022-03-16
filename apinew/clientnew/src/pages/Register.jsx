import styled from "styled-components"
import { mobile } from "../responsive"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Navbarmobile from '../components/Navbarmobile'

//opacity
{/*background:linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
), */}

const Container = styled.div`
background: #DFD3C5;
height: 100vh;

`
const Wrapper = styled.div`
width: 40%;
border: 1px solid black;
margin-left: 30%;
margin-top: 7%;
margin-bottom: 9%;
padding: 20px;
background: #eae8e6;
${mobile({ width: "75%" })}
${mobile({ marginLeft: "33px" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const FooterContainer = styled.div`
background-color: white;
margin-top: 3.5%;
`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ display: "none" })}
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
border-radius: 8px;
border:none;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agreement = styled.span`
z-index: 1 !important;
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
margin-left: 80%;
width: 30%;
border-radius: 8px;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
${mobile({ marginLeft: "170px" })}
`


const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    
  
    const handleClick = (e) => {
      e.preventDefault();
      register(dispatch, { username, password, email });
    };

    return (
        <Container>
              <NavbarContainer>
          <Navbar/>
          
          </NavbarContainer>
          <Navbarmobile/>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}/>
                    <Input placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}/>
                    <Input placeholder="confirm password" type="password"/>
                    <Agreement>
                        By creating an account, I consent to processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    
                     <Button onClick={handleClick}>CREATE</Button>
                        
                </Form>
            </Wrapper>
            <FooterContainer>
      <Footer/>
      </FooterContainer>
        </Container>
    )
}

export default Register
