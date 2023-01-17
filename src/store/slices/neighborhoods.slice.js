import { createSlice } from "@reduxjs/toolkit";

const neighborhoodSlice = createSlice({
  name: "neighborhood",
  initialState: {
    neighborhood: {},
  },
  reducers: {
    setNeighborhood(state, { payload }) {
      state.neighborhood = payload;
    },
  },
});

export const { setNeighborhood } = neighborhoodSlice.actions;

export default neighborhoodSlice.reducer;
