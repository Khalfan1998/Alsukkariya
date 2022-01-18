import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

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
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              <form>
                <h1>You will pay # BHD On Delivery</h1>
                <div class="field">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div class="field">
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div class="field">
                  <label for="name">Address:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your fullname"
                  />
                </div>
                <div class="field">
                  <label for="name">Phone Number:</label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button type="order">Order</button>
              </form>
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
