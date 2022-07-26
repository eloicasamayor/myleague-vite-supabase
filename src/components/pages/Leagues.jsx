// Dependencies
import { useSelect } from "react-supabase";

// Components
import { Link } from "react-router-dom";

export function Leagues() {
  const [{ count, data: leaguesData, error, fetching }, reexecute] = useSelect(
    "leagues",
    {
      columns: "id, name, urlname",
      options: { count: "exact" },
    }
  );
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  if (!leaguesData || leaguesData?.length === 0) return <div>No leagues</div>;
  return (
    <>
      <h1>{`Leagues (${count})`}</h1>
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
