import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Dashboard";
import livestock from "./components/livestock/livestock"

function App() {
  return (
    <Router>
      <div className="Appcontainer">
        <div className="Appcontent">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livestock" element={<livestock />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;