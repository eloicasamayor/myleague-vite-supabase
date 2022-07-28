import { createSlice } from "@reduxjs/toolkit";

const matchesSlice = createSlice({
  name: "matches",
  initialState: [
    {
      id: 1,
      local_team: 1,
      visitor_team: 2,
      time: 1659042317,
      league: 1,
      stats: {
        visitor_goals: [
          { player: 1, time: 20 },
          { player: 2, time: 48 },
        ],
        local_goals: [
          { player: 3, time: 70 },
          { player: 4, time: 77 },
        ],
        winner: "draw",
      },
    },
  ],
  reducers: {
    matchAdded(state, action) {
      state.push({
        local_team: action.payload.local_team,
        visitor_team: action.payload.visitor_team,
        time: action.payload.time,
        league: action.payload.league,
        stats: action.payload.stats,
      });
    },
    matchEdited(state, action) {
      const match = state.find((m) => m.id === action.payload.id);
      match.local_team = action.payload.local_team;
      match.visitor_team = action.payload.visitor_team;
      match.time = action.payload.time;
      match.league = action.payload.league;
      match.stats = action.payload.stats;
    },
  },
});

export const { matchAdded, matchEdited } = matchesSlice.actions;

export const selectMatches = (state) => state.matches;

export default matchesSlice.reducer;
