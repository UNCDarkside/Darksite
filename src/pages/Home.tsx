import * as React from "react";
import Card from "../components/Card";
import Figure from "../components/Figure";
import Heading from "../components/typography/Heading";
import LeadText from "../components/typography/LeadText";

import * as teamPic from "../images/team.jpg";
import * as winningPic from "../images/winning.jpg";
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

const ImageSection = styled.section<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 2em 0;

  & > * {
    flex-basis: 0;
    flex-grow: 1;
    margin: 0 2em;
  }

  & > *:last-child {
    margin-top: 1em;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: ${({ reverse = false }) =>
      reverse ? "row-reverse" : "row"};
    margin: 5em 0;

    & > *:last-child {
      margin-top: 0;
    }
  }
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
    <ImageSection>
      <Figure
        alt="Team Picture"
        caption="Darkside after winning the 2018 college national championship in Milwaukee, WI."
        src={teamPic}
      />
      <div>
        <Heading as="h3" size="h3">
          Who We Are
        </Heading>
        <LeadText>
          Darkside is the men's ultimate Frisbee team from the University of
          North Carolina at Chapel Hill. We compete annually against other
          division one colleges nationwide.
        </LeadText>
      </div>
    </ImageSection>
    <ImageSection reverse={true}>
      <Figure
        alt="Celebration"
        caption="Colin Smith (#9) celebrating with teammates after catching the final goal in the 2018 college championship."
        src={winningPic}
      />
      <div>
        <Heading as="h3" size="h3">
          What We've Done
        </Heading>
        <LeadText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ornare consequat metus ut maximus. In sed nisi neque. Quisque bibendum
          egestas hendrerit. Donec cursus in orci a congue. Maecenas non dolor
          commodo nulla dapibus volutpat. In eu purus a sem pellentesque
          tincidunt. Nam auctor ante finibus turpis imperdiet tempus. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Duis in eros eu quam pulvinar sollicitudin id eget
          elit. Nullam eleifend varius molestie. Etiam id massa id magna
          facilisis rutrum a tincidunt eros.
        </LeadText>
      </div>
    </ImageSection>
  </React.Fragment>
);

export default Home;
