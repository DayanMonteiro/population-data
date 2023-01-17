import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { globalCss } from "@stitches/react";

import { Provider } from "react-redux";
import store from "./store";

const Home = lazy(() => import("./pages/Home"));

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  html: {
    fontSize: "62.5%",
  },
  "html, body, #root": {
    width: "100%",
    height: "100%",
  },
});

function App() {
  globalStyles();
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
  );
}

export default App;
