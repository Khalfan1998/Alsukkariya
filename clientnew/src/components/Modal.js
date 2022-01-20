import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { createGlobalStyle } from "styled-components";
const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&family=Merriweather:ital,wght@0,300;1,400&family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap");

  font-family: "Maven Pro", sans-serif;
  margin-right: 80px;
  font-size: 24px;
  font-weight: 300;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 450px;
  box-shadow: 0 5px 16px rgba(0, 0, 0.2);
  background: #eae8e6;
  color: #000;
  display: grid;
  //   grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  margin-bottom: 120px;
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
  margin-left: 600px;
  width: 15%;
  height: 15%;
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <Title>
                You will pay <span style={{ fontWeight: "bold" }}> # BHD </span>{" "}
                Cash On Delivery
              </Title>
              <Form>
                <Input placeholder="Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Address" />
                <Input placeholder="Phone number" />

                <Button>Order</Button>
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
