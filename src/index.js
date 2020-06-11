import React from "react";
import ReactDOM from "react-dom";
import {Bootstrap} from 'react-bootstrap' ;

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
