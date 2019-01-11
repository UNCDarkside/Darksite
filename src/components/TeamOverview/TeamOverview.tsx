import { gql } from "apollo-boost";
import * as React from "react";
import { Query } from "react-apollo";
import styled from "../../styled-components";
import Card from "../Card";
import Loader from "../Loader";
import Roster from "../Roster";
import Heading from "../typography/Heading";

const TEAM_QUERY = gql`
  query TeamMembersForYear($year: Int!) {
    team(year: $year) {
      members {
        number
        person {
          name
          slug
        }
        role
      }
    }
  }
`;

interface ITeamMember {
  number: number | null;
  person: {
    name: string;
    slug: string;
  };
  role: "C" | "P";
}

interface IQueryData {
  team: {
    members: ITeamMember[];
  };
}

interface IQueryVars {
  year: number;
}

class TeamMembersQuery extends Query<IQueryData, IQueryVars> {}

const TeamHeading = styled(Heading)`
  margin-top: 1em;
`;

const TeamLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

interface IProps {
  /** The year to display team information for. */
  year: number;
}

/**
 * Display an overview of a team from a specific year.
 *
 * @constructor
 */
const TeamOverview: React.FunctionComponent<IProps> = ({ year }) => (
  <TeamMembersQuery query={TEAM_QUERY} variables={{ year }}>
    {({ data, error, loading }) => {
      if (loading) {
        return <Loader />;
      }

      if (error || !data) {
        return <p>Error loading roster.</p>;
      }

      const coaches = data.team.members
        .filter(member => member.role === "C")
        .sort((a, b) => a.person.name.localeCompare(b.person.name))
        .map(member => ({
          id: member.person.slug,
          name: member.person.name
        }));
      const players = data.team.members
        .filter(member => member.role === "P")
        .sort((a, b) => a.number! - b.number!)
        .map(member => ({
          id: member.person.slug,
          name: member.person.name,
          number: member.number!
        }));

      return (
        <React.Fragment>
          <TeamHeading as="h2" size="h2">
            2018/2019
          </TeamHeading>
          <TeamLayout>
            <Card>
              <Heading as="h3" size="h3" textAlign="center">
                Roster
              </Heading>
              <Roster coaches={coaches} players={players} />
            </Card>
            <Card>
              <Heading as="h3" size="h3" textAlign="center">
                Season Results
              </Heading>
              <p>
                <strong>Sectionals:</strong> ?
              </p>
              <p>
                <strong>Regionals:</strong> ?
              </p>
              <p>
                <strong>Nationals:</strong> ?
              </p>
            </Card>
          </TeamLayout>
        </React.Fragment>
      );
    }}
  </TeamMembersQuery>
);

export default TeamOverview;
