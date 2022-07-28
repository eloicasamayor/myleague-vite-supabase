import { createSlice } from "@reduxjs/toolkit";

const leaguesSlice = createSlice({
  name: "leagues",
  initialState: [
    {
      id: 1,
      name: "La Liga",
      urlname: "la-liga",
      description: "Spanish League",
    },
    {
      id: 2,
      name: "League One",
      urlname: "league-one",
      description: "French League",
    },
    {
      id: 3,
      name: "Premiere League",
      urlname: "premiere-league",
      description: "UK League",
    },
  ],
  reducers: {
    leagueAdded(state, action) {
      state.push({
        name: action.payload.name,
        urlname: action.payload.urlname,
        description: action.payload.description,
      });
    },
    leagueEdited(state, action) {
      const league = state.find((league) => league.id === action.payload.id);
      league.name = action.payload.name;
      league.urlname = action.payload.urlname;
      league.description = action.payload.description;
    },
  },
});

export const { leagueAdded, leagueEdited } = leaguesSlice.actions;

export const selectLeagues = (state) => state.leagues;

export default leaguesSlice.reducer;
