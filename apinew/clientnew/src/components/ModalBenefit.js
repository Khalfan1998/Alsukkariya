import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { mobile } from "../responsive";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const Hr = styled.hr`
  border: none;
`;

const ModalWrapper = styled.div`
  width: 600px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0.2);
  background: #dfd3c5;
  color: #000;
  display: grid;
  //   grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 5;
  border-radius: 10px;
  margin-bottom: 160px;
  ${mobile({ height: "500px" })}
  ${mobile({ width: "300px" })}
`;

const ModalContent = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #31342c;
    color: #fff;
    border: none;
  }
  ${mobile({ marginRight: "15%" })}
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  ${mobile({ width: "20px" })}
  ${mobile({ height: "20px" })}
  ${mobile({ top: "20px" })}
`;
const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&family=Merriweather:ital,wght@0,300;1,400&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

  font-family: "Maven Pro", sans-serif;
  margin-right: 24%;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  ${mobile({ fontSize: "15px" })}
  ${mobile({ marginRight: "50%" })}
`;
const FooterContainer = styled.div`
  background-color: white;
  margin-top: 15%;
`;
const NavbarContainer = styled.div`
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 84%;
  border-radius: 8px;
  border: none;
  margin: 20px 200px 0px -18px;
  padding: 10px;
  ${mobile({ fontSize: "10px" })}
  ${mobile({ marginRight: "80%" })}
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  margin-top: 30px;
  margin-left: -4%;
  margin-right: 15%;
  width: 200%;
  height: 20%;
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  ${mobile({ height: "15%" })}
  ${mobile({ width: "200px" })}
  ${mobile({ marginLeft: "-8%" })}
`;

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm("gmail", "emailtemplate", e.target, "user_55A95fDRXwEhih3fhx36R")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

export const ModalBenefit = ({ showModalBenefit, setShowModalBenefit }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      {showModalBenefit ? (
        <Background>
          <ModalWrapper showModalBenefit={showModalBenefit}>
            <ModalContent>
              <Title>
                Your total amount will be
                <Hr />
                <span style={{ fontWeight: "bold" }}>
                  {cart.total} BHD{" "}
                </span>{" "}
                Via BenefitPay To{"  "}
                <Hr />
                <span style={{ fontWeight: "bold" }}>IBAN:9312379123</span>
              </Title>
              <Form onSubmit={sendEmail}>
                <Input placeholder="Subject" required name="subject" />
                <Input placeholder="Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Address" />
                <Input placeholder="Phone number" />
                {/* <Link to="/successpage"> */}
                <Button type="submit">Order</Button>
                {/* </Link> */}
              </Form>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModalBenefit((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
