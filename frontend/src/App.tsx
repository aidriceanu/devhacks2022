import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Stats from "./components/Stats/Stats";
import {Nav} from "./components/Nav/Nav";
import Activities from "./components/Activities/Activities";
import {EvaluationWithFormik} from "./components/Evaluation/EvaluationWithFormik";

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <div className="container">
              <Routes>
                  <Route path="/" element={<Stats />} />
                  <Route path="/evaluation" element={<EvaluationWithFormik />} />
                  <Route path="/activities" element={<Activities />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
