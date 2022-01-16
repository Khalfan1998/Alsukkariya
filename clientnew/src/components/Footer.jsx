import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom";

const Container = styled.div`
height: 20vh;
display: flex;
margin-top: 100px;
${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
margin-left: 200px;
${mobile({ backgroundColor: "#eee" })}
${mobile({ marginLeft: "0px"})}
`

const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
cursor:pointer;
`

const Center = styled.div`
flex: 1;
padding: 20px;
flex-wrap: wrap;

${mobile({ backgroundColor: "#eee" })}
`

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
cursor: pointer;
color: black;
`
const FacebookContainer = styled.a`
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:white; }
a:focus { text-decoration: none; color:white; }
a:active { text-decoration: none; color:white; }
`
const InstagramContainer = styled.a`
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:white; }
a:focus { text-decoration: none; color:white; }
a:active { text-decoration: none; color:white; }
`
const TwitterContainer = styled.a`
a:visited { text-decoration: none; color:white; }
a:hover { text-decoration: none; color:white; }
a:focus { text-decoration: none; color:white; }
a:active { text-decoration: none; color:white; }
`

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#eee" })}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 40%;
height: 200px;
${mobile({ marginLeft: "120px" })}
`




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Al-Sukkariya</Logo>
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quis reprehenderit officiis, cupiditate ratione laudantium quos recusandae atque nostrum culpa.</Desc>
                <SocialContainer>
                    {/* <FacebookContainer>
                    <SocialIcon color="3B5999">
                    <a href="https://facebook.com/alsukkariya" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                        <Facebook />
                        </a>
                    </SocialIcon>
                    </FacebookContainer> */}
                    <InstagramContainer>
                    <SocialIcon color="E4405F">
                    <a href="https://www.instagram.com/alsukkariya/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                        <Instagram/>
                        </a>
                    </SocialIcon>
                    </InstagramContainer>
                    {/* <TwitterContainer>
                    <SocialIcon color="55ACEE">
                        <a href ="https://twitter.com/alsukkariya" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                        <Twitter/>
                        </a>
                    </SocialIcon>
                    </TwitterContainer> */}
                </SocialContainer>
            </Left>
            {/* <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>
                    Address 3123, Area 312313
                </ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>
                    +973 3939393
                   
                </ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                    contact@gmail.com
                </ContactItem> */}
                 <Center>
                <Title>Contact</Title>
                <List>
                    <ListItem>
                    
                <ContactItem><Room style={{marginRight:"10px"}}/>
                    Address 3123, Area 312313
                </ContactItem>
                        
                    </ListItem>
                    <ListItem>
                    <ContactItem><Phone style={{marginLeft:"10px"}}/>
                    +973 3939393
                   
                </ContactItem>
                    </ListItem>
                    <ListItem>
                    <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                    contact@gmail.com
                </ContactItem>
                    </ListItem>
            
   
                </List>
            </Center> 
            <Right>
            <Payment src ="https://i.postimg.cc/hPJnRPvZ/1591801116711.png"/>
                
            </Right>
        </Container>
    )
}

export default Footer
