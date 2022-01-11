import styled from "styled-components"
import { mobile } from "../responsive"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://i.postimg.cc/nz68YMYz/registerbg.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
background-size: cover;
`
const Wrapper = styled.div`
width: 40%;
margin-left: 30%;
margin-top: 10%;
padding: 20px;
background-color: white;
${mobile({ width: "75%" })}
${mobile({ marginLeft: "33px" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const FooterContainer = styled.div`
background-color: white;
margin-top: 15%;
`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ paddingBottom: "5%" })}
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
margin-left: 360px;
width: 40%;
border:none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
${mobile({ marginLeft: "170px" })}
`

const Register = () => {
    return (
        <Container>
              <NavbarContainer>
          <Navbar/>
          </NavbarContainer>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password" type="password"/>
                    <Input placeholder="confirm password" type="password"/>
                    <Agreement>
                        By creating an account, I consent to processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
            <FooterContainer>
      <Footer/>
      </FooterContainer>
        </Container>
    )
}

export default Register
