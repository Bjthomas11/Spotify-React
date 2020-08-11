import React from "react";
import Header from "../header/Header";

import "./body.scss";

const Body = ({ spotifyInstance }) => {
  return (
    <div className="body-container">
      <Header spotifyInstance={spotifyInstance} />
    </div>
  );
};

export default Body;
