import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "./slices";

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
