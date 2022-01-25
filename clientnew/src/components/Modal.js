import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&family=Merriweather:ital,wght@0,300;1,400&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

  font-family: "Maven Pro", sans-serif;
  margin-right: 0%;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

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
`;

const ModalContent = styled.div`
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
    background: #141414;
    color: #fff;
    border: none;
  }
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
  min-width: 40%;
  border-radius: 8px;
  border: none;
  margin: 20px 200px 0px 140px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  margin-top: 50px;
  margin-left: 600%;
  width: 100%;
  height: 50%;
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Title>
                You will pay
                <Hr />
                <span style={{ fontWeight: "bold" }}>
                  {cart.total} BHD{" "}
                </span>{" "}
                Cash On Delivery
              </Title>
              <Form>
                <Input placeholder="Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Address" />
                <Input placeholder="Phone number" />
                <Link to="/successpage">
                  <Button>Order</Button>
                </Link>
              </Form>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
