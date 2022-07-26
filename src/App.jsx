// Dependencies
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// Utils
import { client } from "./utils/supabaseClient";

// Components
import { Home } from "./components/pages/Home";
import { Players } from "./components/pages/Players";
import { Leagues } from "./components/pages/Leagues";
import { League } from "./components/pages/League";
import { Provider } from "react-supabase";

import { Layout } from "./components/Layout";

import "../index.css";

function App() {
  return (
    <div className="App">
      <Provider value={client}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/leagues/:urlname" element={<League />} />
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
