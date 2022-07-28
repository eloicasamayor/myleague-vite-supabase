// Dependencies
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  leagueAdded,
  leagueEdited,
  selectLeagues,
} from "../../store/leaguesSlice";
// Components
import { Link } from "react-router-dom";

export function LeaguesPage() {
  const leaguesData = useSelector(selectLeagues);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");

  if (!leaguesData || leaguesData?.length === 0) return <div>No leagues</div>;
  return (
    <>
      <h1>{`Leagues`}</h1>
      <ul>
        {leaguesData.map((league) => (
          <li key={league.id}>
            <Link to={`/leagues/${league.urlname}`}>{league.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
