import * as React from "react";
import { Link } from "react-router-dom";

import Navlink from "./Navlink";

import * as css from "./Navbar.css";

interface IProps {
  children?: React.ReactElement<{}>[];
  title: string;
}

const Navbar: React.SFC<IProps> = ({ children, title }) => (
  <nav className={css.navbar}>
    <div className={css.navbarContent}>
      <Navlink showActive={false} to="/">
        {title}
      </Navlink>
      <ul className={css.navbarLinks}>{children}</ul>
    </div>
  </nav>
);

export default Navbar;
