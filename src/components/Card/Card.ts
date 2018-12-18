import styled, { css } from "../../styled-components";

const clickableCSS = css`
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

/**
 * A card that gives the appearance of being raised above the surface it's
 * placed on.
 */
const Card = styled.div`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.borderRadius}px;
  padding: 1em;

  ${props => (props.onClick ? clickableCSS : "")}
`;

export default Card;
