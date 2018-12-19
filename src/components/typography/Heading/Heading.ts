import styled from "../../../styled-components";
import { FontSizes } from "../../../theme";

import BaseText from "../BaseText";

interface IProps {
  /** The size to render the heading in. This matches a value from the theme. */
  size?: keyof FontSizes;
}

/**
 * Component used to render text headings.
 *
 * Note that the "as" prop can be used to change which tag is used based on the
 * semantics required, while the "size" prop is used to determine rendering
 * size.
 */
const Heading = styled(BaseText).attrs({ as: "h1" })<IProps>`
  font-family: ${props => props.theme.fonts.families.headings};
  font-size: ${props =>
    props.size
      ? props.theme.fonts.sizes[props.size]
      : props.theme.fonts.sizes.h1};
  font-weight: normal;
  margin-bottom: 0.5em;
`;

export default Heading;
