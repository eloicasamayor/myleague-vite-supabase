import { Link } from "react-router-dom";

export function Home() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/leagues"}>leagues</Link>
        </li>
        <li>
          <Link to={"/players"}>players</Link>
        </li>
      </ul>
    </nav>
  );
}
