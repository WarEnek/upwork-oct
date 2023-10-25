import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Settings from "./Settings";
import Submission from "./Submission";
import SubmissionSubmitted from "./SubmissionSubmitted";
import SubmissionApprove from "./SubmissionApprove";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Settings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/submission-submitted" element={<SubmissionSubmitted />} />
        <Route path="/submission-approve" element={<SubmissionApprove />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/step4" element={<Step4 />} />
        <Route path="/step5" element={<Step5 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
