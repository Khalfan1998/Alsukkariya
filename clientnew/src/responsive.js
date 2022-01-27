import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2.625) {
      ${props}
    }
  `;
};
