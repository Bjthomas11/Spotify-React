import React from "react";
import Header from "../header/Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./song-row/SongRow";

import "./body.scss";
import { useStateProviderValue } from "../../../stateProvider";

const Body = ({ spotifyInstance }) => {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();
  return (
    <div className="body-container">
      <Header spotifyInstance={spotifyInstance} />

      <div className="banner-container">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="banner-content">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="song-view">
        <div className="song-icons">
          <PlayCircleFilledIcon className="body-shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item, id) => (
          <SongRow key={id} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
