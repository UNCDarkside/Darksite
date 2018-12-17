import * as React from "react";

import NavItem from "./NavItem";
import styled from "../../styled-components";

/**
 * The root navbar element.
 */
const NavRoot = styled.nav`
  background: ${props => props.theme.colors.primary};
  box-shadow: 0 2px 5px ${props => props.theme.colors.primary};
  font-family: "Roboto", sans-serif;
  font-size: 1.15rem;
  margin-bottom: 1em;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 1em;
  }
`;

/**
 * The container for the navbar content.
 */
const NavContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 75rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

/**
 * Component to hold the list of navigation links.
 */
const NavLinks = styled.ul`
  border-top: 1px solid ${props => props.theme.colors.primaryInverted};
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    border-top: none;
    flex-direction: row;
  }
`;

interface IProps {
  children?: React.ReactNode | React.ReactNodeArray;
  title: string;
}

/**
 * A navigation bar to render links to pages in the application.
 * @param children - The navigation links to display.
 * @param title - The title to display in the navigation bar.
 * @constructor
 */
const Navbar: React.FunctionComponent<IProps> = ({ children, title }) => (
  <NavRoot>
    <NavContent>
      <NavItem showActive={false} to="/">
        {title}
      </NavItem>
      <NavLinks>{children}</NavLinks>
    </NavContent>
  </NavRoot>
);

export default Navbar;
