import styled from "../../styled-components";
import shadow, { ShadowDepth } from "../shadows";

interface IProps {
  /**
   * The depth of the card's shadow. Higher numbers make the card appear to be
   * higher off of the underlying surface.
   */
  depth?: ShadowDepth;
}

/**
 * A card that gives the appearance of being raised above the surface it's
 * placed on.
 */
const Card = styled.div<IProps>`
  ${props => shadow(props.depth !== undefined ? props.depth : 3)};
  border-radius: ${props => props.theme.borderRadius}px;
  padding: 1em;
`;

export default Card;
