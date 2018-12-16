import * as React from "react";

import { Contact, History, Home } from "./pages";

export interface IRoute {
  component: React.ComponentType;
  exact?: boolean;
  path: string;
}

const routes: IRoute[] = [
  {
    component: Contact,
    exact: true,
    path: "/contact"
  },
  {
    component: History,
    exact: true,
    path: "/history"
  },
  {
    component: Home,
    exact: true,
    path: "/"
  }
];

export default routes;
