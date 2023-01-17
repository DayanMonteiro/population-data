import { createSlice } from "@reduxjs/toolkit";

const populationSlice = createSlice({
  name: "population",
  initialState: {
    population: {},
  },
  reducers: {
    setPopulation(state, { payload }) {
      state.population = payload;
    },
  },
});

export const { setPopulation } = populationSlice.actions;

export default populationSlice.reducer;
