import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { IInfoPanel } from "../../models";
import styled from "../../styled-components";
import Figure from "../Figure";
import Loader from "../Loader";
import Heading from "../typography/Heading";
import LeadText from "../typography/LeadText";
import YouTubeEmbed from "../YouTubeEmbed";

const INFO_PANEL_QUERY = gql`
  query {
    infoPanels {
      id
      media {
        caption
        image
        youtubeId
      }
      text
      title
    }
  }
`;

/**
 * Container component for a section that's split into two columns, typically an
 * image and some text.
 */
const ImageSection = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 2em 0;

  & > * {
    flex-basis: 0;
    flex-grow: 1;
    margin: 0 2em;
  }

  & > *:last-child {
    margin-top: 1em;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: ${({ reverse = false }) =>
      reverse ? "row-reverse" : "row"};
    margin: 5em 0;

    & > *:last-child {
      margin-top: 0;
    }
  }
`;

/**
 * Component to list information panels pulled from the API.
 * @constructor
 */
const InfoPanelList = () => (
  <Query query={INFO_PANEL_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loader />;
      }

      if (error) {
        console.error(error);
        return <p>Failed to load information panels.</p>;
      }

      const panels: IInfoPanel[] = data.infoPanels;

      return panels.map((panel, index) => (
        <ImageSection key={panel.id} reverse={index % 2 !== 0}>
          {panel.media ? (
            panel.media.image ? (
              <Figure
                alt={panel.media.caption}
                caption={panel.media.caption}
                src={panel.media.image}
              />
            ) : panel.media.youtubeId ? (
              <YouTubeEmbed videoID={panel.media.youtubeId} />
            ) : (
              <div />
            )
          ) : (
            <div />
          )}
          <div>
            <Heading as="h3" size="h3">
              {panel.title}
            </Heading>
            <LeadText>{panel.text}</LeadText>
          </div>
        </ImageSection>
      ));
    }}
  </Query>
);

export default InfoPanelList;
