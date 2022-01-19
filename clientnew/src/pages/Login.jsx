import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
//opacity
{/*background:linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
), */}
const Container = styled.div`
background-color: #eee;
height: 100vh;

`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
margin-left: 35%;
margin-top: 10%;
${mobile({ width: "75%" })}
${mobile({ marginLeft: "33px" })}
`

const FooterContainer = styled.div`
background-color: white;
margin-top: 20%;
`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ paddingBottom: "5%" })}
`

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;

`

const Button = styled.button`
width: 40%;
border:none;
padding: 15px 20px;
border-radius: 8px;
background-color: teal;
color: white;
cursor: pointer;
margin-left: 230px;
margin-bottom: 10px;
${mobile({ marginLeft: "170px" })}
`

const Account = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`
const Error = styled.span`
  color: red;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    
  
    const handleClick = (e) => {
      e.preventDefault();
      login(dispatch, { username, password });
    };

    return (
      
        <Container>
          <NavbarContainer>
          <Navbar/>
          </NavbarContainer>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <Button onClick={handleClick} >
            LOGIN
          </Button>
         
          <Account>DO NOT YOU REMEMBER THE PASSWORD?</Account>
          <Link to="/register">
          <Account>CREATE A NEW ACCOUNT</Account>
          </Link>
        </Form>
      </Wrapper>
      <FooterContainer>
      <Footer/>
      </FooterContainer>
    </Container>
    )
}

export default Login
