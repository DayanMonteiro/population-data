import api from "../api";
import { setPopulation } from "../slices/population.slice";

export const getPopulationAll = () => {
  return async (dispatch) => {
    try {
      const data = await api.get("/population");

      await dispatch(setPopulation(data));
    } catch (error) {
      return false;
    }
  };
};
