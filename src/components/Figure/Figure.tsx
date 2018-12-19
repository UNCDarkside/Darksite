import * as React from "react";

import styled from "../../styled-components";
import shadow from "../shadows";
import BaseText from "../typography/BaseText";

const Image = styled.img`
  ${shadow(3)};
  display: block;
  height: auto;
  max-width: 100%;
`;

const FigCaption = styled(BaseText).attrs({ as: "figcaption" })`
  font-size: 0.85em;
  margin-top: 1em;
`;

interface IProps {
  alt: string;
  caption?: React.ReactNode;
  src: string;
}

const Figure: React.FunctionComponent<IProps> = ({ alt, caption, src }) => (
  <figure>
    <Image alt={alt} src={src} />
    {caption && <FigCaption textAlign="center">{caption}</FigCaption>}
  </figure>
);

export default Figure;
