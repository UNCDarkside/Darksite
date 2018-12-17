import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { IPost } from "../../models";
import styled from "../../styled-components";
import Heading from "../Heading";
import PostItem from "../PostItem";

const POSTS_LIST = gql`
  query {
    posts {
      author {
        name
      }
      published
      rendered
      slug
      title
    }
  }
`;

const PostListContainer = styled.div`
  margin: 2em 0;
`;

/**
 * Component to list all blog posts.
 *
 * The component fetches the list of posts from the API and the displays them.
 * @constructor
 */
const PostList = () => (
  <React.Fragment>
    <Heading>Posts</Heading>
    <p>Follow Darkside's ongoing shenanigans through our blog posts.</p>
    <Query query={POSTS_LIST}>
      {({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>;
        }

        if (error) {
          return <p>Error fetching data.</p>;
        }

        const postsToRender = data.posts;

        return (
          <PostListContainer>
            {postsToRender.map((post: IPost) => (
              <div className="my-3" key={post.slug}>
                <PostItem post={post} />
              </div>
            ))}
          </PostListContainer>
        );
      }}
    </Query>
  </React.Fragment>
);

export default PostList;
