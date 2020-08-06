import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="spotify-container">
        <Login />
      </div>
    </Router>
  );
}

export default App;
