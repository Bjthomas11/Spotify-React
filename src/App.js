import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/Login";
import { getTokenFromURLResponse } from "./spotify";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hashToken = getTokenFromURLResponse();
    window.location.hash = "";
    // console.log(hashToken);
    const Token = hashToken.access_token;

    if (Token) {
      setToken(Token);
    }
  }, []);
  return (
    <Router>
      <div className="spotify-container">
        {token ? <h1>logged in</h1> : <Login />}
      </div>
    </Router>
  );
}

export default App;
