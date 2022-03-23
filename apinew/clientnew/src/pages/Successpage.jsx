
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from 'react'
import { userRequest } from '../requestMethods'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Badge } from '@material-ui/core'
import { useDispatch } from "react-redux";
import { resetCart } from '../redux/cartRedux'
import Navbarmobile from '../components/Navbarmobile'

const KEY = "pk_test_51K9luKDHgD7vvY49C8bHgEUCNYjaGuaA0NF9clG1WMRNctR3dINn6HFElfUsoPlgRFGpjnYAiZTAhrKkeIscPKOR00wBTuQuns"

const Container = styled.div`
background: #DFD3C5;

`
const Wrapper = styled.div`
width: 25%;
background: #eae8e6;
border: 1px solid black;
padding: 20px;
margin-left: 35%;
margin-top: 10%;
${mobile({ padding: "10px" })}
${mobile({ width: "75%" })}
${mobile({ marginLeft: "33px" })}
`
const Title = styled.h1`
font-size: 25px;
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const ClearButton = styled.button`
margin-left: 155px;
padding: 10px;
border-radius: 8px;
font-weight: 600;
width: 200px;
height: 40px;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};
${mobile({ width: "70px" })}
${mobile({ marginLeft: "40px" })}
${mobile({ fontSize: "10px" })}
`
const FooterContainer = styled.div`
background-color: white;
margin-top: 20%;
`
const NavbarContainer = styled.div`
background-color: white;
${mobile({ display: "none" })}
`

// const TopButton = styled.button`
// padding: 10px;
// border-radius: 8px;
// font-weight: 600;
// cursor: pointer;
// border: ${props=>props.type === "filled" && "none"};
// background-color: ${props=>props.type === "filled" ? "#F1C55B" : "transparent"};
// color: ${props=>props.type === "filled" && "black"};
// ${mobile({ width: "70px" })}
// ${mobile({ fontSize: "10px" })}

// `

const TopTexts = styled.div`

`
const TopText = styled.span`
text-align: center;
text-decoration: underline;
cursor: pointer;
padding-left: 46%;
${mobile({ paddingLeft: "36%" })}
`

const Bottom = styled.div`
margin-Top: 62px;
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
height: 180px;
width: 200px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`
`
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
cursor: pointer;
`
const ProductAmount = styled.div`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
font-size: 24px;


${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
background-color: #eee;
border:none;
height: 5px;
margin-bottom: 20px;
`

const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
background: white;

border-radius: 10px;
padding: 20px;
height: 50vh;
`
const Confirmation = styled.div`
text-align: center;
line-height: 1.6;
`


const SummaryTitle = styled.h1`
font-weight: 200;
`
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const CheckoutButton = styled.button`
width: 100%;
padding: 10px;
border-radius: 8px;
background-color: #5D2C2F;
color: white;
font-weight: 600;
`
const Button = styled.button`
width: 100%;
padding: 10px;
border-radius: 8px;
background-color: #EA342E;
color: white;
font-weight: 600;
`
const CoDButton = styled.button`
width: 100%;
padding: 10px;
border-radius: 8px;
background-color: white;
color: teal;
font-weight: 600;
`


const Successpage = () => {
const cart = useSelector(state=>state.cart)
const [stripeToken,setStripeToken] = useState(null)
const history = useHistory()
const quantity = useSelector(state=>state.cart.quantity)
const dispatch = useDispatch();

const onToken = (token)=>{
    setStripeToken(token);
}

const handleClick = () => {
    dispatch(resetCart());
};

useEffect(()=>{
    const makeRequest = async () =>{
        try {
            const res = await userRequest.post("/successpage/payment",{
                tokenId: stripeToken.id,
                amount: 500,
                //change after to cart.total*100
                
            });
            history.push
            ("/success",
            {stripeData:res.data,
            products: cart,});
        } catch {}
    };
    stripeToken && makeRequest();
}, [stripeToken, cart.total, history]);
    return (
        <Container>
            <NavbarContainer>
          <Navbar/>
          </NavbarContainer>
          <Navbarmobile/>
            <Wrapper>
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                Subtotal:
                            </SummaryItemText>
                            <SummaryItemPrice>
                               BHD {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping:
                            </SummaryItemText>
                            <SummaryItemPrice>
                                BHD 2
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Shipping Discount:
                            </SummaryItemText>
                            <SummaryItemPrice>
                                BHD -5
                            </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >
                                Total:
                            </SummaryItemText>
                            <SummaryItemPrice>
                            BHD {cart.total}
                            </SummaryItemPrice>
                        </SummaryItem>
                            <Hr/>
                          <Confirmation>
                              Thank you for shopping with us!
                              You will receive an email soon to confirm your order.
                          </Confirmation>
                    </Summary>
            </Wrapper>
            <FooterContainer>
      <Footer/>
      </FooterContainer>
        </Container>
    )
}

export default Successpage
