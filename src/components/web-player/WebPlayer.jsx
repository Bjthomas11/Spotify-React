import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

import "./webPlayer.scss";

const WebPlayer = ({ spotify }) => {
  return (
    <div className="web-player-container">
      <div className="web-player-body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default WebPlayer;
