import { combineReducers } from "redux";
import neighborhoodReducer from "./neighborhoods.slice";
import populationReducer from "./population.slice";

export default combineReducers({
  neighborhoodReducer,
  populationReducer,
});
