import styled from "../../styled-components";

const FONT_SIZES = {
  display: "3.5rem",
  h1: "3rem",
  h2: "2.5rem",
  h3: "2rem",
  h4: "1.5rem"
};

interface IProps {
  size?: keyof typeof FONT_SIZES;
  textAlign?: "left" | "center" | "right";
}

const Heading = styled.h1<IProps>`
  font-family: ${props => props.theme.fonts.families.headings};
  font-size: ${props => (props.size ? FONT_SIZES[props.size] : FONT_SIZES.h1)};
  font-weight: normal;
  margin-bottom: 0.5em;
  text-align: ${({ textAlign = "left" }) => textAlign};
`;

export default Heading;
