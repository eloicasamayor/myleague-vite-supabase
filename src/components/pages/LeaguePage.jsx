// Dependencies
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLeagues, selectTeams } from "../../store";

export function LeaguePage() {
  const { leagueUrlName } = useParams();
  const leaguesData = useSelector(selectLeagues);
  const teamsData = useSelector(selectTeams);

  const selectedLeague = leaguesData.find(
    (league) => league.urlname === leagueUrlName
  );

  const selectedLeagueTeams = teamsData.filter(
    (team) => team.league === selectedLeague.id
  );

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
    </>
  );
}
