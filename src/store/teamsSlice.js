import { createSlice } from "@reduxjs/toolkit";

const teamsSlice = createSlice({
  name: "teams",
  initialState: [
    {
      id: 1,
      name: "Barcelona",
      urlname: "barcelona",
      league: 1,
    },
    {
      id: 2,
      name: "Real Madrid",
      urlname: "real-madrid",
      league: 1,
    },
    {
      id: 3,
      name: "Atlético de Madrid",
      urlname: "atletico-de-madrid",
      league: 1,
    },
    {
      id: 4,
      name: "Manchester city",
      urlname: "manchester-city",
      league: 3,
    },
    {
      id: 5,
      name: "Paris",
      urlname: "paris",
      league: 2,
    },
  ],
  reducers: {
    teamAdded(state, action) {
      state.push({
        name: action.payload.name,
        urlname: action.payload.urlname,
        league: action.payload.league,
      });
    },
    teamEdited(state, action) {
      const team = state.find((team) => team.id === action.payload.id);
      team.name = action.payload.name;
      team.urlname = action.payload.urlname;
      team.league = action.payload.league;
    },
  },
});

export const { teamAdded, teamEdited } = teamsSlice.actions;

export const selectTeams = (state) => state.teams;

export default teamsSlice.reducer;
