import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
background: linear-gradient(
  rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)
),
url("https://i.postimg.cc/MZfJKk1D/pexels-deepanker-verma-1482061.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
  center;
background-size: cover;
height: 100vh;

`
const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
margin-left: 35%;
margin-top: 10%;
${mobile({ width: "75%" })}
`

const FooterContainer = styled.div`
background-color: white;
margin-top: 15%;
`
const NavbarContainer = styled.div`
background-color: white;
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
background-color: teal;
color: white;
cursor: pointer;
margin-left: 230px;
margin-bottom: 10px;
${mobile({ marginLeft: "170px" })}
`

const Link = styled.a`
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
    const { isFetching, error } = useSelector((state) => state.user);
  
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
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <FooterContainer>
      <Footer/>
      </FooterContainer>
    </Container>
    )
}

export default Login
