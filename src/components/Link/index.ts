import { Link as BaseLink } from "react-router-dom";
import styled, { css } from "../../styled-components";

const baseStyles = css`
  text-decoration: underline;

  &,
  &:visited {
    color: ${props => props.theme.colors.accent};
  }
`;

/**
 * Link to navigate to a location outside the application.
 */
const ExternalLink = styled.a.attrs({
  rel: "noopener noreferrer",
  target: "_blank"
})`
  ${baseStyles}
`;

/**
 * Link for internal navigation.
 */
const Link = styled(BaseLink)`
  ${baseStyles}
`;

export { ExternalLink, Link };
