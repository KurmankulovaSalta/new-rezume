import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./Contacts";
import Skills from "./Skills";
import Education from "./Education";
import Hobby from "./Hobby";

import SaidBar from "./SaidBar";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
