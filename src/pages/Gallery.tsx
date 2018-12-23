import * as React from "react";
import { Route, RouteComponentProps, Switch } from "react-router";
import Container from "../components/Container";
import PageHeading from "../components/PageHeading";
import AlbumList from "../components/AlbumList";
import { asLoadable } from "../loadable";
import NotFound from "./NotFound";

const LoadableAlbumDetail = asLoadable({
  loader: () =>
    import(/* webpackChunkName: "albumDetail" */ "../components/AlbumDetail")
});

interface IProps extends RouteComponentProps {}

const Gallery: React.FunctionComponent<IProps> = ({ match }) => (
  <Switch>
    <Route
      exact={true}
      path={`${match.path}/albums/:albumSlug`}
      component={LoadableAlbumDetail}
    />
    <Route exact={true} path={match.path}>
      <Container>
        <PageHeading>Gallery</PageHeading>
        <AlbumList />
      </Container>
    </Route>
    <Route component={NotFound} />
  </Switch>
);

export default Gallery;
