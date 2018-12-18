import { ApolloClient, InMemoryCache } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { Route, Switch } from "react-router-dom";
import Navbar, { NavItem } from "../components/Navigation";
import NotFound from "../pages/NotFound";
import routes from "../routes";

const httpLink = createHttpLink({
  uri: "https://api.uncdarkside.cdriehuys.com/graphql/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

/**
 * The main content of our application.
 *
 * @constructor
 */
const Main = () => (
  <ApolloProvider client={client}>
    <React.Fragment>
      <Navbar title="Darkside">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/blog">Blog</NavItem>
        <NavItem to="/history">History</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Navbar>

      <Switch>
        {routes.map(route => (
          <Route
            component={route.component}
            exact={!!route.exact}
            key={route.path}
            path={route.path}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </ApolloProvider>
);

export default Main;
