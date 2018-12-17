import { LocationDescriptor } from "history";
import * as React from "react";
import { NavLink } from "react-router-dom";

import styled from "../../styled-components";

interface IProps {
  showActive?: boolean;
  to: LocationDescriptor;
}

// Class applied to active nav links.
const activeClassName = "nav-item-active";

/**
 * A single item in the navigation bar.
 */
const NavItem = styled(NavLink).attrs({
  activeClassName,
  exact: (props: IProps) => props.to === "/",
  to: (props: IProps) => props.to
})<IProps>`
  color: ${props => props.theme.colors.primaryInverted};
  display: block;
  text-decoration: none;
  padding: 0.5em 1em;
  transition: all 0.25s;

  &:hover {
    background: #333;
  }

  &.${activeClassName} {
    background: #222;
  }
`;

export default NavItem;
