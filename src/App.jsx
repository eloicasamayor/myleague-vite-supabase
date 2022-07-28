// Dependencies
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// Utils
import { client } from "./utils/supabaseClient";

// Components
import { Home } from "./components/pages/Home";
import { PlayersPage } from "./components/pages/PlayersPage";
import { LeaguesPage } from "./components/pages/LeaguesPage";
import { LeaguePage } from "./components/pages/LeaguePage";
import { TeamPage } from "./components/pages/TeamPage";

import { Layout } from "./components/Layout";

import "../index.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/leagues" element={<LeaguesPage />} />
          <Route path="/leagues/:leagueurlname" element={<LeaguePage />} />
          <Route path="/leagues/:leagueurlname/:team" element={<TeamPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
