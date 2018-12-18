import * as React from "react";
import * as Loadable from "react-loadable";

const asLoadable = (opts: any) =>
  Loadable({
    loading: () => <p>Loading...</p>,
    ...opts
  });

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
