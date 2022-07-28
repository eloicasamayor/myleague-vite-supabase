export function PlayersPage() {
  const playersData = [];

  if (!playersData || playersData?.length === 0) return <div>No players</div>;
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
