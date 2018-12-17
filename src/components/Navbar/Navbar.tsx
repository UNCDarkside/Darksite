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
  padding: 0 1em;
`;

/**
 * The container for the navbar content.
 */
const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 75rem;
`;

/**
 * Component to hold the list of navigation links.
 */
const NavLinks = styled.ul`
  display: flex;
  justify-content: end;
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
