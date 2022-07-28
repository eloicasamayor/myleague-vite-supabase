import { configureStore } from "@reduxjs/toolkit";
import leaguesReducer from "./leaguesSlice";
import teamsReducer from "./teamsSlice";

export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    teams: teamsReducer,
  },
});
