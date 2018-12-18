import * as React from "react";
import * as Loadable from "react-loadable";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";

import Container from "../components/Container";
import PageHeading from "../components/PageHeading";
import PostList from "../components/PostList";
import { asLoadable } from "../loadable";
import NotFound from "./NotFound";

const LoadableBlogPost = asLoadable({
  loader: () =>
    import(/* webpackChunkName: "blogPost" */ "../components/BlogPost")
});

const Blog: React.FunctionComponent<RouteComponentProps> = ({ match }) => (
  <Container>
    <Switch>
      <Route
        path={`${match.path}/posts/:postSlug`}
        component={LoadableBlogPost}
      />
      <Route exact={true} path={match.path}>
        <React.Fragment>
          <PageHeading>Blog</PageHeading>
          <PostList />
        </React.Fragment>
      </Route>
      <NotFound />
    </Switch>
  </Container>
);

export default withRouter(Blog);
