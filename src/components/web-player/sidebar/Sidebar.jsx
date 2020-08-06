import React from "react";
import "./sidebar.scss";
import logo from "../../../img/spotify-logo.png";
import SidebarOption from "./sidebar-option/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "../../../stateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateProviderValue();
  //   console.log(playlists);
  return (
    <div className="sidebar-container">
      <img
        // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        src={logo}
        alt="Spotify Logo"
        className="sidebar-spotify-logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="playlists-title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
