import React from "react";
import "./songRow.scss";

const SongRow = ({ track, playSong }) => {
  return (
    <div className="songs-container" onClick={() => playSong(track.id)}>
      <img src={track.album.images[0].url} alt="" className="song-album" />
      <div className="song-content">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
