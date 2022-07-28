// Dependencies
import { useState } from "react";
import { useFilter, useSelect } from "react-supabase";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export function LeaguePage() {
  const { league } = useParams();

  const selectedLeagueFilter = useFilter(
    (query) => query.eq("urlname", league),
    [league]
  );

  const [result, reexecute] = useSelect("leagues", {
    filter: selectedLeagueFilter,
    pause: !league,
  });

  const selectedLeagueTeamsFilter = useFilter(
    (query) => query.eq("league", result?.data[0].id),
    [result]
  );

  const [result2, reexecute2] = useSelect("teams", {
    filter: selectedLeagueTeamsFilter,
    pause: !result,
  });

  if (result.fetching) return <p>Loading...</p>;
  if (result.error) return <p>Oh no... {error.message}</p>;

  if (!result.data || result.data?.length === 0)
    return <div>No leagues selected</div>;
  if (!result2.data || result2.data?.length === 0)
    return <div>No teams in this league</div>;
  return (
    <>
      <h1>{result.data[0].name}</h1>
      <h2>{result.data[0].description}</h2>
      <h3>Teams:</h3>
      <ul>
        {result2.data.map((team) => (
          <li key={`li_${team.id}`}>
            <img key={`img_${team.id}`} src={team.img} height={40} />
            <Link to={`${team.urlname}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
