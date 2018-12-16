import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Navbar, { Navlink } from "./components/Navbar";
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

      {routes.map(route => (
        <Route
          component={route.component}
          exact={route.exact}
          key={route.path}
          path={route.path}
        />
      ))}
    </React.Fragment>
  </BrowserRouter>
);

export default App;
