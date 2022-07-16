import { StrictMode } from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import {App} from "./App";
import ReactDOM from "react-dom";
import { store } from "./redux/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
