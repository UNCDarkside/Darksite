import * as React from "react";
import Container from "../components/Container";
import { ExternalLink } from "../components/Link";
import { Link } from "../components/Link";
import Heading from "../components/typography/Heading";

import styled, { css } from "../styled-components";

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryInverted};
  padding: 2rem;
`;

const FooterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-right: -2em;
`;

const FooterList = styled.div`
  margin-bottom: 2em;
  margin-right: 2em;
`;

const footerLinkCSS = css`
  color: ${props => props.theme.colors.primaryInverted};
  display: block;
`;

const FooterLink = styled(Link)`
  &,
  &:visited {
    ${footerLinkCSS}
  }
`;

const FooterLinkExternal = styled(ExternalLink)`
  &,
  &:visited {
    ${footerLinkCSS}
  }
`;

const FooterCopyright = styled.p`
  color: #eee;
  font-size: 0.85rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <Container>
      <FooterListContainer>
        <FooterList>
          <Heading as="h4" size="h4">
            Pages
          </Heading>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/gallery">Gallery</FooterLink>
          <FooterLink to="/team">Team</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterList>
        <FooterList>
          <Heading as="h4" size="h4">
            Contact
          </Heading>
          <FooterLinkExternal href="https://www.facebook.com/UNCDarkside/">
            Facebook
          </FooterLinkExternal>
          <FooterLinkExternal href="https://twitter.com/UNC_Darkside/">
            Twitter
          </FooterLinkExternal>
          <FooterLinkExternal href="https://www.instagram.com/unc_darkside/">
            Instagram
          </FooterLinkExternal>
        </FooterList>
        <FooterList>
          <Heading as="h4" size="h4">
            Meta
          </Heading>
          <FooterLinkExternal href="https://github.com/UNCDarkside/Darksite">
            Source Code
          </FooterLinkExternal>
          <FooterLinkExternal href="https://api.uncdarkside.cdriehuys.com/admin/">
            Admin
          </FooterLinkExternal>
        </FooterList>
      </FooterListContainer>
      <FooterCopyright>
        Copyright (&copy;) 2018 UNC Darkside. All rights reserved.
      </FooterCopyright>
    </Container>
  </FooterContainer>
);

export default Footer;
