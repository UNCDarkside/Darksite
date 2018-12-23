import * as React from "react";
import { asLoadable } from "./loadable";

export interface IRoute {
  component: React.ComponentType;
  exact?: boolean;
  path: string;
}

const routes: IRoute[] = [
  {
    component: asLoadable({
      loader: () => import(/* webpackChunkName: "blog" */ "./pages/Blog")
    }),
    path: "/blog"
  },
  {
    component: asLoadable({
      loader: () => import(/* webpackChunkName: "contact" */ "./pages/Contact")
    }),
    exact: true,
    path: "/contact"
  },
  {
    component: asLoadable({
      loader: () => import(/* webpackChunkName: "gallery" */ "./pages/Gallery")
    }),
    path: "/gallery"
  },
  {
    component: asLoadable({
      loader: () => import(/* webpackChunkName: "history" */ "./pages/History")
    }),
    exact: true,
    path: "/history"
  },
  {
    component: asLoadable({
      loader: () => import(/* webpackChunkName: "home" */ "./pages/Home")
    }),
    exact: true,
    path: "/"
  }
];

export default routes;
