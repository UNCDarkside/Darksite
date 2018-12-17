import * as React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Navbar, { NavItem } from "./components/Navbar";
import GlobalStyles from "./globalStyles";
import { NotFound } from "./pages";
import routes from "./routes";
import { ThemeProvider } from "./styled-components";
import theme from "./theme";

const httpLink = createHttpLink({
  uri: "https://api.uncdarkside.cdriehuys.com/graphql/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <BrowserRouter>
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
    </React.Fragment>
  </ThemeProvider>
);

export default App;
