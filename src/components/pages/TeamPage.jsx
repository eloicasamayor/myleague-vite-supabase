import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLeagues, selectTeams, selectPlayers } from "../../store";

export function TeamPage() {
  const { teamUrlName } = useParams();
  const teamsData = useSelector(selectTeams);
  const playersData = useSelector(selectPlayers);

  const selectedTeamDetails = teamsData.find(
    (team) => team.urlname === teamUrlName
  );
  const selectedTeamPlayers = playersData.filter(
    (player) => player.team === selectedTeamDetails.id
  );
  return (
    <>
      <h1>{`${selectedTeamDetails.name}(${selectedTeamDetails.id})`}</h1>
      {selectedTeamPlayers.length === 0 ? (
        <div>no players</div>
      ) : (
        <ul>
          {selectedTeamPlayers.map((player) => (
            <li key={player.id}>{`${player.name}(${player.team})`}</li>
          ))}
        </ul>
      )}
    </>
  );
}
