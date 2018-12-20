import * as React from "react";

import styled from "../../styled-components";
import shadow from "../shadows";

/**
 * Container to make an embedded iframe responsive.
 */
const ResponsiveEmbed = styled.div`
  ${shadow(3)};
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;
  height: 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-bottom: 25%;
  }

  & iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

interface IProps {
  /** The ID of the YouTube video to embed. */
  videoID: string;
}

/**
 * Render an embedded YouTube video.
 *
 * @constructor
 */
const YouTubeEmbed: React.FunctionComponent<IProps> = ({ videoID }) => (
  <ResponsiveEmbed>
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoID}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    />
  </ResponsiveEmbed>
);

export default YouTubeEmbed;
