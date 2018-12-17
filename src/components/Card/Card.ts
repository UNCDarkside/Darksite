import styled from "../../styled-components";

/**
 * A card that gives the appearance of being raised above the surface it's
 * placed on.
 */
const Card = styled.div`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
  padding: 1em;
`;

export default Card;
