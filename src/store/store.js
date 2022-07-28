import { configureStore } from "@reduxjs/toolkit";
import leaguesReducer from "./leaguesSlice";
import teamsReducer from "./teamsSlice";
import playersReducer from "./playersSlice";
import matchesReducer from "./matchesSlice";

export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    teams: teamsReducer,
    players: playersReducer,
    matches: matchesReducer,
  },
});
