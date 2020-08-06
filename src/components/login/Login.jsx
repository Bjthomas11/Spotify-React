import React from "react";
import { loginURL } from "../../spotify";

import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={loginURL} className="login-link">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default Login;
