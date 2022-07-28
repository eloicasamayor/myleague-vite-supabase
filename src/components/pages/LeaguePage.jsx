// Dependencies
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { selectLeagues } from "../../store/leaguesSlice";
import { selectTeams } from "../../store/teamsSlice";

export function LeaguePage() {
  const { leagueurlname } = useParams();
  const leaguesData = useSelector(selectLeagues);
  const teamsData = useSelector(selectTeams);

  const selectedLeague = leaguesData.find(
    (league) => league.urlname === leagueurlname
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
