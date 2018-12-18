import styled from "../../styled-components";

/**
 * A container that applies styling to the contained text to make it easier to
 * read. This is intended for content that contains more than a single paragraph
 * or line.
 */
const Prose = styled.div`
  font-size: 1.15rem;
  line-height: 1.618;

  & a,
  & a:visited {
    color: ${props => props.theme.colors.accent};
    text-decoration: underline;
  }

  & h1 {
    font-family: ${props => props.theme.fonts.families.headings};
    font-size: ${props => props.theme.fonts.sizes.h2};
    font-weight: normal;
  }

  & h2 {
    font-family: ${props => props.theme.fonts.families.headings};
    font-size: ${props => props.theme.fonts.sizes.h3};
    font-weight: normal;
  }

  & h3 {
    font-family: ${props => props.theme.fonts.families.headings};
    font-size: ${props => props.theme.fonts.sizes.h4};
    font-weight: normal;
  }

  & h4 {
    font-family: ${props => props.theme.fonts.families.headings};
    font-size: ${props => props.theme.fonts.sizes.h5};
    font-weight: normal;
  }

  & h5 {
    font-family: ${props => props.theme.fonts.families.headings};
    font-size: ${props => props.theme.fonts.sizes.h6};
    font-weight: normal;
  }

  & h6 {
    font-family: ${props => props.theme.fonts.families.headings};
    font-weight: normal;
  }

  & p {
    margin-bottom: 1em;
  }
`;

export default Prose;
