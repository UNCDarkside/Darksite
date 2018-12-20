import * as React from "react";
import Card from "../components/Card";
import InfoPanelList from "../components/InfoPanelList";
import shadow from "../components/shadows";
import Heading from "../components/typography/Heading";
import * as banner from "../images/darksideBanner.png";
import styled from "../styled-components";

const AngledDiv = styled.div`
  background: radial-gradient(
    #00b3ff 0,
    ${props => props.theme.colors.accent} 50%
  );
  display: grid;
  grid: repeat(3, 1fr) / repeat(5, 1fr);
  height: 35em;
  margin-top: -1.15rem;
  /* Position relative so z-index actually works. */
  position: relative;
  transform: skewY(-8deg);
  transform-origin: 0;
  z-index: -1;

  & :nth-child(1) {
    background: linear-gradient(to left, transparent, #0062c4);
    grid-column: span 2;
  }

  & :nth-child(2) {
    background: linear-gradient(to right, transparent, #0062c4);
    grid-area: 3 / span 3 / auto / -1;
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: 30em;
  }
`;

const CardImage = styled.div`
  ${shadow(3)};
  background-image: url("${banner}");
  background-position: center center;
  background-size: cover;
  border-top-left-radius: ${props => props.theme.borderRadius}px;
  border-top-right-radius: ${props => props.theme.borderRadius}px;
  /* Negative margins account for card padding. */
  margin: -1em -1em 1em -1em;
  height: 128px;
`;

const SmallCard = styled(Card)`
  background: ${props => props.theme.colors.primaryInverted};
  margin: -30em auto 10em auto;
  max-width: 90%;
  width: 30rem;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: -20em;
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

const LeadIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1em 0;
`;

const LeadIcon = styled.i`
  display: block;
`;

const Home = () => (
  <React.Fragment>
    <AngledDiv>
      <div />
      <div />
    </AngledDiv>
    <SmallCard depth={5}>
      <CardImage />
      <CardHeading size="display" textAlign="center">
        UNC Darkside
      </CardHeading>
      <CardSeparator />
      <LeadIcons>
        <LeadIcon className="fal fa-2x fa-peace" />
        <LeadIcon className="fal fa-2x fa-heart" />
        <LeadIcon className="fal fa-2x fa-moon" />
      </LeadIcons>
    </SmallCard>
    <InfoPanelList />
  </React.Fragment>
);

export default Home;
