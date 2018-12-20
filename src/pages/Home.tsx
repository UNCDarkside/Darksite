import * as React from "react";
import Card from "../components/Card";
import InfoPanelList from "../components/InfoPanelList";
import Heading from "../components/typography/Heading";
import LeadText from "../components/typography/LeadText";
import styled from "../styled-components";

const AngledDiv = styled.div`
  background: ${props => props.theme.colors.accent};
  height: 10em;
  margin-top: -1.15rem;
  /* Position relative so z-index actually works. */
  position: relative;
  transform: skewY(-8deg);
  transform-origin: 0;
  z-index: -1;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 25em;
  }
`;

const SmallCard = styled(Card)`
  background: ${props => props.theme.colors.primaryInverted};
  margin: -5em auto 10em auto;
  max-width: 90%;
  width: 30rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: -15em;
  }
`;

const CardHeading = styled(Heading)`
  margin-bottom: 0.25em;
`;

const CardSeparator = styled.hr`
  border: 0;
  border-top: 1px solid ${props => props.theme.colors.divider};
  display: block;
  margin: 0.5rem auto;
  width: 6rem;
`;

const Home = () => (
  <React.Fragment>
    <AngledDiv />
    <SmallCard depth={5}>
      <CardHeading size="display" textAlign="center">
        UNC Darkside
      </CardHeading>
      <CardSeparator />
      <LeadText textAlign="center">Peace, Love, Darkside</LeadText>
    </SmallCard>
    <InfoPanelList />
  </React.Fragment>
);

export default Home;
