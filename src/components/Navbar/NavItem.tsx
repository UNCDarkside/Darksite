import { LocationDescriptor } from "history";
import * as React from "react";
import { NavLink } from "react-router-dom";

import styled, { css } from "../../styled-components";

interface IProps {
  showActive?: boolean;
  to: LocationDescriptor;
}

// Class applied to active nav links.
const activeClassName = "nav-item-active";

// CSS applied if the active link should be highlighted
const activeCSS = css`
  &.${activeClassName} {
    background: #222;
  }
`;

/**
 * A single item in the navigation bar.
 */
const NavItem = styled(({ showActive = true, ...rest }) => (
  // This is convoluted because we can't pass the 'showActive' prop down to the
  // child element.
  <NavLink {...rest} />
)).attrs((props: IProps) => ({
  activeClassName,
  // If nav links to the site root were not exact, they would always be active.
  exact: props.to === "/"
}))<IProps>`
  color: ${props => props.theme.colors.primaryInverted};
  display: block;
  text-decoration: none;
  padding: 0.5em 1em;
  transition: all 0.25s;

  &:hover {
    background: #333;
  }

  ${({ showActive = true }) => (showActive ? activeCSS : "")}
`;

export default NavItem;
