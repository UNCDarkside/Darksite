import * as React from "react";

import Container from "../components/Container";
import PageHeading from "../components/PageHeading";
import PostList from "../components/PostList";

const Blog = () => (
  <Container>
    <PageHeading>Blog</PageHeading>
    <PostList />
  </Container>
);

export default Blog;
