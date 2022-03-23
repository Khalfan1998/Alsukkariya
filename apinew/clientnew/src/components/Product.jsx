import {SearchOutlined} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const LargeContainer = styled.div`
  flex: 1;
  
`;
  const Container = styled.div`
  
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    &:hover ${Info}{
      background: transparent;
      opacity: 0.8;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #F1FCFD;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    margin-Left: 4px;
    z-index: 1 !important;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Title = styled.h1`
  color: #236750;
  margin-left: 43%;
  font-size: 18px;
  ${mobile({ marginLeft: "120px" })}
  `
  const Price = styled.div`
  color: #AC8252;
  margin-top: 2%;
  margin-left: 46%;
  font-size: 16px;
  ${mobile({ marginLeft: "140px" })}
  `

const Product = ({item}) => {
    return (
      <LargeContainer>
        <Container>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                <Icon>
                  <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                    </Link>
                </Icon>
            </Info>
        </Container>
        <Title>{item.title}</Title>
           <Price> BHD {item.price}</Price>
        </LargeContainer>
    )
}

export default Product
