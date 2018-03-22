import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "./components2/App";
import store from "./components2/Redux"

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('root')
);