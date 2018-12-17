import * as React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Navbar, { Navlink } from "./components/Navbar";
import { NotFound } from "./pages";
import routes from "./routes";
import "./styles.css";

const httpLink = createHttpLink({
  uri: "https://api.uncdarkside.cdriehuys.com/graphql/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.Fragment>
        <Navbar title="Darkside">
          <Navlink to="/">Home</Navlink>
          <Navlink to="/blog">Blog</Navlink>
          <Navlink to="/history">History</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </Navbar>

        <Switch>
          {routes.map(route => (
            <Route
              component={route.component}
              exact={route.exact}
              key={route.path}
              path={route.path}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
