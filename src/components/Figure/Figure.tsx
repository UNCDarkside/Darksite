import * as React from "react";

import styled from "../../styled-components";
import BaseText from "../typography/BaseText";

const FigCaption = styled(BaseText).attrs({ as: "figcaption" })`
  font-size: 0.85em;
  margin-top: 1em;
`;

interface IProps {
  /** The caption to display beneath the children of the figure. */
  caption?: React.ReactNode;
  /** The children, usually graphic elements, to display. */
  children: React.ReactNode | React.ReactNodeArray;
}

/**
 * A figure with some form of embedded media and an optional caption.
 *
 * @constructor
 */
const Figure: React.FunctionComponent<IProps> = ({ caption, children }) => (
  <figure>
    {children}
    {caption && <FigCaption textAlign="center">{caption}</FigCaption>}
  </figure>
);

export default Figure;
