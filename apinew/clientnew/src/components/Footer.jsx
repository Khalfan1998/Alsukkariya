import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const Container = styled.div`
background: #eae8e6;
height: 20vh;
display: flex;

${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
margin-top: -5px;
margin-left: 0px;
flex: 1;
display: flex;
flex-direction: row;
padding: 20px;

${mobile({ backgroundColor: "#eee" })}
${mobile({ marginLeft: "0px"})}
${mobile({ flexDirection : "column" })}
`

const Logo = styled.h1`
cursor: pointer;
`
const Desc = styled.p`
margin-top: 40px;

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
${mobile({ marginLeft : "40%" })}
`

const Center = styled.div`
margin-top: 30px;
margin-right: 10px;
padding: 20px;
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
${mobile({ flexWrap : "wrap" })}
${mobile({ marginTop : "0px" })}
${mobile({ flexDirection : "column" })}
${mobile({ marginRight : "0px" })}
${mobile({ backgroundColor: "#eee" })}
`

const Title = styled.h3`

`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
${mobile({ flexDirection : "column" })}
${mobile({ marginRight : "50px" })}
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
const Image = styled.img`
padding-right: 50px;
cursor: pointer;
width: 70px;
height:70px;
margin-top: 30px;
${mobile({ marginLeft : "120px" })}
${mobile({ zIndex : "1 !important" })}
`

const Right = styled.div`
margin-top: 28px;
flex: end;
padding: 20px;
margin-right: 120px;
${mobile({ backgroundColor: "#eee" })}
${mobile({ flex : "2" })}
${mobile({ marginTop : "0px" })}
${mobile({ marginLeft : "0px" })}
${mobile({ marginRight : "0px" })}
`

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const ContactMobile = styled.div`
${mobile({ marginLeft: "10px" })}
`
const Payment = styled.img`
width: 50%;
height: 200px;
${mobile({ marginLeft: "100px" })}
`

const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});



const Footer = () => {
    return (
        <Container>
            <ScrollToTop/>
            <Left>
            <Image onClick={scrollToTop} src ="https://i.postimg.cc/bwCJFWGx/Logo-S2.png"/>  
                <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quis reprehenderit officiis, cupiditate ratione laudantium quos recusandae atque.</Desc>
                <SocialContainer>
                    {/* <FacebookContainer>
                    <SocialIcon color="3B5999">
                    <a href="https://facebook.com/alsukkariya" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                        <Facebook />
                        </a>
                    </SocialIcon>
                    </FacebookContainer> */}    
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
                <List>
                    <ListItem>          
                <ContactItem><Room style={{marginRight:"10px", marginBottom:"18px"}}/>
                    Address 3123, Area 312313
                </ContactItem>             
                    </ListItem>
                    <ListItem>             
                    <ContactItem><Phone style={{marginLeft:"10px"}} />
                    +973 3939393   
                </ContactItem>  
                    </ListItem>
                    <ListItem>
                    <ContactMobile>
                    <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                    contact@gmail.com
                </ContactItem>
                 </ContactMobile>
                    </ListItem>
                </List>
            </Center> 
            <Right>
            <InstagramContainer>
                    <SocialIcon color="E4405F">
                    <a href="https://www.instagram.com/alsukkariya/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                        <Instagram/>
                        </a>
                    </SocialIcon>
                    </InstagramContainer>
            </Right>
        </Container>
    )
}

export default Footer
