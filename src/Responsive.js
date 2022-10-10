import { css } from "styled-components";
export const mobile = (props) => {
  return css`
    @media (max-width: 480px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media (max-width: 840px) {
      ${props}
    }
  `;
};
export const lapTop = (props) => {
  return css`
    @media (max-width: 1024px) {
      ${props}
    }
  `;
};
