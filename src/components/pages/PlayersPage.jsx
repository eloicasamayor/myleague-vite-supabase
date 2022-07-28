import { useSelect } from "react-supabase";

export function PlayersPage() {
  const [{ count, data: playersData, error, fetching }, reexecute] = useSelect(
    "teams",
    {
      options: { count: "exact" },
    }
  );
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  if (!playersData || playersData?.length === 0) return <div>No leagues</div>;
  return (
    <>
      <ul>
        {playersData.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </>
  );
}
