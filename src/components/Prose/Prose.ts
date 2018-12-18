import styled from "../../styled-components";

/**
 * A container that applies styling to the contained text to make it easier to
 * read. This is intended for content that contains more than a single paragraph
 * or line.
 */
const Prose = styled.div`
  font-size: 1.15rem;
  line-height: 1.618;

  & p {
    margin-bottom: 1em;
  }
`;

export default Prose;
