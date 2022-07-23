// Dependencies
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

// Components
import { Home } from "./components/pages/Home";
import { Players } from "./components/pages/Players";
import { Leagues } from "./components/pages/Leagues";
import { Layout } from "./components/Layout";

import "../index.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="players" element={<Players />} />
          <Route path="leagues" element={<Leagues />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
