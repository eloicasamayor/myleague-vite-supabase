import { useParams } from "react-router-dom";
import { Provider, useFilter, useSelect } from "react-supabase";

export function TeamPage() {
  const { team } = useParams();

  const selectedTeamFilter = useFilter(
    (query) => query.eq("urlname", team),
    [team]
  );
  const [selectedTeamResult, reexecute] = useSelect("teams", {
    filter: selectedTeamFilter,
    pause: !team,
  });

  const selectedTeamPlayersFilter = useFilter(
    (query) => query.eq("team", selectedTeamResult?.data[0].id),
    [selectedTeamResult]
  );

  const [selectedTeamPlayersResult, reexecute2] = useSelect("players", {
    filter: selectedTeamPlayersFilter,
    pause: !selectedTeamResult,
  });

  const teamHasNoPlayers =
    !selectedTeamPlayersResult?.data ||
    selectedTeamPlayersResult.data.length === 0;

  if (!selectedTeamResult?.data || selectedTeamResult.data.length === 0) {
    return "no results";
  }
  const selectedTeamDetails = selectedTeamResult.data[0];
  return (
    <>
      <h1>{selectedTeamDetails.name}</h1>
      <img src={selectedTeamDetails.img}></img>
      {teamHasNoPlayers ? (
        <div>no players</div>
      ) : (
        <ul>
          {selectedTeamPlayersResult.data.map((player) => (
            <li>{player.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
