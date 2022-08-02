// Dependencies
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLeagues, selectTeams, selectMatches } from "../../store";

import { DateTime } from "luxon";

export function LeaguePage() {
  const { leagueUrlName } = useParams();
  const leaguesData = useSelector(selectLeagues);
  const teamsData = useSelector(selectTeams);
  const matchesData = useSelector(selectMatches);

  const selectedLeague = leaguesData.find(
    (league) => league.urlname === leagueUrlName
  );

  const selectedLeagueTeams = teamsData.filter(
    (team) => team.league === selectedLeague.id
  );

  const selectedLeagueMatches = matchesData.filter(
    (match) => match.league === selectedLeague.id
  );

  const teamNameWithId = (id) =>
    selectedLeagueTeams.find((team) => team.id === id);

  const formatedTimeFromTimeStamp = (timestamp) => {
    const myDateTime = new Date(timestamp);
    return myDateTime.toString();
  };

  if (!selectedLeague)
    return (
      <>
        <p>"no selected league"</p>
      </>
    );

  return (
    <>
      <h1>{selectedLeague.name}</h1>
      <h2>{selectedLeague.description}</h2>
      <h3>Teams:</h3>
      <ul>
        {selectedLeagueTeams
          ? selectedLeagueTeams.map((team) => (
              <li key={`li_${team.id}`}>
                <img key={`img_${team.id}`} src={team.img} height={40} />
                <Link to={`${team.urlname}`}>{team.name}</Link>
              </li>
            ))
          : "no teams data"}
      </ul>
      <h3>Matches:</h3>
      <ul>
        {selectedLeagueMatches
          ? selectedLeagueMatches.map((match) => (
              <li key={`li_${match.id}`}>
                {`(${formatedTimeFromTimeStamp(match.time)}) ${
                  teamNameWithId(match.local_team).name
                } vs ${teamNameWithId(match.visitor_team).name}`}
              </li>
            ))
          : "no matches data"}
      </ul>
    </>
  );
}
