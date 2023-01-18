import { createSlice } from "@reduxjs/toolkit";

const neighborhoodSlice = createSlice({
  name: "neighborhood",
  initialState: {
    neighborhood: {},
    resultSearchProperties: {},
  },
  reducers: {
    setNeighborhood(state, { payload }) {
      state.neighborhood = payload;
    },
    setResultSearchProperties(state, { payload }) {
      state.resultSearchProperties = payload;
    },
  },
});

export const { setNeighborhood, setResultSearchProperties } =
  neighborhoodSlice.actions;

export default neighborhoodSlice.reducer;
