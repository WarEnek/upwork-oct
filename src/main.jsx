import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Settings from "./Settings";
import Edit from "./Edit";
import Step3 from "./Step3";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/step3" element={<Step3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
