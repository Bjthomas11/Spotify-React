import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

import "./webPlayer.scss";

const WebPlayer = ({ spotifyInstance }) => {
  return (
    <div className="web-player-container">
      <div className="web-player-body">
        <Sidebar />
        <Body spotifyInstance={spotifyInstance} />
      </div>
      <Footer />
    </div>
  );
};

export default WebPlayer;
