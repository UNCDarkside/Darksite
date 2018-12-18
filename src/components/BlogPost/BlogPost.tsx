import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { IPost } from "../../models";
import styled from "../../styled-components";
import Loader from "../Loader";
import PageHeading from "../PageHeading";
import Prose from "../Prose";

const POST_QUERY = gql`
  query Post($slug: String!) {
    post(slug: $slug) {
      author {
        name
      }
      published
      rendered
      title
    }
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 2rem;
`;

const Author = styled.span`
  font-weight: bold;
`;

const Separator = styled.span`
  color: ${props => props.theme.colors.accent};
`;

const PostInfo: React.FunctionComponent<{ post: IPost }> = ({ post }) => (
  <InfoContainer>
    <Author>{post.author.name}</Author>
    <Separator>&nbsp;&mdash;&nbsp;</Separator>
    <span>{new Date(post.published).toLocaleDateString()}</span>
  </InfoContainer>
);

interface IPathProps {
  postSlug: string;
}

interface IProps extends RouteComponentProps<IPathProps> {}

/**
 * Fetch and render a post by its slug.
 *
 * @param match - The match object from the current route. This allows us to
 *     pull the post slug from the URL.
 * @constructor
 */
const BlogPost: React.FunctionComponent<IProps> = ({ match }) => (
  <Query query={POST_QUERY} variables={{ slug: match.params.postSlug }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loader />;
      }

      if (error) {
        return <PageHeading>Could Not Load Post</PageHeading>;
      }

      const post = data.post;

      return (
        <React.Fragment>
          <PageHeading>{post.title}</PageHeading>
          <PostInfo post={post} />
          <Prose dangerouslySetInnerHTML={{ __html: post.rendered }} />
        </React.Fragment>
      );
    }}
  </Query>
);

export default withRouter(BlogPost);
