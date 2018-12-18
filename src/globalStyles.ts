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
    font-family: ${props => props.theme.fonts.families.base};
  }
`;
