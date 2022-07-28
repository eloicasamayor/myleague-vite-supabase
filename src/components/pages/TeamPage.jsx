import { useParams } from "react-router-dom";

export function TeamPage() {
  const { team } = useParams();

  const selectedTeamResult = {};

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
