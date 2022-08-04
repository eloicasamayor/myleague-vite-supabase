// Dependencies
import { Routes, Route } from "react-router-dom";

// Utils
import { client } from "./utils/supabaseClient";

// Components
import {
  Home,
  PlayersPage,
  LeaguesPage,
  LeaguePage,
  TeamPage,
  Layout,
} from "./components";

import "../index.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/leagues">
            <Route index element={<LeaguesPage />} />
            <Route path=":leagueUrlName" element={<LeaguePage />} />
            <Route path=":leagueUrlName/:teamUrlName" element={<TeamPage />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
