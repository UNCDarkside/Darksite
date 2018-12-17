/**
 * Global CSS styles applied regardless of components.
 */

import { createGlobalStyle } from "./styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${props => props.theme.fonts.base};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.headings};
    font-weight: normal;
  }
`;
