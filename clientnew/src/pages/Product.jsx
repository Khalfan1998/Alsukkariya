import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbarmobile from '../components/Navbarmobile'



const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
  
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
width: 92%;
height: 40vh;
object-fit: cover;
margin-bottom: 28%;
margin-left: 10%;
  ${mobile({ height: "40vh" })}
 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
  
`;

const Title = styled.h1`
  font-weight: 200;
  color: #236750;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  color: #AC8252;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterTitleColor = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-left: 20px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  padding-top: 10%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${mobile({ width: "100%" })}

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const FooterContainer = styled.div`
background-color: white;

`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ display: "none" })}
`

// const TopButton = styled.button`
// padding: 10px;
// margin-left: 40px;
// margin-top: 20px;
// font-weight: 600;
// border-radius: 8px;
// cursor: pointer;
// border: ${props=>props.type === "filled" && "none"};
// background-color: ${props=>props.type === "filled" ? "#F1C55B" : "transparent"};
// color: ${props=>props.type === "filled" && "black"};
// `

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
  &:active{
    background-color: green;
}
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [product,setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch()

  useEffect(()=>{
    const getProduct = async ()=>{
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data);
      } catch {}
    }
    getProduct();
  },[id])

  const handleQuantity = (type) =>{
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity-1)
    } else {
      setQuantity(quantity+1)
    }
  }

  const handleClick = ()=>{
    dispatch(
    addProduct({...product, quantity, color, size}))
  }

  return (
    <Container>
      <NavbarContainer>
          <Navbar/>
          
          </NavbarContainer>
          <Navbarmobile/>
      <Announcement />
      <Link to="/products/Products">
       {/* <TopButton>
        CONTINUE SHOPPING
       </TopButton> */}
        </Link>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>BHD {product.price}</Price>
          <FilterContainer>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick = {()=> handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick = {()=> handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick ={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
       
      <FooterContainer>
      <Footer/>
      </FooterContainer>
    </Container>
  );
};

export default Product
