import styled from "../../styled-components";
import theme from "../../theme";

interface IProps {
  size?: keyof typeof theme.fonts.sizes;
  textAlign?: "left" | "center" | "right";
}

const Heading = styled.h1<IProps>`
  font-family: ${props => props.theme.fonts.families.headings};
  font-size: ${props =>
    props.size
      ? props.theme.fonts.sizes[props.size]
      : props.theme.fonts.sizes.h1};
  font-weight: normal;
  margin-bottom: 0.5em;
  text-align: ${({ textAlign = "left" }) => textAlign};
`;

export default Heading;
