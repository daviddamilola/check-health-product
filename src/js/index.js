import React from "react";
import reactDOM from "react-dom";
import App from "./app.jsx";
import store from "./store";
import { Provider } from 'react-redux';

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
