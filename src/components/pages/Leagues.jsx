import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export function Leagues() {
  const [leagues, setLeagues] = useState([]);
  async function getLeagues() {
    const { data } = await supabase.from("leagues").select("*");
    setLeagues(data);
  }

  useEffect(() => {
    getLeagues();
  }, []);
  return (
    <li>
      {leagues.map((league) => (
        <ul key={league.id}>{league.name}</ul>
      ))}
    </li>
  );
}
