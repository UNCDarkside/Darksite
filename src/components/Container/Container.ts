import styled from "../../styled-components";

/**
 * A container that limits its maximum width and centers itself. This is useful
 * for ensuring that lines of text do not get too long on larger screens.
 */
const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  padding: 0 0.5rem;
`;

export default Container;
