import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LevelContext from "./store/levelContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LevelContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LevelContext>
);
