import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Stats from "./components/Stats/Stats";
import Evaluation from "./components/Evaluation/Evaluation";
import {Nav} from "./components/Nav/Nav";
import Events from "./components/Events/Events";

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <div className="container">
              <Routes>
                  <Route path="/" element={<Stats />} />
                  <Route path="/evaluation" element={<Evaluation />} />
                  <Route path="/events" element={<Events />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
