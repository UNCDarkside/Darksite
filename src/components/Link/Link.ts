import { Link as BaseLink } from "react-router-dom";
import styled from "../../styled-components";

const Link = styled(BaseLink)`
  &,
  &:visited {
    color: ${props => props.theme.colors.accent};
  }
`;

export default Link;
