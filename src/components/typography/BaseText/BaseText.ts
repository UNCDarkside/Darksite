import styled from "../../../styled-components";

interface IProps {
  /** Method of text alignment. */
  textAlign?: "left" | "center" | "right";
}

/**
 * Base styles that all text in the application is derived from.
 */
const BaseText = styled.span<IProps>`
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : "")}
`;

export default BaseText;
