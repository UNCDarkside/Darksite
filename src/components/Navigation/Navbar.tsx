import * as React from "react";
import shadow from "../shadows";

import NavItem from "./NavItem";
import styled from "../../styled-components";

/**
 * The root navbar element.
 */
const NavRoot = styled.nav`
  ${shadow(3)};
  background: ${props => props.theme.colors.primary};
  font-family: "Roboto", sans-serif;
  font-size: 1.15rem;
  margin-bottom: 1em;
  position: relative;
  z-index: 10;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
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

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

/**
 * Component to hold the brand and hamburger icon.
 */
const NavHeader = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
`;

/**
 * Icon used to render the menu.
 */
const NavMenuIcon = styled.span`
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin: 0.5em 1em;
  vertical-align: top;

  & .fa-inverse {
    transition: color 0.25s ease-in-out;
  }

  &:hover {
    & .fa-inverse {
      color: #ddd;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

/**
 * Component to hold the list of navigation links.
 */
const NavLinks = styled.ul`
  display: none;
  flex-grow: 1;
  justify-content: end;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavLinksMobile = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

interface IProps {
  children?: React.ReactNode | React.ReactNodeArray;
  title: React.ReactNode;
}

interface IState {
  /** Boolean indicating if the mobile navigation is open. */
  mobileOpen: boolean;
}

/**
 * A navigation bar to render links to pages in the application.
 */
class Navbar extends React.Component<IProps, IState> {
  state = {
    mobileOpen: false
  };

  toggleMenu = () =>
    this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));

  render() {
    const { children, title } = this.props;
    const { mobileOpen } = this.state;

    return (
      <NavRoot>
        <NavContent>
          <NavHeader>
            <NavItem showActive={false} to="/">
              {title}
            </NavItem>
            <NavMenuIcon className="fa-stack" onClick={this.toggleMenu}>
              <i className="fas fa-circle fa-stack-2x fa-inverse" />
              <i
                className={`fa ${
                  mobileOpen ? "fa-times" : "fa-bars"
                } fa-stack-1x`}
              />
            </NavMenuIcon>
          </NavHeader>
          <NavLinks>{children}</NavLinks>
          {mobileOpen && <NavLinksMobile>{children}</NavLinksMobile>}
        </NavContent>
      </NavRoot>
    );
  }
}

export default Navbar;
