import { createSlice } from "@reduxjs/toolkit";

const playersSlice = createSlice({
  name: "players",
  initialState: [
    {
      id: 1,
      name: "Lewandovsky",
      team: 1,
    },
    {
      id: 2,
      name: "Piqué",
      team: 1,
    },
    {
      id: 3,
      name: "Benzema",
      team: 2,
    },
    {
      id: 4,
      name: "Casemiro",
      team: 2,
    },
    {
      id: 5,
      name: "Oblak",
      team: 3,
    },
    {
      id: 6,
      name: "Rakitich",
      team: 3,
    },
  ],
  reducers: {
    playerAdded(state, action) {
      state.push({
        name: action.payload.name,
        team: action.payload.team,
      });
    },
    playerEdited(state, action) {
      const player = state.find((player) => player.id === action.payload.id);
      player.name = action.payload.name;
      player.team = action.payload.team;
    },
  },
});

export const { playerAdded, playerEdited } = playersSlice.actions;

export const selectPlayers = (state) => state.players;

export default playersSlice.reducer;
