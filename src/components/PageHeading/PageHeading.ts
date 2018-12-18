import styled from "../../styled-components";
import Heading from "../Heading";

const PageHeading = styled(Heading)`
  border-bottom: 2px solid ${props => props.theme.colors.accent};
  padding-bottom: 0.25em;
`;

export default PageHeading;
