import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router";
import { IAlbum } from "../../models";
import styled from "../../styled-components";
import { Breadcrumb, Breadcrumbs } from "../Breadcrumbs";
import Container from "../Container";
import Figure from "../Figure";
import Loader from "../Loader";
import PageHeading from "../PageHeading";
import ResponsiveImage from "../ResponsiveImage";
import LeadText from "../typography/LeadText";
import YouTubeEmbed from "../YouTubeEmbed";

interface IQueryData {
  album: IAlbum;
}

interface IQueryVars {
  slug: string;
}

class AlbumQuery extends Query<IQueryData, IQueryVars> {}

const ALBUM_QUERY = gql`
  query($slug: String!) {
    album(slug: $slug) {
      description
      mediaResources {
        id
        image
        title
        youtubeId
      }
      title
    }
  }
`;

const MediaGrid = styled.section`
  display: grid;
  gap: 2em;
  grid-auto-rows: auto;
  grid-template-columns: repeat(1, 1fr);
  margin: 3em 1em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

interface IPathProps {
  albumSlug: string;
}

interface IProps extends RouteComponentProps<IPathProps> {}

/**
 * Component to render a specific album.
 *
 * @constructor
 */
const AlbumDetail: React.FunctionComponent<IProps> = ({ match }) => (
  <React.Fragment>
    <AlbumQuery
      query={ALBUM_QUERY}
      variables={{ slug: match.params.albumSlug }}
    >
      {({ loading, error, data }) => {
        let content = null;
        let album: IAlbum | null = null;

        if (loading) {
          content = <Loader />;
        } else if (error || !data) {
          content = (
            <Container>
              <PageHeading>Could Not Load Album</PageHeading>
            </Container>
          );
        } else {
          album = data.album;

          content = (
            <React.Fragment>
              <Container>
                <PageHeading>{album.title}</PageHeading>
                {album.description && <LeadText>{album.description}</LeadText>}
              </Container>
              <MediaGrid>
                {album.mediaResources.map(media => (
                  <Figure key={media.id}>
                    {media.image ? (
                      <ResponsiveImage src={media.image} />
                    ) : (
                      media.youtubeId && (
                        <YouTubeEmbed videoID={media.youtubeId} />
                      )
                    )}
                  </Figure>
                ))}
              </MediaGrid>
            </React.Fragment>
          );
        }

        const breadcrumbs = (
          <Breadcrumbs>
            <Breadcrumb path="/gallery">Gallery</Breadcrumb>
            <Breadcrumb active={true}>
              {album ? album.title : match.params.albumSlug}
            </Breadcrumb>
          </Breadcrumbs>
        );

        return (
          <React.Fragment>
            <Container>{breadcrumbs}</Container>
            {content}
            <Container>{breadcrumbs}</Container>
          </React.Fragment>
        );
      }}
    </AlbumQuery>
  </React.Fragment>
);

export default AlbumDetail;
