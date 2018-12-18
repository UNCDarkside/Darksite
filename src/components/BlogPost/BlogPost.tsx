import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import { RouteComponentProps, withRouter } from "react-router";
import { IPost } from "../../models";
import styled from "../../styled-components";
import { Breadcrumb, Breadcrumbs } from "../Breadcrumbs";
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

const Icon = styled.i`
  color: ${props => props.theme.colors.accent};
  margin-right: 0.5em;
`;

const InfoContainer = styled.div`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Author = styled.p`
  font-weight: bold;
`;

const PostInfo: React.FunctionComponent<{ post: IPost }> = ({ post }) => (
  <InfoContainer>
    <Author>
      <Icon className="fal fa-user" /> {post.author.name}
    </Author>
    <p>
      <Icon className="fal fa-calendar" />{" "}
      {new Date(post.published).toLocaleDateString()}
    </p>
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
      let content;
      let post: IPost | null = null;
      if (loading) {
        content = <Loader />;
      } else if (error) {
        content = <PageHeading>Could Not Load Post</PageHeading>;
      } else {
        post = data.post as IPost;
        content = (
          <React.Fragment>
            <PageHeading>{post.title}</PageHeading>
            <PostInfo post={post} />
            <Prose dangerouslySetInnerHTML={{ __html: post.rendered }} />
          </React.Fragment>
        );
      }

      const breadcrumbs = (
        <Breadcrumbs>
          <Breadcrumb path="/blog">Blog</Breadcrumb>
          <Breadcrumb active={true}>
            {post ? post.title : match.params.postSlug}
          </Breadcrumb>
        </Breadcrumbs>
      );

      return (
        <React.Fragment>
          {breadcrumbs}
          {content}
          {breadcrumbs}
        </React.Fragment>
      );
    }}
  </Query>
);

export default withRouter(BlogPost);
