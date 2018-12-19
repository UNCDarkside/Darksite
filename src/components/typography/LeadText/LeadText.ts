import styled from "../../../styled-components";

import BaseText from "../BaseText";

/**
 * Text with slightly more emphasis than standard body text.
 *
 * The main use case is for text that presents a main idea. This is typically
 * text following a heading that is too long to be a sub-heading but still needs
 * some sort of emphasis.
 */
const LeadText = styled(BaseText).attrs({ as: "p" })`
  font-size: 1.25rem;
  line-height: 1.618;
`;

export default LeadText;
