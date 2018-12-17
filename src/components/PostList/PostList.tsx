import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { IPost } from "../../models";
import PostItem from "../PostItem";

import * as styles from "./PostList.css";

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

const PostList = () => (
  <React.Fragment>
    <h2>Posts</h2>
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
          <div className={styles.postListContainer}>
            {postsToRender.map((post: IPost) => (
              <div className="my-3" key={post.slug}>
                <PostItem post={post} />
              </div>
            ))}
          </div>
        );
      }}
    </Query>
  </React.Fragment>
);

export default PostList;
