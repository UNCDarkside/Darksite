import * as React from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";

import styled from "../styled-components";

const AngledDiv = styled.div`
  background: ${props => props.theme.colors.accent};
  height: 10em;
  margin-top: -1.15rem;
  transform: skewY(-12deg);
  transform-origin: 0;
  z-index: -1;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 25em;
  }
`;

const SmallCard = styled(Card)`
  background: ${props => props.theme.colors.primaryInverted};
  margin: -5em auto 5em auto;
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

const LeadText = styled.p`
  font-size: 1.25rem;
  text-align: center;
`;

const Home = () => (
  <React.Fragment>
    <AngledDiv />
    <SmallCard>
      <CardHeading size="display" textAlign="center">
        UNC Darkside
      </CardHeading>
      <CardSeparator />
      <LeadText>Peace, Love, Darkside</LeadText>
    </SmallCard>
  </React.Fragment>
);

export default Home;
