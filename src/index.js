import React from "react";
import ReactDOM from "react-dom";
import { MyProvider } from "./MyContext";
import Component from "./MyComponent";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <MyProvider>
    <Component />
  </MyProvider>,
  document.getElementById("root")
);
registerServiceWorker();
