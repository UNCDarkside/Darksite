import styled from "../../styled-components";
import shadow from "../shadows";

/**
 * An image that is at most 100% of its parent container.
 */
const ResponsiveImage = styled.img`
  ${shadow(3)};
  display: block;
  height: auto;
  margin: 0 auto;
  max-width: 100%;
`;

export default ResponsiveImage;
