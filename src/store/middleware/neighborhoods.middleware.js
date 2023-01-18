import api from "../api";
import { setNeighborhood } from "../slices/neighborhoods.slice";

export const getNeighborhoodInfo = () => {
  return async (dispatch) => {
    try {
      const data = await api.get("/neighborhoods");

      await dispatch(setNeighborhood(data));
    } catch (error) {
      return false;
    }
  };
};
