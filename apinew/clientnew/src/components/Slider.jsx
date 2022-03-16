import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ height: "20vh" })}
    
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
    ${mobile({ height: "20vh" })}
    
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 4 1;
    ${mobile({ display: "none" })}
`

const Image = styled.img`
    height: 100%;
    width: 80%;
    ${mobile({ display: "none" })}

    
`

const InfoContainer = styled.div`
    margin-right: 80px;
    width: 50px;
    flex: 2 1;
    padding: 50px;
    ${mobile({ textAlign: "center" })}
    ${mobile({ marginLeft: "80px" })}
 
`

const Title = styled.h1`
    font-size: 40px;
    ${mobile({ fontSize: "10px" })}
    ${mobile({ marginTop: "10px" })}
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({ fontSize: "5px" })}
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border-radius: 8px;
    background-color: transparent;
    cursor: pointer;
    color: black;
    ${mobile({ fontSize: "3.5px" })}
    ${mobile({ marginBottom: "10px" })}
    &:hover{
        background-color: #5A3040;
        color: #EAE8E6;
    }
`

const Slider = () => {
    
        const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }

    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src ={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Link to = "/products/Products">
                    <Button>SHOP NOW</Button>
                    </Link>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
