import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/login/Login";
import WebPlayer from "./components/web-player/WebPlayer";
import { getTokenFromURLResponse } from "./spotify";

import { useStateProviderValue } from "./stateProvider";

import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromURLResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotify.getPlaylist("37i9dQZEVXcTEfnX2nqM0k").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        });
      });
    }
  }, [token, dispatch]);
  // console.log(user, token);
  return (
    <Router>
      <div className="spotify-container">
        {!token && <Login />}
        {token && <WebPlayer spotify={spotify} />}
      </div>
    </Router>
  );
}

export default App;
