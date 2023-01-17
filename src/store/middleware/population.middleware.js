import api from "../api";
import { setPopulation } from "../slices/population.slice";

export const getPopulationAll = () => {
  return async (dispatch) => {
    try {
      const data = await api.get("/population");
      //  console.log("all population", data);

      await dispatch(setPopulation(data));

      // return data;
    } catch (error) {
      return false;
    }
  };
};

// export const getPopulationId = (id_geometria) => {
//   return async () => {
//     try {
//       const data = await api.get(`/population/:${id_geometria}`);
//       // console.log("id population", data);
//       return true;
//     } catch (error) {
//       return false;
//     }
//   };
// };
