import * as React from "react";

import Container from "../components/Container";
import Heading from "../components/typography/Heading";
import PageHeading from "../components/PageHeading";
import styled from "../styled-components";
import TwitterTimelineBox from "../components/TwitterTimelineBox";
import { TwitterFollowButton } from "react-twitter-embed/dist/index.js";

const ContactInfoBox = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2em 0;

  & > * {
    flex-basis: 0;
    flex-grow: 1;

    margin: 0 2em;
  }

  & > *:last-child {
    margin-top: 1em;
  }
`;

const Contact = () => (
  <Container>
    <PageHeading>Contact</PageHeading>
    <ContactInfoBox>
      <div>
        <Heading as="h2" size="h3">
          Darkside 2018 Contact
        </Heading>
        Jesse Kovacs
        <br />
        <a
          href="mailto:jjk007@live.unc.edu"
          rel="noopener noreferrer"
          target="_blank"
        >
          jjk007@live.unc.edu
        </a>
      </div>
      <div>
        <TwitterFollowButton screenName="UNC_Darkside" />
      </div>
    </ContactInfoBox>
    <TwitterTimelineBox />
  </Container>
);

export default Contact;
