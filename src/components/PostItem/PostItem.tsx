import * as React from "react";

import { IPost } from "../../models";
import styled from "../../styled-components";
import Card from "../Card";

const PostContainer = styled.div`
  margin: 1em 0;
`;

interface IProps {
  post: IPost;
}

/**
 * A post as an item in a list. This component displays summary information
 * about a post and is used to access the full post.
 *
 * @param post - The post to display info about.
 * @constructor
 */
const PostItem: React.FunctionComponent<IProps> = ({ post }) => (
  <PostContainer>
    <Card>
      <h3>{post.title}</h3>
      <p>
        {post.author.name} &mdash;{" "}
        {new Date(post.published).toLocaleDateString()}
      </p>
    </Card>
  </PostContainer>
);

export default PostItem;
