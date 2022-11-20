import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Stats from "./components/Stats/Stats";
import {Nav} from "./components/Nav/Nav";
import Activity from "./components/Activities/Activity";
import {EvaluationWithFormik} from "./components/Evaluation/EvaluationWithFormik";
import {ActivityWithFormik} from "./components/Activities/ActivityWithFormik";

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <div className="container">
              <Routes>
                  <Route path="/" element={<Stats />} />
                  <Route path="/evaluation" element={<EvaluationWithFormik />} />
                  <Route path="/activities" element={<ActivityWithFormik />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
