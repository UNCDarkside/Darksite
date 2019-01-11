import * as React from "react";
import styled from "../../styled-components";

const Table = styled.table`
  border-collapse: collapse;
  font-size: 1.15rem;
  width: 100%;

  thead {
    background: ${props => props.theme.colors.accent};
    color: white;
    text-shadow: 1px 1px black;
  }

  & tbody tr:nth-child(even) {
    background: #efefef;
  }

  & tbody tr:last-child {
    border-bottom: 0;
  }

  & td {
    padding: 0 1em;
  }

  & th {
    font-family: ${props => props.theme.fonts.families.headings};
    font-weight: normal;
    padding: 0.5em 1em;
    text-align: left;
  }
`;

interface ICoach {
  id: string;
  name: string;
}

interface IPlayer {
  id: string;
  name: string;
  number: number;
}

interface IProps {
  coaches?: ICoach[];
  players?: IPlayer[];
}

const Roster: React.FunctionComponent<IProps> = ({
  coaches = [],
  players = []
}) => (
  <Table>
    <thead>
      <tr>
        <th>Number</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {players.map(player => (
        <tr key={player.id}>
          <td>{player.number}</td>
          <td>{player.name}</td>
        </tr>
      ))}
      {coaches.map(coach => (
        <tr key={coach.id}>
          <td>Coach</td>
          <td>{coach.name}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default Roster;
