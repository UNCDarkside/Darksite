import * as React from "react";

import styled from "../../styled-components";

import {
  TwitterTimelineEmbed,
  TwitterFollowButton
} from "react-twitter-embed/dist/index.js";

const TwitterBox = styled.div`
  max-width: 400px;
  max-height: 600px;
  margin: 2em;
`;

const TwitterTimelineBox = () => {
  return (
    <TwitterBox>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="UNC_Darkside"
        options={{ height: 400 }}
      />
    </TwitterBox>
  );
};

export default TwitterTimelineBox;
