import api from "../api";
import { setNeighborhood } from "../slices/neighborhoods.slice";

export const getNeighborhoodInfo = () => {
  return async (dispatch) => {
    try {
      const data = await api.get("/neighborhoods");
      console.log("data neighborhoods", data);

      await dispatch(setNeighborhood(data));

      // return data;
    } catch (error) {
      return false;
    }
  };
};
