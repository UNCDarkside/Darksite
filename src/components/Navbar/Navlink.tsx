import * as React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "./Navlink.css";

interface IProps {
  children: string;
  showActive?: boolean;
  to: string;
}

const Navlink: React.SFC<IProps> = ({ children, showActive = true, to }) => (
  <NavLink
    activeClassName={showActive ? styles.navlinkActive : undefined}
    className={styles.navlink}
    exact={to === "/"}
    to={to}
  >
    {children}
  </NavLink>
);

export default Navlink;
