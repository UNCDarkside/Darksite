import * as React from "react";

import { IPost } from "../../models";
import Card from "../Card";

import * as styles from "./PostItem.css";

interface IProps {
  post: IPost;
}

const PostItem: React.FunctionComponent<IProps> = ({ post }) => (
  <div className={styles.postItem}>
    <Card>
      <h3>{post.title}</h3>
      <p>
        {post.author.name} &mdash;{" "}
        {new Date(post.published).toLocaleDateString()}
      </p>
    </Card>
  </div>
);

export default PostItem;
