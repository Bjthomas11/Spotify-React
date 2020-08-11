import React from "react";
import Header from "../header/Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./song-row/SongRow";

import "./body.scss";
import { useStateProviderValue } from "../../../stateProvider";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body-container">
      <Header spotify={spotify} />

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
          <PlayCircleFilledIcon
            className="body-shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item, id) => (
          <SongRow key={id} track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
};

export default Body;
