import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

import { IPost } from "../../models";
import styled from "../../styled-components";
import Card from "../Card";
import Heading from "../typography/Heading";

const PostContainer = styled.div`
  margin: 2em 0;
`;

const Link = styled(RouterLink)`
  &,
  &:visited {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`;

const PostHeading = styled(Heading).attrs({
  as: "h3",
  size: "h4"
})`
  border-bottom: 2px solid ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accent};
  display: inline-block;
  margin-top: 0;
`;

const Icon = styled.i`
  color: ${props => props.theme.colors.accent};
  margin-right: 0.5em;
`;

const Author = styled.p`
  font-weight: bold;
`;

interface IProps extends RouteComponentProps {
  post: IPost;
}

/**
 * A post as an item in a list. This component displays summary information
 * about a post and is used to access the full post.
 *
 * @param post - The post to display info about.
 * @constructor
 */
const PostItem: React.FunctionComponent<IProps> = ({ match, post }) => (
  <PostContainer>
    <Link to={`${match.path}/posts/${post.slug}`}>
      <Card>
        <PostHeading>{post.title}</PostHeading>
        <Author>
          <Icon className="fal fa-user" /> {post.author.name}
        </Author>
        <p>
          <Icon className="fal fa-calendar" />{" "}
          {new Date(post.published).toLocaleDateString()}
        </p>
      </Card>
    </Link>
  </PostContainer>
);

export default withRouter(PostItem);
