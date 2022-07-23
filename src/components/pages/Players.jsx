import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export function Players() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  const [selectedTeam, setSelectedTeam] = useState(null);

  async function getPlayers() {
    const { data: players } = await supabase.from("players").select("*");
    const { data: teams } = await supabase.from("teams").select("*");
    setPlayers(players);
    setTeams(teams);
  }

  useEffect(() => {
    getPlayers();
  }, []);
  return (
    <>
      <div>
        <ul>
          {teams.map((team) => (
            <li key={team.id}>
              <button
                onClick={() => setSelectedTeam(team.id)}
                disabled={team.id === selectedTeam}
              >
                <img src={team.img} height={30}></img>
                {team.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setSelectedTeam(null)}
              disabled={selectedTeam === null}
            >
              all
            </button>
          </li>
        </ul>
      </div>
      <li>
        {players.map(
          (player) =>
            (!selectedTeam || player.team === selectedTeam) && (
              <ul key={player.id}>{player.name}</ul>
            )
        )}
      </li>
    </>
  );
}
