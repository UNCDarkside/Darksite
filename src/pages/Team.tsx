import * as React from "react";
import Container from "../components/Container";
import { Link } from "../components/Link";
import PageHeading from "../components/PageHeading";
import TeamOverview from "../components/TeamOverview";
import LeadText from "../components/typography/LeadText";

const Team = () => (
  <Container>
    <PageHeading>The Team</PageHeading>
    <LeadText>
      Explore who makes up each unique Darkside team. For an overview of
      Darkside's development, check out our <Link to="/history">history</Link>.
    </LeadText>
    <TeamOverview year={2019} />
  </Container>
);

export default Team;
