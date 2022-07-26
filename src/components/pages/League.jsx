// Dependencies
import { useFilter, useSelect } from "react-supabase";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

export function League() {
  const { urlname } = useParams();

  const filter = useFilter((query) => query.eq("urlname", urlname), [urlname]);

  const [result, reexecute] = useSelect("leagues", {
    filter,
    pause: !urlname,
  });

  if (result.fetchingfetching) return <p>Loading...</p>;
  if (result.error) return <p>Oh no... {error.message}</p>;

  if (!result.data || result.data?.length === 0) return <div>No leagues</div>;
  return (
    <>
      <h1>{result.data[0].name}</h1>
      <h2>{result.data[0].description}</h2>
    </>
  );
}
