import * as React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Navbar, { Navlink } from "./components/Navbar";
import { NotFound } from "./pages";
import routes from "./routes";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Navbar title="Darkside">
        <Navlink to="/">Home</Navlink>
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
);

export default App;
