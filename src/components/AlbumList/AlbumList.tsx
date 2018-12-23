import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import styled from "../../styled-components";
import Card from "../Card";
import Loader from "../Loader";
import Heading from "../typography/Heading";

const ALBUM_LIST = gql`
  query {
    albums {
      slug
      title
    }
  }
`;

interface IQueryData {
  albums: { slug: string; title: string }[];
}

class AlbumListQuery extends Query<IQueryData> {}

const AlbumGrid = styled.section`
  display: grid;
  gap: 2em;
  grid-auto-rows: minmax(200px, auto);
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AlbumGridItem = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
`;

const AlbumCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

const AlbumHeading = styled(Heading)`
  color: ${props => props.theme.colors.accent};
`;

const AlbumLink = styled(Link)`
  &,
  &:visited {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
  }
`;

/**
 * List all albums from the API.
 *
 * @constructor
 */
const AlbumList = () => (
  <AlbumListQuery query={ALBUM_LIST}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loader />;
      }

      if (error || !data) {
        return <p>Error fetching albums.</p>;
      }

      const albums = data.albums;

      return (
        <React.Fragment>
          <Heading as="h2" size="h2">
            Albums
          </Heading>
          <AlbumGrid>
            {albums.map(album => (
              <AlbumGridItem
                key={album.slug}
                to={`/gallery/albums/${album.slug}`}
              >
                <AlbumCard>
                  <AlbumHeading as="h3" size="h3" textAlign="center">
                    <AlbumLink to={`/gallery/albums/${album.slug}`}>
                      {album.title}
                    </AlbumLink>
                  </AlbumHeading>
                </AlbumCard>
              </AlbumGridItem>
            ))}
          </AlbumGrid>
        </React.Fragment>
      );
    }}
  </AlbumListQuery>
);

export default AlbumList;
